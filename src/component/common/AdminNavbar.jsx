import React, { useState } from 'react'
import { Menu, Search, Bell, ChevronDown, Settings, LogOut, User } from 'lucide-react'

const AdminNavbar = ({ onMenuClick }) => {
  const [profileOpen, setProfileOpen] = useState(false)
  const [notifOpen, setNotifOpen] = useState(false)

  return (
    <header
      className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-4 bg-white px-4 lg:px-6"
      style={{ borderBottom: '1px solid var(--border)' }}
    >
      {/* Mobile menu trigger */}
      <button className="btn-ghost btn-icon lg:hidden" onClick={onMenuClick} aria-label="Open menu">
        <Menu className="h-5 w-5" />
      </button>

      {/* Global search */}
      <div className="relative hidden max-w-md flex-1 sm:block">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2"
          style={{ color: 'var(--muted-light)' }}
        />
        <input type="text" placeholder="Search schools, users, payments..." className="input pl-9" />
      </div>

      <div className="flex-1 sm:hidden" />

      <div className="ml-auto flex items-center gap-1.5">
        {/* Notifications */}
        <div className="relative">
          <button
            className="btn-ghost btn-icon relative"
            onClick={() => {
              setNotifOpen((v) => !v)
              setProfileOpen(false)
            }}
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
            <span
              className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full"
              style={{ background: 'var(--danger)' }}
            />
          </button>

          {notifOpen && (
            <div className="dropdown absolute right-0 mt-2 w-80">
              <div className="px-3.5 py-2 text-sm font-semibold" style={{ color: 'var(--text)' }}>
                Notifications
              </div>
              <div className="divider !my-0" />
              <div className="dropdown-item flex-col items-start gap-0.5">
                <p className="font-medium" style={{ color: 'var(--text)' }}>New school onboarded</p>
                <p className="text-xs" style={{ color: 'var(--muted)' }}>
                  Sunrise Public School just subscribed to Standard plan
                </p>
              </div>
              <div className="dropdown-item flex-col items-start gap-0.5">
                <p className="font-medium" style={{ color: 'var(--text)' }}>Payment received</p>
                <p className="text-xs" style={{ color: 'var(--muted)' }}>
                  ₹24,999 collected from Greenfield Academy
                </p>
              </div>
              <div className="divider !my-0" />
              <button className="dropdown-item w-full justify-center text-xs font-medium" style={{ color: 'var(--primary-600)' }}>
                View all notifications
              </button>
            </div>
          )}
        </div>

        <div className="mx-1 h-8 w-px" style={{ background: 'var(--border)' }} />

        {/* Profile */}
        <div className="relative">
          <button
            className="flex items-center gap-2 rounded-lg px-2 py-1.5 transition-colors hover:bg-[var(--surface-hover)]"
            onClick={() => {
              setProfileOpen((v) => !v)
              setNotifOpen(false)
            }}
          >
            <div className="avatar avatar-sm">SA</div>
            <div className="hidden text-left sm:block">
              <p className="text-sm font-semibold leading-tight" style={{ color: 'var(--text)' }}>
                Super Admin
              </p>
              <p className="text-xs leading-tight" style={{ color: 'var(--muted)' }}>
                Platform Owner
              </p>
            </div>
            <ChevronDown className="hidden h-4 w-4 sm:block" style={{ color: 'var(--muted)' }} />
          </button>

          {profileOpen && (
            <div className="dropdown absolute right-0 mt-2">
              <button className="dropdown-item w-full">
                <User className="h-4 w-4" /> Profile
              </button>
              <button className="dropdown-item w-full">
                <Settings className="h-4 w-4" /> Settings
              </button>
              <div className="divider !my-1" />
              <button className="dropdown-item dropdown-item-danger w-full">
                <LogOut className="h-4 w-4" /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default AdminNavbar