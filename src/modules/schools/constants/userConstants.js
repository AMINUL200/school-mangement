export const USER_ROLES = {
  school_admin:      { label: "School Admin",      tone: "primary" },
  principal:         { label: "Principal",         tone: "primary" },
  vice_principal:    { label: "Vice Principal",    tone: "primary" },
  teacher:           { label: "Teacher",           tone: "info"    },
  accountant:        { label: "Accountant",        tone: "success" },
  librarian:         { label: "Librarian",         tone: "warning" },
  transport_manager: { label: "Transport Manager", tone: "warning" },
  hostel_warden:     { label: "Hostel Warden",     tone: "warning" },
  hr_manager:        { label: "HR Manager",        tone: "success" },
  staff:             { label: "Staff",             tone: "neutral" },
};

export const USER_STATUS = {
  active:   { label: "Active",   cls: "badge-success" },
  inactive: { label: "Inactive", cls: "badge-neutral" },
  invited:  { label: "Invited",  cls: "badge-info"    },
  suspended:{ label: "Suspended",cls: "badge-danger"  },
};

export const USER_ROLE_TONE = {
  primary: "badge-primary",
  info:    "badge-info",
  success: "badge-success",
  warning: "badge-warning",
  neutral: "badge-neutral",
};