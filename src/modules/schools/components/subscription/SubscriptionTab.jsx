import { useState } from "react";
import CurrentPlanCard from "./CurrentPlanCard";
import UsageCard from "./UsageCard";
import IncludedModules from "./IncludedModules";
import InvoiceHistory from "./InvoiceHistory";
import BillingSummary from "./BillingSummary";
import ChangePlanModal from "./ChangePlanModal";
import ConfirmModal from "../ConfirmModal";

export default function SubscriptionTab({ subscription, invoices = [] }) {
  const [changePlanOpen, setChangePlanOpen] = useState(false);
  const [confirmCancel, setConfirmCancel] = useState(false);

  const handleAction = (type) => {
    if (type === "change_plan") setChangePlanOpen(true);
    if (type === "cancel")      setConfirmCancel(true);
  };

  return (
    <div className="space-y-6">
      {/* Hero */}
      <CurrentPlanCard subscription={subscription} onAction={handleAction} />

      {/* Usage + modules */}
      <div className="grid gap-6 lg:grid-cols-2">
        <UsageCard subscription={subscription} />
        <IncludedModules subscription={subscription} />
      </div>

      {/* Summary + invoices */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <InvoiceHistory invoices={invoices} />
        </div>
        <BillingSummary invoices={invoices} subscription={subscription} />
      </div>

      {/* Modals */}
      <ChangePlanModal
        open={changePlanOpen}
        onClose={() => setChangePlanOpen(false)}
        currentPlan={subscription.plan}
        onSubmit={(newPlan) => {
          console.log("change plan →", newPlan);
          setChangePlanOpen(false);
        }}
      />

      <ConfirmModal
        open={confirmCancel}
        title="Cancel subscription?"
        message="The school will lose access to all premium modules at the end of the current period. Continue?"
        confirmLabel="Cancel subscription"
        variant="danger"
        onConfirm={() => {
          console.log("cancel subscription");
          setConfirmCancel(false);
        }}
        onClose={() => setConfirmCancel(false)}
      />
    </div>
  );
}