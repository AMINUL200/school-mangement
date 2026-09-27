import { Check, Lock } from "lucide-react";
import { planCatalog } from "../../../../mock/subscriptions";

const MODULE_LABELS = {
  students: "Student Management",
  attendance: "Attendance",
  exams: "Exams & Marks",
  fees: "Fees & Payments",
  library: "Library",
  timetable: "Timetable",
  transport: "Transport",
  hostel: "Hostel",
  hr: "HR",
  payroll: "Payroll",
  accounting: "Accounting",
  online_exam: "Online Exams",
  inventory: "Inventory",
};

const ALL_MODULES = Object.keys(MODULE_LABELS);

export default function IncludedModules({ subscription }) {
  const plan = planCatalog[subscription.plan];
  const included = new Set(plan.modules);

  return (
    <div className="card p-5">
      <h3 className="text-base font-semibold mb-4">Included modules</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4">
        {ALL_MODULES.map((m) => {
          const isOn = included.has(m);
          return (
            <div
              key={m}
              className={`flex items-center gap-2 text-sm ${
                isOn ? "text-[var(--text-soft)]" : "text-[var(--muted-light)]"
              }`}
            >
              {isOn ? (
                <Check className="h-4 w-4 text-success shrink-0" />
              ) : (
                <Lock className="h-4 w-4 text-[var(--muted-light)] shrink-0" />
              )}
              <span>{MODULE_LABELS[m]}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}