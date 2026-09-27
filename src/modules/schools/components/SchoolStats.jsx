import { School, CheckCircle2, Clock, Ban } from "lucide-react";
import { formatNumber } from "../utils/schoolHelpers";

const cards = [
  { key: "total",     label: "Total Schools",     icon: School,       tone: "primary" },
  { key: "active",    label: "Active Schools",    icon: CheckCircle2, tone: "success" },
  { key: "trial",     label: "Trial Schools",     icon: Clock,        tone: "info"    },
  { key: "suspended", label: "Suspended",         icon: Ban,          tone: "danger"  },
];

const toneMap = {
  primary: "bg-primary-50 text-primary-700",
  success: "bg-success-light text-success-dark",
  info:    "bg-info-light text-info-dark",
  danger:  "bg-danger-light text-danger-dark",
};

export default function SchoolStats({ stats }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map(({ key, label, icon: Icon, tone }) => (
        <div key={key} className="card p-5">
          <div className="flex items-start justify-between">
            <div className={`h-10 w-10 rounded-lg grid place-items-center ${toneMap[tone]}`}>
              <Icon className="h-5 w-5" />
            </div>
          </div>
          <p className="mt-4 text-sm text-[var(--muted)]">{label}</p>
          <p className="mt-1 text-2xl font-semibold">{formatNumber(stats[key])}</p>
        </div>
      ))}
    </div>
  );
}