import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl">
            Startup Sphere
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/departments" className="hover:text-gray-300">Departments</Link>
            <Link to="/events" className="hover:text-gray-300">Events</Link>
            <Link to="/admin" className="hover:text-gray-300">Admin</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar