import { X, Check, AlertTriangle } from "lucide-react";
import { planCatalog } from "../../../../mock/subscriptions";
import { formatINR } from "../../utils/subscriptionHelpers";

export default function ChangePlanModal({ open, onClose, currentPlan, onSubmit }) {
  if (!open) return null;

  const plans = Object.values(planCatalog);
  const currentIdx = plans.findIndex((p) => p.id === currentPlan);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div>
            <h3 className="text-base font-semibold">Change plan</h3>
            <p className="text-xs text-[var(--muted)] mt-0.5">
              Upgrades take effect immediately. Downgrades apply next cycle.
            </p>
          </div>
          <button onClick={onClose} className="btn-ghost btn-icon">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="modal-body">
          <div className="grid gap-3 sm:grid-cols-2">
            {plans.map((p, idx) => {
              const isCurrent = p.id === currentPlan;
              const isDowngrade = idx < currentIdx;
              const isUpgrade = idx > currentIdx;

              return (
                <button
                  key={p.id}
                  disabled={isCurrent}
                  onClick={() => onSubmit(p.id)}
                  className={`text-left rounded-xl border p-4 transition-all
                    ${isCurrent
                      ? "border-primary-400 bg-primary-50 cursor-default"
                      : "border-[var(--border)] hover:border-primary-300 hover:shadow-md"
                    }`}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">{p.name}</h4>
                    {isCurrent && <span className="badge-primary">Current</span>}
                    {isUpgrade && <span className="badge-success">Upgrade</span>}
                    {isDowngrade && (
                      <span className="badge-warning inline-flex items-center gap-1">
                        <AlertTriangle className="h-3 w-3" /> Downgrade
                      </span>
                    )}
                  </div>

                  <p className="mt-1 text-xs text-[var(--muted)]">{p.tagline}</p>

                  <p className="mt-3 text-xl font-bold">
                    {formatINR(p.price)}
                    <span className="text-xs font-normal text-[var(--muted)]">
                      {" "}/ mo
                    </span>
                  </p>

                  <ul className="mt-3 space-y-1.5">
                    <li className="text-xs text-[var(--text-soft)] flex items-center gap-1.5">
                      <Check className="h-3.5 w-3.5 text-success" />
                      {p.maxStudents.toLocaleString("en-IN")} students
                    </li>
                    <li className="text-xs text-[var(--text-soft)] flex items-center gap-1.5">
                      <Check className="h-3.5 w-3.5 text-success" />
                      {p.maxTeachers} teachers
                    </li>
                    <li className="text-xs text-[var(--text-soft)] flex items-center gap-1.5">
                      <Check className="h-3.5 w-3.5 text-success" />
                      {p.storage} storage
                    </li>
                    <li className="text-xs text-[var(--text-soft)] flex items-center gap-1.5">
                      <Check className="h-3.5 w-3.5 text-success" />
                      {p.modules.length} modules
                    </li>
                  </ul>
                </button>
              );
            })}
          </div>
        </div>

        <div className="modal-footer">
          <button onClick={onClose} className="btn btn-secondary">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}