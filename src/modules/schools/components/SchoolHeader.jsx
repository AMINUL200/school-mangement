import { ArrowLeft, Pencil, Ban, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SchoolStatusBadge from "./SchoolStatusBadge";
import { initials } from "../utils/schoolHelpers";

const planLabel = {
  starter: "Starter",
  standard: "Standard",
  professional: "Professional",
  enterprise: "Enterprise",
};

export default function SchoolHeader({ school, onAction }) {
  const navigate = useNavigate();
  const isSuspended = school.status === "suspended";

  return (
    <div className="card p-6">
      {/* Back */}
      <button
        onClick={() => navigate("/admin/schools")}
        className="btn-ghost btn-sm -ml-2 mb-4 text-[var(--muted)]"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to schools
      </button>

      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        {/* Identity */}
        <div className="flex items-start gap-4 min-w-0">
          <div className="avatar avatar-lg bg-primary-100 text-primary-700 shrink-0">
            {initials(school.name)}
          </div>
          <div className="min-w-0">
            <h1 className="text-2xl font-bold tracking-tight truncate">
              {school.name}
            </h1>
            <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm text-[var(--muted)]">
              <span className="font-mono">{school.code}</span>
              <span>•</span>
              <span>{school.board}</span>
              <span>•</span>
              <span>{school.city}, {school.state}</span>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-2">
              <SchoolStatusBadge status={school.status} />
              <span className="badge-primary">
                {planLabel[school.plan] || school.plan} Plan
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-2 shrink-0">
          <button
            className="btn btn-secondary"
            onClick={() => onAction?.("edit", school)}
          >
            <Pencil className="h-4 w-4" />
            Edit School
          </button>

          {isSuspended ? (
            <button
              className="btn btn-success"
              onClick={() => onAction?.("activate", school)}
            >
              <CheckCircle2 className="h-4 w-4" />
              Activate
            </button>
          ) : (
            <button
              className="btn btn-danger"
              onClick={() => onAction?.("suspend", school)}
            >
              <Ban className="h-4 w-4" />
              Suspend School
            </button>
          )}
        </div>
      </div>
    </div>
  );
}