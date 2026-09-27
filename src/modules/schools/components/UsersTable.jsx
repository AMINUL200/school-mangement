import { useState } from "react";
import {
  MoreVertical, Eye, Pencil, KeyRound, Ban, CheckCircle2, Trash2,
} from "lucide-react";
import UserRoleBadge from "./UserRoleBadge";
import UserStatusBadge from "./UserStatusBadge";
import { initials, timeAgo } from "../utils/userHelpers";

export default function UsersTable({ users = [], onAction }) {
  const [openMenu, setOpenMenu] = useState(null);

  if (users.length === 0) {
    return (
      <div className="card p-12 text-center">
        <p className="text-sm text-[var(--muted)]">No users found.</p>
      </div>
    );
  }

  return (
    <div className="card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>User</th>
              <th>Role</th>
              <th>Department</th>
              <th>Contact</th>
              <th>Status</th>
              <th>Last login</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar avatar-md bg-primary-100 text-primary-700">
                      {initials(u.name)}
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-[var(--text)] truncate">
                        {u.name}
                      </p>
                      <p className="text-xs text-[var(--muted)] truncate">
                        {u.email}
                      </p>
                    </div>
                  </div>
                </td>

                <td>
                  <UserRoleBadge role={u.role} />
                </td>

                <td>
                  <p className="text-[var(--text-soft)]">{u.department || "—"}</p>
                  <p className="text-xs text-[var(--muted)]">{u.designation || ""}</p>
                </td>

                <td className="font-mono text-xs text-[var(--muted)]">
                  {u.phone || "—"}
                </td>

                <td>
                  <UserStatusBadge status={u.status} />
                </td>

                <td className="text-[var(--muted)] whitespace-nowrap text-xs">
                  {timeAgo(u.lastLoginAt)}
                </td>

                <td className="text-right relative">
                  <button
                    onClick={() => setOpenMenu(openMenu === u.id ? null : u.id)}
                    className="btn-ghost btn-icon"
                    aria-label="Row actions"
                  >
                    <MoreVertical className="h-4 w-4" />
                  </button>

                  {openMenu === u.id && (
                    <>
                      <div
                        className="fixed inset-0 z-10"
                        onClick={() => setOpenMenu(null)}
                      />
                      <div className="dropdown absolute right-4 top-12 z-20 text-left">
                        <button
                          className="dropdown-item w-full"
                          onClick={() => { onAction("view", u); setOpenMenu(null); }}
                        >
                          <Eye className="h-4 w-4" /> View
                        </button>
                        <button
                          className="dropdown-item w-full"
                          onClick={() => { onAction("edit", u); setOpenMenu(null); }}
                        >
                          <Pencil className="h-4 w-4" /> Edit
                        </button>
                        <button
                          className="dropdown-item w-full"
                          onClick={() => { onAction("reset_password", u); setOpenMenu(null); }}
                        >
                          <KeyRound className="h-4 w-4" /> Reset password
                        </button>

                        <div className="my-1 h-px bg-[var(--border)]" />

                        {u.status === "active" ? (
                          <button
                            className="dropdown-item w-full"
                            onClick={() => { onAction("deactivate", u); setOpenMenu(null); }}
                          >
                            <Ban className="h-4 w-4" /> Deactivate
                          </button>
                        ) : (
                          <button
                            className="dropdown-item w-full"
                            onClick={() => { onAction("activate", u); setOpenMenu(null); }}
                          >
                            <CheckCircle2 className="h-4 w-4" /> Activate
                          </button>
                        )}

                        <button
                          className="dropdown-item dropdown-item-danger w-full"
                          onClick={() => { onAction("delete", u); setOpenMenu(null); }}
                        >
                          <Trash2 className="h-4 w-4" /> Remove
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