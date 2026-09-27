import { Navigate, Route } from "react-router-dom";

import LibraryLayout from "../layouts/LibraryLayout";

export default function LibrarianRoutes() {
  return (
    <Route path="/library" element={<LibraryLayout />}>

      <Route
        index
        element={<Navigate to="dashboard" replace />}
      />

      <Route
        path="dashboard"
        element={
          <div className="p-6">
            Library Dashboard
          </div>
        }
      />

      {/* Books */}
      <Route
        path="books"
        element={
          <div className="p-6">
            Books
          </div>
        }
      />

      <Route
        path="books/categories"
        element={
          <div className="p-6">
            Categories
          </div>
        }
      />

      <Route
        path="books/authors"
        element={
          <div className="p-6">
            Authors
          </div>
        }
      />

      <Route
        path="books/publishers"
        element={
          <div className="p-6">
            Publishers
          </div>
        }
      />

      <Route
        path="books/shelves"
        element={
          <div className="p-6">
            Shelves
          </div>
        }
      />

      {/* Circulation */}
      <Route
        path="circulation/issue"
        element={
          <div className="p-6">
            Issue Books
          </div>
        }
      />

      <Route
        path="circulation/returns"
        element={
          <div className="p-6">
            Return Books
          </div>
        }
      />

      <Route
        path="circulation/renewals"
        element={
          <div className="p-6">
            Renewals
          </div>
        }
      />

      <Route
        path="circulation/overdue"
        element={
          <div className="p-6">
            Overdue Books
          </div>
        }
      />

      {/* Members */}
      <Route
        path="members/students"
        element={
          <div className="p-6">
            Library Students
          </div>
        }
      />

      <Route
        path="members/teachers"
        element={
          <div className="p-6">
            Library Teachers
          </div>
        }
      />

      <Route
        path="members/staff"
        element={
          <div className="p-6">
            Library Staff
          </div>
        }
      />

      {/* Finance */}
      <Route
        path="fines"
        element={
          <div className="p-6">
            Fines
          </div>
        }
      />

      {/* Reports */}
      <Route
        path="reports"
        element={
          <div className="p-6">
            Library Reports
          </div>
        }
      />

      {/* Notifications */}
      <Route
        path="notifications"
        element={
          <div className="p-6">
            Notifications
          </div>
        }
      />

      {/* Settings */}
      <Route
        path="settings"
        element={
          <div className="p-6">
            Library Settings
          </div>
        }
      />

    </Route>
  );
}