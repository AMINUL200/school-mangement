import { useMemo, useState } from "react";
import { Plus } from "lucide-react";
import UsersStats from "./UsersStats";
import UsersFilters from "./UsersFilters";
import UsersTable from "./UsersTable";
import ConfirmModal from "./ConfirmModal";

export default function SchoolUsersTab({ users = [] }) {
  const [query, setQuery] = useState("");
  const [role, setRole] = useState("all");
  const [status, setStatus] = useState("all");
  const [confirm, setConfirm] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return users.filter((u) => {
      if (role !== "all" && u.role !== role) return false;
      if (status !== "all" && u.status !== status) return false;
      if (!q) return true;
      return (
        u.name.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q) ||
        (u.phone || "").toLowerCase().includes(q)
      );
    });
  }, [users, query, role, status]);

  const reset = () => {
    setQuery("");
    setRole("all");
    setStatus("all");
  };

  const handleAction = (type, user) => {
    if (type === "delete" || type === "deactivate") {
      setConfirm({ type, user });
      return;
    }
    console.log(type, user.id); // ← wire later
  };

  const confirmAction = () => {
    if (!confirm) return;
    console.log(confirm.type, confirm.user.id); // ← wire API later
    setConfirm(null);
  };

  return (
    <div className="space-y-6">
      {/* Header row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold">Users</h2>
          <p className="text-sm text-[var(--muted)]">
            Admins, teachers, accountants, and staff of this school.
          </p>
        </div>
        <button className="btn btn-primary shrink-0">
          <Plus className="h-4 w-4" />
          Invite user
        </button>
      </div>

      {/* Stats */}
      <UsersStats users={users} />

      {/* Filters */}
      <UsersFilters
        query={query} setQuery={setQuery}
        role={role} setRole={setRole}
        status={status} setStatus={setStatus}
        reset={reset}
      />

      {/* Table */}
      <UsersTable users={filtered} onAction={handleAction} />

      {/* Confirm */}
      <ConfirmModal
        open={!!confirm}
        title={
          confirm?.type === "delete"
            ? "Remove user?"
            : "Deactivate user?"
        }
        message={
          confirm
            ? confirm.type === "delete"
              ? `"${confirm.user.name}" will be permanently removed from this school. This cannot be undone.`
              : `"${confirm.user.name}" will no longer be able to sign in. Continue?`
            : ""
        }
        confirmLabel={confirm?.type === "delete" ? "Remove" : "Deactivate"}
        variant="danger"
        onConfirm={confirmAction}
        onClose={() => setConfirm(null)}
      />
    </div>
  );
}