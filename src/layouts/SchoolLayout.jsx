import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import SchoolNavbar from '../component/common/SchoolNavbar'
import SchoolSidebar from '../component/common/SchoolSidebar'

const SchoolLayout = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen" style={{ background: 'var(--background)' }}>
      <SchoolSidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed((v) => !v)}
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
      />

      <div
        className={`flex min-h-screen flex-col transition-all duration-300 ${
          collapsed ? 'lg:pl-[76px]' : 'lg:pl-72'
        }`}
      >
        <SchoolNavbar onMenuClick={() => setMobileOpen(true)} />

        <main className="flex-1 p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default SchoolLayout