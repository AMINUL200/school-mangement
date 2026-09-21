import React, { useState } from 'react'
import { Menu, Search, Bell, ChevronDown, Settings, LogOut, User, CalendarCheck } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const TeacherNavbar = ({ onMenuClick }) => {
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

      {/* Search */}
      <div className="relative hidden max-w-sm flex-1 md:block">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2"
          style={{ color: 'var(--muted-light)' }}
        />
        <input type="text" placeholder="Search my students, classes..." className="input pl-9" />
      </div>

      <div className="flex-1 md:hidden" />

      <div className="ml-auto flex items-center gap-2">
        {/* Quick action — most-used teacher task */}
        <button
          onClick={() => navigate('/teacher/attendance')}
          className="btn-primary btn-sm hidden sm:inline-flex"
        >
          <CalendarCheck className="h-4 w-4" />
          Take Attendance
        </button>
        <button
          onClick={() => navigate('/teacher/attendance')}
          className="btn-primary btn-icon sm:hidden"
          aria-label="Take attendance"
        >
          <CalendarCheck className="h-4 w-4" />
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
                <p className="font-medium" style={{ color: 'var(--text)' }}>Marks submission due</p>
                <p className="text-xs" style={{ color: 'var(--muted)' }}>
                  Unit Test 2 marks for Class 9-A due tomorrow
                </p>
              </div>
              <div className="dropdown-item flex-col items-start gap-0.5">
                <p className="font-medium" style={{ color: 'var(--text)' }}>Homework reminder</p>
                <p className="text-xs" style={{ color: 'var(--muted)' }}>
                  3 students haven't submitted Chapter 5 homework
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
            <div className="avatar avatar-sm">RK</div>
            <div className="hidden text-left sm:block">
              <p className="text-sm font-semibold leading-tight" style={{ color: 'var(--text)' }}>
                Rohan Kapoor
              </p>
              <p className="text-xs leading-tight" style={{ color: 'var(--muted)' }}>
                Mathematics Teacher
              </p>
            </div>
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

export default TeacherNavbar