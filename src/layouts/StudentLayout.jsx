import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import StudentNavbar from '../component/common/StudentNavbar'
import StudentSidebar from '../component/common/StudentSidebar'

const StudentLayout = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen" style={{ background: 'var(--background)' }}>
      <StudentSidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed((v) => !v)}
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
      />

      <div
        className={`flex min-h-screen flex-col transition-all duration-300 ${
          collapsed ? 'lg:pl-[76px]' : 'lg:pl-64'
        }`}
      >
        <StudentNavbar onMenuClick={() => setMobileOpen(true)} />

        <main className="flex-1 p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default StudentLayout