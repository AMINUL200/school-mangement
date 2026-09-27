export const formatNumber = (n) =>
  typeof n === "number" ? n.toLocaleString("en-IN") : n;

export const formatDate = (iso) => {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

export const initials = (name = "") =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");

export const matchesQuery = (school, q) => {
  if (!q) return true;
  const s = q.toLowerCase();
  return (
    school.name.toLowerCase().includes(s) ||
    school.code.toLowerCase().includes(s) ||
    school.adminEmail.toLowerCase().includes(s) ||
    school.city.toLowerCase().includes(s)
  );
};