export * from './ids';
export * from './plans';
export * from './schools';
export * from './users';
export * from './academic';
export * from './people';
export * from './exams';
export * from './operations';
export * from './finance';
export * from './campus';
export * from './peopleOps';
export * from './comms';

import { academicSessions, classes, gradingSystems, sections, subjectAssignments, subjects } from './academic';
import { books, drivers, hostelAllocations, hostelRooms, hostels, inventoryItems, inventoryVendors, libraryIssues, routes, transportAssignments, vehicles } from './campus';
import { auditLogs, notifications, platformSettings, schoolSettings } from './comms';
import { examComponents, examTypes, exams, marks, marksheets } from './exams';
import { accountingTransactions, feeHeads, feeStructures, payments, scholarships, studentFees } from './finance';
import { attendanceRecords, attendanceSummary, timetableSlots } from './operations';
import { parents, students, teachers } from './people';
import { certificates, documents, employees, homework, leaveRequests, onlineExams, payrolls, questionBank } from './peopleOps';
import { plans } from './plans';
import { saasPayments, schools, subscriptions } from './schools';
import { demoAccounts, users } from './users';

export const db = {
  plans,
  schools,
  subscriptions,
  saasPayments,
  users,
  demoAccounts,
  academicSessions,
  classes,
  sections,
  subjects,
  subjectAssignments,
  gradingSystems,
  students,
  parents,
  teachers,
  examTypes,
  exams,
  examComponents,
  marks,
  marksheets,
  attendanceRecords,
  attendanceSummary,
  timetableSlots,
  feeHeads,
  feeStructures,
  scholarships,
  studentFees,
  payments,
  accountingTransactions,
  books,
  libraryIssues,
  vehicles,
  drivers,
  routes,
  transportAssignments,
  hostels,
  hostelRooms,
  hostelAllocations,
  inventoryItems,
  inventoryVendors,
  employees,
  payrolls,
  leaveRequests,
  homework,
  questionBank,
  onlineExams,
  certificates,
  documents,
  notifications,
  auditLogs,
  schoolSettings,
  platformSettings,
};

export default db;
