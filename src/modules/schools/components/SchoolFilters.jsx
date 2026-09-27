import { Search, X } from "lucide-react";
import { PLAN_OPTIONS, SCHOOL_STATUS_META } from "../constants/schoolConstants";

export default function SchoolFilters({
  query, setQuery,
  status, setStatus,
  plan, setPlan,
  state, setState,
  states, reset,
}) {
  const hasFilters =
    query || status !== "all" || plan !== "all" || state !== "all";

  return (
    <div className="card p-4">
      <div className="grid gap-3 md:grid-cols-12">
        {/* Search */}
        <div className="md:col-span-4 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted)]" />
          <input
            type="search"
            placeholder="Search school, code, admin, city…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="input pl-9"
          />
        </div>

        {/* Status */}
        <select
          className="input md:col-span-2"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="all">All statuses</option>
          {Object.entries(SCHOOL_STATUS_META).map(([k, v]) => (
            <option key={k} value={k}>{v.label}</option>
          ))}
        </select>

        {/* Plan */}
        <select
          className="input md:col-span-2"
          value={plan}
          onChange={(e) => setPlan(e.target.value)}
        >
          <option value="all">All plans</option>
          {PLAN_OPTIONS.map((p) => (
            <option key={p.value} value={p.value}>{p.label}</option>
          ))}
        </select>

        {/* State */}
        <select
          className="input md:col-span-2"
          value={state}
          onChange={(e) => setState(e.target.value)}
        >
          <option value="all">All states</option>
          {states.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>

        {/* Reset */}
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