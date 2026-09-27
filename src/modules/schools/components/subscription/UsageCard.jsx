import { Users, GraduationCap, HardDrive } from "lucide-react";
import { planCatalog } from "../../../../mock/subscriptions";
import { usagePercent } from "../../utils/subscriptionHelpers";

function Meter({ label, used, max, unit, icon: Icon }) {
  const percent = usagePercent(used, max);
  const tone =
    percent >= 90 ? "bg-danger" : percent >= 75 ? "bg-warning" : "bg-primary";

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 text-sm text-[var(--text-soft)]">
          <Icon className="h-4 w-4 text-[var(--muted)]" />
          {label}
        </div>
        <p className="text-sm">
          <span className="font-semibold">{used}</span>
          <span className="text-[var(--muted)]">
            {" "}/ {max} {unit}
          </span>
        </p>
      </div>
      <div className="h-2 w-full rounded-full bg-[var(--surface-hover)] overflow-hidden">
        <div
          className={`h-full ${tone} transition-all`}
          style={{ width: `${percent}%` }}
        />
      </div>
      <p className="mt-1 text-xs text-[var(--muted)]">{percent}% used</p>
    </div>
  );
}

export default function UsageCard({ subscription }) {
  const plan = planCatalog[subscription.plan];
  const storageUsedNum = parseInt(subscription.usage.storageUsed);

  return (
    <div className="card p-5">
      <h3 className="text-base font-semibold mb-5">Usage this period</h3>

      <div className="space-y-5">
        <Meter
          label="Students"
          used={subscription.usage.students}
          max={plan.maxStudents}
          unit=""
          icon={Users}
        />
        <Meter
          label="Teachers"
          used={subscription.usage.teachers}
          max={plan.maxTeachers}
          unit=""
          icon={GraduationCap}
        />
        <Meter
          label="Storage"
          used={storageUsedNum}
          max={parseInt(plan.storage)}
          unit="GB"
          icon={HardDrive}
        />
      </div>

      <p className="mt-5 pt-5 border-t border-[var(--border)] text-xs text-[var(--muted)]">
        Need higher limits? <button className="text-primary font-medium hover:underline" onClick={() => {}}>Upgrade plan →</button>
      </p>
    </div>
  );
}