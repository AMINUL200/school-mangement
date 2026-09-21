import React from 'react'
import {
  Users,
  GraduationCap,
  Boxes,
  CalendarCheck,
  ArrowUpRight,
  ArrowDownRight,
  Bell,
  UserPlus,
  Wallet,
  FileCheck,
  ClipboardEdit,
} from 'lucide-react'
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  Legend,
} from 'recharts'

const KPI_CARDS = [
  { label: 'Students', value: '1,250', trend: '+3.2%', up: true, icon: Users, tint: 'var(--primary-600)' },
  { label: 'Teachers', value: '85', trend: '+1.1%', up: true, icon: GraduationCap, tint: 'var(--info)' },
  { label: 'Classes', value: '42', trend: '0%', up: null, icon: Boxes, tint: 'var(--warning)' },
  { label: 'Attendance Today', value: '94.2%', trend: '-0.8%', up: false, icon: CalendarCheck, tint: 'var(--success)' },
]

const ATTENDANCE_DATA = [
  { day: 'Mon', attendance: 95 },
  { day: 'Tue', attendance: 93 },
  { day: 'Wed', attendance: 96 },
  { day: 'Thu', attendance: 91 },
  { day: 'Fri', attendance: 94 },
  { day: 'Sat', attendance: 89 },
  { day: 'Today', attendance: 94.2 },
]

const FEE_DATA = [
  { month: 'Apr', collected: 8.4, due: 1.6 },
  { month: 'May', collected: 9.1, due: 1.2 },
  { month: 'Jun', collected: 7.8, due: 2.4 },
  { month: 'Jul', collected: 9.6, due: 0.9 },
  { month: 'Aug', collected: 8.9, due: 1.5 },
  { month: 'Sep', collected: 6.2, due: 3.1 },
]

const RECENT_ACTIVITY = [
  { icon: UserPlus, text: 'New student admitted', meta: 'Kabir Mehta · Class 6-B', time: '12 min ago' },
  { icon: Wallet, text: 'Fee payment received', meta: '₹18,500 from Ritika Shah · Class 8-A', time: '45 min ago' },
  { icon: FileCheck, text: 'Marksheet published', meta: 'Unit Test 2 · Class 9-A', time: '2 hr ago' },
  { icon: ClipboardEdit, text: 'Leave request approved', meta: 'Priya Nair (Teacher) · 2 days', time: '3 hr ago' },
  { icon: Bell, text: 'Fee reminder sent', meta: '42 parents · Class 8 tuition fee', time: '5 hr ago' },
]

const UPCOMING_EXAMS = [
  { exam: 'Unit Test 3', classSec: 'Class 7-A', subject: 'Mathematics', date: '25 Sep 2026', status: 'Scheduled' },
  { exam: 'Half Yearly', classSec: 'Class 10-B', subject: 'Science', date: '01 Oct 2026', status: 'Scheduled' },
  { exam: 'Pre-Board 1', classSec: 'Class 12-A', subject: 'Physics', date: '05 Oct 2026', status: 'Draft' },
  { exam: 'Periodic Test', classSec: 'Class 5-C', subject: 'English', date: '08 Oct 2026', status: 'Scheduled' },
]

const StatusBadge = ({ status }) => {
  const map = {
    Scheduled: 'badge-success',
    Draft: 'badge-warning',
  }
  return <span className={map[status] || 'badge-neutral'}>{status}</span>
}

const SchoolAdminDashboard = () => {
  return (
    <div className="space-y-6">
      {/* Greeting */}
      <div className="page-header">
        <div>
          <h1 className="page-title">Good Morning, Admin 👋</h1>
          <p className="page-subtitle">
            <span className="font-medium" style={{ color: 'var(--text-soft)' }}>ABC International School</span>
            {' · '}Academic Session <span className="font-medium" style={{ color: 'var(--text-soft)' }}>2026-27</span>
          </p>
        </div>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {KPI_CARDS.map(({ label, value, trend, up, icon: Icon, tint }) => (
          <div key={label} className="card-hover card-body">
            <div className="flex items-start justify-between">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-lg"
                style={{ background: `${tint}1a` }}
              >
                <Icon className="h-5 w-5" style={{ color: tint }} />
              </div>
              {up !== null && (
                <span
                  className="flex items-center gap-0.5 text-xs font-semibold"
                  style={{ color: up ? 'var(--success)' : 'var(--danger)' }}
                >
                  {up ? <ArrowUpRight className="h-3.5 w-3.5" /> : <ArrowDownRight className="h-3.5 w-3.5" />}
                  {trend}
                </span>
              )}
            </div>
            <p className="mt-4 text-2xl font-bold" style={{ color: 'var(--text)' }}>{value}</p>
            <p className="mt-0.5 text-sm" style={{ color: 'var(--muted)' }}>{label}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="card">
          <div className="card-header">
            <div>
              <h3 className="text-sm font-semibold" style={{ color: 'var(--text)' }}>Attendance Overview</h3>
              <p className="text-xs" style={{ color: 'var(--muted)' }}>Last 7 days · School-wide</p>
            </div>
          </div>
          <div className="card-body">
            <ResponsiveContainer width="100%" height={260}>
              <AreaChart data={ATTENDANCE_DATA} margin={{ left: -20, right: 10 }}>
                <defs>
                  <linearGradient id="attendanceFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--primary-500)" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="var(--primary-500)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                <XAxis dataKey="day" tick={{ fontSize: 12, fill: 'var(--muted)' }} axisLine={false} tickLine={false} />
                <YAxis domain={[80, 100]} tick={{ fontSize: 12, fill: 'var(--muted)' }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ borderRadius: 10, border: '1px solid var(--border)', fontSize: 12 }}
                  formatter={(v) => [`${v}%`, 'Attendance']}
                />
                <Area type="monotone" dataKey="attendance" stroke="var(--primary-600)" strokeWidth={2} fill="url(#attendanceFill)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div>
              <h3 className="text-sm font-semibold" style={{ color: 'var(--text)' }}>Fee Collection</h3>
              <p className="text-xs" style={{ color: 'var(--muted)' }}>Last 6 months · ₹ in lakhs</p>
            </div>
          </div>
          <div className="card-body">
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={FEE_DATA} margin={{ left: -20, right: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                <XAxis dataKey="month" tick={{ fontSize: 12, fill: 'var(--muted)' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 12, fill: 'var(--muted)' }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ borderRadius: 10, border: '1px solid var(--border)', fontSize: 12 }}
                  formatter={(v) => [`₹${v}L`]}
                />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Bar dataKey="collected" name="Collected" fill="var(--success)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="due" name="Due" fill="var(--warning)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Activity + Upcoming Exams */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="card">
          <div className="card-header">
            <h3 className="text-sm font-semibold" style={{ color: 'var(--text)' }}>Recent Activity</h3>
            <button className="text-xs font-medium" style={{ color: 'var(--primary-600)' }}>View all</button>
          </div>
          <div className="divide-y" style={{ borderColor: 'var(--border)' }}>
            {RECENT_ACTIVITY.map(({ icon: Icon, text, meta, time }, i) => (
              <div key={i} className="flex items-start gap-3 px-5 py-3.5" style={{ borderColor: 'var(--border)' }}>
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: 'var(--primary-50)' }}
                >
                  <Icon className="h-4 w-4" style={{ color: 'var(--primary-600)' }} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium" style={{ color: 'var(--text)' }}>{text}</p>
                  <p className="truncate text-xs" style={{ color: 'var(--muted)' }}>{meta}</p>
                </div>
                <span className="shrink-0 text-xs" style={{ color: 'var(--muted-light)' }}>{time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="text-sm font-semibold" style={{ color: 'var(--text)' }}>Upcoming Exams</h3>
            <button className="text-xs font-medium" style={{ color: 'var(--primary-600)' }}>View all</button>
          </div>
          <div className="table-wrapper">
            <table className="table">
              <thead>
                <tr>
                  <th>Exam</th>
                  <th>Class</th>
                  <th>Subject</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {UPCOMING_EXAMS.map((row, i) => (
                  <tr key={i}>
                    <td className="font-medium" style={{ color: 'var(--text)' }}>{row.exam}</td>
                    <td>{row.classSec}</td>
                    <td>{row.subject}</td>
                    <td>{row.date}</td>
                    <td><StatusBadge status={row.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SchoolAdminDashboard