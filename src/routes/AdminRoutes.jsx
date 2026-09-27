import { Navigate, Route } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";

import SuperAdminDashboard from "../pages/admin/dashboard/SuperAdminDashboard";
import SchoolsPage from "../pages/admin/schools/SchoolsPage";
import SchoolDetailsPage from "../pages/admin/schools/SchoolDetailsPage";

export default function AdminRoutes() {
  return (
    <Route path="/admin" element={<AdminLayout />}>
      <Route index element={<Navigate to="dashboard" replace />} />

      <Route path="dashboard" element={<SuperAdminDashboard />} />

      <Route path="schools" element={<SchoolsPage />} />
      <Route path="schools/:schoolId" element={<SchoolDetailsPage />} />

      <Route
        path="subscriptions"
        element={<div className="p-6">Subscriptions</div>}
      />

      <Route path="plans" element={<div className="p-6">Plans</div>} />

      <Route path="payments" element={<div className="p-6">Payments</div>} />

      <Route path="users" element={<div className="p-6">Users</div>} />

      <Route
        path="audit-logs"
        element={<div className="p-6">Audit Logs</div>}
      />

      <Route path="settings" element={<div className="p-6">Settings</div>} />
    </Route>
  );
}
