import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CalendarCheck,
  Trophy,
  Wallet,
  Clock,
  PencilLine,
  NotebookPen,
  FileCheck,
  Megaphone,
  ArrowRight,
} from 'lucide-react'

const CHILDREN = [
  {
    id: 1,
    name: 'Ananya Verma',
    meta: 'Class 9-A · Roll No. 14',
    initials: 'AV',
    attendance: '94.5%',
    result: '82%',
    feesDue: '₹4,500',
  },
  {
    id: 2,
    name: 'Aarav Verma',
    meta: 'Class 5-B · Roll No. 07',
    initials: 'AV',
    attendance: '97.1%',
    result: '88%',
    feesDue: '₹0',
  },
]

const QUICK_ACTIONS = [
  { label: 'View Attendance', icon: CalendarCheck, to: '/parent/attendance' },
  { label: 'View Marks', icon: PencilLine, to: '/parent/marks' },
  { label: 'Pay Fees', icon: Wallet, to: '/parent/fees' },
  { label: 'View Timetable', icon: Clock, to: '/parent/timetable' },
]

const UPCOMING_EXAMS = [
  { exam: 'Unit Test 3', child: 'Ananya', subject: 'Mathematics', date: '25 Sep 2026' },
  { exam: 'Periodic Test', child: 'Aarav', subject: 'English', date: '28 Sep 2026' },
  { exam: 'Half Yearly', child: 'Ananya', subject: 'Science', date: '01 Oct 2026' },
]

const NOTIFICATIONS = [
  { icon: Wallet, text: 'Fee due reminder', meta: '₹4,500 tuition fee due for Ananya on 30 Sep', time: '3 hr ago' },
  { icon: FileCheck, text: 'Marksheet published', meta: 'Unit Test 2 results available for Ananya', time: '1 day ago' },
  { icon: NotebookPen, text: 'New homework assigned', meta: 'Aarav: Maths worksheet, due Friday', time: '1 day ago' },
  { icon: Megaphone, text: 'Annual Day announcement', meta: 'Rehearsals begin next Monday', time: '2 days ago' },
]

const ParentDashboard = () => {
  const navigate = useNavigate()

  return (
    <div className="space-y-6">
      {/* Greeting */}
      <div className="page-header">
        <div>
          <h1 className="page-title">Welcome, Mr. Verma 👋</h1>
          <p className="page-subtitle">Here's how your children are doing this week.</p>
        </div>
      </div>

      {/* Children overview */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {CHILDREN.map((child) => (
          <div key={child.id} className="card-body card">
            <div className="flex items-center gap-3">
              <div className="avatar avatar-lg">{child.initials}</div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold" style={{ color: 'var(--text)' }}>{child.name}</p>
                <p className="truncate text-xs" style={{ color: 'var(--muted)' }}>{child.meta}</p>
              </div>
              <button
                onClick={() => navigate('/parent/attendance')}
                className="btn-ghost btn-icon shrink-0"
                aria-label={`View ${child.name}'s details`}
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3 border-t pt-4" style={{ borderColor: 'var(--border)' }}>
              <div>
                <p className="text-xs" style={{ color: 'var(--muted)' }}>Attendance</p>
                <p className="mt-0.5 text-sm font-semibold" style={{ color: 'var(--success)' }}>{child.attendance}</p>
              </div>
              <div>
                <p className="text-xs" style={{ color: 'var(--muted)' }}>Result</p>
                <p className="mt-0.5 text-sm font-semibold" style={{ color: 'var(--primary-600)' }}>{child.result}</p>
              </div>
              <div>
                <p className="text-xs" style={{ color: 'var(--muted)' }}>Fees Due</p>
                <p
                  className="mt-0.5 text-sm font-semibold"
                  style={{ color: child.feesDue === '₹0' ? 'var(--success)' : 'var(--warning-dark)' }}
                >
                  {child.feesDue}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {QUICK_ACTIONS.map(({ label, icon: Icon, to }) => (
          <button key={label} onClick={() => navigate(to)} className="btn-secondary w-full">
            <Icon className="h-4 w-4" />
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        {/* Upcoming Exams */}
        <div className="card">
          <div className="card-header">
            <h3 className="text-sm font-semibold" style={{ color: 'var(--text)' }}>Upcoming Exams</h3>
            <button
              onClick={() => navigate('/parent/marks')}
              className="text-xs font-medium"
              style={{ color: 'var(--primary-600)' }}
            >
              View all
            </button>
          </div>
          <div className="table-wrapper">
            <table className="table">
              <thead>
                <tr>
                  <th>Exam</th>
                  <th>Child</th>
                  <th>Subject</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {UPCOMING_EXAMS.map((row, i) => (
                  <tr key={i}>
                    <td className="font-medium" style={{ color: 'var(--text)' }}>{row.exam}</td>
                    <td>{row.child}</td>
                    <td>{row.subject}</td>
                    <td>{row.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Notifications */}
        <div className="card">
          <div className="card-header">
            <h3 className="text-sm font-semibold" style={{ color: 'var(--text)' }}>Recent Notifications</h3>
            <button
              onClick={() => navigate('/parent/notifications')}
              className="text-xs font-medium"
              style={{ color: 'var(--primary-600)' }}
            >
              View all
            </button>
          </div>
          <div className="divide-y" style={{ borderColor: 'var(--border)' }}>
            {NOTIFICATIONS.map(({ icon: Icon, text, meta, time }, i) => (
              <div key={i} className="flex items-start gap-3 px-5 py-3.5">
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
      </div>
    </div>
  )
}

export default ParentDashboard