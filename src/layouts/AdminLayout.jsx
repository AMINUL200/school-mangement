import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import AdminSidebar from '../component/common/AdminSidebar'
import AdminNavbar from '../component/common/AdminNavbar'

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen" style={{ background: 'var(--background)' }}>
      <AdminSidebar
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
        <AdminNavbar onMenuClick={() => setMobileOpen(true)} />

        <main className="flex-1 p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout