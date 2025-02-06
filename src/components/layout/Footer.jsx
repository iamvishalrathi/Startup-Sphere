import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-dark-darker text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-primary-light text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-secondary-light transition-colors duration-200">Home</Link></li>
              <li><Link to="/departments" className="hover:text-secondary-light transition-colors duration-200">Departments</Link></li>
              <li><Link to="/events" className="hover:text-secondary-light transition-colors duration-200">Events</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-primary-light text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <span>📧</span>
                <span>contact@startupsphere.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📱</span>
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📍</span>
                <span>123 Startup Street, Innovation City</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-primary-light text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary-light transition-colors duration-200 p-2 border border-gray-800 rounded-full">
                LinkedIn
              </a>
              <a href="#" className="hover:text-secondary-light transition-colors duration-200 p-2 border border-gray-800 rounded-full">
                Twitter
              </a>
              <a href="#" className="hover:text-secondary-light transition-colors duration-200 p-2 border border-gray-800 rounded-full">
                Instagram
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Startup Sphere. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 