import React, { useState } from 'react'
import { Menu, Bell, ChevronDown, Settings, LogOut, User, Check } from 'lucide-react'

const CHILDREN = [
  { id: 1, name: 'Ananya Verma', meta: 'Class 9-A · Roll No. 14', initials: 'AV' },
  { id: 2, name: 'Aarav Verma', meta: 'Class 5-B · Roll No. 07', initials: 'AV2' },
]

const ParentNavbar = ({ onMenuClick }) => {
  const [profileOpen, setProfileOpen] = useState(false)
  const [notifOpen, setNotifOpen] = useState(false)
  const [childOpen, setChildOpen] = useState(false)
  const [activeChild, setActiveChild] = useState(CHILDREN[0])

  const closeOthers = (keep) => {
    setProfileOpen(keep === 'profile')
    setNotifOpen(keep === 'notif')
    setChildOpen(keep === 'child')
  }

  return (
    <header
      className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-3 bg-white px-4 lg:px-6"
      style={{ borderBottom: '1px solid var(--border)' }}
    >
      <button className="btn-ghost btn-icon lg:hidden" onClick={onMenuClick} aria-label="Open menu">
        <Menu className="h-5 w-5" />
      </button>

      {/* Child switcher — the primary control for a multi-child parent portal */}
      <div className="relative">
        <button
          onClick={() => closeOthers(childOpen ? null : 'child')}
          className="flex items-center gap-2.5 rounded-lg border px-2.5 py-1.5 transition-colors hover:bg-[var(--surface-hover)]"
          style={{ borderColor: 'var(--border)' }}
        >
          <div className="avatar avatar-sm" style={{ background: 'var(--primary-600)' }}>
            {activeChild.initials.slice(0, 2)}
          </div>
          <div className="hidden text-left sm:block">
            <p className="text-sm font-semibold leading-tight" style={{ color: 'var(--text)' }}>
              {activeChild.name}
            </p>
            <p className="text-xs leading-tight" style={{ color: 'var(--muted)' }}>
              {activeChild.meta}
            </p>
          </div>
          <ChevronDown className="h-4 w-4" style={{ color: 'var(--muted)' }} />
        </button>

        {childOpen && (
          <div className="dropdown absolute left-0 mt-2 w-72">
            <p className="px-3.5 py-2 text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--muted)' }}>
              Switch child
            </p>
            {CHILDREN.map((child) => (
              <button
                key={child.id}
                onClick={() => {
                  setActiveChild(child)
                  setChildOpen(false)
                }}
                className="dropdown-item w-full"
              >
                <div className="avatar avatar-sm">{child.initials.slice(0, 2)}</div>
                <div className="flex-1 text-left">
                  <p className="text-sm font-medium" style={{ color: 'var(--text)' }}>{child.name}</p>
                  <p className="text-xs" style={{ color: 'var(--muted)' }}>{child.meta}</p>
                </div>
                {child.id === activeChild.id && (
                  <Check className="h-4 w-4 shrink-0" style={{ color: 'var(--primary-600)' }} />
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="ml-auto flex items-center gap-1.5">
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
                <p className="font-medium" style={{ color: 'var(--text)' }}>Fee due reminder</p>
                <p className="text-xs" style={{ color: 'var(--muted)' }}>
                  ₹4,500 tuition fee due for {activeChild.name.split(' ')[0]} on 30 Sep
                </p>
              </div>
              <div className="dropdown-item flex-col items-start gap-0.5">
                <p className="font-medium" style={{ color: 'var(--text)' }}>Marksheet published</p>
                <p className="text-xs" style={{ color: 'var(--muted)' }}>
                  Unit Test 2 results are now available
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
            <div className="avatar avatar-sm">PV</div>
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

export default ParentNavbar