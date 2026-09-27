import { Navigate, Route } from "react-router-dom";

import SchoolLayout from "../layouts/SchoolLayout";

import SchoolAdminDashboard
  from "../pages/school/dashboard/SchoolAdminDashboard";

export default function SchoolRoutes() {
  return (
    <Route path="/school" element={<SchoolLayout />}>

      <Route
        index
        element={<Navigate to="dashboard" replace />}
      />

      <Route
        path="dashboard"
        element={<SchoolAdminDashboard />}
      />

      <Route
        path="profile"
        element={
          <div className="p-6">
            School Profile
          </div>
        }
      />

    </Route>
  );
}