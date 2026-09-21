import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  School,
  CreditCard,
  Package,
  Receipt,
  Users,
  ScrollText,
  Settings,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
} from 'lucide-react'

const navItems = [
  { to: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/admin/schools', label: 'Schools', icon: School },
  { to: '/admin/subscriptions', label: 'Subscriptions', icon: CreditCard },
  { to: '/admin/plans', label: 'Plans', icon: Package },
  { to: '/admin/payments', label: 'Payments', icon: Receipt },
  { to: '/admin/users', label: 'Users', icon: Users },
  { to: '/admin/audit-logs', label: 'Audit Logs', icon: ScrollText },
  { to: '/admin/settings', label: 'Settings', icon: Settings },
]

const AdminSidebar = ({ collapsed, onToggle, mobileOpen, onCloseMobile }) => {
  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onCloseMobile}
          aria-hidden="true"
        />
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
              <p className="truncate text-sm font-bold text-white">EduCore SaaS</p>
              <p className="truncate text-[11px]" style={{ color: 'var(--sidebar-text-muted)' }}>
                Super Admin
              </p>
            </div>
          )}
        </div>

        {/* Nav links */}
        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
          {navItems.map(({ to, label, icon: Icon }) => (
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

export default AdminSidebar