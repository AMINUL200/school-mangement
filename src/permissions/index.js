import { MODULES, ACTIONS } from '../constants';

export function permissionKey(module, action) {
  return `${module}.${action}`;
}

export function buildAllPermissions() {
  const extra = {
    fees: ['collect', 'refund', 'report'],
    library: ['issue', 'return'],
    marks: ['approve', 'publish'],
    exam: ['publish'],
    marksheet: ['publish', 'print', 'download'],
    attendance: ['approve'],
  };
  const set = new Set();
  MODULES.forEach((mod) => {
    ['view', 'create', 'edit', 'delete'].forEach((a) => set.add(permissionKey(mod, a)));
    (extra[mod] || []).forEach((a) => set.add(permissionKey(mod, a)));
  });
  ACTIONS.forEach((a) => {
    MODULES.forEach((m) => set.add(permissionKey(m, a)));
  });
  return [...set].sort();
}

export function hasPermission(user, key) {
  if (!user) return false;
  if (user.role === 'super_admin') return true;
  const perms = user.permissions || [];
  if (perms.includes('*')) return true;
  return perms.includes(key);
}

export function hasAnyPermission(user, keys = []) {
  return keys.some((k) => hasPermission(user, k));
}

export function hasModuleAccess(user, module) {
  if (!user) return false;
  if (user.role === 'super_admin') return true;
  const modules = user.modules || [];
  if (modules.includes('*')) return true;
  if (modules.includes(module)) return true;
  return (user.permissions || []).some((p) => p.startsWith(`${module}.`) || p === '*');
}

export const ROLE_PERMISSION_PRESETS = {
  super_admin: { permissions: ['*'], modules: ['*'] },
  school_admin: { permissions: ['*'], modules: ['*'] },
  principal: {
    modules: ['*'],
    permissions: ['*'],
  },
  vice_principal: {
    modules: ['student', 'teacher', 'academic', 'attendance', 'timetable', 'exam', 'marks', 'marksheet', 'homework', 'leave', 'notification', 'report'],
    permissions: ['*'],
  },
  teacher: {
    modules: ['student', 'attendance', 'timetable', 'exam', 'marks', 'marksheet', 'homework', 'online_exam', 'question_bank', 'leave', 'notification'],
    permissions: [
      'student.view',
      'attendance.view',
      'attendance.create',
      'attendance.edit',
      'timetable.view',
      'exam.view',
      'marks.view',
      'marks.create',
      'marks.edit',
      'marksheet.view',
      'homework.view',
      'homework.create',
      'homework.edit',
      'online_exam.view',
      'online_exam.create',
      'question_bank.view',
      'question_bank.create',
      'question_bank.edit',
      'leave.view',
      'leave.create',
      'notification.view',
    ],
  },
  accountant: {
    modules: ['fees', 'payment', 'accounting', 'payroll', 'report', 'student'],
    permissions: [
      'student.view',
      'fees.view',
      'fees.create',
      'fees.edit',
      'fees.collect',
      'fees.refund',
      'fees.report',
      'payment.view',
      'payment.create',
      'accounting.view',
      'accounting.create',
      'accounting.edit',
      'payroll.view',
      'report.view',
      'report.export',
    ],
  },
  librarian: {
    modules: ['library', 'student', 'teacher'],
    permissions: [
      'library.view',
      'library.create',
      'library.edit',
      'library.issue',
      'library.return',
      'student.view',
      'teacher.view',
    ],
  },
  transport_manager: {
    modules: ['transport', 'student', 'fees'],
    permissions: ['transport.view', 'transport.create', 'transport.edit', 'student.view', 'fees.view'],
  },
  hostel_warden: {
    modules: ['hostel', 'student', 'fees'],
    permissions: ['hostel.view', 'hostel.create', 'hostel.edit', 'student.view', 'fees.view'],
  },
  hr_manager: {
    modules: ['hr', 'payroll', 'leave', 'attendance', 'document'],
    permissions: [
      'hr.view',
      'hr.create',
      'hr.edit',
      'payroll.view',
      'payroll.create',
      'leave.view',
      'leave.approve',
      'attendance.view',
      'document.view',
    ],
  },
  staff: {
    modules: ['leave', 'notification'],
    permissions: ['leave.view', 'leave.create', 'notification.view'],
  },
  student: {
    modules: ['attendance', 'timetable', 'marks', 'marksheet', 'fees', 'library', 'transport', 'hostel', 'homework', 'online_exam', 'certificate', 'document', 'notification'],
    permissions: [
      'attendance.view',
      'timetable.view',
      'marks.view',
      'marksheet.view',
      'marksheet.download',
      'fees.view',
      'library.view',
      'transport.view',
      'hostel.view',
      'homework.view',
      'online_exam.view',
      'certificate.view',
      'document.view',
      'notification.view',
    ],
  },
  parent: {
    modules: ['attendance', 'marks', 'marksheet', 'fees', 'timetable', 'homework', 'library', 'transport', 'notification'],
    permissions: [
      'attendance.view',
      'marks.view',
      'marksheet.view',
      'fees.view',
      'timetable.view',
      'homework.view',
      'library.view',
      'transport.view',
      'notification.view',
    ],
  },
  exam_coordinator: {
    modules: ['exam', 'marks', 'marksheet', 'student'],
    permissions: [
      'exam.view',
      'exam.create',
      'exam.edit',
      'exam.publish',
      'marks.view',
      'marks.edit',
      'marks.approve',
      'marksheet.view',
      'marksheet.publish',
      'student.view',
    ],
  },
};
