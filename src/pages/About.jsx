import { motion } from 'framer-motion'
import { AcademicCapIcon, BuildingOfficeIcon, GlobeAltIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import AnimatedBackground from '../components/AnimatedBackground'

const About = () => {
  const teamMembers = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      image: "https://i.pravatar.cc/300?img=1",
      bio: "Visionary leader with 15+ years of experience in startup ecosystem.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Emma Wilson",
      role: "Head of Innovation",
      image: "https://i.pravatar.cc/300?img=5",
      bio: "Former startup founder with expertise in product development.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Michael Chen",
      role: "Technical Director",
      image: "https://i.pravatar.cc/300?img=12",
      bio: "Tech veteran specializing in scalable architecture.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ]

  const stats = [
    { number: "500+", label: "Startups Supported", icon: <BuildingOfficeIcon className="h-8 w-8" /> },
    { number: "50M+", label: "Funding Raised", icon: <GlobeAltIcon className="h-8 w-8" /> },
    { number: "100+", label: "Mentors", icon: <AcademicCapIcon className="h-8 w-8" /> },
    { number: "1000+", label: "Community Members", icon: <UserGroupIcon className="h-8 w-8" /> }
  ]

  const milestones = [
    { year: "2018", event: "Startup Sphere Founded" },
    { year: "2019", event: "First Batch of 10 Startups Incubated" },
    { year: "2020", event: "Launched Innovation Hub" },
    { year: "2021", event: "Expanded to 3 Cities" },
    { year: "2022", event: "50+ Successful Startups" },
    { year: "2023", event: "International Partnerships" }
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
              Our Story
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Building tomorrow's innovations by empowering today's entrepreneurs. Join us in shaping the future of technology and business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-dark-darker">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-lg bg-dark/50 backdrop-blur-sm border border-gray-800 hover:border-primary-light transition-all duration-300"
              >
                <div className="inline-block p-3 rounded-full bg-primary/10 text-primary-light mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-primary-light mb-2">{stat.number}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-lg bg-dark-darker/50 backdrop-blur-sm border border-gray-800"
            >
              <h3 className="text-2xl font-bold text-primary-light mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To empower entrepreneurs with the tools, resources, and connections they need to transform their innovative ideas into successful businesses.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-lg bg-dark-darker/50 backdrop-blur-sm border border-gray-800"
            >
              <h3 className="text-2xl font-bold text-secondary-light mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To be the leading global platform for startup innovation and entrepreneurial success, fostering a community of game-changers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-dark-darker">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary-light mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary-light/20"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="p-6 rounded-lg bg-dark/50 backdrop-blur-sm border border-gray-800 hover:border-primary-light transition-all duration-300">
                      <span className="text-xl font-bold text-secondary-light">{milestone.year}</span>
                      <p className="text-gray-300 mt-2">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-dark-darker"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary-light mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-lg bg-dark-darker/50 backdrop-blur-sm border border-gray-800 p-6 hover:border-primary-light transition-all duration-300"
              >
                <div className="relative z-10">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-primary-light group-hover:scale-105 transition-transform duration-300"
                  />
                  <h3 className="text-xl font-semibold text-secondary-light text-center">{member.name}</h3>
                  <p className="text-primary-light mb-2 text-center">{member.role}</p>
                  <p className="text-gray-400 text-center mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-4">
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-primary-light transition-colors">
                      <span className="sr-only">LinkedIn</span>
                      {/* Add LinkedIn icon */}
                    </a>
                    <a href={member.social.twitter} className="text-gray-400 hover:text-primary-light transition-colors">
                      <span className="sr-only">Twitter</span>
                      {/* Add Twitter icon */}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 