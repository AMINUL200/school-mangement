import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/public/HomePage";
import LoginPage from "../pages/public/LoginPage";
import AdminLayout from "../layouts/AdminLayout";
import SchoolLayout from "../layouts/SchoolLayout";
import TeacherLayout from "../layouts/TeacherLayout";
import StudentLayout from "../layouts/StudentLayout";
import ParentLayout from "../layouts/ParentLayout";
import SchoolAdminDashboard from "../pages/school/dashboard/SchoolAdminDashboard";
import TeacherDashboard from "../pages/teacher/dashboard/TeacherDashboard";
import StudentDashboard from "../pages/student/dashboard/StudentDashboard";
import ParentDashboard from "../pages/parent/dashboard/ParentDashboard";
import SuperAdminDashboard from "../pages/admin/dashboard/SuperAdminDashboard";
// import AdminDashboard from "../pages/admin/Dashboard";
// import ProtectedRoute from "./ProtectedRoute";
// import RoleRoute from "./RoleRoute";

export default function AppRoutes() {
  return (
    <Routes>
      {/* ---------- Public ---------- */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* ---------- Admin Route Start ---------- */}
      <Route
        path="/admin"
        element={
          // <ProtectedRoute>
          //   <RoleRoute allow={["super_admin"]}>
              <AdminLayout />
          //   </RoleRoute>
          // </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<SuperAdminDashboard />} />
        <Route path="schools" element={<div className="p-6">Schools</div>} />
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

      {/* -----------Admin Route End ----------- */}

      {/* ---------- School Route Start ---------- */}
      <Route
        path="/school"
        element={
          <SchoolLayout />
        }
      >
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<SchoolAdminDashboard />} />
        <Route path="profile" element={<div className="p-6">School Profile</div>} />
      </Route>
      {/* ---------- School Route End ---------- */}

      {/* ---------- Teacher Route Start ---------- */}
      <Route
        path="/teacher"
        element={
          <TeacherLayout />
        }
      >
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<TeacherDashboard />} />
        <Route path="profile" element={<div className="p-6">Teacher Profile</div>} />
      </Route>
      {/* ---------- Teacher Route End ---------- */}

      {/* ---------- Student Route Start ---------- */}
      <Route
        path="/student"
        element={
          <StudentLayout />
        }
      >
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<StudentDashboard />} />
        <Route path="profile" element={<div className="p-6">Student Profile</div>} />
      </Route>
      {/* ---------- Student Route End ---------- */}

      {/* ---------- Parent Route Start ---------- */}
      <Route
        path="/parent"
        element={
          <ParentLayout />
        }
      >
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<ParentDashboard />} />
        <Route path="profile" element={<div className="p-6">Parent Profile</div>} />
      </Route>
      {/* ---------- Parent Route End ---------- */}

      {/* ---------- Fallback ---------- */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}