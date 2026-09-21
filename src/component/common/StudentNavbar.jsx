import React, { useState } from 'react'
import { Menu, Bell, ChevronDown, Settings, LogOut, User, Wallet } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const StudentNavbar = ({ onMenuClick }) => {
  const navigate = useNavigate()
  const [profileOpen, setProfileOpen] = useState(false)
  const [notifOpen, setNotifOpen] = useState(false)

  const closeOthers = (keep) => {
    setProfileOpen(keep === 'profile')
    setNotifOpen(keep === 'notif')
  }

  return (
    <header
      className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-3 bg-white px-4 lg:px-6"
      style={{ borderBottom: '1px solid var(--border)' }}
    >
      <button className="btn-ghost btn-icon lg:hidden" onClick={onMenuClick} aria-label="Open menu">
        <Menu className="h-5 w-5" />
      </button>

      <div>
        <p className="text-sm font-semibold" style={{ color: 'var(--text)' }}>
          Welcome back, Ananya
        </p>
        <p className="text-xs" style={{ color: 'var(--muted)' }}>
          Class 9-A · Roll No. 14
        </p>
      </div>

      <div className="ml-auto flex items-center gap-2">
        {/* Fee due indicator — the one thing students/parents check most */}
        <button
          onClick={() => navigate('/student/fees')}
          className="hidden items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors sm:flex"
          style={{ background: 'var(--warning-light)', color: 'var(--warning-dark)' }}
        >
          <Wallet className="h-4 w-4" />
          ₹4,500 due
        </button>
        <button
          onClick={() => navigate('/student/fees')}
          className="btn-icon rounded-lg sm:hidden"
          style={{ background: 'var(--warning-light)', color: 'var(--warning-dark)' }}
          aria-label="Fees due"
        >
          <Wallet className="h-4 w-4" />
        </button>

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
                <p className="font-medium" style={{ color: 'var(--text)' }}>Marksheet published</p>
                <p className="text-xs" style={{ color: 'var(--muted)' }}>
                  Unit Test 2 results are now available
                </p>
              </div>
              <div className="dropdown-item flex-col items-start gap-0.5">
                <p className="font-medium" style={{ color: 'var(--text)' }}>New homework assigned</p>
                <p className="text-xs" style={{ color: 'var(--muted)' }}>
                  Science: Chapter 6 exercise, due Friday
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
            <div className="avatar avatar-sm">AS</div>
            <ChevronDown className="hidden h-4 w-4 sm:block" style={{ color: 'var(--muted)' }} />
          </button>

          {profileOpen && (
            <div className="dropdown absolute right-0 mt-2">
              <button className="dropdown-item w-full">
                <User className="h-4 w-4" /> My Profile
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

export default StudentNavbar