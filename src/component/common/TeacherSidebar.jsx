import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  UserCircle,
  BookOpen,
  Users,
  CalendarCheck,
  Clock,
  ClipboardList,
  PencilLine,
  FileText,
  NotebookPen,
  MonitorCheck,
  HelpCircle,
  Bell,
  Settings,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
} from 'lucide-react'

const SECTIONS = [
  {
    label: 'Overview',
    items: [
      { to: '/teacher/dashboard', label: 'Dashboard', icon: LayoutDashboard },
      { to: '/teacher/profile', label: 'My Profile', icon: UserCircle },
    ],
  },
  {
    label: 'Classroom',
    items: [
      { to: '/teacher/classes', label: 'My Classes', icon: BookOpen },
      { to: '/teacher/students', label: 'My Students', icon: Users },
      { to: '/teacher/attendance', label: 'Attendance', icon: CalendarCheck },
      { to: '/teacher/timetable', label: 'Timetable', icon: Clock },
    ],
  },
  {
    label: 'Examinations',
    items: [
      { to: '/teacher/exams', label: 'Exams', icon: ClipboardList },
      { to: '/teacher/marks', label: 'Marks', icon: PencilLine },
      { to: '/teacher/marksheets', label: 'Marksheets', icon: FileText },
    ],
  },
  {
    label: 'Digital Learning',
    items: [
      { to: '/teacher/homework', label: 'Homework', icon: NotebookPen },
      { to: '/teacher/online-exams', label: 'Online Exams', icon: MonitorCheck },
      { to: '/teacher/question-bank', label: 'Question Bank', icon: HelpCircle },
    ],
  },
  {
    label: 'General',
    items: [
      { to: '/teacher/notifications', label: 'Notifications', icon: Bell },
      { to: '/teacher/settings', label: 'Settings', icon: Settings },
    ],
  },
]

const TeacherSidebar = ({ collapsed, onToggle, mobileOpen, onCloseMobile }) => {
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
                Teacher
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

export default TeacherSidebar