import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import TeacherNavbar from '../component/common/TeacherNavbar'
import TeacherSidebar from '../component/common/TeacherSidebar'

const TeacherLayout = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen" style={{ background: 'var(--background)' }}>
      <TeacherSidebar
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
        <TeacherNavbar onMenuClick={() => setMobileOpen(true)} />

        <main className="flex-1 p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default TeacherLayout