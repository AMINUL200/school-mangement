import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CalendarCheck,
  Trophy,
  BookOpen,
  Wallet,
  PencilLine,
  FileDown,
  IdCard,
  FileCheck,
  NotebookPen,
  Megaphone,
} from 'lucide-react'

const STATS = [
  { label: 'Attendance', value: '94.5%', icon: CalendarCheck, tint: 'var(--success)' },
  { label: 'Current Result', value: '82%', icon: Trophy, tint: 'var(--primary-600)' },
  { label: 'Library Books', value: '3', icon: BookOpen, tint: 'var(--info)' },
  { label: 'Pending Fees', value: '₹12,000', icon: Wallet, tint: 'var(--warning)' },
]

const QUICK_ACTIONS = [
  { label: 'View Attendance', icon: CalendarCheck, to: '/student/attendance' },
  { label: 'View Marks', icon: PencilLine, to: '/student/marks' },
  { label: 'Download Marksheet', icon: FileDown, to: '/student/marksheets' },
  { label: 'Digital I-Card', icon: IdCard, to: '/student/documents' },
]

const UPCOMING_EXAMS = [
  { exam: 'Unit Test 3', subject: 'Mathematics', date: '25 Sep 2026' },
  { exam: 'Unit Test 3', subject: 'Science', date: '27 Sep 2026' },
  { exam: 'Half Yearly', subject: 'English', date: '01 Oct 2026' },
]

const NOTIFICATIONS = [
  { icon: FileCheck, text: 'Marksheet published', meta: 'Unit Test 2 results are now available', time: '2 hr ago' },
  { icon: NotebookPen, text: 'New homework assigned', meta: 'Science: Chapter 6 exercise, due Friday', time: '5 hr ago' },
  { icon: Wallet, text: 'Fee due reminder', meta: '₹12,000 tuition fee due on 30 Sep', time: '1 day ago' },
  { icon: Megaphone, text: 'Annual Day announcement', meta: 'Rehearsals begin next Monday', time: '2 days ago' },
]

const StudentDashboard = () => {
  const navigate = useNavigate()

  return (
    <div className="space-y-6">
      {/* Greeting */}
      <div className="page-header">
        <div>
          <h1 className="page-title">Welcome, Rahul 👋</h1>
          <p className="page-subtitle">
            Class <span className="font-medium" style={{ color: 'var(--text-soft)' }}>8-A</span>
            {' · '}Academic Year <span className="font-medium" style={{ color: 'var(--text-soft)' }}>2026-27</span>
          </p>
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {STATS.map(({ label, value, icon: Icon, tint }) => (
          <div key={label} className="card-hover card-body">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-lg"
              style={{ background: `${tint}1a` }}
            >
              <Icon className="h-5 w-5" style={{ color: tint }} />
            </div>
            <p className="mt-4 text-2xl font-bold" style={{ color: 'var(--text)' }}>{value}</p>
            <p className="mt-0.5 text-sm" style={{ color: 'var(--muted)' }}>{label}</p>
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
              onClick={() => navigate('/student/marks')}
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
                  <th>Subject</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {UPCOMING_EXAMS.map((row, i) => (
                  <tr key={i}>
                    <td className="font-medium" style={{ color: 'var(--text)' }}>{row.exam}</td>
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
              onClick={() => navigate('/student/notifications')}
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

export default StudentDashboard