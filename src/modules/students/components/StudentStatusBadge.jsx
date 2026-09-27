const META = {
  active:      { label: "Active",      cls: "badge-success" },
  inactive:    { label: "Inactive",    cls: "badge-neutral" },
  transferred: { label: "Transferred", cls: "badge-info"    },
  graduated:   { label: "Graduated",   cls: "badge-primary" },
  alumni:      { label: "Alumni",      cls: "badge-neutral" },
  suspended:   { label: "Suspended",   cls: "badge-danger"  },
};

export default function StudentStatusBadge({ status }) {
  const meta = META[status] || META.inactive;
  return <span className={meta.cls}>{meta.label}</span>;
}