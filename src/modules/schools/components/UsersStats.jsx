import { Users, GraduationCap, Briefcase, ShieldCheck } from "lucide-react";

const toneMap = {
  primary: "bg-primary-50 text-primary-700",
  success: "bg-success-light text-success-dark",
  info:    "bg-info-light text-info-dark",
  warning: "bg-warning-light text-warning-dark",
};

export default function UsersStats({ users = [] }) {
  const admins   = users.filter((u) =>
    ["school_admin", "principal", "vice_principal"].includes(u.role)
  ).length;
  const teachers = users.filter((u) => u.role === "teacher").length;
  const staff    = users.filter((u) =>
    ["accountant", "librarian", "transport_manager", "hostel_warden", "hr_manager", "staff"].includes(u.role)
  ).length;

  const cards = [
    { key: "total",    label: "Total Users", icon: Users,         tone: "primary", value: users.length },
    { key: "admins",   label: "Admins",      icon: ShieldCheck,   tone: "success", value: admins       },
    { key: "teachers", label: "Teachers",    icon: GraduationCap, tone: "info",    value: teachers     },
    { key: "staff",    label: "Staff",       icon: Briefcase,     tone: "warning", value: staff        },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map(({ key, label, icon: Icon, tone, value }) => (
        <div key={key} className="card p-5">
          <div className={`h-10 w-10 rounded-lg grid place-items-center ${toneMap[tone]}`}>
            <Icon className="h-5 w-5" />
          </div>
          <p className="mt-4 text-sm text-[var(--muted)]">{label}</p>
          <p className="mt-1 text-2xl font-semibold">{value}</p>
        </div>
      ))}
    </div>
  );
}