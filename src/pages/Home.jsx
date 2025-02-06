import { motion } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import Mission from '../components/home/Mission'
import PositionStructure from '../components/home/PositionStructure'
import Highlights from '../components/home/Highlights'
import Achievements from '../components/home/Achievements'
import Alumni from '../components/home/Alumni'
import ContactForm from '../components/home/ContactForm'

const Home = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="h-screen relative bg-gradient-to-br from-dark-darker to-dark flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-light to-secondary-light text-transparent bg-clip-text"
          >
            Startup Sphere
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            Where Innovation Meets Opportunity
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center space-x-4"
          >
            <button className="px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors duration-300">
              Get Started
            </button>
            <button className="px-8 py-3 border border-primary text-primary hover:bg-primary/10 rounded-lg transition-colors duration-300">
              Learn More
            </button>
          </motion.div>
        </div>
        <button 
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-primary-light transition-colors duration-300"
        >
          <ChevronDownIcon className="h-8 w-8 animate-bounce" />
        </button>
      </section>

      {/* Main Content */}
      <div className="bg-dark">
        <Mission />
        <PositionStructure />
        <Highlights />
        <Achievements />
        <Alumni />
        <ContactForm />
      </div>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-br from-primary/20 to-secondary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-light mb-8">Stay Updated</h2>
          <p className="text-gray-300 mb-8">Subscribe to our newsletter for the latest updates and opportunities.</p>
          <form className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg bg-dark-light border border-gray-700 text-gray-200 focus:border-primary focus:ring-primary"
            />
            <button className="px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors duration-300">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Home