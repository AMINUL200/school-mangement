import { SCHOOL_HERITAGE, TENANT_HERITAGE } from './ids';

const school = { school_id: SCHOOL_HERITAGE, tenant_id: TENANT_HERITAGE };

export const books = [
  { id: 'bk_1', ...school, title: 'NCERT Mathematics Class 7', author: 'NCERT', category: 'Textbook', publisher: 'NCERT', isbn: '9788174505187', copies: 40, available: 28, shelf: 'A-12', status: 'Available' },
  { id: 'bk_2', ...school, title: 'To Kill a Mockingbird', author: 'Harper Lee', category: 'Fiction', publisher: 'Arrow', isbn: '9780099549482', copies: 8, available: 2, shelf: 'B-04', status: 'Issued' },
  { id: 'bk_3', ...school, title: 'Concepts of Physics Vol 1', author: 'H.C. Verma', category: 'Reference', publisher: 'Bharati Bhawan', isbn: '9788177091878', copies: 12, available: 9, shelf: 'C-02', status: 'Available' },
  { id: 'bk_4', ...school, title: 'A Brief History of Time', author: 'Stephen Hawking', category: 'Science', publisher: 'Bantam', isbn: '9780553380163', copies: 4, available: 0, shelf: 'C-18', status: 'Lost' },
];

export const libraryIssues = [
  { id: 'li_1', ...school, bookId: 'bk_2', book: 'To Kill a Mockingbird', memberType: 'Student', memberId: 'stu_aditya', member: 'Aditya Sharma', issueDate: '2026-09-01', dueDate: '2026-09-15', returnDate: null, status: 'Overdue', fine: 20 },
  { id: 'li_2', ...school, bookId: 'bk_3', book: 'Concepts of Physics Vol 1', memberType: 'Teacher', memberId: 'tch_ravi', member: 'Ravi Prasad', issueDate: '2026-09-08', dueDate: '2026-09-22', returnDate: null, status: 'Issued', fine: 0 },
  { id: 'li_3', ...school, bookId: 'bk_1', book: 'NCERT Mathematics Class 7', memberType: 'Student', memberId: 'stu_ananya', member: 'Ananya Sharma', issueDate: '2026-08-20', dueDate: '2026-09-03', returnDate: '2026-09-02', status: 'Returned', fine: 0 },
];

export const vehicles = [
  { id: 'veh_1', ...school, number: 'KA-03-MX-4412', type: 'Bus', capacity: 42, driverId: 'drv_1', driver: 'Ramesh Gowda', registration: 'KA03MX4412', insuranceUpto: '2027-01-31', gpsReady: true, status: 'Active' },
  { id: 'veh_2', ...school, number: 'KA-03-MX-2290', type: 'Mini Bus', capacity: 22, driverId: 'drv_2', driver: 'Salim Pasha', registration: 'KA03MX2290', insuranceUpto: '2026-11-12', gpsReady: true, status: 'Active' },
  { id: 'veh_3', ...school, number: 'KA-03-MX-1108', type: 'Van', capacity: 12, driverId: 'drv_3', driver: 'Joseph D', registration: 'KA03MX1108', insuranceUpto: '2026-08-01', gpsReady: false, status: 'Maintenance' },
];

export const drivers = [
  { id: 'drv_1', ...school, name: 'Ramesh Gowda', license: 'KA-DL-2014-8821', phone: '+91 98440 11122' },
  { id: 'drv_2', ...school, name: 'Salim Pasha', license: 'KA-DL-2016-4410', phone: '+91 98440 33344' },
  { id: 'drv_3', ...school, name: 'Joseph D', license: 'KA-DL-2011-2290', phone: '+91 98440 55566' },
];

export const routes = [
  {
    id: 'rt_1',
    ...school,
    name: 'Whitefield Loop',
    vehicleId: 'veh_1',
    pickupTime: '07:10',
    dropTime: '15:50',
    stops: [
      { id: 'st_1', name: 'Palm Meadows', time: '07:15' },
      { id: 'st_2', name: 'ITPL Gate', time: '07:28' },
      { id: 'st_3', name: 'Hope Farm', time: '07:36' },
    ],
  },
  {
    id: 'rt_2',
    ...school,
    name: 'HSR – Indiranagar',
    vehicleId: 'veh_2',
    pickupTime: '07:00',
    dropTime: '16:05',
    stops: [
      { id: 'st_4', name: 'HSR BDA', time: '07:05' },
      { id: 'st_5', name: 'Indiranagar 100ft', time: '07:25' },
    ],
  },
];

export const transportAssignments = [
  { id: 'ta_1', ...school, studentId: 'stu_aditya', studentName: 'Aditya Sharma', vehicleId: 'veh_1', routeId: 'rt_1', stopId: 'st_1', stop: 'Palm Meadows' },
  { id: 'ta_2', ...school, studentId: 'stu_kabir', studentName: 'Kabir Reddy', vehicleId: 'veh_2', routeId: 'rt_2', stopId: 'st_4', stop: 'HSR BDA' },
];

export const hostels = [
  { id: 'hst_1', ...school, name: 'Tagore House', type: 'Boys', warden: 'Sister Agnes D’Souza' },
  { id: 'hst_2', ...school, name: 'Sarojini House', type: 'Girls', warden: 'Ms. Latha Rao' },
];

export const hostelRooms = [
  { id: 'hr_101', ...school, hostelId: 'hst_1', building: 'A', floor: 1, room: '101', beds: 4, occupied: 3, status: 'Occupied' },
  { id: 'hr_102', ...school, hostelId: 'hst_1', building: 'A', floor: 1, room: '102', beds: 4, occupied: 4, status: 'Occupied' },
  { id: 'hr_201', ...school, hostelId: 'hst_2', building: 'B', floor: 2, room: '201', beds: 3, occupied: 2, status: 'Occupied' },
  { id: 'hr_202', ...school, hostelId: 'hst_2', building: 'B', floor: 2, room: '202', beds: 3, occupied: 0, status: 'Maintenance' },
];

export const hostelAllocations = [
  { id: 'ha_1', ...school, studentId: 'stu_kabir', studentName: 'Kabir Reddy', hostel: 'Tagore House', room: '101', bed: 'B2', joiningDate: '2025-04-08', leavingDate: null },
  { id: 'ha_2', ...school, studentId: 'stu_isha', studentName: 'Isha Patel', hostel: 'Sarojini House', room: '201', bed: 'A1', joiningDate: '2024-06-12', leavingDate: null },
];

export const inventoryItems = [
  { id: 'inv_1', ...school, name: 'Desktop Computer', category: 'Computers', vendor: 'Dell India', quantity: 42, unitPrice: 48500, location: 'Computer Lab', purchaseDate: '2024-05-12', warrantyUpto: '2027-05-12', status: 'In Stock' },
  { id: 'inv_2', ...school, name: 'Student Desk', category: 'Furniture', vendor: 'Urban Woodworks', quantity: 210, unitPrice: 3200, location: 'Classrooms', purchaseDate: '2023-03-01', warrantyUpto: null, status: 'In Stock' },
  { id: 'inv_3', ...school, name: 'A4 Copier Paper (ream)', category: 'Stationery', vendor: 'JK Paper', quantity: 86, unitPrice: 280, location: 'Store', purchaseDate: '2026-08-14', warrantyUpto: null, status: 'In Stock' },
  { id: 'inv_4', ...school, name: 'Microscope', category: 'Laboratory equipment', vendor: 'Olympus', quantity: 12, unitPrice: 18500, location: 'Bio Lab', purchaseDate: '2022-11-20', warrantyUpto: '2026-11-20', status: 'Issued' },
  { id: 'inv_5', ...school, name: 'Football', category: 'Sports equipment', vendor: 'Nivia', quantity: 18, unitPrice: 890, location: 'Sports Room', purchaseDate: '2026-06-02', warrantyUpto: null, status: 'In Stock' },
  { id: 'inv_6', ...school, name: 'Floor Cleaner 5L', category: 'Cleaning supplies', vendor: 'Diversey', quantity: 9, unitPrice: 640, location: 'Housekeeping', purchaseDate: '2026-09-01', warrantyUpto: null, status: 'In Stock' },
];

export const inventoryVendors = [
  { id: 'vnd_1', ...school, name: 'Dell India', contact: '+91 80 4000 1000' },
  { id: 'vnd_2', ...school, name: 'Urban Woodworks', contact: '+91 80 2555 4411' },
  { id: 'vnd_3', ...school, name: 'JK Paper', contact: '+91 22 2281 0000' },
];
