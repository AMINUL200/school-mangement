import { SCHOOL_STATUS_META } from "../constants/schoolConstants";

const toneClass = {
  success: "badge-success",
  info:    "badge-info",
  danger:  "badge-danger",
  neutral: "badge-neutral",
};

export default function SchoolStatusBadge({ status }) {
  const meta = SCHOOL_STATUS_META[status] || SCHOOL_STATUS_META.inactive;
  return <span className={toneClass[meta.tone]}>{meta.label}</span>;
}