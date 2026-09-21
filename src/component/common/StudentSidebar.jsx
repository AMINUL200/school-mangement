import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  UserCircle,
  CalendarCheck,
  Clock,
  PencilLine,
  FileText,
  NotebookPen,
  MonitorCheck,
  Wallet,
  Library,
  Bus,
  BedDouble,
  Award,
  FolderOpen,
  Bell,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
} from 'lucide-react'

const SECTIONS = [
  {
    label: 'Overview',
    items: [
      { to: '/student/dashboard', label: 'Dashboard', icon: LayoutDashboard },
      { to: '/student/profile', label: 'My Profile', icon: UserCircle },
    ],
  },
  {
    label: 'Academics',
    items: [
      { to: '/student/attendance', label: 'Attendance', icon: CalendarCheck },
      { to: '/student/timetable', label: 'Timetable', icon: Clock },
      { to: '/student/marks', label: 'Marks', icon: PencilLine },
      { to: '/student/marksheets', label: 'Marksheets', icon: FileText },
      { to: '/student/homework', label: 'Homework', icon: NotebookPen },
      { to: '/student/online-exams', label: 'Online Exams', icon: MonitorCheck },
    ],
  },
  {
    label: 'Finance',
    items: [{ to: '/student/fees', label: 'Fees', icon: Wallet }],
  },
  {
    label: 'Facilities',
    items: [
      { to: '/student/library', label: 'Library', icon: Library },
      { to: '/student/transport', label: 'Transport', icon: Bus },
      { to: '/student/hostel', label: 'Hostel', icon: BedDouble },
    ],
  },
  {
    label: 'Documents',
    items: [
      { to: '/student/certificates', label: 'Certificates', icon: Award },
      { to: '/student/documents', label: 'Documents', icon: FolderOpen },
    ],
  },
  {
    label: 'General',
    items: [{ to: '/student/notifications', label: 'Notifications', icon: Bell }],
  },
]

const StudentSidebar = ({ collapsed, onToggle, mobileOpen, onCloseMobile }) => {
  return (
    <>
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={onCloseMobile} aria-hidden="true" />
      )}

      <aside
        className={`sidebar fixed left-0 top-0 z-50 flex h-screen flex-col transition-all duration-300 ease-in-out
          ${collapsed ? 'w-[76px]' : 'w-64'}
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
        style={{ borderRight: '1px solid var(--sidebar-border)' }}
      >
        {/* Logo */}
        <div
          className="flex h-16 shrink-0 items-center gap-3 px-4"
          style={{ borderBottom: '1px solid var(--sidebar-border)' }}
        >
          <div
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
            style={{ background: 'var(--primary-600)' }}
          >
            <GraduationCap className="h-5 w-5 text-white" />
          </div>
          {!collapsed && (
            <div className="overflow-hidden">
              <p className="truncate text-sm font-bold text-white">Greenfield Academy</p>
              <p className="truncate text-[11px]" style={{ color: 'var(--sidebar-text-muted)' }}>
                Class 9-A · Student
              </p>
            </div>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 space-y-4 overflow-y-auto px-3 py-4">
          {SECTIONS.map((section) => (
            <div key={section.label}>
              {!collapsed && (
                <p
                  className="mb-1.5 px-3 text-[11px] font-semibold uppercase tracking-wide"
                  style={{ color: 'var(--sidebar-text-muted)' }}
                >
                  {section.label}
                </p>
              )}
              <div className="space-y-1">
                {section.items.map(({ to, label, icon: Icon }) => (
                  <NavLink
                    key={to}
                    to={to}
                    onClick={onCloseMobile}
                    title={collapsed ? label : undefined}
                    className={({ isActive }) =>
                      `sidebar-link ${isActive ? 'sidebar-link-active' : ''} ${
                        collapsed ? 'justify-center px-0' : ''
                      }`
                    }
                  >
                    <Icon className="h-[18px] w-[18px] shrink-0" />
                    {!collapsed && <span className="truncate">{label}</span>}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* Collapse toggle — desktop only */}
        <button
          onClick={onToggle}
          className="mx-3 mb-4 hidden h-9 shrink-0 items-center justify-center gap-2 rounded-lg text-xs font-medium transition-colors lg:flex"
          style={{ background: 'var(--sidebar-hover)', color: 'var(--sidebar-text)' }}
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <>
              <ChevronLeft className="h-4 w-4" />
              Collapse
            </>
          )}
        </button>
      </aside>
    </>
  )
}

export default StudentSidebar