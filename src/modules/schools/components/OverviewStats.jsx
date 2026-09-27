import { Users, GraduationCap, Briefcase, HeartHandshake } from "lucide-react";
import { formatNumber } from "../utils/schoolHelpers";

const cards = [
  { key: "students", label: "Students", icon: Users,          tone: "primary" },
  { key: "teachers", label: "Teachers", icon: GraduationCap,  tone: "success" },
  { key: "staff",    label: "Staff",    icon: Briefcase,      tone: "info"    },
  { key: "parents",  label: "Parents",  icon: HeartHandshake, tone: "warning" },
];

const toneMap = {
  primary: "bg-primary-50 text-primary-700",
  success: "bg-success-light text-success-dark",
  info:    "bg-info-light text-info-dark",
  warning: "bg-warning-light text-warning-dark",
};

export default function OverviewStats({ school }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map(({ key, label, icon: Icon, tone }) => (
        <div key={key} className="card p-5">
          <div className={`h-10 w-10 rounded-lg grid place-items-center ${toneMap[tone]}`}>
            <Icon className="h-5 w-5" />
          </div>
          <p className="mt-4 text-sm text-[var(--muted)]">{label}</p>
          <p className="mt-1 text-2xl font-semibold">
            {formatNumber(school[key])}
          </p>
        </div>
      ))}
    </div>
  );
}