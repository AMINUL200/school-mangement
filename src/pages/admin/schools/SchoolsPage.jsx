import { Plus } from "lucide-react";
import { useState } from "react";
import useSchools from "../../../modules/schools/hooks/useSchools";
import SchoolStats from "../../../modules/schools/components/SchoolStats";
import SchoolFilters from "../../../modules/schools/components/SchoolFilters";
import SchoolTable from "../../../modules/schools/components/SchoolTable";
import ConfirmModal from "../../../modules/schools/components/ConfirmModal";
import { useNavigate } from "react-router-dom";

export default function SchoolsPage() {
  const {
    schools, stats, states,
    query, setQuery,
    status, setStatus,
    plan, setPlan,
    state, setState,
    reset,
    page, setPage, pages, total, perPage,
  } = useSchools();

  const [confirm, setConfirm] = useState(null); // { type, school }
  const navigate = useNavigate();

  const handleAction = (type, school) => {
    if (type === "delete" || type === "suspend") {
      setConfirm({ type, school });
      return;
    }
    if (type === "view") {
      navigate(`/admin/schools/${school.id}`) 
      console.log("view", school.id);

      return;
    }
    if (type === "edit") {
      // navigate(`/admin/schools/${school.id}/edit`)  ← wire later
      console.log("edit", school.id);
      return;
    }
    if (type === "impersonate") {
      // TODO: switch context to this school
      console.log("impersonate", school.id);
      return;
    }
    if (type === "activate") {
      // TODO: activate API
      console.log("activate", school.id);
    }
  };

  const confirmAction = () => {
    if (!confirm) return;
    console.log(confirm.type, confirm.school.id); // ← replace with API call
    setConfirm(null);
  };

  const from = (page - 1) * perPage + 1;
  const to = Math.min(page * perPage, total);

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">Schools</h1>
          <p className="page-subtitle">
            Manage every school registered on Nexus ERP.
          </p>
        </div>
        <button className="btn btn-primary">
          <Plus className="h-4 w-4" />
          Add School
        </button>
      </div>

      {/* Stats */}
      <SchoolStats stats={stats} />

      {/* Filters */}
      <SchoolFilters
        query={query} setQuery={setQuery}
        status={status} setStatus={setStatus}
        plan={plan} setPlan={setPlan}
        state={state} setState={setState}
        states={states}
        reset={reset}
      />

      {/* Table / empty */}
      {schools.length === 0 ? (
        <div className="card p-12 text-center">
          <p className="text-sm text-[var(--muted)]">
            No schools match your filters.
          </p>
          <button onClick={reset} className="btn btn-secondary mt-4">
            Clear filters
          </button>
        </div>
      ) : (
        <SchoolTable schools={schools} onAction={handleAction} />
      )}

      {/* Pagination */}
      {total > 0 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-[var(--muted)]">
            Showing <b>{from}</b>–<b>{to}</b> of <b>{total}</b> schools
          </p>
          <div className="flex items-center gap-2">
            <button
              className="btn btn-secondary btn-sm"
              disabled={page === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
            >
              Previous
            </button>
            <span className="text-sm text-[var(--muted)] px-2">
              Page {page} of {pages}
            </span>
            <button
              className="btn btn-secondary btn-sm"
              disabled={page === pages}
              onClick={() => setPage((p) => Math.min(pages, p + 1))}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Confirm modal */}
      <ConfirmModal
        open={!!confirm}
        title={
          confirm?.type === "delete"
            ? "Delete school?"
            : "Suspend school?"
        }
        message={
          confirm
            ? confirm.type === "delete"
              ? `This will permanently remove "${confirm.school.name}" and all associated data. This action cannot be undone.`
              : `"${confirm.school.name}" will lose access until reactivated. Continue?`
            : ""
        }
        confirmLabel={confirm?.type === "delete" ? "Delete" : "Suspend"}
        variant="danger"
        onConfirm={confirmAction}
        onClose={() => setConfirm(null)}
      />
    </div>
  );
}