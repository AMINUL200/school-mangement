import { delay, paginate, searchFilter } from '../utils';
import db, { DEMO_PASSWORD, users } from './index';

function ok(data, extra = {}) {
  return { success: true, data, ...extra };
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function collection(path) {
  const map = {
    '/auth/login': 'login',
    '/schools': db.schools,
    '/subscriptions': db.subscriptions,
    '/plans': db.plans,
    '/admin/payments': db.saasPayments,
    '/users': db.users,
    '/academic-sessions': db.academicSessions,
    '/classes': db.classes,
    '/sections': db.sections,
    '/subjects': db.subjects,
    '/subject-assignments': db.subjectAssignments,
    '/grading-systems': db.gradingSystems,
    '/students': db.students,
    '/parents': db.parents,
    '/teachers': db.teachers,
    '/exam-types': db.examTypes,
    '/exams': db.exams,
    '/exam-components': db.examComponents,
    '/marks': db.marks,
    '/marksheets': db.marksheets,
    '/attendance': db.attendanceRecords,
    '/attendance/summary': db.attendanceSummary,
    '/timetable': db.timetableSlots,
    '/fee-heads': db.feeHeads,
    '/fee-structures': db.feeStructures,
    '/scholarships': db.scholarships,
    '/fees': db.studentFees,
    '/payments': db.payments,
    '/accounting': db.accountingTransactions,
    '/library/books': db.books,
    '/library/issues': db.libraryIssues,
    '/transport/vehicles': db.vehicles,
    '/transport/drivers': db.drivers,
    '/transport/routes': db.routes,
    '/transport/assignments': db.transportAssignments,
    '/hostel': db.hostels,
    '/hostel/rooms': db.hostelRooms,
    '/hostel/allocations': db.hostelAllocations,
    '/inventory': db.inventoryItems,
    '/inventory/vendors': db.inventoryVendors,
    '/hr/employees': db.employees,
    '/payroll': db.payrolls,
    '/leave': db.leaveRequests,
    '/homework': db.homework,
    '/question-bank': db.questionBank,
    '/online-exams': db.onlineExams,
    '/certificates': db.certificates,
    '/documents': db.documents,
    '/notifications': db.notifications,
    '/audit-logs': db.auditLogs,
    '/settings/school': db.schoolSettings,
    '/settings/platform': db.platformSettings,
    '/search': 'search',
  };
  return map[path];
}

export async function mockRequest({ method = 'get', url = '', data, params = {} }) {
  await delay(220);
  const path = url.replace(/\/$/, '') || '/';
  const page = Number(params.page || 1);
  const pageSize = Number(params.pageSize || 10);
  const q = params.q || params.search || '';

  if (path === '/auth/login' && method === 'post') {
    const user = users.find((u) => u.email.toLowerCase() === String(data?.email || '').toLowerCase());
    if (!user || data?.password !== DEMO_PASSWORD) {
      const error = new Error('Invalid email or password');
      error.status = 401;
      throw error;
    }
    const safe = { ...user };
    delete safe.password;
    return ok({
      token: `mock-token-${user.id}`,
      user: safe,
    });
  }

  if (path === '/auth/me') {
    return ok(clone(users[1]));
  }

  if (path === '/search') {
    const query = String(q).toLowerCase();
    const hits = [
      ...db.students.map((s) => ({ type: 'student', id: s.id, title: s.name, subtitle: s.studentId })),
      ...db.teachers.map((s) => ({ type: 'teacher', id: s.id, title: s.name, subtitle: s.employeeId })),
      ...db.classes.map((s) => ({ type: 'class', id: s.id, title: s.name, subtitle: s.code })),
      ...db.exams.map((s) => ({ type: 'exam', id: s.id, title: s.name, subtitle: s.typeName })),
      ...db.studentFees.map((s) => ({ type: 'fee', id: s.id, title: s.studentName, subtitle: `Pending ₹${s.pending}` })),
      ...db.books.map((s) => ({ type: 'book', id: s.id, title: s.title, subtitle: s.isbn })),
      ...db.employees.map((s) => ({ type: 'employee', id: s.id, title: s.name, subtitle: s.employeeId })),
      ...db.documents.map((s) => ({ type: 'document', id: s.id, title: s.name, subtitle: s.relatedUser })),
    ].filter((h) => !query || h.title.toLowerCase().includes(query) || String(h.subtitle).toLowerCase().includes(query));
    return ok(hits.slice(0, 20));
  }

  const col = collection(path);
  if (!col || typeof col === 'string') {
    return ok([]);
  }

  let rows = clone(col);
  if (Array.isArray(rows)) {
    if (params.school_id) rows = rows.filter((r) => !r.school_id || r.school_id === params.school_id);
    if (params.sessionId) rows = rows.filter((r) => !r.sessionId || r.sessionId === params.sessionId);
    if (q && rows[0]) {
      const fields = Object.keys(rows[0]).filter((k) => typeof rows[0][k] === 'string');
      rows = searchFilter(rows, q, fields);
    }
    if (method === 'post') {
      const created = { id: `${path}-${Date.now()}`, ...data };
      return ok(created);
    }
    return ok(paginate(rows, page, pageSize).data, paginate(rows, page, pageSize));
  }

  return ok(clone(rows));
}
