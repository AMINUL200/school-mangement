import { CheckCircle2, Calendar, CreditCard, ArrowUpRight } from "lucide-react";
import { planCatalog } from "../../../../mock/subscriptions";
import { formatINR, formatDate, daysUntil } from "../../utils/subscriptionHelpers";

export default function CurrentPlanCard({ subscription, onAction }) {
  const plan = planCatalog[subscription.plan];
  const daysToRenewal = daysUntil(subscription.renewalAt);
  const isRenewalSoon = daysToRenewal <= 30;

  return (
    <div className="card overflow-hidden">
      {/* Top banner */}
      <div className="bg-secondary text-white p-6 relative overflow-hidden">
        <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-primary-500/25 blur-3xl" />

        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="badge bg-white/15 text-white">
                <CheckCircle2 className="h-3 w-3" />
                Active
              </span>
              <span className="badge bg-white/15 text-white capitalize">
                {subscription.billingCycle}
              </span>
            </div>

            <h2 className="mt-3 text-2xl font-bold">{plan.name} Plan</h2>
            <p className="text-sm text-slate-300 mt-1">{plan.tagline}</p>

            <p className="mt-4 text-3xl font-bold">
              {formatINR(subscription.amount)}
              <span className="text-base font-normal text-slate-300">
                {" "}/ month
              </span>
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              className="btn btn-lg bg-white text-secondary hover:bg-slate-100"
              onClick={() => onAction?.("change_plan")}
            >
              Change plan
            </button>
            <button
              className="btn btn-lg btn-outline border-white/30 text-white hover:bg-white/10"
              onClick={() => onAction?.("cancel")}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>

      {/* Meta row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border)] border-t border-[var(--border)]">
        <div className="p-5">
          <div className="flex items-center gap-2 text-[var(--muted)] text-xs">
            <Calendar className="h-3.5 w-3.5" />
            Current period
          </div>
          <p className="mt-1 text-sm font-medium">
            {formatDate(subscription.currentPeriodStart)} →{" "}
            {formatDate(subscription.currentPeriodEnd)}
          </p>
        </div>

        <div className="p-5">
          <div className="flex items-center gap-2 text-[var(--muted)] text-xs">
            <ArrowUpRight className="h-3.5 w-3.5" />
            Next renewal
          </div>
          <p className="mt-1 text-sm font-medium">
            {formatDate(subscription.renewalAt)}
            {isRenewalSoon && (
              <span className="ml-2 badge-warning">
                in {daysToRenewal} days
              </span>
            )}
          </p>
        </div>

        <div className="p-5">
          <div className="flex items-center gap-2 text-[var(--muted)] text-xs">
            <CreditCard className="h-3.5 w-3.5" />
            Next invoice
          </div>
          <p className="mt-1 text-sm font-medium">
            {formatDate(subscription.nextInvoiceAt)}
          </p>
        </div>
      </div>
    </div>
  );
}