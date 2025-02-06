import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-dark-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary-light mb-4">Startup Sphere</h3>
            <p className="text-gray-400">Empowering the next generation of entrepreneurs and innovators.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-secondary-light mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-primary-light transition-colors duration-300">Home</Link></li>
              <li><Link to="/departments" className="text-gray-400 hover:text-primary-light transition-colors duration-300">Departments</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-primary-light transition-colors duration-300">Events</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-secondary-light mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>contact@startupsphere.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Innovation Street</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-secondary-light mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-light transition-colors duration-300">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
              </a>
              {/* Add more social media icons */}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Startup Sphere. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 