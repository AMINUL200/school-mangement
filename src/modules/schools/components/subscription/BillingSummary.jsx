import { CreditCard, Wallet, TrendingUp } from "lucide-react";
import { formatINR } from "../../utils/subscriptionHelpers";

export default function BillingSummary({ invoices = [], subscription }) {
  const totalPaid = invoices
    .filter((i) => i.status === "paid")
    .reduce((sum, i) => sum + i.amount, 0);

  return (
    <div className="card p-5">
      <h3 className="text-base font-semibold mb-5">Billing summary</h3>

      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="h-9 w-9 rounded-lg bg-success-light text-success-dark grid place-items-center shrink-0">
            <TrendingUp className="h-4 w-4" />
          </div>
          <div>
            <p className="text-xs text-[var(--muted)]">Total paid (last 6 mo)</p>
            <p className="text-lg font-semibold mt-0.5">{formatINR(totalPaid)}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="h-9 w-9 rounded-lg bg-primary-50 text-primary-700 grid place-items-center shrink-0">
            <Wallet className="h-4 w-4" />
          </div>
          <div>
            <p className="text-xs text-[var(--muted)]">Next charge</p>
            <p className="text-lg font-semibold mt-0.5">
              {formatINR(subscription.amount)}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="h-9 w-9 rounded-lg bg-info-light text-info-dark grid place-items-center shrink-0">
            <CreditCard className="h-4 w-4" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs text-[var(--muted)]">Payment method</p>
            <p className="text-sm font-medium mt-0.5 truncate">
              UPI · dps@upi
            </p>
          </div>
          <button className="btn-ghost btn-sm text-primary shrink-0">
            Change
          </button>
        </div>
      </div>
    </div>
  );
}