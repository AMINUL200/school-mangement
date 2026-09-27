import { useMemo, useState } from "react";
import {
  Search, MoreVertical, Eye, Pencil, Trash2,
  Download, Filter, ChevronLeft, ChevronRight,
} from "lucide-react";
import { formatDate, formatNumber, initials } from "../utils/studentHelpers";
import StudentStatusBadge from "./StudentStatusBadge";

/**
 * Reusable StudentTable
 *
 * Props:
 *  - students:     Array<Student>              (required)
 *  - loading:      boolean                     (default false)
 *  - error:        string | null               (default null)
 *
 *  - columns:      string[]                    (which columns to show)
 *                  options: name | admission | roll | class | section |
 *                           gender | guardian | contact | attendance |
 *                           fees | status | joined
 *
 *  - showSearch:   boolean                     (default true)
 *  - showFilters:  boolean                     (default false)
 *  - showExport:   boolean                     (default false)
 *
 *  - title:        string                      (optional header label)
 *  - emptyText:    string                      (custom empty message)
 *  - pageSize:     number                      (default 8, 0 = no pagination)
 *
 *  - actions:      string[]                    (which row actions to allow)
 *                  options: view | edit | delete
 *                  default: ["view"]
 *
 *  - onAction:     (type, student) => void     (required if actions given)
 *
 *  - onRowClick:   (student) => void           (optional)
 */

const DEFAULT_COLUMNS = [
  "name", "admission", "class", "section", "guardian", "status",
];

export default function StudentTable({
  students = [],
  loading = false,
  error = null,

  columns = DEFAULT_COLUMNS,
  showSearch = true,
  showFilters = false,
  showExport = false,
  title,

  emptyText = "No students found.",
  pageSize = 8,
  actions = ["view"],
  onAction,
  onRowClick,
}) {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [page, setPage] = useState(1);
  const [openMenu, setOpenMenu] = useState(null);

  const has = (col) => columns.includes(col);

  // ---- Filtering ----
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return students.filter((s) => {
      if (statusFilter !== "all" && s.status !== statusFilter) return false;
      if (!q) return true;
      return (
        s.name?.toLowerCase().includes(q) ||
        s.admissionNo?.toLowerCase().includes(q) ||
        s.rollNo?.toLowerCase().includes(q) ||
        s.guardianName?.toLowerCase().includes(q) ||
        s.guardianPhone?.toLowerCase().includes(q)
      );
    });
  }, [students, query, statusFilter]);

  // ---- Pagination ----
  const paginated = useMemo(() => {
    if (!pageSize) return filtered;
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize]);

  const totalPages = pageSize ? Math.max(1, Math.ceil(filtered.length / pageSize)) : 1;
  const from = pageSize ? (page - 1) * pageSize + 1 : 1;
  const to = pageSize ? Math.min(page * pageSize, filtered.length) : filtered.length;

  // ---- Handlers ----
  const runAction = (type, student) => {
    setOpenMenu(null);
    onAction?.(type, student);
  };

  // ---------- Loading ----------
  if (loading) {
    return (
      <div className="card overflow-hidden">
        <div className="p-4 border-b border-[var(--border)]">
          <div className="skeleton h-9 w-64 rounded-lg" />
        </div>
        <div className="p-4 space-y-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="skeleton h-12 w-full rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  // ---------- Error ----------
  if (error) {
    return (
      <div className="card p-8 text-center">
        <p className="text-sm text-danger-dark font-medium">
          Failed to load students
        </p>
        <p className="text-xs text-[var(--muted)] mt-1">{error}</p>
      </div>
    );
  }

  return (
    <div className="card overflow-hidden">
      {/* ---------- Toolbar ---------- */}
      {(showSearch || showFilters || showExport || title) && (
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 border-b border-[var(--border)] p-4">
          {title && (
            <h3 className="text-base font-semibold mr-auto">{title}</h3>
          )}

          {showSearch && (
            <div className="relative flex-1 sm:max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted)]" />
              <input
                type="search"
                placeholder="Search by name, admission, guardian…"
                value={query}
                onChange={(e) => { setQuery(e.target.value); setPage(1); }}
                className="input pl-9 py-2 text-sm"
              />
            </div>
          )}

          {showFilters && (
            <select
              className="input py-2 text-sm sm:w-40"
              value={statusFilter}
              onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }}
            >
              <option value="all">All statuses</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="transferred">Transferred</option>
              <option value="graduated">Graduated</option>
            </select>
          )}

          {showExport && (
            <button className="btn btn-secondary btn-sm shrink-0">
              <Download className="h-4 w-4" />
              Export
            </button>
          )}
        </div>
      )}

      {/* ---------- Empty ---------- */}
      {filtered.length === 0 ? (
        <div className="p-12 text-center">
          <p className="text-sm text-[var(--muted)]">{emptyText}</p>
          {(query || statusFilter !== "all") && (
            <button
              onClick={() => { setQuery(""); setStatusFilter("all"); setPage(1); }}
              className="btn btn-secondary mt-4"
            >
              Clear filters
            </button>
          )}
        </div>
      ) : (
        <>
          {/* ---------- Table ---------- */}
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  {has("name")       && <th>Student</th>}
                  {has("admission")  && <th>Admission</th>}
                  {has("roll")       && <th>Roll</th>}
                  {has("class")      && <th>Class</th>}
                  {has("section")    && <th>Section</th>}
                  {has("gender")     && <th>Gender</th>}
                  {has("guardian")   && <th>Guardian</th>}
                  {has("contact")    && <th>Contact</th>}
                  {has("attendance") && <th className="text-right">Attendance</th>}
                  {has("fees")       && <th>Fees</th>}
                  {has("status")     && <th>Status</th>}
                  {has("joined")     && <th>Joined</th>}
                  {actions.length > 0 && <th className="text-right">Actions</th>}
                </tr>
              </thead>

              <tbody>
                {paginated.map((s) => (
                  <tr
                    key={s.id}
                    onClick={() => onRowClick?.(s)}
                    className={onRowClick ? "cursor-pointer" : ""}
                  >
                    {has("name") && (
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar avatar-md bg-primary-100 text-primary-700">
                            {initials(s.name)}
                          </div>
                          <div className="min-w-0">
                            <p className="font-medium text-[var(--text)] truncate">
                              {s.name}
                            </p>
                            <p className="text-xs text-[var(--muted)] truncate">
                              {s.email || s.gender || "—"}
                            </p>
                          </div>
                        </div>
                      </td>
                    )}

                    {has("admission") && (
                      <td className="font-mono text-xs text-[var(--muted)]">
                        {s.admissionNo || "—"}
                      </td>
                    )}

                    {has("roll") && (
                      <td className="tabular-nums">{s.rollNo || "—"}</td>
                    )}

                    {has("class") && (
                      <td>{s.className || s.class || "—"}</td>
                    )}

                    {has("section") && (
                      <td>{s.section || "—"}</td>
                    )}

                    {has("gender") && (
                      <td className="capitalize">{s.gender || "—"}</td>
                    )}

                    {has("guardian") && (
                      <td>
                        <p className="text-[var(--text-soft)] truncate">
                          {s.guardianName || "—"}
                        </p>
                        <p className="text-xs text-[var(--muted)] capitalize">
                          {s.guardianRelation || ""}
                        </p>
                      </td>
                    )}

                    {has("contact") && (
                      <td className="font-mono text-xs">
                        {s.guardianPhone || s.phone || "—"}
                      </td>
                    )}

                    {has("attendance") && (
                      <td className="text-right tabular-nums">
                        {typeof s.attendance === "number" ? (
                          <span
                            className={
                              s.attendance >= 75
                                ? "text-success-dark font-medium"
                                : "text-danger-dark font-medium"
                            }
                          >
                            {s.attendance}%
                          </span>
                        ) : (
                          "—"
                        )}
                      </td>
                    )}

                    {has("fees") && (
                      <td>
                        {s.feesStatus === "paid" && (
                          <span className="badge-success">Paid</span>
                        )}
                        {s.feesStatus === "partial" && (
                          <span className="badge-warning">Partial</span>
                        )}
                        {s.feesStatus === "pending" && (
                          <span className="badge-danger">Pending</span>
                        )}
                        {!s.feesStatus && <span className="text-[var(--muted)]">—</span>}
                      </td>
                    )}

                    {has("status") && (
                      <td>
                        <StudentStatusBadge status={s.status} />
                      </td>
                    )}

                    {has("joined") && (
                      <td className="text-[var(--muted)] whitespace-nowrap">
                        {formatDate(s.joinedAt || s.admissionDate)}
                      </td>
                    )}

                    {actions.length > 0 && (
                      <td className="text-right relative" onClick={(e) => e.stopPropagation()}>
                        {actions.length === 1 && actions[0] === "view" ? (
                          <button
                            onClick={() => runAction("view", s)}
                            className="btn-ghost btn-icon"
                            aria-label="View student"
                          >
                            <Eye className="h-4 w-4" />
                          </button>
                        ) : (
                          <>
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
                                  {actions.includes("view") && (
                                    <button
                                      className="dropdown-item w-full"
                                      onClick={() => runAction("view", s)}
                                    >
                                      <Eye className="h-4 w-4" /> View
                                    </button>
                                  )}
                                  {actions.includes("edit") && (
                                    <button
                                      className="dropdown-item w-full"
                                      onClick={() => runAction("edit", s)}
                                    >
                                      <Pencil className="h-4 w-4" /> Edit
                                    </button>
                                  )}
                                  {actions.includes("delete") && (
                                    <>
                                      <div className="my-1 h-px bg-[var(--border)]" />
                                      <button
                                        className="dropdown-item dropdown-item-danger w-full"
                                        onClick={() => runAction("delete", s)}
                                      >
                                        <Trash2 className="h-4 w-4" /> Delete
                                      </button>
                                    </>
                                  )}
                                </div>
                              </>
                            )}
                          </>
                        )}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ---------- Pagination ---------- */}
          {pageSize > 0 && totalPages > 1 && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[var(--border)] px-4 py-3">
              <p className="text-xs text-[var(--muted)]">
                Showing <b>{from}</b>–<b>{to}</b> of <b>{formatNumber(filtered.length)}</b>
              </p>
              <div className="flex items-center gap-1">
                <button
                  className="btn-ghost btn-icon"
                  disabled={page === 1}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  aria-label="Previous page"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <span className="text-xs text-[var(--muted)] px-2">
                  Page {page} of {totalPages}
                </span>
                <button
                  className="btn-ghost btn-icon"
                  disabled={page === totalPages}
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  aria-label="Next page"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}