import { USER_STATUS } from "../constants/userConstants";

export default function UserStatusBadge({ status }) {
  const meta = USER_STATUS[status] || USER_STATUS.inactive;
  return <span className={meta.cls}>{meta.label}</span>;
}