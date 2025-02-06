const PositionStructure = () => {
  const departments = [
    {
      title: "Technical",
      description: "Building innovative solutions and maintaining technical infrastructure",
      roles: ["Full Stack Developer", "UI/UX Designer", "DevOps Engineer"]
    },
    {
      title: "Marketing",
      description: "Creating brand awareness and managing social media presence",
      roles: ["Content Writer", "Social Media Manager", "Brand Strategist"]
    },
    {
      title: "Operations",
      description: "Ensuring smooth functioning of all organizational activities",
      roles: ["Project Manager", "Event Coordinator", "Resource Manager"]
    }
  ]

  return (
    <section className="py-16 bg-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-light">Department Structure</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <div key={index} className="card p-6 hover:border-primary-light transition-colors duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-secondary-light">{dept.title}</h3>
              <p className="text-gray-400 mb-4">{dept.description}</p>
              <ul className="space-y-2">
                {dept.roles.map((role, idx) => (
                  <li key={idx} className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-primary-light rounded-full mr-2"></span>
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PositionStructure 