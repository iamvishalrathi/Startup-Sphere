import { motion } from 'framer-motion'
import { 
  CodeBracketIcon, 
  MegaphoneIcon, 
  WrenchScrewdriverIcon,
  UserGroupIcon,
  RocketLaunchIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline'
import AnimatedBackground from '../components/AnimatedBackground'

const Departments = () => {
  const departments = [
    {
      title: "Technical",
      icon: <CodeBracketIcon className="h-8 w-8" />,
      description: "Building innovative solutions and maintaining technical infrastructure",
      roles: [
        { title: "Full Stack Developer", count: "4 positions" },
        { title: "UI/UX Designer", count: "2 positions" },
        { title: "DevOps Engineer", count: "1 position" }
      ],
      projects: ["Project Atlas", "Cloud Migration", "Mobile App"],
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Marketing",
      icon: <MegaphoneIcon className="h-8 w-8" />,
      description: "Creating brand awareness and managing social media presence",
      roles: [
        { title: "Content Writer", count: "2 positions" },
        { title: "Social Media Manager", count: "2 positions" },
        { title: "Brand Strategist", count: "1 position" }
      ],
      projects: ["Brand Refresh", "Social Campaign", "Content Strategy"],
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Operations",
      icon: <WrenchScrewdriverIcon className="h-8 w-8" />,
      description: "Ensuring smooth functioning of all organizational activities",
      roles: [
        { title: "Project Manager", count: "2 positions" },
        { title: "Event Coordinator", count: "2 positions" },
        { title: "Resource Manager", count: "1 position" }
      ],
      projects: ["Process Optimization", "Event Planning", "Resource Allocation"],
      color: "from-orange-500/20 to-red-500/20"
    }
  ]

  const features = [
    {
      icon: <UserGroupIcon className="h-6 w-6" />,
      title: "Collaborative Environment",
      description: "Work with diverse teams across different domains"
    },
    {
      icon: <RocketLaunchIcon className="h-6 w-6" />,
      title: "Fast-Paced Growth",
      description: "Rapid learning and career advancement opportunities"
    },
    {
      icon: <CurrencyDollarIcon className="h-6 w-6" />,
      title: "Competitive Benefits",
      description: "Attractive compensation and perks package"
    },
    {
      icon: <LightBulbIcon className="h-6 w-6" />,
      title: "Innovation Focus",
      description: "Freedom to experiment and bring new ideas"
    }
  ]

  return (
    <div className="pt-16 bg-dark">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-dark-darker to-dark relative overflow-hidden">
        <AnimatedBackground />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-light via-secondary-light to-primary-light text-transparent bg-clip-text">
              Our Departments
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our dynamic teams and be part of building the future of innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-dark-darker">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-lg bg-dark/50 backdrop-blur-sm border border-gray-800 hover:border-primary-light transition-all duration-300"
              >
                <div className="inline-block p-2 rounded-lg bg-primary/10 text-primary-light mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-secondary-light mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-lg overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${dept.color} opacity-20`} />
                <div className="relative p-8 bg-dark-darker/80 backdrop-blur-sm border border-gray-800 rounded-lg hover:border-primary-light transition-all duration-300">
                  <div className="inline-block p-3 rounded-full bg-primary/10 text-primary-light mb-4">
                    {dept.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-secondary-light mb-3">{dept.title}</h3>
                  <p className="text-gray-400 mb-6">{dept.description}</p>
                  
                  {/* Open Positions */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-primary-light mb-3">Open Positions</h4>
                    <ul className="space-y-2">
                      {dept.roles.map((role, idx) => (
                        <li key={idx} className="flex justify-between items-center text-gray-300">
                          <span>{role.title}</span>
                          <span className="text-sm text-primary-light">{role.count}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Current Projects */}
                  <div>
                    <h4 className="text-lg font-semibold text-primary-light mb-3">Current Projects</h4>
                    <div className="flex flex-wrap gap-2">
                      {dept.projects.map((project, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary-light"
                        >
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="mt-6 w-full py-2 px-4 rounded-lg bg-primary hover:bg-primary-dark text-white transition-colors duration-300">
                    View Openings
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-dark-darker">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <ChartBarIcon className="h-8 w-8 mx-auto text-primary-light mb-4" />
              <h4 className="text-3xl font-bold text-secondary-light mb-2">15+</h4>
              <p className="text-gray-400">Open Positions</p>
            </div>
            <div className="text-center">
              <UserGroupIcon className="h-8 w-8 mx-auto text-primary-light mb-4" />
              <h4 className="text-3xl font-bold text-secondary-light mb-2">50+</h4>
              <p className="text-gray-400">Team Members</p>
            </div>
            <div className="text-center">
              <RocketLaunchIcon className="h-8 w-8 mx-auto text-primary-light mb-4" />
              <h4 className="text-3xl font-bold text-secondary-light mb-2">20+</h4>
              <p className="text-gray-400">Active Projects</p>
            </div>
            <div className="text-center">
              <LightBulbIcon className="h-8 w-8 mx-auto text-primary-light mb-4" />
              <h4 className="text-3xl font-bold text-secondary-light mb-2">100%</h4>
              <p className="text-gray-400">Innovation Focus</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Departments 