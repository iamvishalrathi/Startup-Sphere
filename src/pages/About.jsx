import { motion } from 'framer-motion'

const About = () => {
  const teamMembers = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      image: "https://i.pravatar.cc/300?img=1",
      bio: "Visionary leader with 15+ years of experience in startup ecosystem."
    },
    {
      name: "Emma Wilson",
      role: "Head of Innovation",
      image: "https://i.pravatar.cc/300?img=5",
      bio: "Former startup founder with expertise in product development."
    },
    {
      name: "Michael Chen",
      role: "Technical Director",
      image: "https://i.pravatar.cc/300?img=12",
      bio: "Tech veteran specializing in scalable architecture."
    }
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
      <section className="py-20 bg-gradient-to-br from-dark-darker to-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-light to-secondary-light text-transparent bg-clip-text">
              Our Story
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building tomorrow's innovations by empowering today's entrepreneurs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-primary-light mb-4">Our Mission</h2>
              <p className="text-gray-300">
                To foster innovation and entrepreneurship by providing a supportive ecosystem 
                that empowers students and young professionals to transform their ideas into 
                successful ventures.
              </p>
            </div>
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-secondary-light mb-4">Our Vision</h2>
              <p className="text-gray-300">
                To become the leading startup incubator, recognized globally for nurturing 
                groundbreaking ideas and fostering the next generation of successful entrepreneurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-dark-darker">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary-light mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary-light/20"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="card p-6">
                      <span className="text-xl font-bold text-secondary-light">{milestone.year}</span>
                      <p className="text-gray-300 mt-2">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-light rounded-full"></div>
                </div>
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
                className="card p-6 text-center"
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-primary-light"
                />
                <h3 className="text-xl font-semibold text-secondary-light">{member.name}</h3>
                <p className="text-primary-light mb-2">{member.role}</p>
                <p className="text-gray-400">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 