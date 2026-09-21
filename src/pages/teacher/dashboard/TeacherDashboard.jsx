import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  BookOpen,
  Users,
  CalendarCheck,
  MapPin,
  PencilLine,
  NotebookPen,
  ArrowRight,
} from 'lucide-react'

const KPI_CARDS = [
  { label: 'My Classes', value: '4', icon: BookOpen, tint: 'var(--primary-600)' },
  { label: 'My Students', value: '142', icon: Users, tint: 'var(--info)' },
  { label: 'Attendance Today', value: '94.5%', icon: CalendarCheck, tint: 'var(--success)' },
]

const TODAYS_CLASSES = [
  { time: '09:00', subject: 'Mathematics', classSec: '8-A', room: 'Room 204', status: 'Completed' },
  { time: '10:00', subject: 'Mathematics', classSec: '9-B', room: 'Room 108', status: 'Ongoing' },
  { time: '11:30', subject: 'Mathematics', classSec: '7-A', room: 'Room 204', status: 'Upcoming' },
]

const QUICK_ACTIONS = [
  { label: 'Take Attendance', icon: CalendarCheck, to: '/teacher/attendance', tint: 'var(--primary-600)' },
  { label: 'Enter Marks', icon: PencilLine, to: '/teacher/marks', tint: 'var(--info)' },
  { label: 'Create Homework', icon: NotebookPen, to: '/teacher/homework', tint: 'var(--warning)' },
  { label: 'View Students', icon: Users, to: '/teacher/students', tint: 'var(--success)' },
]

const statusStyle = {
  Completed: { color: 'var(--muted)', badge: 'badge-neutral' },
  Ongoing: { color: 'var(--success)', badge: 'badge-success' },
  Upcoming: { color: 'var(--text-soft)', badge: 'badge-info' },
}

const TeacherDashboard = () => {
  const navigate = useNavigate()

  return (
    <div className="space-y-6">
      {/* Greeting */}
      <div className="page-header">
        <div>
          <h1 className="page-title">Good Morning, Mr. Rahman 👋</h1>
          <p className="page-subtitle">Here's what's happening in your classes today.</p>
        </div>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {KPI_CARDS.map(({ label, value, icon: Icon, tint }) => (
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

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* Today's Classes */}
        <div className="card xl:col-span-2">
          <div className="card-header">
            <h3 className="text-sm font-semibold" style={{ color: 'var(--text)' }}>Today's Classes</h3>
            <button
              onClick={() => navigate('/teacher/timetable')}
              className="text-xs font-medium"
              style={{ color: 'var(--primary-600)' }}
            >
              Full timetable
            </button>
          </div>
          <div className="divide-y" style={{ borderColor: 'var(--border)' }}>
            {TODAYS_CLASSES.map((cls, i) => {
              const status = statusStyle[cls.status]
              return (
                <div key={i} className="flex items-center gap-4 px-5 py-4">
                  <div className="w-14 shrink-0 text-sm font-semibold" style={{ color: 'var(--text)' }}>
                    {cls.time}
                  </div>
                  <div
                    className="h-9 w-1 shrink-0 rounded-full"
                    style={{ background: cls.status === 'Ongoing' ? 'var(--success)' : 'var(--border)' }}
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium" style={{ color: 'var(--text)' }}>
                      {cls.subject} <span style={{ color: 'var(--muted)' }}>· Class {cls.classSec}</span>
                    </p>
                    <p className="mt-0.5 flex items-center gap-1 text-xs" style={{ color: 'var(--muted)' }}>
                      <MapPin className="h-3 w-3" /> {cls.room}
                    </p>
                  </div>
                  <span className={status.badge}>{cls.status}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card">
          <div className="card-header">
            <h3 className="text-sm font-semibold" style={{ color: 'var(--text)' }}>Quick Actions</h3>
          </div>
          <div className="card-body grid grid-cols-2 gap-3">
            {QUICK_ACTIONS.map(({ label, icon: Icon, to, tint }) => (
              <button
                key={label}
                onClick={() => navigate(to)}
                className="card-hover flex flex-col items-start gap-3 p-4 text-left"
              >
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-lg"
                  style={{ background: `${tint}1a` }}
                >
                  <Icon className="h-4 w-4" style={{ color: tint }} />
                </div>
                <span className="flex items-center gap-1 text-sm font-medium" style={{ color: 'var(--text)' }}>
                  {label}
                  <ArrowRight className="h-3.5 w-3.5" style={{ color: 'var(--muted-light)' }} />
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherDashboard