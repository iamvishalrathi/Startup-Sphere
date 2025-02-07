import { motion } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { RocketLaunchIcon, LightBulbIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/react/24/outline'
import Mission from '../components/home/Mission'
import PositionStructure from '../components/home/PositionStructure'
import Highlights from '../components/home/Highlights'
import Achievements from '../components/home/Achievements'
import Alumni from '../components/home/Alumni'
import ContactForm from '../components/home/ContactForm'
import AnimatedBackground from '../components/AnimatedBackground'
import { Link } from 'react-router-dom'

const Home = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  const scrollToContact = () => {
    // Scroll to the contact form section smoothly
    document.querySelector('#contact-section').scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }

  const features = [
    {
      icon: <RocketLaunchIcon className="h-8 w-8" />,
      title: "Launch Fast",
      description: "Get your startup off the ground quickly with our proven methodology"
    },
    {
      icon: <LightBulbIcon className="h-8 w-8" />,
      title: "Innovate",
      description: "Access cutting-edge resources and mentorship to drive innovation"
    },
    {
      icon: <UserGroupIcon className="h-8 w-8" />,
      title: "Network",
      description: "Connect with industry leaders and like-minded entrepreneurs"
    },
    {
      icon: <ChartBarIcon className="h-8 w-8" />,
      title: "Grow",
      description: "Scale your business with our comprehensive support system"
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="h-screen relative bg-gradient-to-br from-dark-darker to-dark flex items-center overflow-hidden">
        <AnimatedBackground />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-block p-3 rounded-full bg-primary/10 text-primary-light mb-4">
              <RocketLaunchIcon className="h-8 w-8" />
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-light via-secondary-light to-primary-light text-transparent bg-clip-text"
          >
            Startup Sphere
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Where Innovation Meets Opportunity. Join the next generation of successful entrepreneurs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <button 
              onClick={scrollToContact}
              className="px-8 py-3 bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/20"
            >
              Let's Connect
            </button>
            <Link 
              to="/about"
              className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary/10 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              About Us
            </Link>
          </motion.div>
        </div>
        <motion.button 
          onClick={scrollToNext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-primary-light transition-colors duration-300 z-10"
        >
          <ChevronDownIcon className="h-8 w-8 animate-bounce" />
        </motion.button>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-dark-darker relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6 text-center hover:bg-dark-light/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="inline-block p-3 rounded-full bg-primary/10 text-primary-light mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-secondary-light mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-dark">
        <Mission />
        <PositionStructure />
        <Highlights />
        <Achievements />
        <Alumni />
        <div id="contact-section">
          <ContactForm />
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-darker/50 backdrop-blur-sm"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-primary-light mb-8">Stay Updated</h2>
            <p className="text-gray-300 mb-8">Subscribe to our newsletter for the latest updates and opportunities.</p>
            <form className="flex flex-col md:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg bg-dark-light/50 backdrop-blur-sm border border-gray-700 text-gray-200 focus:border-primary focus:ring-primary focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/20">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home