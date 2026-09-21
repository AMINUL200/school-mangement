import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  Users,
  CalendarCheck,
  PencilLine,
  FileText,
  Clock,
  NotebookPen,
  Library,
  Bus,
  Wallet,
  Bell,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
} from 'lucide-react'

const SECTIONS = [
  {
    label: 'Overview',
    items: [
      { to: '/parent/dashboard', label: 'Dashboard', icon: LayoutDashboard },
      { to: '/parent/children', label: 'My Children', icon: Users },
    ],
  },
  {
    label: 'Academics',
    items: [
      { to: '/parent/attendance', label: 'Attendance', icon: CalendarCheck },
      { to: '/parent/marks', label: 'Marks', icon: PencilLine },
      { to: '/parent/marksheets', label: 'Marksheets', icon: FileText },
      { to: '/parent/timetable', label: 'Timetable', icon: Clock },
      { to: '/parent/homework', label: 'Homework', icon: NotebookPen },
    ],
  },
  {
    label: 'Finance',
    items: [{ to: '/parent/fees', label: 'Fees', icon: Wallet }],
  },
  {
    label: 'Facilities',
    items: [
      { to: '/parent/library', label: 'Library', icon: Library },
      { to: '/parent/transport', label: 'Transport', icon: Bus },
    ],
  },
  {
    label: 'General',
    items: [{ to: '/parent/notifications', label: 'Notifications', icon: Bell }],
  },
]

const ParentSidebar = ({ collapsed, onToggle, mobileOpen, onCloseMobile }) => {
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
                Parent Portal
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

export default ParentSidebar