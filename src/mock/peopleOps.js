import { SCHOOL_HERITAGE, TENANT_HERITAGE } from './ids';

const school = { school_id: SCHOOL_HERITAGE, tenant_id: TENANT_HERITAGE };

export const employees = [
  { id: 'emp_anita', ...school, employeeId: 'EMP-T-104', name: 'Anita Rao', department: 'Teaching', designation: 'PGT Mathematics', joiningDate: '2018-06-01', salary: 72000, employmentType: 'Permanent', status: 'Active' },
  { id: 'emp_neha', ...school, employeeId: 'EMP-HR-01', name: 'Neha Kapoor', department: 'Administration', designation: 'HR Manager', joiningDate: '2019-02-11', salary: 85000, employmentType: 'Permanent', status: 'Active' },
  { id: 'emp_rohit', ...school, employeeId: 'EMP-AC-02', name: 'Rohit Banerjee', department: 'Accounts', designation: 'Accountant', joiningDate: '2020-01-06', salary: 64000, employmentType: 'Permanent', status: 'Active' },
  { id: 'emp_lakshmi', ...school, employeeId: 'EMP-LB-03', name: 'Lakshmi Iyer', department: 'Library', designation: 'Librarian', joiningDate: '2015-07-01', salary: 48000, employmentType: 'Permanent', status: 'Active' },
  { id: 'emp_imran', ...school, employeeId: 'EMP-TR-04', name: 'Imran Khan', department: 'Transport', designation: 'Transport Manager', joiningDate: '2021-03-15', salary: 52000, employmentType: 'Permanent', status: 'Active' },
  { id: 'emp_agnes', ...school, employeeId: 'EMP-HS-05', name: 'Sister Agnes D’Souza', department: 'Hostel', designation: 'Warden', joiningDate: '2014-06-02', salary: 46000, employmentType: 'Permanent', status: 'Active' },
  { id: 'emp_manoj', ...school, employeeId: 'EMP-SP-09', name: 'Manoj Yadav', department: 'Support', designation: 'Office Assistant', joiningDate: '2022-08-01', salary: 28000, employmentType: 'Contract', status: 'Active' },
];

export const payrolls = [
  {
    id: 'pr_sep',
    ...school,
    month: '2026-09',
    employeeId: 'emp_anita',
    employee: 'Anita Rao',
    basic: 42000,
    allowances: 18000,
    deductions: 4200,
    bonus: 0,
    overtime: 0,
    tax: 4800,
    pf: 5040,
    net: 45960,
    status: 'Processed',
  },
  {
    id: 'pr_sep_2',
    ...school,
    month: '2026-09',
    employeeId: 'emp_neha',
    employee: 'Neha Kapoor',
    basic: 50000,
    allowances: 22000,
    deductions: 5000,
    bonus: 5000,
    overtime: 0,
    tax: 7200,
    pf: 6000,
    net: 63800,
    status: 'Draft',
  },
  {
    id: 'pr_aug',
    ...school,
    month: '2026-08',
    employeeId: 'emp_anita',
    employee: 'Anita Rao',
    basic: 42000,
    allowances: 18000,
    deductions: 4200,
    bonus: 0,
    overtime: 1200,
    tax: 4800,
    pf: 5040,
    net: 47160,
    status: 'Paid',
  },
];

export const leaveRequests = [
  { id: 'lv_1', ...school, requesterType: 'Teacher', requesterId: 'tch_anita', name: 'Anita Rao', type: 'Casual', from: '2026-09-18', to: '2026-09-18', days: 1, reason: 'Family function', status: 'Approved', balance: 8 },
  { id: 'lv_2', ...school, requesterType: 'Student', requesterId: 'stu_kabir', name: 'Kabir Reddy', type: 'Sick', from: '2026-09-15', to: '2026-09-16', days: 2, reason: 'Fever', status: 'Pending', balance: null },
  { id: 'lv_3', ...school, requesterType: 'Staff', requesterId: 'emp_manoj', name: 'Manoj Yadav', type: 'Emergency', from: '2026-09-12', to: '2026-09-12', days: 1, reason: 'Medical', status: 'Rejected', balance: 4 },
];

export const homework = [
  { id: 'hw_1', ...school, title: 'Quadratic equations worksheet', description: 'Complete exercise 4.3 Q1–Q12.', subject: 'Mathematics', className: 'Class 8', section: 'A', teacher: 'Anita Rao', createdDate: '2026-09-12', dueDate: '2026-09-16', attachment: 'quad-ws.pdf' },
  { id: 'hw_2', ...school, title: 'Letter to the Editor', description: 'Write 120–150 words on water conservation.', subject: 'English', className: 'Class 7', section: 'A', teacher: 'Farah Qureshi', createdDate: '2026-09-13', dueDate: '2026-09-17', attachment: null },
  { id: 'hw_3', ...school, title: 'Lab report: Ohm’s law', description: 'Submit observations and graph.', subject: 'Physics', className: 'Class 10', section: 'A', teacher: 'Ravi Prasad', createdDate: '2026-09-10', dueDate: '2026-09-18', attachment: 'ohms-template.docx' },
];

export const questionBank = [
  { id: 'q_1', ...school, question: 'The square of 12 is:', subject: 'Mathematics', chapter: 'Squares and Square Roots', topic: 'Squares', className: 'Class 8', difficulty: 'Easy', type: 'MCQ', marks: 1, correctAnswer: '144', options: ['24', '112', '144', '132'], explanation: '12 × 12 = 144.' },
  { id: 'q_2', ...school, question: 'Light travels faster in vacuum than in glass.', subject: 'Physics', chapter: 'Light', topic: 'Refraction', className: 'Class 10', difficulty: 'Easy', type: 'True/False', marks: 1, correctAnswer: 'True', explanation: 'Optical density of glass slows light.' },
  { id: 'q_3', ...school, question: 'The process by which plants make food is called ____.', subject: 'Science', chapter: 'Nutrition in Plants', topic: 'Photosynthesis', className: 'Class 7', difficulty: 'Easy', type: 'Fill in the blank', marks: 1, correctAnswer: 'photosynthesis', explanation: 'Chlorophyll, sunlight, CO2 and water.' },
  { id: 'q_4', ...school, question: 'Explain any two causes of the Revolt of 1857.', subject: 'History', chapter: 'Rebels and the Raj', topic: '1857', className: 'Class 8', difficulty: 'Medium', type: 'Short answer', marks: 3, correctAnswer: 'Political annexation; greased cartridges; economic drain (any two).', explanation: 'Accept any historically valid cause.' },
  { id: 'q_5', ...school, question: 'Write an essay on climate change and Indian agriculture.', subject: 'Geography', chapter: 'Climate', topic: 'Climate change', className: 'Class 10', difficulty: 'Hard', type: 'Long answer', marks: 8, correctAnswer: 'Structured essay covering monsoon variability, crops, adaptation.', explanation: 'Evaluate structure, facts, and examples.' },
];

export const onlineExams = [
  {
    id: 'oe_1',
    ...school,
    title: 'Mathematics Unit Quiz',
    subject: 'Mathematics',
    className: 'Class 8',
    duration: 30,
    startDate: '2026-09-16T09:00:00+05:30',
    endDate: '2026-09-16T18:00:00+05:30',
    questionCount: 20,
    randomQuestions: true,
    negativeMarking: 0.25,
    maxAttempts: 1,
    passingMarks: 12,
    questionIds: ['q_1'],
    status: 'Published',
  },
];

export const certificates = [
  { id: 'cert_1', ...school, type: 'Bonafide Certificate', number: 'HIS-BNF-2026-014', studentId: 'stu_aditya', studentName: 'Aditya Sharma', issueDate: '2026-08-21', status: 'Issued' },
  { id: 'cert_2', ...school, type: 'Transfer Certificate', number: 'HIS-TC-2025-088', studentId: 'stu_alumni', studentName: 'Sneha Iyer', issueDate: '2025-04-02', status: 'Issued' },
  { id: 'cert_3', ...school, type: 'Character Certificate', number: 'HIS-CH-2026-009', studentId: 'stu_isha', studentName: 'Isha Patel', issueDate: '2026-09-01', status: 'Draft' },
];

export const documents = [
  { id: 'doc_1', ...school, name: 'Birth Certificate', type: 'Birth certificate', relatedUser: 'Aditya Sharma', relatedId: 'stu_aditya', uploadDate: '2018-04-12', expiryDate: null, status: 'Verified' },
  { id: 'doc_2', ...school, name: 'Aadhaar', type: 'Aadhaar', relatedUser: 'Aditya Sharma', relatedId: 'stu_aditya', uploadDate: '2018-04-12', expiryDate: null, status: 'Verified' },
  { id: 'doc_3', ...school, name: 'B.Ed Certificate', type: 'Qualification certificate', relatedUser: 'Anita Rao', relatedId: 'tch_anita', uploadDate: '2018-06-01', expiryDate: null, status: 'Verified' },
  { id: 'doc_4', ...school, name: 'Experience Certificate', type: 'Experience certificate', relatedUser: 'Anita Rao', relatedId: 'tch_anita', uploadDate: '2018-06-01', expiryDate: null, status: 'Verified' },
];
