import { AlertTriangle, X } from "lucide-react";

export default function ConfirmModal({
  open, title, message, confirmLabel = "Confirm",
  variant = "danger", onConfirm, onClose,
}) {
  if (!open) return null;

  const btnClass = variant === "danger" ? "btn-danger" : "btn-primary";

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal max-w-md" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="text-base font-semibold">{title}</h3>
          <button onClick={onClose} className="btn-ghost btn-icon">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="modal-body flex gap-3">
          {variant === "danger" && (
            <div className="h-10 w-10 shrink-0 rounded-lg bg-danger-light text-danger-dark grid place-items-center">
              <AlertTriangle className="h-5 w-5" />
            </div>
          )}
          <p className="text-sm text-[var(--text-soft)]">{message}</p>
        </div>

        <div className="modal-footer">
          <button onClick={onClose} className="btn btn-secondary">
            Cancel
          </button>
          <button onClick={onConfirm} className={`btn ${btnClass}`}>
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}