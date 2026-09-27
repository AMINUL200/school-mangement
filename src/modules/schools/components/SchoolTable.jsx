import { MoreVertical, Eye, Pencil, Ban, CheckCircle2, LogIn, Trash2 } from "lucide-react";
import { useState } from "react";
import SchoolStatusBadge from "./SchoolStatusBadge";
import { formatDate, formatNumber, initials } from "../utils/schoolHelpers";

const planLabel = {
  starter: "Starter",
  standard: "Standard",
  professional: "Professional",
  enterprise: "Enterprise",
};

export default function SchoolTable({ schools, onAction }) {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <div className="card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>School</th>
              <th>Admin</th>
              <th>Location</th>
              <th>Plan</th>
              <th className="text-right">Students</th>
              <th>Status</th>
              <th>Joined</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {schools.map((s) => (
              <tr key={s.id}>
                {/* School */}
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar avatar-md bg-primary-100 text-primary-700">
                      {initials(s.name)}
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-[var(--text)] truncate">
                        {s.name}
                      </p>
                      <p className="text-xs text-[var(--muted)] font-mono">
                        {s.code} · {s.board}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Admin */}
                <td>
                  <p className="text-[var(--text-soft)] truncate">{s.adminName}</p>
                  <p className="text-xs text-[var(--muted)] truncate">{s.adminEmail}</p>
                </td>

                {/* Location */}
                <td>
                  <p className="text-[var(--text-soft)]">{s.city}</p>
                  <p className="text-xs text-[var(--muted)]">{s.state}</p>
                </td>

                {/* Plan */}
                <td>
                  <span className="badge-primary">{planLabel[s.plan] || s.plan}</span>
                </td>

                {/* Students */}
                <td className="text-right tabular-nums">
                  {formatNumber(s.students)}
                </td>

                {/* Status */}
                <td>
                  <SchoolStatusBadge status={s.status} />
                </td>

                {/* Joined */}
                <td className="text-[var(--muted)] whitespace-nowrap">
                  {formatDate(s.joinedAt)}
                </td>

                {/* Actions */}
                <td className="text-right relative">
                  <button
                    onClick={() => setOpenMenu(openMenu === s.id ? null : s.id)}
                    className="btn-ghost btn-icon"
                    aria-label="Row actions"
                  >
                    <MoreVertical className="h-4 w-4" />
                  </button>

                  {openMenu === s.id && (
                    <>
                      <div
                        className="fixed inset-0 z-10"
                        onClick={() => setOpenMenu(null)}
                      />
                      <div className="dropdown absolute right-4 top-12 z-20 text-left">
                        <button
                          className="dropdown-item w-full"
                          onClick={() => { onAction("view", s); setOpenMenu(null); }}
                        >
                          <Eye className="h-4 w-4" /> View
                        </button>
                        <button
                          className="dropdown-item w-full"
                          onClick={() => { onAction("edit", s); setOpenMenu(null); }}
                        >
                          <Pencil className="h-4 w-4" /> Edit
                        </button>
                        <button
                          className="dropdown-item w-full"
                          onClick={() => { onAction("impersonate", s); setOpenMenu(null); }}
                        >
                          <LogIn className="h-4 w-4" /> Impersonate
                        </button>
                        <div className="my-1 h-px bg-[var(--border)]" />
                        {s.status === "suspended" ? (
                          <button
                            className="dropdown-item w-full"
                            onClick={() => { onAction("activate", s); setOpenMenu(null); }}
                          >
                            <CheckCircle2 className="h-4 w-4" /> Activate
                          </button>
                        ) : (
                          <button
                            className="dropdown-item w-full"
                            onClick={() => { onAction("suspend", s); setOpenMenu(null); }}
                          >
                            <Ban className="h-4 w-4" /> Suspend
                          </button>
                        )}
                        <button
                          className="dropdown-item dropdown-item-danger w-full"
                          onClick={() => { onAction("delete", s); setOpenMenu(null); }}
                        >
                          <Trash2 className="h-4 w-4" /> Delete
                        </button>
                      </div>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}