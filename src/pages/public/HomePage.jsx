import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Users,
  BookOpen,
  BarChart3,
  CalendarCheck,
  Wallet,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Student & Staff",
    desc: "Complete profiles, admissions, and lifecycle management.",
  },
  {
    icon: CalendarCheck,
    title: "Attendance",
    desc: "Daily, subject-wise, and monthly tracking in seconds.",
  },
  {
    icon: BookOpen,
    title: "Exams & Marks",
    desc: "Dynamic exams, grading, and printable report cards.",
  },
  {
    icon: Wallet,
    title: "Fees & Payments",
    desc: "Structures, installments, receipts, and reminders.",
  },
  {
    icon: BarChart3,
    title: "Reports",
    desc: "Insightful dashboards for admins, teachers, and parents.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Role-based",
    desc: "Granular permissions with full audit logging.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      {/* ---------- Header ---------- */}
      <header className="border-b border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur sticky top-0 z-30">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary text-white grid place-items-center font-bold">
              N
            </div>
            <span className="font-semibold tracking-tight">Nexus ERP</span>
          </div>

          <Link to="/login" className="btn btn-primary btn-sm">
            Login
          </Link>
        </div>
      </header>

      {/* ---------- Hero ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <span className="badge badge-primary">School Management SaaS</span>

        <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
          Run your school <span className="text-primary">smarter</span>,
          not harder.
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base text-[var(--muted)]">
          One platform for academics, attendance, exams, fees, HR, library,
          transport, and communication — built for CBSE, ICSE, State, and
          International schools.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/login" className="btn btn-primary btn-lg">
            Login to your school
          </Link>
          <a href="#features" className="btn btn-secondary btn-lg">
            Explore features
          </a>
        </div>

        <p className="mt-4 text-xs text-[var(--muted)]">
          Trusted by administrators, principals, teachers, and parents.
        </p>
      </section>

      {/* ---------- Features ---------- */}
      <section id="features" className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card card-hover p-6">
              <div className="h-10 w-10 rounded-lg bg-primary-50 text-primary grid place-items-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="card overflow-hidden bg-secondary text-white">
          <div className="flex flex-col items-start gap-6 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div>
              <h2 className="text-2xl font-semibold">
                Ready to get started?
              </h2>
              <p className="mt-1 text-sm text-slate-300">
                Sign in with your school account to continue.
              </p>
            </div>
            <Link
              to="/login"
              className="btn btn-lg bg-white text-secondary hover:bg-slate-100"
            >
              Login now
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col items-center justify-between gap-2 text-sm text-[var(--muted)] sm:flex-row">
          <p>© {new Date().getFullYear()} Nexus School ERP</p>
          <p>Built for modern schools.</p>
        </div>
      </footer>
    </div>
  );
}