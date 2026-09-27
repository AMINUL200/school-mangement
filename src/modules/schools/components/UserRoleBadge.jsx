import { USER_ROLES, USER_ROLE_TONE } from "../constants/userConstants";

export default function UserRoleBadge({ role }) {
  const meta = USER_ROLES[role] || { label: role, tone: "neutral" };
  return <span className={USER_ROLE_TONE[meta.tone]}>{meta.label}</span>;
}