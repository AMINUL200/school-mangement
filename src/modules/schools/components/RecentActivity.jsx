import {
  UserPlus, Wallet, Upload, RefreshCw, Activity,
} from "lucide-react";

const iconMap = {
  teacher_created:      { icon: UserPlus,  tone: "bg-primary-50 text-primary-700" },
  fee_updated:          { icon: Wallet,    tone: "bg-warning-light text-warning-dark" },
  student_imported:     { icon: Upload,    tone: "bg-info-light text-info-dark" },
  subscription_renewed: { icon: RefreshCw, tone: "bg-success-light text-success-dark" },
};

const timeAgo = (iso) => {
  const diff = (Date.now() - new Date(iso)) / 1000;
  if (diff < 60) return "just now";
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
};

export default function RecentActivity({ items = [] }) {
  return (
    <div className="card p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold">Recent activity</h3>
        <button className="btn-ghost btn-sm text-primary">View all</button>
      </div>

      {items.length === 0 ? (
        <p className="text-sm text-[var(--muted)]">No recent activity.</p>
      ) : (
        <ul className="space-y-4">
          {items.map((a) => {
            const meta = iconMap[a.type] || {
              icon: Activity,
              tone: "bg-slate-100 text-slate-600",
            };
            const Icon = meta.icon;

            return (
              <li key={a.id} className="flex items-start gap-3">
                <div className={`h-9 w-9 rounded-lg grid place-items-center shrink-0 ${meta.tone}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-[var(--text)] truncate">
                    {a.title}
                  </p>
                  <p className="text-xs text-[var(--muted)] truncate">
                    {a.description}
                  </p>
                  <p className="text-xs text-[var(--muted-light)] mt-1">
                    {a.actor} · {timeAgo(a.at)}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}