import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  School,
  CreditCard,
  IndianRupee,
  TrendingUp,
  TrendingDown,
  ArrowRight,
} from 'lucide-react'
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts'

const KPI_CARDS = [
  { label: 'Total Schools', value: '128', trend: '+6 this month', up: true, icon: School, tint: 'var(--primary-600)' },
  { label: 'Active Subscriptions', value: '119', trend: '92.9% active', up: true, icon: CreditCard, tint: 'var(--info)' },
  { label: 'Monthly Revenue', value: '₹42.8L', trend: '+8.4% MoM', up: true, icon: IndianRupee, tint: 'var(--success)' },
  { label: 'Churned Schools', value: '3', trend: '+1 vs last month', up: false, icon: TrendingDown, tint: 'var(--danger)' },
]

const REVENUE_DATA = [
  { month: 'Apr', revenue: 32.4 },
  { month: 'May', revenue: 34.1 },
  { month: 'Jun', revenue: 33.6 },
  { month: 'Jul', revenue: 37.9 },
  { month: 'Aug', revenue: 39.5 },
  { month: 'Sep', revenue: 42.8 },
]

const PLAN_DATA = [
  { name: 'Starter', value: 38, color: 'var(--muted-light)' },
  { name: 'Standard', value: 46, color: 'var(--info)' },
  { name: 'Professional', value: 31, color: 'var(--primary-600)' },
  { name: 'Enterprise', value: 13, color: 'var(--success)' },
]

const RECENT_PAYMENTS = [
  { school: 'Sunrise Public School', plan: 'Professional', amount: '₹24,999', date: '20 Sep 2026', status: 'Paid' },
  { school: 'Greenfield Academy', plan: 'Standard', amount: '₹14,999', date: '19 Sep 2026', status: 'Paid' },
  { school: 'St. Xavier\'s High', plan: 'Enterprise', amount: '₹49,999', date: '18 Sep 2026', status: 'Paid' },
  { school: 'Little Angels School', plan: 'Starter', amount: '₹6,999', date: '17 Sep 2026', status: 'Failed' },
]

const TOP_SCHOOLS = [
  { school: 'Delhi Public Academy', students: 2840, teachers: 165, plan: 'Enterprise' },
  { school: 'St. Xavier\'s High', students: 2210, teachers: 138, plan: 'Enterprise' },
  { school: 'Greenfield Academy', students: 1680, teachers: 102, plan: 'Professional' },
  { school: 'ABC International School', students: 1250, teachers: 85, plan: 'Professional' },
]

const statusBadge = { Paid: 'badge-success', Failed: 'badge-danger', Pending: 'badge-warning' }

const SuperAdminDashboard = () => {
  const navigate = useNavigate()

  return (
    <div className="space-y-6">
      {/* Greeting */}
      <div className="page-header">
        <div>
          <h1 className="page-title">Welcome back, Super Admin 👋</h1>
          <p className="page-subtitle">Platform overview across all schools.</p>
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
              <span
                className="flex items-center gap-0.5 text-xs font-semibold"
                style={{ color: up ? 'var(--success)' : 'var(--danger)' }}
              >
                {up ? <TrendingUp className="h-3.5 w-3.5" /> : <TrendingDown className="h-3.5 w-3.5" />}
              </span>
            </div>
            <p className="mt-4 text-2xl font-bold" style={{ color: 'var(--text)' }}>{value}</p>
            <p className="mt-0.5 text-sm" style={{ color: 'var(--muted)' }}>{label}</p>
            <p className="mt-1 text-xs" style={{ color: up ? 'var(--success)' : 'var(--danger)' }}>{trend}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="card xl:col-span-2">
          <div className="card-header">
            <div>
              <h3 className="text-sm font-semibold" style={{ color: 'var(--text)' }}>Revenue Growth</h3>
              <p className="text-xs" style={{ color: 'var(--muted)' }}>Last 6 months · ₹ in lakhs</p>
            </div>
          </div>
          <div className="card-body">
            <ResponsiveContainer width="100%" height={260}>
              <AreaChart data={REVENUE_DATA} margin={{ left: -20, right: 10 }}>
                <defs>
                  <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--success)" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="var(--success)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                <XAxis dataKey="month" tick={{ fontSize: 12, fill: 'var(--muted)' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 12, fill: 'var(--muted)' }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ borderRadius: 10, border: '1px solid var(--border)', fontSize: 12 }}
                  formatter={(v) => [`₹${v}L`, 'Revenue']}
                />
                <Area type="monotone" dataKey="revenue" stroke="var(--success)" strokeWidth={2} fill="url(#revenueFill)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="text-sm font-semibold" style={{ color: 'var(--text)' }}>Plan Distribution</h3>
          </div>
          <div className="card-body">
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie data={PLAN_DATA} dataKey="value" nameKey="name" innerRadius={55} outerRadius={80} paddingAngle={2}>
                  {PLAN_DATA.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: 10, border: '1px solid var(--border)', fontSize: 12 }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-2 space-y-1.5">
              {PLAN_DATA.map((p) => (
                <div key={p.name} className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5" style={{ color: 'var(--text-soft)' }}>
                    <span className="h-2 w-2 rounded-full" style={{ background: p.color }} />
                    {p.name}
                  </span>
                  <span className="font-medium" style={{ color: 'var(--text)' }}>{p.value} schools</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tables */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="card">
          <div className="card-header">
            <h3 className="text-sm font-semibold" style={{ color: 'var(--text)' }}>Recent Payments</h3>
            <button
              onClick={() => navigate('/admin/payments')}
              className="flex items-center gap-1 text-xs font-medium"
              style={{ color: 'var(--primary-600)' }}
            >
              View all <ArrowRight className="h-3 w-3" />
            </button>
          </div>
          <div className="table-wrapper">
            <table className="table">
              <thead>
                <tr>
                  <th>School</th>
                  <th>Plan</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {RECENT_PAYMENTS.map((row, i) => (
                  <tr key={i}>
                    <td>
                      <p className="font-medium" style={{ color: 'var(--text)' }}>{row.school}</p>
                      <p className="text-xs" style={{ color: 'var(--muted)' }}>{row.date}</p>
                    </td>
                    <td>{row.plan}</td>
                    <td className="font-medium" style={{ color: 'var(--text)' }}>{row.amount}</td>
                    <td><span className={statusBadge[row.status]}>{row.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="text-sm font-semibold" style={{ color: 'var(--text)' }}>Top Schools</h3>
            <button
              onClick={() => navigate('/admin/schools')}
              className="flex items-center gap-1 text-xs font-medium"
              style={{ color: 'var(--primary-600)' }}
            >
              View all <ArrowRight className="h-3 w-3" />
            </button>
          </div>
          <div className="table-wrapper">
            <table className="table">
              <thead>
                <tr>
                  <th>School</th>
                  <th>Students</th>
                  <th>Teachers</th>
                  <th>Plan</th>
                </tr>
              </thead>
              <tbody>
                {TOP_SCHOOLS.map((row, i) => (
                  <tr key={i}>
                    <td className="font-medium" style={{ color: 'var(--text)' }}>{row.school}</td>
                    <td>{row.students.toLocaleString()}</td>
                    <td>{row.teachers}</td>
                    <td><span className="badge-primary">{row.plan}</span></td>
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

export default SuperAdminDashboard