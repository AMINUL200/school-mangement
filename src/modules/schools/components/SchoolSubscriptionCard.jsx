import { CalendarClock, IndianRupee, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/schoolHelpers";

const planLabel = {
  starter: "Starter",
  standard: "Standard",
  professional: "Professional",
  enterprise: "Enterprise",
};

export default function SchoolSubscriptionCard({ school }) {
  return (
    <div className="card p-5">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-sm font-medium text-[var(--muted)]">
            Current plan
          </h3>
          <p className="mt-1 text-xl font-semibold">
            {planLabel[school.plan] || school.plan}
          </p>
        </div>
        <Link
          to={`/admin/subscriptions?school=${school.id}`}
          className="btn-ghost btn-sm text-primary"
        >
          Manage
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[var(--border)]">
        <div className="flex items-start gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-primary-50 text-primary-700 grid place-items-center shrink-0">
            <CalendarClock className="h-4 w-4" />
          </div>
          <div>
            <p className="text-xs text-[var(--muted)]">Renewal</p>
            <p className="text-sm font-medium mt-0.5">
              {formatDate(school.renewalAt)}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-success-light text-success-dark grid place-items-center shrink-0">
            <IndianRupee className="h-4 w-4" />
          </div>
          <div>
            <p className="text-xs text-[var(--muted)]">Monthly revenue</p>
            <p className="text-sm font-medium mt-0.5">
              ₹{school.monthlyRevenue.toLocaleString("en-IN")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}