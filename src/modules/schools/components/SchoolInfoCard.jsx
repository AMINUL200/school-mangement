const rows = [
  { label: "Principal",       key: "principal"       },
  { label: "Registration No.", key: "registrationNo", mono: true },
  { label: "Affiliation No.", key: "affiliationNo",  mono: true },
  { label: "Academic session", key: "activeSession"  },
  { label: "Phone",           key: "phone"           },
  { label: "Email",           key: "email"           },
  { label: "Website",         key: "website"         },
  { label: "Address",         key: "address", full: true },
];

export default function SchoolInfoCard({ school }) {
  return (
    <div className="card p-5">
      <h3 className="text-base font-semibold mb-4">School information</h3>
      <dl className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
        {rows.map((r) => (
          <div key={r.key} className={r.full ? "sm:col-span-2" : ""}>
            <dt className="text-xs text-[var(--muted)]">{r.label}</dt>
            <dd
              className={`mt-0.5 text-sm text-[var(--text-soft)] ${
                r.mono ? "font-mono" : ""
              }`}
            >
              {school[r.key] || "—"}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}