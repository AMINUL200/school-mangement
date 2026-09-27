import { useState } from "react";
import { useParams } from "react-router-dom";
import useSchool from "../../../modules/schools/hooks/useSchool";
import SchoolHeader from "../../../modules/schools/components/SchoolHeader";
import SchoolTabs from "../../../modules/schools/components/SchoolTabs";
import OverviewStats from "../../../modules/schools/components/OverviewStats";
import SchoolInfoCard from "../../../modules/schools/components/SchoolInfoCard";
import RecentActivity from "../../../modules/schools/components/RecentActivity";
import TabPlaceholder from "../../../modules/schools/components/TabPlaceholder";
import ConfirmModal from "../../../modules/schools/components/ConfirmModal";
import { schoolActivity } from "../../../mock/schoolActivity";
import SchoolSubscriptionCard from "../../../modules/schools/components/SchoolSubscriptionCard";

// ------ Student related import
import StudentTable from "../../../modules/students/components/StudentTable";
import { students as allStudents } from "../../../mock/students";

// ------ user related import
import SchoolUsersTab from "../../../modules/schools/components/SchoolUsersTab";
import { schoolUsers } from "../../../mock/schoolUsers";

// ------- subscription related import
import SubscriptionTab from "../../../modules/schools/components/subscription/SubscriptionTab";
import {
  subscriptionBySchoolId,
  invoicesBySchoolId,
} from "../../../mock/subscriptions";

export default function SchoolDetailsPage() {
  const { schoolId } = useParams();
  const { school, loading } = useSchool(schoolId);
  const [tab, setTab] = useState("overview");
  const [confirm, setConfirm] = useState(null);

  // ---- Loading ----
  if (loading) {
    return (
      <div className="space-y-6">
        <div className="skeleton h-40 w-full rounded-xl" />
        <div className="skeleton h-12 w-full rounded-lg" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="skeleton h-28 rounded-xl" />
          ))}
        </div>
      </div>
    );
  }

  // ---- Not found ----
  if (!school) {
    return (
      <div className="card p-12 text-center">
        <h2 className="text-lg font-semibold">School not found</h2>
        <p className="mt-1 text-sm text-[var(--muted)]">
          The school with ID "{schoolId}" doesn't exist.
        </p>
      </div>
    );
  }

  const handleAction = (type) => {
    if (type === "edit") console.log("edit", school.id);
    if (type === "suspend") setConfirm("suspend");
    if (type === "activate") console.log("activate", school.id);
  };

  return (
    <div className="space-y-6">
      <SchoolHeader school={school} onAction={handleAction} />
      <SchoolTabs active={tab} onChange={setTab} />

      {/* ---------- Overview ---------- */}
      {tab === "overview" && (
        <div className="space-y-6">
          <OverviewStats school={school} />

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <SchoolInfoCard school={school} />
            </div>
            <div className="space-y-6">
              <SchoolSubscriptionCard school={school} />
              <RecentActivity items={schoolActivity} />
            </div>
          </div>
        </div>
      )}

      {/* ---------- Other tabs (placeholders) ---------- */}
      {tab === "students" && (
        <StudentTable
          students={allStudents}
          title="Students in this school"
          columns={[
            "name",
            "admission",
            "class",
            "section",
            "guardian",
            "attendance",
            "fees",
            "status",
          ]}
          showSearch
          showFilters
          showExport
          actions={["view", "edit"]}
          onAction={(type, s) => console.log(type, s.id)}
        />
      )}
      {tab === "users" && <SchoolUsersTab users={schoolUsers} />}

      {tab === "subscription" && (
        <SubscriptionTab
          subscription={
            subscriptionBySchoolId[school.id] || {
              plan: school.plan,
              billingCycle: "monthly",
              status: "active",
              startedAt: school.joinedAt,
              currentPeriodStart: "2026-09-01",
              currentPeriodEnd: "2026-09-30",
              renewalAt: school.renewalAt,
              nextInvoiceAt: "2026-10-01",
              amount: school.monthlyRevenue,
              usage: {
                students: school.students,
                teachers: school.teachers,
                storageUsed: "0 GB",
              },
            }
          }
          invoices={invoicesBySchoolId[school.id] || []}
        />
      )}
      {tab === "payments" && (
        <TabPlaceholder
          title="Payments"
          description="Invoice and payment records will appear here."
        />
      )}
      {tab === "activity" && <RecentActivity items={schoolActivity} />}
      {tab === "settings" && (
        <TabPlaceholder
          title="Settings"
          description="School-level platform settings will appear here."
        />
      )}

      {/* ---------- Confirm ---------- */}
      <ConfirmModal
        open={!!confirm}
        title="Suspend school?"
        message={`"${school.name}" will lose access until reactivated. Continue?`}
        confirmLabel="Suspend"
        variant="danger"
        onConfirm={() => {
          console.log("suspend", school.id);
          setConfirm(null);
        }}
        onClose={() => setConfirm(null)}
      />
    </div>
  );
}
