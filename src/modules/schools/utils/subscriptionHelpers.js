export const formatINR = (n) =>
  "₹" + Number(n || 0).toLocaleString("en-IN");

export const formatDate = (iso) => {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

export const daysBetween = (a, b) => {
  const ms = new Date(b) - new Date(a);
  return Math.ceil(ms / (1000 * 60 * 60 * 24));
};

export const daysUntil = (iso) => daysBetween(new Date(), iso);

export const usagePercent = (used, max) =>
  Math.min(100, Math.round((used / max) * 100));