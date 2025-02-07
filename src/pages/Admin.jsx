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

            {/* Your existing admin content can go here */}
            <div className="bg-dark-darker rounded-lg p-6 shadow-lg border border-gray-800">
              {isLoggedIn ? (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                  <div className="card p-8">
                    <div className="flex justify-between items-center mb-8">
                      <h1 className="text-3xl font-bold text-primary-light">Admin Dashboard</h1>
                      <button
                        onClick={handleLogout}
                        className="bg-dark-light px-4 py-2 rounded-md text-gray-300 hover:bg-dark-darker transition-colors duration-200"
                      >
                        Logout
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="card p-6">
                        <h3 className="text-xl font-semibold text-secondary-light mb-4">Quick Stats</h3>
                        <div className="space-y-3">
                          <p className="text-gray-300">Total Users: 1,234</p>
                          <p className="text-gray-300">Active Projects: 45</p>
                          <p className="text-gray-300">Pending Applications: 12</p>
                        </div>
                      </div>
                      <div className="card p-6">
                        <h3 className="text-xl font-semibold text-secondary-light mb-4">Recent Activities</h3>
                        <div className="space-y-3 text-gray-300">
                          <p>New user registration</p>
                          <p>Event updated: Tech Talks</p>
                          <p>New project submission</p>
                        </div>
                      </div>
                      <div className="card p-6">
                        <h3 className="text-xl font-semibold text-secondary-light mb-4">System Status</h3>
                        <div className="space-y-3">
                          <p className="text-green-500">Server: Online</p>
                          <p className="text-green-500">Database: Connected</p>
                          <p className="text-green-500">API: Operational</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8">
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
                  </div>
                </div>
              ) : (
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
    </div>
  )
}

export default Admin 