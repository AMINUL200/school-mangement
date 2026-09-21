import React, { useState } from 'react'
import { Menu, Search, Bell, ChevronDown, Settings, LogOut, User, Check } from 'lucide-react'

const SESSIONS = ['2026-27', '2025-26', '2024-25']

const SchoolNavbar = ({ onMenuClick }) => {
  const [profileOpen, setProfileOpen] = useState(false)
  const [notifOpen, setNotifOpen] = useState(false)
  const [sessionOpen, setSessionOpen] = useState(false)
  const [activeSession, setActiveSession] = useState(SESSIONS[0])

  const closeOthers = (keep) => {
    setProfileOpen(keep === 'profile')
    setNotifOpen(keep === 'notif')
    setSessionOpen(keep === 'session')
  }

  return (
    <header
      className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-3 bg-white px-4 lg:px-6"
      style={{ borderBottom: '1px solid var(--border)' }}
    >
      <button className="btn-ghost btn-icon lg:hidden" onClick={onMenuClick} aria-label="Open menu">
        <Menu className="h-5 w-5" />
      </button>

      {/* Global search */}
      <div className="relative hidden max-w-sm flex-1 md:block">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2"
          style={{ color: 'var(--muted-light)' }}
        />
        <input type="text" placeholder="Search students, staff, records..." className="input pl-9" />
      </div>

      <div className="flex-1 md:hidden" />

      <div className="ml-auto flex items-center gap-1.5">
        {/* Academic session selector */}
        <div className="relative">
          <button
            onClick={() => closeOthers(sessionOpen ? null : 'session')}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors"
            style={{ background: 'var(--primary-50)', color: 'var(--primary-700)' }}
          >
            <span className="hidden sm:inline">Session</span>
            {activeSession}
            <ChevronDown className="h-3.5 w-3.5" />
          </button>

          {sessionOpen && (
            <div className="dropdown absolute right-0 mt-2 min-w-[10rem]">
              {SESSIONS.map((session) => (
                <button
                  key={session}
                  onClick={() => {
                    setActiveSession(session)
                    setSessionOpen(false)
                  }}
                  className="dropdown-item w-full justify-between"
                >
                  {session}
                  {session === activeSession && (
                    <Check className="h-3.5 w-3.5" style={{ color: 'var(--primary-600)' }} />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="mx-0.5 h-8 w-px" style={{ background: 'var(--border)' }} />

        {/* Notifications */}
        <div className="relative">
          <button
            className="btn-ghost btn-icon relative"
            onClick={() => closeOthers(notifOpen ? null : 'notif')}
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
                <p className="font-medium" style={{ color: 'var(--text)' }}>Fee due reminder sent</p>
                <p className="text-xs" style={{ color: 'var(--muted)' }}>
                  42 parents notified for Class 8 tuition fee
                </p>
              </div>
              <div className="dropdown-item flex-col items-start gap-0.5">
                <p className="font-medium" style={{ color: 'var(--text)' }}>Marks pending approval</p>
                <p className="text-xs" style={{ color: 'var(--muted)' }}>
                  Unit Test 2 — Class 9-A Mathematics
                </p>
              </div>
              <div className="divider !my-0" />
              <button className="dropdown-item w-full justify-center text-xs font-medium" style={{ color: 'var(--primary-600)' }}>
                View all notifications
              </button>
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="relative">
          <button
            className="flex items-center gap-2 rounded-lg px-2 py-1.5 transition-colors hover:bg-[var(--surface-hover)]"
            onClick={() => closeOthers(profileOpen ? null : 'profile')}
          >
            <div className="avatar avatar-sm">SA</div>
            <div className="hidden text-left sm:block">
              <p className="text-sm font-semibold leading-tight" style={{ color: 'var(--text)' }}>
                Anita Sharma
              </p>
              <p className="text-xs leading-tight" style={{ color: 'var(--muted)' }}>
                School Admin
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

export default SchoolNavbar