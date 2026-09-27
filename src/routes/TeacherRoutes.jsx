import { Navigate, Route } from "react-router-dom";

import TeacherLayout from "../layouts/TeacherLayout";

import TeacherDashboard
  from "../pages/teacher/dashboard/TeacherDashboard";

export default function TeacherRoutes() {
  return (
    <Route path="/teacher" element={<TeacherLayout />}>

      <Route
        index
        element={<Navigate to="dashboard" replace />}
      />

      <Route
        path="dashboard"
        element={<TeacherDashboard />}
      />

      <Route
        path="profile"
        element={
          <div className="p-6">
            Teacher Profile
          </div>
        }
      />

    </Route>
  );
}