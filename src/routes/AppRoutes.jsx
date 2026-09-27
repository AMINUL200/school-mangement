import { Navigate, Route, Routes } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import AdminRoutes from "./AdminRoutes";
import SchoolRoutes from "./SchoolRoutes";
import TeacherRoutes from "./TeacherRoutes";
import LibrarianRoutes from "./LibrarianRoutes";
import AccountantRoutes from "./AccountantRoutes";
import StudentRoutes from "./StudentRoutes";
import ParentRoutes from "./ParentRoutes";



export default function AppRoutes() {
  return (
    <Routes>

      {/* Public */}
      {PublicRoutes()}

      {/* Super Admin */}
      {AdminRoutes()}

      {/* School Admin */}
      {SchoolRoutes()}

      {/* Teacher */}
      {TeacherRoutes()}

      {/* Librarian */}
      {LibrarianRoutes()}

      {/* Accountant */}
      {AccountantRoutes()}

      {/* Student */}
      {StudentRoutes()}

      {/* Parent */}
      {ParentRoutes()}



      {/* Fallback */}
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />

    </Routes>
  );
}