export const APP_NAME = import.meta.env.VITE_APP_NAME || 'Nexus School ERP';

export const ROLES = {
  SUPER_ADMIN: 'super_admin',
  SCHOOL_ADMIN: 'school_admin',
  PRINCIPAL: 'principal',
  VICE_PRINCIPAL: 'vice_principal',
  TEACHER: 'teacher',
  ACCOUNTANT: 'accountant',
  LIBRARIAN: 'librarian',
  TRANSPORT_MANAGER: 'transport_manager',
  HOSTEL_WARDEN: 'hostel_warden',
  HR_MANAGER: 'hr_manager',
  STAFF: 'staff',
  STUDENT: 'student',
  PARENT: 'parent',
  EXAM_COORDINATOR: 'exam_coordinator',
};

export const ROLE_LABELS = {
  super_admin: 'Super Admin',
  school_admin: 'School Admin',
  principal: 'Principal',
  vice_principal: 'Vice Principal',
  teacher: 'Teacher',
  accountant: 'Accountant',
  librarian: 'Librarian',
  transport_manager: 'Transport Manager',
  hostel_warden: 'Hostel Warden',
  hr_manager: 'HR Manager',
  staff: 'Staff',
  student: 'Student',
  parent: 'Parent',
  exam_coordinator: 'Exam Coordinator',
};

export const FEATURES = {
  TRANSPORT: 'transport',
  HOSTEL: 'hostel',
  PAYROLL: 'payroll',
  ONLINE_EXAM: 'online_exam',
  LIBRARY: 'library',
  ACCOUNTING: 'accounting',
  HR: 'hr',
  INVENTORY: 'inventory',
  NOTIFICATIONS: 'notifications',
  REPORTS: 'reports',
};

export const MODULES = [
  'student',
  'parent',
  'teacher',
  'academic',
  'attendance',
  'timetable',
  'exam',
  'marks',
  'marksheet',
  'fees',
  'payment',
  'library',
  'transport',
  'hostel',
  'hr',
  'payroll',
  'leave',
  'homework',
  'online_exam',
  'question_bank',
  'certificate',
  'document',
  'inventory',
  'accounting',
  'notification',
  'audit',
  'report',
  'settings',
];

export const ACTIONS = [
  'view',
  'create',
  'edit',
  'delete',
  'approve',
  'publish',
  'download',
  'export',
  'print',
  'manage',
  'collect',
  'refund',
  'report',
  'issue',
  'return',
];

export const ATTENDANCE_STATUSES = ['Present', 'Absent', 'Leave', 'Half Day', 'Late'];
export const STUDENT_STATUSES = ['Applicant', 'Active', 'Inactive', 'Transferred', 'Graduated', 'Alumni'];
export const MARKS_STATUSES = ['Draft', 'Submitted', 'Approved', 'Published'];
export const PAYMENT_METHODS = ['Cash', 'Bank Transfer', 'UPI', 'Card', 'Online'];
export const LEAVE_TYPES = ['Casual', 'Sick', 'Emergency', 'Other'];
export const QUESTION_TYPES = ['MCQ', 'True/False', 'Fill in the blank', 'Short answer', 'Long answer'];
export const DIFFICULTY_LEVELS = ['Easy', 'Medium', 'Hard'];

export const SESSION_KEY = 'nexus.session';
export const TOKEN_KEY = 'nexus.token';
