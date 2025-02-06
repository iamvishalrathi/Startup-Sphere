import { useState } from 'react'

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [formData, setFormData] = useState({ username: '', password: '' })
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.username === 'test123' && formData.password === 'test123') {
      setIsLoggedIn(true)
      setError('')
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
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {!isLoggedIn ? (
        <div className="max-w-md mx-auto card p-8">
          <h2 className="text-2xl font-bold mb-6 text-primary-light text-center">Admin Login</h2>
          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-500 rounded-md p-3 mb-4">
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
                name="username"
                id="username"
                value={formData.username}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md input-dark"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md input-dark"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors duration-200"
            >
              Login
            </button>
          </form>
        </div>
      ) : (
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
        </div>
      )}
    </div>
  )
}

export default Admin 