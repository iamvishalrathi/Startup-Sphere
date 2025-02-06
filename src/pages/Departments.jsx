import { useState } from 'react'

const Departments = () => {
  const [departments] = useState([
    {
      id: 1,
      name: "Technical Department",
      head: "Alex Thompson",
      email: "tech@startupsphere.com",
      description: "Handles all technical aspects of startup development and provides technical mentorship.",
      openPositions: ["Full Stack Developer", "UI/UX Designer", "DevOps Engineer"],
      projects: ["Startup Portal", "Innovation Lab System", "Mentorship Platform"]
    },
    {
      id: 2,
      name: "Marketing Department",
      head: "Sarah Williams",
      email: "marketing@startupsphere.com",
      description: "Manages brand presence and helps startups with their marketing strategies.",
      openPositions: ["Content Writer", "Social Media Manager", "Brand Strategist"],
      projects: ["Brand Campaign", "Social Media Strategy", "Content Calendar"]
    },
    {
      id: 3,
      name: "Operations Department",
      head: "Michael Rodriguez",
      email: "operations@startupsphere.com",
      description: "Ensures smooth functioning of all organizational activities and event management.",
      openPositions: ["Project Manager", "Event Coordinator", "Resource Manager"],
      projects: ["Event Management", "Resource Allocation", "Process Optimization"]
    }
  ])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-primary-light mb-12 text-center">Our Departments</h1>
      <div className="grid grid-cols-1 gap-8">
        {departments.map((dept) => (
          <div key={dept.id} className="card p-6 hover:border-primary-light transition-colors duration-300">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="mb-4 md:mb-0">
                <h2 className="text-2xl font-semibold text-secondary-light mb-2">{dept.name}</h2>
                <p className="text-gray-400 mb-4">{dept.description}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span>Head: {dept.head}</span>
                  <span>•</span>
                  <span>{dept.email}</span>
                </div>
              </div>
            </div>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-primary-light mb-3">Open Positions</h3>
                <ul className="space-y-2">
                  {dept.openPositions.map((position, idx) => (
                    <li key={idx} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-secondary-light rounded-full mr-2"></span>
                      {position}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary-light mb-3">Current Projects</h3>
                <ul className="space-y-2">
                  {dept.projects.map((project, idx) => (
                    <li key={idx} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-secondary-light rounded-full mr-2"></span>
                      {project}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Departments 