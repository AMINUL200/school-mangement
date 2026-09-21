import { SCHOOL_HERITAGE, SESSION_2526, TENANT_HERITAGE } from './ids';

const school = { school_id: SCHOOL_HERITAGE, tenant_id: TENANT_HERITAGE, sessionId: SESSION_2526 };

export const attendanceRecords = [
  { id: 'att_1', ...school, date: '2026-09-15', type: 'Student', personId: 'stu_aditya', name: 'Aditya Sharma', className: 'Class 8-A', status: 'Present', markedBy: 'Anita Rao' },
  { id: 'att_2', ...school, date: '2026-09-15', type: 'Student', personId: 'stu_ananya', name: 'Ananya Sharma', className: 'Class 7-A', status: 'Present', markedBy: 'Anita Rao' },
  { id: 'att_3', ...school, date: '2026-09-15', type: 'Student', personId: 'stu_arjun', name: 'Arjun Menon', className: 'Class 7-A', status: 'Late', markedBy: 'Anita Rao' },
  { id: 'att_4', ...school, date: '2026-09-15', type: 'Student', personId: 'stu_kabir', name: 'Kabir Reddy', className: 'Class 10-A', status: 'Absent', markedBy: 'Ravi Prasad' },
  { id: 'att_5', ...school, date: '2026-09-15', type: 'Teacher', personId: 'tch_anita', name: 'Anita Rao', className: '—', status: 'Present', markedBy: 'HR' },
  { id: 'att_6', ...school, date: '2026-09-15', type: 'Staff', personId: 'usr_staff', name: 'Manoj Yadav', className: '—', status: 'Present', markedBy: 'HR' },
  { id: 'att_7', ...school, date: '2026-09-14', type: 'Student', personId: 'stu_aditya', name: 'Aditya Sharma', className: 'Class 8-A', status: 'Half Day', markedBy: 'Farah Qureshi' },
];

export const attendanceSummary = [
  { studentId: 'stu_aditya', name: 'Aditya Sharma', present: 168, absent: 4, leave: 2, late: 3, halfDay: 1, percent: 94.8 },
  { studentId: 'stu_ananya', name: 'Ananya Sharma', present: 172, absent: 2, leave: 1, late: 1, halfDay: 0, percent: 96.4 },
  { studentId: 'stu_kabir', name: 'Kabir Reddy', present: 160, absent: 8, leave: 3, late: 4, halfDay: 2, percent: 89.1 },
];

export const timetableSlots = [
  { id: 'tt_1', ...school, day: 'Monday', period: 1, startTime: '08:10', endTime: '08:50', subjectId: 'sub_mat', subject: 'Mathematics', teacherId: 'tch_anita', teacher: 'Anita Rao', classId: 'cls_7', className: 'Class 7', sectionId: 'sec_7a', section: 'A', room: 'R-204' },
  { id: 'tt_2', ...school, day: 'Monday', period: 2, startTime: '08:50', endTime: '09:30', subjectId: 'sub_eng', subject: 'English', teacherId: 'tch_farah', teacher: 'Farah Qureshi', classId: 'cls_7', className: 'Class 7', sectionId: 'sec_7a', section: 'A', room: 'R-204' },
  { id: 'tt_3', ...school, day: 'Monday', period: 3, startTime: '09:50', endTime: '10:30', subjectId: 'sub_sci', subject: 'Science', teacherId: 'tch_vikram', teacher: 'Vikram Joshi', classId: 'cls_7', className: 'Class 7', sectionId: 'sec_7a', section: 'A', room: 'Lab-1' },
  { id: 'tt_4', ...school, day: 'Monday', period: 1, startTime: '08:10', endTime: '08:50', subjectId: 'sub_phy', subject: 'Physics', teacherId: 'tch_ravi', teacher: 'Ravi Prasad', classId: 'cls_10', className: 'Class 10', sectionId: 'sec_10a', section: 'A', room: 'R-310' },
  { id: 'tt_5', ...school, day: 'Tuesday', period: 1, startTime: '08:10', endTime: '08:50', subjectId: 'sub_mat', subject: 'Mathematics', teacherId: 'tch_anita', teacher: 'Anita Rao', classId: 'cls_10', className: 'Class 10', sectionId: 'sec_10a', section: 'A', room: 'R-310' },
  { id: 'tt_6', ...school, day: 'Tuesday', period: 2, startTime: '08:50', endTime: '09:30', subjectId: 'sub_cs', subject: 'Computer Science', teacherId: 'tch_nisha', teacher: 'Nisha Kulkarni', classId: 'cls_12', className: 'Class 12', sectionId: 'sec_12a', section: 'A', room: 'Lab-CS' },
];
