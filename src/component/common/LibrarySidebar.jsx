import React, { useEffect, useMemo, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import {
  LayoutDashboard,
  BookOpen,
  Tags,
  PenTool,
  Building2,
  Rows3,
  ArrowLeftRight,
  Undo2,
  RotateCw,
  AlertTriangle,
  GraduationCap,
  Presentation,
  UserRound,
  IndianRupee,
  History,
  BarChart3,
  Bell,
  Settings,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Search,
  Library as LibraryIcon,
} from 'lucide-react'

const GROUPS = [
  {
    id: 'library-management',
    label: 'Library Management',
    icon: BookOpen,
    items: [
      { to: '/library/books', label: 'Books', icon: BookOpen },
      { to: '/library/categories', label: 'Categories', icon: Tags },
      { to: '/library/authors', label: 'Authors', icon: PenTool },
      { to: '/library/publishers', label: 'Publishers', icon: Building2 },
      { to: '/library/shelves', label: 'Shelves', icon: Rows3 },
    ],
  },
  {
    id: 'circulation',
    label: 'Circulation',
    icon: ArrowLeftRight,
    items: [
      { to: '/library/issue-books', label: 'Issue Books', icon: ArrowLeftRight },
      { to: '/library/return-books', label: 'Return Books', icon: Undo2 },
      { to: '/library/renewals', label: 'Renewals', icon: RotateCw },
      { to: '/library/overdue-books', label: 'Overdue Books', icon: AlertTriangle },
    ],
  },
  {
    id: 'members',
    label: 'Members',
    icon: UserRound,
    items: [
      { to: '/library/students', label: 'Students', icon: GraduationCap },
      { to: '/library/teachers', label: 'Teachers', icon: Presentation },
      { to: '/library/staff', label: 'Staff', icon: UserRound },
    ],
  },
  {
    id: 'fines',
    label: 'Fines',
    icon: IndianRupee,
    items: [
      { to: '/library/fines/pending', label: 'Pending Fines', icon: IndianRupee },
      { to: '/library/fines/history', label: 'Fine History', icon: History },
    ],
  },
  {
    id: 'reports',
    label: 'Reports',
    icon: BarChart3,
    items: [
      { to: '/library/reports/books', label: 'Book Report', icon: BookOpen },
      { to: '/library/reports/issue-return', label: 'Issue/Return Report', icon: ArrowLeftRight },
      { to: '/library/reports/overdue', label: 'Overdue Report', icon: AlertTriangle },
      { to: '/library/reports/fines', label: 'Fine Report', icon: IndianRupee },
      { to: '/library/reports/members', label: 'Member Report', icon: UserRound },
    ],
  },
]

const LibrarySidebar = ({ collapsed, onToggle, mobileOpen, onCloseMobile }) => {
  const location = useLocation()
  const [query, setQuery] = useState('')
  const [openGroups, setOpenGroups] = useState(() => new Set())

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
            <LibraryIcon className="h-5 w-5 text-white" />
          </div>
          {!collapsed && (
            <div className="overflow-hidden">
              <p className="truncate text-sm font-bold text-white">School ERP</p>
              <p className="truncate text-[11px]" style={{ color: 'var(--sidebar-text-muted)' }}>
                Library
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
          {!collapsed && (
            <p className="mb-1 px-3 text-[11px] font-semibold uppercase tracking-wide" style={{ color: 'var(--sidebar-text-muted)' }}>
              Main
            </p>
          )}
          <NavLink
            to="/library/dashboard"
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

          <div className="my-2 h-px" style={{ background: 'var(--sidebar-border)' }} />

          {/* Pinned bottom links */}
          <NavLink
            to="/library/notifications"
            onClick={onCloseMobile}
            title={collapsed ? 'Notifications' : undefined}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? 'sidebar-link-active' : ''} ${collapsed ? 'justify-center px-0' : ''}`
            }
          >
            <Bell className="h-[18px] w-[18px] shrink-0" />
            {!collapsed && <span className="truncate">Notifications</span>}
          </NavLink>
          <NavLink
            to="/library/settings"
            onClick={onCloseMobile}
            title={collapsed ? 'Settings' : undefined}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? 'sidebar-link-active' : ''} ${collapsed ? 'justify-center px-0' : ''}`
            }
          >
            <Settings className="h-[18px] w-[18px] shrink-0" />
            {!collapsed && <span className="truncate">Settings</span>}
          </NavLink>
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

export default LibrarySidebar