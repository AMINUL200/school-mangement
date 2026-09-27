import { Search, X } from "lucide-react";
import { USER_ROLES } from "../constants/userConstants";

export default function UsersFilters({
  query, setQuery,
  role, setRole,
  status, setStatus,
  reset,
}) {
  const hasFilters = query || role !== "all" || status !== "all";

  return (
    <div className="card p-4">
      <div className="grid gap-3 md:grid-cols-12">
        <div className="md:col-span-6 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted)]" />
          <input
            type="search"
            placeholder="Search by name, email, phone…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="input pl-9"
          />
        </div>

        <select
          className="input md:col-span-2"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="all">All roles</option>
          {Object.entries(USER_ROLES).map(([k, v]) => (
            <option key={k} value={k}>{v.label}</option>
          ))}
        </select>

        <select
          className="input md:col-span-2"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="all">All statuses</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="invited">Invited</option>
          <option value="suspended">Suspended</option>
        </select>

        <div className="md:col-span-2">
          <button
            onClick={reset}
            className="btn btn-secondary w-full"
            disabled={!hasFilters}
          >
            <X className="h-4 w-4" />
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}