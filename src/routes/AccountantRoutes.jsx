import { Navigate, Route } from "react-router-dom";

import AccountantLayout from "../layouts/AccountantLayout";

export default function AccountantRoutes() {
  return (
    <Route
      path="/accountant"
      element={<AccountantLayout />}
    >

      <Route
        index
        element={<Navigate to="dashboard" replace />}
      />

      <Route
        path="dashboard"
        element={
          <div className="p-6">
            Accountant Dashboard
          </div>
        }
      />

      {/* Fees */}
      <Route
        path="fees"
        element={
          <div className="p-6">
            Fee Overview
          </div>
        }
      />

      <Route
        path="fees/structures"
        element={
          <div className="p-6">
            Fee Structures
          </div>
        }
      />

      <Route
        path="fees/students"
        element={
          <div className="p-6">
            Student Fees
          </div>
        }
      />

      <Route
        path="payments"
        element={
          <div className="p-6">
            Payments
          </div>
        }
      />

      <Route
        path="receipts"
        element={
          <div className="p-6">
            Receipts
          </div>
        }
      />

      <Route
        path="fees/pending"
        element={
          <div className="p-6">
            Pending Fees
          </div>
        }
      />

      {/* Finance */}
      <Route
        path="expenses"
        element={
          <div className="p-6">
            Expenses
          </div>
        }
      />

      <Route
        path="income"
        element={
          <div className="p-6">
            Income
          </div>
        }
      />

      <Route
        path="transactions"
        element={
          <div className="p-6">
            Transactions
          </div>
        }
      />

      {/* Payroll */}
      <Route
        path="payroll"
        element={
          <div className="p-6">
            Payroll
          </div>
        }
      />

      <Route
        path="salary-slips"
        element={
          <div className="p-6">
            Salary Slips
          </div>
        }
      />

      {/* Reports */}
      <Route
        path="reports"
        element={
          <div className="p-6">
            Financial Reports
          </div>
        }
      />

      <Route
        path="notifications"
        element={
          <div className="p-6">
            Notifications
          </div>
        }
      />

      <Route
        path="settings"
        element={
          <div className="p-6">
            Accountant Settings
          </div>
        }
      />

    </Route>
  );
}