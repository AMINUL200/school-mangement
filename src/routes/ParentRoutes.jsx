import React from "react";
import { Navigate, Route } from "react-router-dom";

import ParentLayout from "../layouts/ParentLayout";

import ParentDashboard from "../pages/parent/dashboard/ParentDashboard";

const ParentRoutes = () => {
  return (
    <Route path="/parent" element={<ParentLayout />}>
      {/* Default */}
      <Route
        index
        element={<Navigate to="dashboard" replace />}
      />

      {/* Dashboard */}
      <Route
        path="dashboard"
        element={<ParentDashboard />}
      />

      {/* Profile */}
      <Route
        path="profile"
        element={
          <div className="p-6">
            Parent Profile
          </div>
        }
      />

      {/* Children */}
      <Route
        path="children"
        element={
          <div className="p-6">
            My Children
          </div>
        }
      />

      {/* Attendance */}
      <Route
        path="attendance"
        element={
          <div className="p-6">
            Children Attendance
          </div>
        }
      />

      {/* Timetable */}
      <Route
        path="timetable"
        element={
          <div className="p-6">
            Children Timetable
          </div>
        }
      />

      {/* Marks */}
      <Route
        path="marks"
        element={
          <div className="p-6">
            Children Marks
          </div>
        }
      />

      {/* Marksheets */}
      <Route
        path="marksheets"
        element={
          <div className="p-6">
            Children Marksheets
          </div>
        }
      />

      {/* Fees */}
      <Route
        path="fees"
        element={
          <div className="p-6">
            Children Fees
          </div>
        }
      />

      {/* Library */}
      <Route
        path="library"
        element={
          <div className="p-6">
            Children Library
          </div>
        }
      />

      {/* Transport */}
      <Route
        path="transport"
        element={
          <div className="p-6">
            Children Transport
          </div>
        }
      />

      {/* Hostel */}
      <Route
        path="hostel"
        element={
          <div className="p-6">
            Children Hostel
          </div>
        }
      />

      {/* Homework */}
      <Route
        path="homework"
        element={
          <div className="p-6">
            Children Homework
          </div>
        }
      />

      {/* Online Exams */}
      <Route
        path="online-exams"
        element={
          <div className="p-6">
            Children Online Exams
          </div>
        }
      />

      {/* Certificates */}
      <Route
        path="certificates"
        element={
          <div className="p-6">
            Children Certificates
          </div>
        }
      />

      {/* Documents */}
      <Route
        path="documents"
        element={
          <div className="p-6">
            Children Documents
          </div>
        }
      />

      {/* Notifications */}
      <Route
        path="notifications"
        element={
          <div className="p-6">
            Parent Notifications
          </div>
        }
      />

      {/* Settings */}
      <Route
        path="settings"
        element={
          <div className="p-6">
            Parent Settings
          </div>
        }
      />
    </Route>
  );
};

export default ParentRoutes;