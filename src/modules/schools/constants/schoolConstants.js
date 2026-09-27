export const SCHOOL_STATUS = {
  ACTIVE: "active",
  TRIAL: "trial",
  SUSPENDED: "suspended",
  INACTIVE: "inactive",
};

export const SCHOOL_STATUS_META = {
  active:    { label: "Active",    tone: "success" },
  trial:     { label: "Trial",     tone: "info"    },
  suspended: { label: "Suspended", tone: "danger"  },
  inactive:  { label: "Inactive",  tone: "neutral" },
};

export const PLAN_OPTIONS = [
  { value: "starter",      label: "Starter"      },
  { value: "standard",     label: "Standard"     },
  { value: "professional", label: "Professional" },
  { value: "enterprise",   label: "Enterprise"   },
];

export const BOARD_OPTIONS = [
  "CBSE",
  "ICSE",
  "State Board",
  "IB",
  "Cambridge",
  "Other",
];