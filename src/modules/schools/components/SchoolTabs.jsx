export const TABS = [
  { key: "overview",     label: "Overview"     },
  { key: "students",     label: "Students"     },
  { key: "users",        label: "Users"        },
  { key: "subscription", label: "Subscription" },
  { key: "payments",     label: "Payments"     },
  { key: "activity",     label: "Activity"     },
  { key: "settings",     label: "Settings"     },
];

export default function SchoolTabs({ active, onChange }) {
  return (
    <div className="border-b border-[var(--border)]">
      <div className="flex gap-1 overflow-x-auto -mb-px">
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => onChange(t.key)}
            className={`tab whitespace-nowrap ${
              active === t.key ? "tab-active" : ""
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
}