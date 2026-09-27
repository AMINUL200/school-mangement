import { Download, FileText } from "lucide-react";
import { formatINR, formatDate } from "../../utils/subscriptionHelpers";

const STATUS_META = {
  paid:    { label: "Paid",    cls: "badge-success" },
  pending: { label: "Pending", cls: "badge-warning" },
  failed:  { label: "Failed",  cls: "badge-danger"  },
};

export default function InvoiceHistory({ invoices = [] }) {
  return (
    <div className="card overflow-hidden">
      <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-4">
        <h3 className="text-base font-semibold">Invoice history</h3>
        <button className="btn-ghost btn-sm text-primary">View all</button>
      </div>

      {invoices.length === 0 ? (
        <div className="p-8 text-center text-sm text-[var(--muted)]">
          No invoices yet.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Invoice</th>
                <th>Date</th>
                <th>Method</th>
                <th className="text-right">Amount</th>
                <th>Status</th>
                <th className="text-right">—</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((inv) => {
                const meta = STATUS_META[inv.status] || STATUS_META.pending;
                return (
                  <tr key={inv.id}>
                    <td className="font-mono text-xs text-[var(--text-soft)]">
                      <span className="inline-flex items-center gap-2">
                        <FileText className="h-3.5 w-3.5 text-[var(--muted)]" />
                        {inv.id}
                      </span>
                    </td>
                    <td className="text-[var(--muted)] whitespace-nowrap">
                      {formatDate(inv.date)}
                    </td>
                    <td className="text-[var(--muted)]">{inv.method}</td>
                    <td className="text-right tabular-nums font-medium">
                      {formatINR(inv.amount)}
                    </td>
                    <td>
                      <span className={meta.cls}>{meta.label}</span>
                    </td>
                    <td className="text-right">
                      <button className="btn-ghost btn-icon" aria-label="Download invoice">
                        <Download className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}