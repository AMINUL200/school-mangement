import React from "react";
import { Navigate, Route } from "react-router-dom";

import StudentLayout from "../layouts/StudentLayout";

import StudentDashboard from "../pages/student/dashboard/StudentDashboard";

const StudentRoutes = () => {
  return (
    <Route path="/student" element={<StudentLayout />}>
      {/* Default */}
      <Route
        index
        element={<Navigate to="dashboard" replace />}
      />

      {/* Dashboard */}
      <Route
        path="dashboard"
        element={<StudentDashboard />}
      />

      {/* Profile */}
      <Route
        path="profile"
        element={
          <div className="p-6">
            Student Profile
          </div>
        }
      />

      {/* Attendance */}
      <Route
        path="attendance"
        element={
          <div className="p-6">
            Student Attendance
          </div>
        }
      />

      {/* Timetable */}
      <Route
        path="timetable"
        element={
          <div className="p-6">
            Student Timetable
          </div>
        }
      />

      {/* Marks */}
      <Route
        path="marks"
        element={
          <div className="p-6">
            Student Marks
          </div>
        }
      />

      {/* Marksheets */}
      <Route
        path="marksheets"
        element={
          <div className="p-6">
            Student Marksheets
          </div>
        }
      />

      {/* Fees */}
      <Route
        path="fees"
        element={
          <div className="p-6">
            Student Fees
          </div>
        }
      />

      {/* Library */}
      <Route
        path="library"
        element={
          <div className="p-6">
            Student Library
          </div>
        }
      />

      {/* Transport */}
      <Route
        path="transport"
        element={
          <div className="p-6">
            Student Transport
          </div>
        }
      />

      {/* Hostel */}
      <Route
        path="hostel"
        element={
          <div className="p-6">
            Student Hostel
          </div>
        }
      />

      {/* Homework */}
      <Route
        path="homework"
        element={
          <div className="p-6">
            Student Homework
          </div>
        }
      />

      {/* Online Exams */}
      <Route
        path="online-exams"
        element={
          <div className="p-6">
            Student Online Exams
          </div>
        }
      />

      {/* Certificates */}
      <Route
        path="certificates"
        element={
          <div className="p-6">
            Student Certificates
          </div>
        }
      />

      {/* Documents */}
      <Route
        path="documents"
        element={
          <div className="p-6">
            Student Documents
          </div>
        }
      />

      {/* Notifications */}
      <Route
        path="notifications"
        element={
          <div className="p-6">
            Student Notifications
          </div>
        }
      />

      {/* Settings */}
      <Route
        path="settings"
        element={
          <div className="p-6">
            Student Settings
          </div>
        }
      />
    </Route>
  );
};

export default StudentRoutes;