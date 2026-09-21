import { SCHOOL_HERITAGE, SESSION_2526, TENANT_HERITAGE } from './ids';

const school = { school_id: SCHOOL_HERITAGE, tenant_id: TENANT_HERITAGE, sessionId: SESSION_2526 };

export const feeHeads = [
  { id: 'fh_adm', ...school, name: 'Admission Fee', category: 'Admission Fee' },
  { id: 'fh_tui', ...school, name: 'Tuition Fee', category: 'Tuition Fee' },
  { id: 'fh_ann', ...school, name: 'Annual Fee', category: 'Annual Fee' },
  { id: 'fh_exam', ...school, name: 'Exam Fee', category: 'Exam Fee' },
  { id: 'fh_trn', ...school, name: 'Transport Fee', category: 'Transport Fee' },
  { id: 'fh_hst', ...school, name: 'Hostel Fee', category: 'Hostel Fee' },
  { id: 'fh_lib', ...school, name: 'Library Fee', category: 'Library Fee' },
  { id: 'fh_lab', ...school, name: 'Laboratory Fee', category: 'Laboratory Fee' },
  { id: 'fh_oth', ...school, name: 'Other Fee', category: 'Other Fee' },
];

export const feeStructures = [
  {
    id: 'fs_7',
    ...school,
    classId: 'cls_7',
    className: 'Class 7',
    installments: ['Q1', 'Q2', 'Q3', 'Q4'],
    heads: [
      { headId: 'fh_tui', amount: 28000 },
      { headId: 'fh_ann', amount: 8000 },
      { headId: 'fh_exam', amount: 2500 },
      { headId: 'fh_lib', amount: 1200 },
      { headId: 'fh_lab', amount: 1800 },
    ],
  },
  {
    id: 'fs_8',
    ...school,
    classId: 'cls_8',
    className: 'Class 8',
    installments: ['Q1', 'Q2', 'Q3', 'Q4'],
    heads: [
      { headId: 'fh_tui', amount: 30000 },
      { headId: 'fh_ann', amount: 8000 },
      { headId: 'fh_exam', amount: 2500 },
      { headId: 'fh_trn', amount: 14000 },
    ],
  },
];

export const scholarships = [
  { id: 'sch_1', ...school, name: 'Merit Scholarship', type: 'Percentage', value: 25, studentIds: ['stu_ananya'] },
  { id: 'sch_2', ...school, name: 'Sibling Discount', type: 'Percentage', value: 10, studentIds: ['stu_aditya'] },
];

export const studentFees = [
  {
    id: 'sfee_aditya',
    ...school,
    studentId: 'stu_aditya',
    studentName: 'Aditya Sharma',
    total: 54500,
    paid: 40000,
    discount: 5450,
    lateFee: 0,
    pending: 9050,
    dueDate: '2026-09-30',
  },
  {
    id: 'sfee_ananya',
    ...school,
    studentId: 'stu_ananya',
    studentName: 'Ananya Sharma',
    total: 41500,
    paid: 31125,
    discount: 10375,
    lateFee: 0,
    pending: 0,
    dueDate: '2026-09-30',
  },
  {
    id: 'sfee_kabir',
    ...school,
    studentId: 'stu_kabir',
    studentName: 'Kabir Reddy',
    total: 62000,
    paid: 31000,
    discount: 0,
    lateFee: 500,
    pending: 31500,
    dueDate: '2026-09-20',
  },
];

export const payments = [
  { id: 'pay_1', ...school, receiptNo: 'HIS-FEE-24091', studentId: 'stu_aditya', studentName: 'Aditya Sharma', feeType: 'Tuition Fee', amount: 15000, method: 'UPI', date: '2026-07-12', status: 'Success', txnId: 'UPI-8821991' },
  { id: 'pay_2', ...school, receiptNo: 'HIS-FEE-24108', studentId: 'stu_ananya', studentName: 'Ananya Sharma', feeType: 'Tuition Fee', amount: 15562, method: 'Card', date: '2026-07-14', status: 'Success', txnId: 'CRD-441882' },
  { id: 'pay_3', ...school, receiptNo: 'HIS-FEE-24155', studentId: 'stu_kabir', studentName: 'Kabir Reddy', feeType: 'Transport Fee', amount: 7000, method: 'Cash', date: '2026-08-02', status: 'Success', txnId: 'CASH-091' },
  { id: 'pay_4', ...school, receiptNo: 'HIS-FEE-24201', studentId: 'stu_aditya', studentName: 'Aditya Sharma', feeType: 'Annual Fee', amount: 8000, method: 'Online', date: '2026-08-20', status: 'Pending', txnId: 'RZP-WAIT-12' },
];

export const accountingTransactions = [
  { id: 'acc_1', ...school, date: '2026-09-01', type: 'Income', category: 'Tuition fees', account: 'Fee Collection', amount: 1284000, ref: 'SEP-TUI' },
  { id: 'acc_2', ...school, date: '2026-09-02', type: 'Income', category: 'Transport fees', account: 'Transport', amount: 214000, ref: 'SEP-TRN' },
  { id: 'acc_3', ...school, date: '2026-09-02', type: 'Income', category: 'Hostel fees', account: 'Hostel', amount: 186000, ref: 'SEP-HST' },
  { id: 'acc_4', ...school, date: '2026-09-03', type: 'Income', category: 'Donations', account: 'Corpus', amount: 50000, ref: 'DON-88' },
  { id: 'acc_5', ...school, date: '2026-09-05', type: 'Expense', category: 'Salary', account: 'Payroll', amount: 980000, ref: 'PAY-SEP' },
  { id: 'acc_6', ...school, date: '2026-09-06', type: 'Expense', category: 'Electricity', account: 'Utilities', amount: 42000, ref: 'BESCOM-09' },
  { id: 'acc_7', ...school, date: '2026-09-08', type: 'Expense', category: 'Maintenance', account: 'Facilities', amount: 28000, ref: 'MNT-12' },
  { id: 'acc_8', ...school, date: '2026-09-10', type: 'Expense', category: 'Supplies', account: 'Inventory', amount: 18500, ref: 'PO-441' },
];
