export const planCatalog = {
  starter: {
    id: "starter",
    name: "Starter",
    price: 4999,          // monthly INR
    yearly: 49990,        // 2 months free
    tagline: "For small schools getting started",
    maxStudents: 500,
    maxTeachers: 50,
    storage: "10 GB",
    modules: ["students", "attendance", "exams", "fees"],
  },
  standard: {
    id: "standard",
    name: "Standard",
    price: 9999,
    yearly: 99990,
    tagline: "For growing schools",
    maxStudents: 1500,
    maxTeachers: 100,
    storage: "50 GB",
    modules: ["students", "attendance", "exams", "fees", "library", "timetable"],
  },
  professional: {
    id: "professional",
    name: "Professional",
    price: 17999,
    yearly: 179990,
    tagline: "For established schools",
    maxStudents: 3000,
    maxTeachers: 200,
    storage: "200 GB",
    modules: [
      "students", "attendance", "exams", "fees", "library", "timetable",
      "transport", "hostel", "hr", "payroll",
    ],
  },
  enterprise: {
    id: "enterprise",
    name: "Enterprise",
    price: 24999,
    yearly: 249990,
    tagline: "For large campuses & multi-branch",
    maxStudents: 10000,
    maxTeachers: 500,
    storage: "1 TB",
    modules: [
      "students", "attendance", "exams", "fees", "library", "timetable",
      "transport", "hostel", "hr", "payroll", "accounting", "online_exam",
      "inventory",
    ],
  },
};

// Per school subscription record
export const subscriptionBySchoolId = {
  sch_001: {
    plan: "enterprise",
    billingCycle: "monthly",
    status: "active",
    startedAt: "2024-04-01",
    currentPeriodStart: "2026-09-01",
    currentPeriodEnd: "2026-09-30",
    renewalAt: "2027-09-30",
    nextInvoiceAt: "2026-10-01",
    amount: 24999,
    usage: {
      students: 2450,
      teachers: 128,
      storageUsed: "82 GB",
    },
  },
};

// Invoice history
export const invoicesBySchoolId = {
  sch_001: [
    { id: "INV-2026-09-001", date: "2026-09-01", amount: 24999, status: "paid", method: "UPI" },
    { id: "INV-2026-08-001", date: "2026-08-01", amount: 24999, status: "paid", method: "UPI" },
    { id: "INV-2026-07-001", date: "2026-07-01", amount: 24999, status: "paid", method: "Bank transfer" },
    { id: "INV-2026-06-001", date: "2026-06-01", amount: 24999, status: "paid", method: "UPI" },
    { id: "INV-2026-05-001", date: "2026-05-01", amount: 24999, status: "paid", method: "Card" },
    { id: "INV-2026-04-001", date: "2026-04-01", amount: 24999, status: "paid", method: "UPI" },
  ],
};