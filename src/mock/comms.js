import { SCHOOL_HERITAGE, TENANT_HERITAGE } from './ids';

const school = { school_id: SCHOOL_HERITAGE, tenant_id: TENANT_HERITAGE };

export const notifications = [
  { id: 'nt_1', ...school, title: 'Half Yearly results published', body: 'Class 7 Half Yearly marksheets are now available.', module: 'exam', channel: 'in-app', audience: 'Parents', createdAt: '2026-09-14T10:20:00+05:30', read: false },
  { id: 'nt_2', ...school, title: 'Fee reminder — Q2', body: 'Outstanding tuition for Class 10 is due on 20 Sep.', module: 'fees', channel: 'sms', audience: 'Parents', createdAt: '2026-09-13T09:00:00+05:30', read: false },
  { id: 'nt_3', ...school, title: 'Library overdue', body: 'Return “To Kill a Mockingbird” to avoid further fine.', module: 'library', channel: 'in-app', audience: 'Students', createdAt: '2026-09-15T08:00:00+05:30', read: true },
  { id: 'nt_4', ...school, title: 'Bus delay — Whitefield Loop', body: 'Morning pickup delayed by 12 minutes due to traffic.', module: 'transport', channel: 'push', audience: 'Parents', createdAt: '2026-09-15T07:05:00+05:30', read: true },
  { id: 'nt_5', ...school, title: 'Staff meeting', body: 'Academic coordination meeting at 3:45 PM in the conference room.', module: 'hr', channel: 'email', audience: 'Staff', createdAt: '2026-09-15T11:00:00+05:30', read: false },
  { id: 'nt_6', ...school, title: 'Homework posted', body: 'Mathematics worksheet due 16 Sep.', module: 'homework', channel: 'in-app', audience: 'Students', createdAt: '2026-09-12T16:10:00+05:30', read: true },
];

export const auditLogs = [
  { id: 'aud_1', ...school, user: 'Kavita Sharma', role: 'School Admin', action: 'Login', module: 'auth', record: 'usr_admin', datetime: '2026-09-15T08:02:11+05:30', ip: '49.37.12.88', device: 'Chrome / Windows', previousValue: null, newValue: 'session started' },
  { id: 'aud_2', ...school, user: 'Anita Rao', role: 'Teacher', action: 'Attendance changed', module: 'attendance', record: 'stu_arjun', datetime: '2026-09-15T08:22:40+05:30', ip: '49.37.12.90', device: 'Chrome / Windows', previousValue: 'Absent', newValue: 'Late' },
  { id: 'aud_3', ...school, user: 'Anita Rao', role: 'Teacher', action: 'Marks changed', module: 'marks', record: 'mk_2', datetime: '2026-09-14T17:41:02+05:30', ip: '49.37.12.90', device: 'Chrome / Windows', previousValue: 'Written: 56', newValue: 'Written: 58' },
  { id: 'aud_4', ...school, user: 'Rohit Banerjee', role: 'Accountant', action: 'Fee payment created', module: 'fees', record: 'pay_3', datetime: '2026-08-02T11:18:00+05:30', ip: '49.37.12.77', device: 'Edge / Windows', previousValue: null, newValue: '₹7,000 Cash' },
  { id: 'aud_5', ...school, user: 'Priya Menon', role: 'Exam Coordinator', action: 'Report card published', module: 'marksheet', record: 'ms_1', datetime: '2026-09-14T10:15:00+05:30', ip: '49.37.12.66', device: 'Chrome / macOS', previousValue: 'Approved', newValue: 'Published' },
  { id: 'aud_6', ...school, user: 'Kavita Sharma', role: 'School Admin', action: 'Student created', module: 'student', record: 'stu_arjun', datetime: '2022-04-11T10:00:00+05:30', ip: '49.37.12.88', device: 'Chrome / Windows', previousValue: null, newValue: 'Arjun Menon / Class 5-A' },
  { id: 'aud_7', ...school, user: 'Kavita Sharma', role: 'School Admin', action: 'User permissions changed', module: 'settings', record: 'usr_exam', datetime: '2026-06-01T12:00:00+05:30', ip: '49.37.12.88', device: 'Chrome / Windows', previousValue: 'teacher', newValue: 'exam_coordinator' },
  { id: 'aud_8', ...school, user: 'Lakshmi Iyer', role: 'Librarian', action: 'Document uploaded', module: 'document', record: 'doc_1', datetime: '2018-04-12T09:30:00+05:30', ip: '10.0.0.12', device: 'Chrome / Windows', previousValue: null, newValue: 'Birth Certificate' },
  { id: 'aud_9', ...school, user: 'Kavita Sharma', role: 'School Admin', action: 'Settings changed', module: 'settings', record: 'school_profile', datetime: '2026-04-02T09:12:00+05:30', ip: '49.37.12.88', device: 'Chrome / Windows', previousValue: 'timings 08:15', newValue: 'timings 08:00' },
  { id: 'aud_10', ...school, user: 'Aarav Malhotra', role: 'Super Admin', action: 'Logout', module: 'auth', record: 'usr_super', datetime: '2026-09-14T19:40:00+05:30', ip: '103.21.244.10', device: 'Chrome / Windows', previousValue: 'session active', newValue: 'session ended' },
];

export const schoolSettings = {
  school_id: SCHOOL_HERITAGE,
  tenant_id: TENANT_HERITAGE,
  academic: { defaultSessionId: 'ses_2025_26', promotionRequiresApproval: true },
  attendance: { lockAfterDays: 2, lateAfterMinutes: 15, minPercent: 75 },
  exam: { allowReopenPublished: false, decimalPlaces: 0 },
  grading: { defaultSystemId: 'grd_cbse' },
  fees: { lateFeePerDay: 50, gateway: 'razorpay_ready' },
  library: { issueLimitStudent: 3, issueLimitTeacher: 8, finePerDay: 5, loanDays: 14 },
  transport: { gpsEnabled: false },
  hostel: { messIncluded: true },
  notifications: { email: true, sms: true, push: false, whatsapp: false },
};

export const platformSettings = {
  branding: { name: 'Nexus School ERP', primary: '#1d4ed8' },
  payments: { razorpay: false, stripe: false },
  email: { provider: 'smtp', from: 'noreply@nexus.edu' },
  notifications: { smsGateway: 'ready', push: 'ready', whatsapp: 'future' },
};
