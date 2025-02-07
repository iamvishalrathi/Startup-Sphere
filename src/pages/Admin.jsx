import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  UserGroupIcon, 
  CalendarIcon, 
  ChartBarIcon, 
  CogIcon,
  BellIcon,
  DocumentTextIcon,
  ClockIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline'
import AnimatedBackground from '../components/AnimatedBackground'

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [formData, setFormData] = useState({ username: '', password: '' })
  const [error, setError] = useState('')
  const [activeProjects] = useState([
    {
      id: 1,
      name: "AI Healthcare Assistant",
      members: 5,
      status: "In Progress",
      completion: 75
    },
    {
      id: 2,
      name: "EcoTrack App",
      members: 4,
      status: "In Progress",
      completion: 60
    },
    {
      id: 3,
      name: "FinTech Solution",
      members: 6,
      status: "In Progress",
      completion: 40
    }
  ])
  const [selectedSection, setSelectedSection] = useState('dashboard')

  // Add new states for managing data
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Member', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Admin', status: 'Active' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'Member', status: 'Inactive' },
  ])

  const [events, setEvents] = useState([
    { 
      id: 1, 
      title: 'Tech Summit 2024', 
      date: '2024-03-15', 
      status: 'Upcoming',
      attendees: 120,
      type: 'Conference'
    },
    { 
      id: 2, 
      title: 'Coding Workshop', 
      date: '2024-03-20', 
      status: 'Upcoming',
      attendees: 45,
      type: 'Workshop'
    },
    { 
      id: 3, 
      title: 'Startup Meetup', 
      date: '2024-03-25', 
      status: 'Draft',
      attendees: 0,
      type: 'Networking'
    },
  ])

  // Check if user is already logged in from localStorage
  useEffect(() => {
    const isUserLoggedIn = localStorage.getItem('isLoggedIn')
    if (isUserLoggedIn === 'true') {
      setIsLoggedIn(true)
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.username === 'test123' && formData.password === 'test123') {
      setIsLoggedIn(true)
      setError('')
      // Store login state in localStorage
      localStorage.setItem('isLoggedIn', 'true')
    } else {
      setError('Invalid credentials')
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError('')
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setFormData({ username: '', password: '' })
    // Remove login state from localStorage
    localStorage.removeItem('isLoggedIn')
  }

  const stats = [
    { 
      title: "Total Users", 
      value: "1,234", 
      change: "+12%",
      icon: <UserGroupIcon className="h-6 w-6" />,
      trend: "up"
    },
    { 
      title: "Active Events", 
      value: "26", 
      change: "+5%",
      icon: <CalendarIcon className="h-6 w-6" />,
      trend: "up"
    },
    { 
      title: "Engagement Rate", 
      value: "68%", 
      change: "+8%",
      icon: <ChartBarIcon className="h-6 w-6" />,
      trend: "up"
    },
    { 
      title: "Response Time", 
      value: "1.2h", 
      change: "-15%",
      icon: <ClockIcon className="h-6 w-6" />,
      trend: "down"
    }
  ]

  const recentActivities = [
    { 
      type: "New Registration",
      user: "John Doe",
      time: "2 minutes ago",
      icon: <UserGroupIcon className="h-5 w-5 text-primary-light" />
    },
    { 
      type: "Event Created",
      user: "Sarah Smith",
      time: "1 hour ago",
      icon: <CalendarIcon className="h-5 w-5 text-secondary-light" />
    },
    { 
      type: "System Update",
      user: "Admin",
      time: "3 hours ago",
      icon: <CogIcon className="h-5 w-5 text-yellow-500" />
    }
  ]

  const notifications = [
    {
      title: "New Event Request",
      description: "Tech Workshop approval pending",
      time: "5 minutes ago",
      priority: "high"
    },
    {
      title: "System Maintenance",
      description: "Scheduled for tonight 2 AM",
      time: "1 hour ago",
      priority: "medium"
    }
  ]

  // Function to render content based on selected section
  const renderContent = () => {
    switch (selectedSection) {
      case 'dashboard':
        return (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-dark-darker p-4 rounded-lg shadow-lg border border-gray-800"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {stat.icon}
                    </div>
                    <div className={`flex items-center ${
                      stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
                    }`}>
                      <ArrowTrendingUpIcon className={`h-4 w-4 ${
                        stat.trend === 'down' && 'transform rotate-180'
                      }`} />
                      <span className="text-sm ml-1">{stat.change}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                  <p className="text-sm text-gray-400">{stat.title}</p>
                </motion.div>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="bg-dark-darker rounded-lg p-6 shadow-lg border border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center justify-between p-3 bg-dark rounded-lg border border-gray-800"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-dark-darker rounded-lg">
                        {activity.icon}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-200">{activity.type}</p>
                        <p className="text-xs text-gray-400">{activity.user}</p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">{activity.time}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Active Projects */}
            <div className="bg-dark-darker rounded-lg p-6 shadow-lg border border-gray-800">
              <h2 className="text-2xl font-bold text-primary-light mb-6">Active Projects</h2>
              <div className="grid gap-6">
                {activeProjects.map(project => (
                  <div key={project.id} className="card p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold text-secondary-light">{project.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        project.completion >= 75 ? 'bg-green-500/20 text-green-400' :
                        project.completion >= 50 ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-gray-300">
                        <span>Team Members:</span>
                        <span className="font-semibold">{project.members}</span>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm text-gray-400 mb-1">
                          <span>Progress</span>
                          <span>{project.completion}%</span>
                        </div>
                        <div className="w-full bg-dark-darker rounded-full h-2">
                          <div 
                            className="bg-primary-light rounded-full h-2 transition-all duration-300"
                            style={{ width: `${project.completion}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )

      case 'users':
        return (
          <div className="bg-dark-darker rounded-lg p-6 shadow-lg border border-gray-800">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-primary-light">Users</h2>
              <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
                Add User
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b border-gray-800">
                    <th className="py-3 px-4 text-gray-400">Name</th>
                    <th className="py-3 px-4 text-gray-400">Email</th>
                    <th className="py-3 px-4 text-gray-400">Role</th>
                    <th className="py-3 px-4 text-gray-400">Status</th>
                    <th className="py-3 px-4 text-gray-400">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b border-gray-800">
                      <td className="py-3 px-4 text-gray-300">{user.name}</td>
                      <td className="py-3 px-4 text-gray-300">{user.email}</td>
                      <td className="py-3 px-4 text-gray-300">{user.role}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          user.status === 'Active' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-red-500/20 text-red-400'
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex gap-2">
                          <button className="text-blue-400 hover:text-blue-300">Edit</button>
                          <button className="text-red-400 hover:text-red-300">Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )

      case 'events':
        return (
          <div className="bg-dark-darker rounded-lg p-6 shadow-lg border border-gray-800">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-primary-light">Events</h2>
              <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
                Create Event
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <div key={event.id} className="bg-dark p-4 rounded-lg border border-gray-800">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-200">{event.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      event.status === 'Upcoming' 
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {event.status}
                    </span>
                  </div>
                  <div className="space-y-2 text-gray-400 text-sm">
                    <p>Date: {new Date(event.date).toLocaleDateString()}</p>
                    <p>Type: {event.type}</p>
                    <p>Attendees: {event.attendees}</p>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <button className="px-3 py-1 bg-primary/20 text-primary-light rounded hover:bg-primary/30 transition-colors">
                      Edit
                    </button>
                    <button className="px-3 py-1 bg-red-500/20 text-red-400 rounded hover:bg-red-500/30 transition-colors">
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case 'reports':
        return (
          <div className="bg-dark-darker rounded-lg p-6 shadow-lg border border-gray-800">
            <h2 className="text-2xl font-bold text-primary-light mb-6">Reports</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-dark p-4 rounded-lg border border-gray-800">
                <h3 className="text-lg font-semibold text-gray-200 mb-4">User Growth</h3>
                {/* Add chart or statistics here */}
                <p className="text-gray-400">Chart placeholder</p>
              </div>
              <div className="bg-dark p-4 rounded-lg border border-gray-800">
                <h3 className="text-lg font-semibold text-gray-200 mb-4">Event Analytics</h3>
                {/* Add chart or statistics here */}
                <p className="text-gray-400">Chart placeholder</p>
              </div>
            </div>
          </div>
        )

      case 'settings':
        return (
          <div className="bg-dark-darker rounded-lg p-6 shadow-lg border border-gray-800">
            <h2 className="text-2xl font-bold text-primary-light mb-6">Settings</h2>
            <div className="space-y-6">
              <div className="bg-dark p-4 rounded-lg border border-gray-800">
                <h3 className="text-lg font-semibold text-gray-200 mb-4">General Settings</h3>
                {/* Add settings form here */}
                <p className="text-gray-400">Settings placeholder</p>
              </div>
              <div className="bg-dark p-4 rounded-lg border border-gray-800">
                <h3 className="text-lg font-semibold text-gray-200 mb-4">Notification Settings</h3>
                {/* Add notification settings here */}
                <p className="text-gray-400">Notification settings placeholder</p>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="pt-16 bg-dark min-h-screen">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-dark-darker to-dark relative overflow-hidden">
        <AnimatedBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-light via-secondary-light to-primary-light text-transparent bg-clip-text">
              Admin Dashboard
            </h1>
            <p className="text-gray-300">Manage and monitor your platform efficiently</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-dark-darker rounded-lg p-4 shadow-lg border border-gray-800">
              <nav className="space-y-2">
                {[
                  { name: 'Dashboard', icon: <ChartBarIcon className="h-5 w-5" />, id: 'dashboard' },
                  { name: 'Users', icon: <UserGroupIcon className="h-5 w-5" />, id: 'users' },
                  { name: 'Events', icon: <CalendarIcon className="h-5 w-5" />, id: 'events' },
                  { name: 'Reports', icon: <DocumentTextIcon className="h-5 w-5" />, id: 'reports' },
                  { name: 'Settings', icon: <CogIcon className="h-5 w-5" />, id: 'settings' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedSection(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-200 ${
                      selectedSection === item.id
                        ? 'bg-primary text-white'
                        : 'text-gray-400 hover:bg-dark-light hover:text-white'
                    }`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Notifications */}
            <div className="mt-8 bg-dark-darker rounded-lg p-4 shadow-lg border border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <BellIcon className="h-5 w-5 text-primary-light" />
                Notifications
              </h3>
              <div className="space-y-4">
                {notifications.map((notification, index) => (
                  <div key={index} className="p-3 bg-dark rounded-lg border border-gray-800">
                    <div className="flex justify-between items-start">
                      <h4 className="text-sm font-medium text-gray-200">{notification.title}</h4>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        notification.priority === 'high' 
                          ? 'bg-red-500/20 text-red-400'
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {notification.priority}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">{notification.description}</p>
                    <span className="text-xs text-gray-500 mt-2 block">{notification.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-8">
            {isLoggedIn ? renderContent() : (
              <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="card p-8">
                  <h2 className="text-2xl font-bold text-primary-light mb-6">Admin Login</h2>
                  {error && (
                    <div className="bg-red-500/20 text-red-400 p-3 rounded-md mb-4">
                      {error}
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="username" className="block text-sm font-medium text-gray-300">
                        Username
                      </label>
                      <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md bg-dark-light border-gray-700 text-gray-300 focus:border-primary focus:ring-primary"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md bg-dark-light border-gray-700 text-gray-300 focus:border-primary focus:ring-primary"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-md transition-colors duration-200"
                    >
                      Login
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin 