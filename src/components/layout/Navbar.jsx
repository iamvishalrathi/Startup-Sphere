import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  const isActiveLink = (path) => {
    return location.pathname === path ? "bg-primary text-white" : "text-gray-300 hover:text-white"
  }

  return (
    <nav className="bg-dark-darker shadow-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-secondary-light font-bold text-2xl">Startup</span>
            <span className="text-primary-light font-bold text-2xl">Sphere</span>
          </Link>
          <div className="flex space-x-1">
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-md transition-colors duration-200 ${isActiveLink('/')}`}
            >
              Home
            </Link>
            <Link 
              to="/departments" 
              className={`px-4 py-2 rounded-md hover:bg-primary-dark transition-colors duration-200 ${isActiveLink('/departments')}`}
            >
              Departments
            </Link>
            <Link 
              to="/events" 
              className={`px-4 py-2 rounded-md hover:bg-primary-dark transition-colors duration-200 ${isActiveLink('/events')}`}
            >
              Events
            </Link>
            <Link 
              to="/admin" 
              className={`px-4 py-2 rounded-md hover:bg-primary-dark transition-colors duration-200 ${isActiveLink('/admin')}`}
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar