export default function TabPlaceholder({ title, description }) {
  return (
    <div className="card p-12 text-center">
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-[var(--muted)]">{description}</p>
    </div>
  );
}