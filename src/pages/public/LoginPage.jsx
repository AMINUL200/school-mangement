import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { LogIn, AlertCircle, Loader2 } from "lucide-react";
import CustomInput from "../../component/form/CustomInput";

const DEMO_PASSWORD = "password123";

const roleRoutes = {
  super_admin: "/admin/dashboard",
  school_admin: "/school/dashboard",
  principal: "/school/dashboard",
  vice_principal: "/school/dashboard",
  accountant: "/school/dashboard",
  librarian: "/school/dashboard",
  transport_manager: "/school/dashboard",
  hostel_warden: "/school/dashboard",
  hr_manager: "/school/dashboard",
  staff: "/school/dashboard",
  teacher: "/teacher/dashboard",
  student: "/student/dashboard",
  parent: "/parent/dashboard",
};

const demoAccounts = [
  { role: "super_admin", label: "Super Admin",  email: "superadmin@nexus.edu" },
  { role: "school_admin", label: "School Admin", email: "admin@nexus.edu" },
  { role: "principal",    label: "Principal",    email: "principal@nexus.edu" },
  { role: "teacher",      label: "Teacher",      email: "teacher@nexus.edu" },
  { role: "accountant",   label: "Accountant",   email: "accountant@nexus.edu" },
  { role: "librarian",    label: "Librarian",    email: "librarian@nexus.edu" },
  { role: "student",      label: "Student",      email: "student@nexus.edu" },
  { role: "parent",       label: "Parent",       email: "parent@nexus.edu" },
];

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const from = location.state?.from?.pathname || null;

  // Login by role — direct, no API
  const loginAsRole = (role, demoEmail = "") => {
    setError("");
    setLoading(true);

    // Save fake session so refresh keeps you logged in
    localStorage.setItem(
      "nexus-auth",
      JSON.stringify({
        token: `mock.${btoa(role)}`,
        role,
        user: { email: demoEmail, role },
      })
    );

    // Tiny delay so button shows spinner (feels real)
    setTimeout(() => {
      const target = from || roleRoutes[role] || "/";
      navigate(target, { replace: true });
    }, 400);
  };

  // Manual submit — finds role from typed email
  const handleSubmit = (e) => {
    e.preventDefault();
    const match = demoAccounts.find(
      (a) => a.email.toLowerCase() === email.toLowerCase().trim()
    );

    if (!match) return setError("No account found with that email.");
    if (password !== DEMO_PASSWORD) return setError("Incorrect password.");

    loginAsRole(match.role, match.email);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-[var(--background)]">
      {/* ---------- Left: Brand panel ---------- */}
      <div className="hidden lg:flex flex-col justify-between bg-secondary text-white p-12 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary-500/30 blur-3xl" />

        <div className="relative flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-primary text-white grid place-items-center font-bold">
            N
          </div>
          <span className="font-semibold tracking-tight text-lg">
            Nexus School ERP
          </span>
        </div>

        <div className="relative max-w-md">
          <h2 className="text-3xl font-bold leading-tight">
            One login for your entire school.
          </h2>
          <p className="mt-4 text-slate-300 text-sm leading-relaxed">
            Admins, principals, teachers, accountants, librarians, students,
            and parents — everyone signs in here. Your role decides what you
            see.
          </p>

          <ul className="mt-8 space-y-3 text-sm text-slate-300">
            {[
              "Role-based dashboards",
              "Secure, audited access",
              "Works on any device",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-400" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <p className="relative text-xs text-slate-400">
          © {new Date().getFullYear()} Nexus School ERP
        </p>
      </div>

      {/* ---------- Right: Login form ---------- */}
      <div className="flex items-center justify-center p-6 sm:p-10">
        <div className="w-full max-w-md">
          <div className="lg:hidden flex items-center gap-2 mb-8">
            <div className="h-9 w-9 rounded-lg bg-primary text-white grid place-items-center font-bold">
              N
            </div>
            <span className="font-semibold tracking-tight">
              Nexus School ERP
            </span>
          </div>

          <h1 className="text-2xl font-bold tracking-tight">Welcome back</h1>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Sign in to continue to your dashboard.
          </p>

          {error && (
            <div className="mt-6 flex items-start gap-2 rounded-lg border border-danger/30 bg-danger-light px-3.5 py-3 text-sm text-danger-dark">
              <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <CustomInput
              label="Email address"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />

            <CustomInput
              label="Password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-[var(--muted)] select-none cursor-pointer">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary-500/30"
                />
                Remember me
              </label>
              <Link
                to="/forgot-password"
                className="font-medium text-primary hover:text-primary-dark transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full btn-lg"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Signing in…
                </>
              ) : (
                <>
                  <LogIn className="h-4 w-4" />
                  Sign in
                </>
              )}
            </button>
          </form>

          {/* Demo accounts — click to login instantly */}
          {import.meta.env.DEV && (
            <div className="mt-8">
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-[var(--border)]" />
                <span className="text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
                  Demo accounts
                </span>
                <div className="h-px flex-1 bg-[var(--border)]" />
              </div>

              <p className="mt-3 text-xs text-center text-[var(--muted)]">
                Password for all:{" "}
                <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-slate-700">
                  {DEMO_PASSWORD}
                </code>
              </p>

              <div className="mt-4 grid grid-cols-2 gap-2">
                {demoAccounts.map((a) => (
                  <button
                    key={a.role}
                    type="button"
                    onClick={() => loginAsRole(a.role, a.email)}
                    className="btn btn-secondary btn-sm justify-start text-left"
                    disabled={loading}
                  >
                    <span className="truncate">{a.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          <p className="mt-8 text-center text-xs text-[var(--muted)]">
            By signing in you agree to our{" "}
            <a href="#" className="underline hover:text-[var(--text-soft)]">
              Terms
            </a>{" "}
            and{" "}
            <a href="#" className="underline hover:text-[var(--text-soft)]">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}