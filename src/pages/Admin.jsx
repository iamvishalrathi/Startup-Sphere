import { useState, useEffect } from 'react'

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

  return (
    <div className="min-h-screen bg-dark pt-16">
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
  )
}

export default Admin 