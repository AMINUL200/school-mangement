import React, { useEffect, useMemo, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import {
  LayoutDashboard,
  CalendarRange,
  Boxes,
  LayoutGrid,
  BookOpen,
  Users,
  UserRound,
  GraduationCap,
  CalendarCheck,
  Clock,
  ClipboardList,
  PencilLine,
  FileText,
  Wallet,
  CreditCard,
  Calculator,
  Library,
  Bus,
  BedDouble,
  Warehouse,
  Briefcase,
  Banknote,
  CalendarOff,
  NotebookPen,
  MonitorCheck,
  HelpCircle,
  Award,
  FolderOpen,
  Bell,
  BarChart3,
  ScrollText,
  Settings,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Search,
  School,
} from 'lucide-react'

const GROUPS = [
  {
    id: 'academic-setup',
    label: 'Academic Setup',
    icon: CalendarRange,
    items: [
      { to: '/school/academic-sessions', label: 'Academic Sessions', icon: CalendarRange },
      { to: '/school/classes', label: 'Classes', icon: Boxes },
      { to: '/school/sections', label: 'Sections', icon: LayoutGrid },
      { to: '/school/subjects', label: 'Subjects', icon: BookOpen },
    ],
  },
  {
    id: 'people',
    label: 'People',
    icon: Users,
    items: [
      { to: '/school/students', label: 'Students', icon: Users },
      { to: '/school/parents', label: 'Parents', icon: UserRound },
      { to: '/school/teachers', label: 'Teachers', icon: GraduationCap },
    ],
  },
  {
    id: 'attendance-timetable',
    label: 'Attendance & Timetable',
    icon: CalendarCheck,
    items: [
      { to: '/school/attendance', label: 'Attendance', icon: CalendarCheck },
      { to: '/school/timetable', label: 'Timetable', icon: Clock },
    ],
  },
  {
    id: 'examinations',
    label: 'Examinations',
    icon: ClipboardList,
    items: [
      { to: '/school/exams', label: 'Exams', icon: ClipboardList },
      { to: '/school/marks', label: 'Marks', icon: PencilLine },
      { to: '/school/marksheets', label: 'Marksheets', icon: FileText },
    ],
  },
  {
    id: 'finance',
    label: 'Finance',
    icon: Wallet,
    items: [
      { to: '/school/fees', label: 'Fees', icon: Wallet },
      { to: '/school/payments', label: 'Payments', icon: CreditCard },
      { to: '/school/accounting', label: 'Accounting', icon: Calculator },
    ],
  },
  {
    id: 'operations',
    label: 'School Operations',
    icon: Library,
    items: [
      { to: '/school/library', label: 'Library', icon: Library },
      { to: '/school/transport', label: 'Transport', icon: Bus },
      { to: '/school/hostel', label: 'Hostel', icon: BedDouble },
      { to: '/school/inventory', label: 'Inventory', icon: Warehouse },
    ],
  },
  {
    id: 'hr-payroll',
    label: 'HR & Payroll',
    icon: Briefcase,
    items: [
      { to: '/school/hr', label: 'Employees', icon: Briefcase },
      { to: '/school/payroll', label: 'Payroll', icon: Banknote },
      { to: '/school/leave', label: 'Leave', icon: CalendarOff },
    ],
  },
  {
    id: 'digital-learning',
    label: 'Digital Learning',
    icon: NotebookPen,
    items: [
      { to: '/school/homework', label: 'Homework', icon: NotebookPen },
      { to: '/school/online-exams', label: 'Online Exams', icon: MonitorCheck },
      { to: '/school/question-bank', label: 'Question Bank', icon: HelpCircle },
    ],
  },
  {
    id: 'documents',
    label: 'Documents',
    icon: FolderOpen,
    items: [
      { to: '/school/certificates', label: 'Certificates', icon: Award },
      { to: '/school/documents', label: 'Documents', icon: FolderOpen },
    ],
  },
  {
    id: 'communication',
    label: 'Communication',
    icon: Bell,
    items: [{ to: '/school/notifications', label: 'Notifications', icon: Bell }],
  },
  {
    id: 'reports-admin',
    label: 'Reports & Admin',
    icon: BarChart3,
    items: [
      { to: '/school/reports', label: 'Reports', icon: BarChart3 },
      { to: '/school/audit-logs', label: 'Audit Logs', icon: ScrollText },
      { to: '/school/settings', label: 'Settings', icon: Settings },
    ],
  },
]

const SchoolSidebar = ({ collapsed, onToggle, mobileOpen, onCloseMobile }) => {
  const location = useLocation()
  const [query, setQuery] = useState('')
  const [openGroups, setOpenGroups] = useState(() => new Set())

  // Auto-expand whichever group contains the current route
  useEffect(() => {
    const active = GROUPS.find((g) => g.items.some((i) => location.pathname.startsWith(i.to)))
    if (active) setOpenGroups((prev) => new Set(prev).add(active.id))
  }, [location.pathname])

  const filteredGroups = useMemo(() => {
    if (!query.trim()) return GROUPS
    const q = query.toLowerCase()
    return GROUPS.map((g) => ({
      ...g,
      items: g.items.filter((i) => i.label.toLowerCase().includes(q)),
    })).filter((g) => g.items.length > 0)
  }, [query])

  const toggleGroup = (id) => {
    setOpenGroups((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const expandTo = (groupId) => {
    if (collapsed) onToggle()
    setOpenGroups((prev) => new Set(prev).add(groupId))
  }

  return (
    <>
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={onCloseMobile} aria-hidden="true" />
      )}

      <aside
        className={`sidebar fixed left-0 top-0 z-50 flex h-screen flex-col transition-all duration-300 ease-in-out
          ${collapsed ? 'w-[76px]' : 'w-72'}
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
            <School className="h-5 w-5 text-white" />
          </div>
          {!collapsed && (
            <div className="overflow-hidden">
              <p className="truncate text-sm font-bold text-white">Greenfield Academy</p>
              <p className="truncate text-[11px]" style={{ color: 'var(--sidebar-text-muted)' }}>
                School Admin
              </p>
            </div>
          )}
        </div>

        {/* Quick filter */}
        {!collapsed && (
          <div className="shrink-0 px-3 pt-3">
            <div className="relative">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2"
                style={{ color: 'var(--sidebar-text-muted)' }}
              />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Filter menu..."
                className="w-full rounded-lg border-0 py-2 pl-8 pr-3 text-xs outline-none placeholder:text-[11px]"
                style={{ background: 'var(--sidebar-hover)', color: 'var(--sidebar-text)' }}
              />
            </div>
          </div>
        )}

        {/* Nav */}
        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-3">
          {/* Dashboard — top-level, ungrouped */}
          <NavLink
            to="/school/dashboard"
            onClick={onCloseMobile}
            title={collapsed ? 'Dashboard' : undefined}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? 'sidebar-link-active' : ''} ${collapsed ? 'justify-center px-0' : ''}`
            }
          >
            <LayoutDashboard className="h-[18px] w-[18px] shrink-0" />
            {!collapsed && <span className="truncate">Dashboard</span>}
          </NavLink>

          <div className="my-2 h-px" style={{ background: 'var(--sidebar-border)' }} />

          {filteredGroups.map((group) => {
            const GroupIcon = group.icon
            const isOpen = openGroups.has(group.id) || Boolean(query.trim())

            if (collapsed) {
              return (
                <button
                  key={group.id}
                  title={group.label}
                  onClick={() => expandTo(group.id)}
                  className="sidebar-link w-full justify-center px-0"
                >
                  <GroupIcon className="h-[18px] w-[18px] shrink-0" />
                </button>
              )
            }

            return (
              <div key={group.id}>
                <button
                  onClick={() => toggleGroup(group.id)}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-wide transition-colors"
                  style={{ color: 'var(--sidebar-text-muted)' }}
                >
                  <GroupIcon className="h-4 w-4 shrink-0" />
                  <span className="flex-1 text-left">{group.label}</span>
                  <ChevronDown
                    className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {isOpen && (
                  <div className="mt-0.5 space-y-0.5 pl-4">
                    {group.items.map(({ to, label, icon: Icon }) => (
                      <NavLink
                        key={to}
                        to={to}
                        onClick={onCloseMobile}
                        className={({ isActive }) => `sidebar-link ${isActive ? 'sidebar-link-active' : ''}`}
                      >
                        <Icon className="h-4 w-4 shrink-0" />
                        <span className="truncate">{label}</span>
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
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

export default SchoolSidebar