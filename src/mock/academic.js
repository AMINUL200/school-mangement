import { SCHOOL_HERITAGE, SESSION_2425, SESSION_2526, SESSION_2627, TENANT_HERITAGE } from './ids';

const school = { school_id: SCHOOL_HERITAGE, tenant_id: TENANT_HERITAGE };

export const academicSessions = [
  { id: SESSION_2425, ...school, name: '2024-25', startDate: '2024-04-01', endDate: '2025-03-31', status: 'Closed', isActive: false },
  { id: SESSION_2526, ...school, name: '2025-26', startDate: '2025-04-01', endDate: '2026-03-31', status: 'Active', isActive: true },
  { id: SESSION_2627, ...school, name: '2026-27', startDate: '2026-04-01', endDate: '2027-03-31', status: 'Upcoming', isActive: false },
];

export const classes = [
  { id: 'cls_n', ...school, name: 'Nursery', code: 'NUR', order: 0, sections: ['A'] },
  { id: 'cls_lkg', ...school, name: 'LKG', code: 'LKG', order: 1, sections: ['A', 'B'] },
  { id: 'cls_ukg', ...school, name: 'UKG', code: 'UKG', order: 2, sections: ['A', 'B'] },
  { id: 'cls_1', ...school, name: 'Class 1', code: 'C1', order: 3, sections: ['A', 'B'] },
  { id: 'cls_7', ...school, name: 'Class 7', code: 'C7', order: 9, sections: ['A', 'B'] },
  { id: 'cls_8', ...school, name: 'Class 8', code: 'C8', order: 10, sections: ['A', 'B'] },
  { id: 'cls_10', ...school, name: 'Class 10', code: 'C10', order: 12, sections: ['A', 'B', 'C'] },
  { id: 'cls_11', ...school, name: 'Class 11', code: 'C11', order: 13, sections: ['A', 'B'] },
  { id: 'cls_12', ...school, name: 'Class 12', code: 'C12', order: 14, sections: ['A', 'B'] },
];

export const sections = [
  { id: 'sec_7a', ...school, classId: 'cls_7', name: 'A', classTeacherId: 'tch_anita', capacity: 40, studentCount: 36 },
  { id: 'sec_7b', ...school, classId: 'cls_7', name: 'B', classTeacherId: 'tch_vikram', capacity: 40, studentCount: 34 },
  { id: 'sec_8a', ...school, classId: 'cls_8', name: 'A', classTeacherId: 'tch_farah', capacity: 40, studentCount: 38 },
  { id: 'sec_10a', ...school, classId: 'cls_10', name: 'A', classTeacherId: 'tch_ravi', capacity: 42, studentCount: 40 },
  { id: 'sec_10b', ...school, classId: 'cls_10', name: 'B', classTeacherId: 'tch_deepa', capacity: 42, studentCount: 39 },
  { id: 'sec_12a', ...school, classId: 'cls_12', name: 'A', classTeacherId: 'tch_nisha', capacity: 40, studentCount: 32 },
];

export const subjects = [
  { id: 'sub_eng', ...school, name: 'English', code: 'ENG', type: 'Language', theoryPractical: 'Theory', maxMarks: 80, passMarks: 33, gradeSystemId: 'grd_cbse' },
  { id: 'sub_hin', ...school, name: 'Hindi', code: 'HIN', type: 'Language', theoryPractical: 'Theory', maxMarks: 80, passMarks: 33, gradeSystemId: 'grd_cbse' },
  { id: 'sub_ben', ...school, name: 'Bengali', code: 'BEN', type: 'Language', theoryPractical: 'Theory', maxMarks: 80, passMarks: 33, gradeSystemId: 'grd_cbse' },
  { id: 'sub_mat', ...school, name: 'Mathematics', code: 'MAT', type: 'Core', theoryPractical: 'Theory', maxMarks: 80, passMarks: 33, gradeSystemId: 'grd_cbse' },
  { id: 'sub_sci', ...school, name: 'Science', code: 'SCI', type: 'Core', theoryPractical: 'Theory + Practical', maxMarks: 80, passMarks: 33, gradeSystemId: 'grd_cbse' },
  { id: 'sub_phy', ...school, name: 'Physics', code: 'PHY', type: 'Science', theoryPractical: 'Theory + Practical', maxMarks: 70, passMarks: 23, gradeSystemId: 'grd_cbse' },
  { id: 'sub_che', ...school, name: 'Chemistry', code: 'CHE', type: 'Science', theoryPractical: 'Theory + Practical', maxMarks: 70, passMarks: 23, gradeSystemId: 'grd_cbse' },
  { id: 'sub_bio', ...school, name: 'Biology', code: 'BIO', type: 'Science', theoryPractical: 'Theory + Practical', maxMarks: 70, passMarks: 23, gradeSystemId: 'grd_cbse' },
  { id: 'sub_his', ...school, name: 'History', code: 'HIS', type: 'Social Science', theoryPractical: 'Theory', maxMarks: 80, passMarks: 33, gradeSystemId: 'grd_cbse' },
  { id: 'sub_geo', ...school, name: 'Geography', code: 'GEO', type: 'Social Science', theoryPractical: 'Theory', maxMarks: 80, passMarks: 33, gradeSystemId: 'grd_cbse' },
  { id: 'sub_cs', ...school, name: 'Computer Science', code: 'CSC', type: 'Elective', theoryPractical: 'Theory + Practical', maxMarks: 70, passMarks: 23, gradeSystemId: 'grd_cbse' },
];

export const subjectAssignments = [
  { id: 'sa_1', ...school, sessionId: SESSION_2526, classId: 'cls_7', sectionId: 'sec_7a', subjectId: 'sub_mat', teacherId: 'tch_anita' },
  { id: 'sa_2', ...school, sessionId: SESSION_2526, classId: 'cls_7', sectionId: 'sec_7a', subjectId: 'sub_eng', teacherId: 'tch_farah' },
  { id: 'sa_3', ...school, sessionId: SESSION_2526, classId: 'cls_7', sectionId: 'sec_7a', subjectId: 'sub_sci', teacherId: 'tch_vikram' },
  { id: 'sa_4', ...school, sessionId: SESSION_2526, classId: 'cls_10', sectionId: 'sec_10a', subjectId: 'sub_mat', teacherId: 'tch_anita' },
  { id: 'sa_5', ...school, sessionId: SESSION_2526, classId: 'cls_10', sectionId: 'sec_10a', subjectId: 'sub_phy', teacherId: 'tch_ravi' },
  { id: 'sa_6', ...school, sessionId: SESSION_2526, classId: 'cls_12', sectionId: 'sec_12a', subjectId: 'sub_cs', teacherId: 'tch_nisha' },
];

export const gradingSystems = [
  {
    id: 'grd_cbse',
    ...school,
    name: 'CBSE 9-point',
    sessionId: SESSION_2526,
    grades: [
      { name: 'A1', min: 91, max: 100, point: 10, description: 'Outstanding' },
      { name: 'A2', min: 81, max: 90, point: 9, description: 'Excellent' },
      { name: 'B1', min: 71, max: 80, point: 8, description: 'Very Good' },
      { name: 'B2', min: 61, max: 70, point: 7, description: 'Good' },
      { name: 'C1', min: 51, max: 60, point: 6, description: 'Above Average' },
      { name: 'C2', min: 41, max: 50, point: 5, description: 'Average' },
      { name: 'D', min: 33, max: 40, point: 4, description: 'Pass' },
      { name: 'E', min: 0, max: 32, point: 0, description: 'Fail' },
    ],
  },
  {
    id: 'grd_letter',
    ...school,
    name: 'Letter grades',
    sessionId: SESSION_2526,
    grades: [
      { name: 'A+', min: 90, max: 100, point: 10, description: 'Outstanding' },
      { name: 'A', min: 80, max: 89, point: 9, description: 'Excellent' },
      { name: 'B+', min: 70, max: 79, point: 8, description: 'Very Good' },
      { name: 'B', min: 60, max: 69, point: 7, description: 'Good' },
      { name: 'C', min: 50, max: 59, point: 6, description: 'Fair' },
      { name: 'D', min: 40, max: 49, point: 5, description: 'Pass' },
      { name: 'F', min: 0, max: 39, point: 0, description: 'Fail' },
    ],
  },
];
