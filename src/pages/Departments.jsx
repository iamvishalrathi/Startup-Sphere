import { useState } from 'react'

const Departments = () => {
  const [departments] = useState([
    {
      id: 1,
      name: "Technical Department",
      head: "Alex Thompson",
      image: "https://i.pravatar.cc/300?img=11",
      email: "tech@startupsphere.com",
      description: "Handles all technical aspects of startup development and provides technical mentorship.",
      openPositions: ["Full Stack Developer", "UI/UX Designer", "DevOps Engineer"],
      projects: ["Startup Portal", "Innovation Lab System", "Mentorship Platform"],
      subDepartments: [
        {
          name: "Web Development",
          head: "Emma Wilson",
          image: "https://i.pravatar.cc/300?img=5"
        },
        {
          name: "Mobile Development",
          head: "James Chen",
          image: "https://i.pravatar.cc/300?img=12"
        },
        {
          name: "DevOps",
          head: "Lisa Kumar",
          image: "https://i.pravatar.cc/300?img=6"
        }
      ]
    },
    {
      id: 2,
      name: "Marketing Department",
      head: "Sarah Williams",
      image: "https://i.pravatar.cc/300?img=4",
      email: "marketing@startupsphere.com",
      description: "Manages brand presence and helps startups with their marketing strategies.",
      openPositions: ["Content Writer", "Social Media Manager", "Brand Strategist"],
      projects: ["Brand Campaign", "Social Media Strategy", "Content Calendar"],
      subDepartments: [
        {
          name: "Digital Marketing",
          head: "David Park",
          image: "https://i.pravatar.cc/300?img=13"
        },
        {
          name: "Content Creation",
          head: "Sofia Garcia",
          image: "https://i.pravatar.cc/300?img=14"
        },
        {
          name: "Brand Management",
          head: "Tom Baker",
          image: "https://i.pravatar.cc/300?img=15"
        }
      ]
    },
    {
      id: 3,
      name: "Operations Department",
      head: "Michael Rodriguez",
      image: "https://i.pravatar.cc/300?img=8",
      email: "operations@startupsphere.com",
      description: "Ensures smooth functioning of all organizational activities and event management.",
      openPositions: ["Project Manager", "Event Coordinator", "Resource Manager"],
      projects: ["Event Management", "Resource Allocation", "Process Optimization"],
      subDepartments: [
        {
          name: "Event Management",
          head: "Rachel Kim",
          image: "https://i.pravatar.cc/300?img=9"
        },
        {
          name: "Resource Planning",
          head: "Mark Johnson",
          image: "https://i.pravatar.cc/300?img=16"
        },
        {
          name: "Quality Assurance",
          head: "Anna Smith",
          image: "https://i.pravatar.cc/300?img=10"
        }
      ]
    }
  ])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-primary-light mb-12 text-center">Our Departments</h1>
      
      {/* Organization Tree */}
      <div className="mb-16">
        <div className="flex justify-center mb-8">
          <div className="text-center">
            <img 
              src="https://i.pravatar.cc/300?img=1" 
              alt="CEO" 
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-primary"
            />
            <h3 className="text-xl font-semibold text-secondary-light">John Smith</h3>
            <p className="text-primary-light">CEO</p>
          </div>
        </div>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-16 w-0.5 bg-primary-light"></div>
          
          {/* Department Heads */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            {departments.map((dept) => (
              <div key={dept.id} className="relative text-center">
                {/* Horizontal Line to Department Head */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-0.5 bg-primary-light"></div>
                <img 
                  src={dept.image} 
                  alt={dept.head} 
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-secondary"
                />
                <h3 className="text-lg font-semibold text-secondary-light">{dept.head}</h3>
                <p className="text-primary-light mb-8">{dept.name}</p>
                
                {/* Sub-departments */}
                <div className="grid grid-cols-1 gap-6">
                  {dept.subDepartments.map((sub, idx) => (
                    <div key={idx} className="relative">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-8 w-0.5 bg-primary-light/50"></div>
                      <div className="pt-8">
                        <img 
                          src={sub.image} 
                          alt={sub.head} 
                          className="w-16 h-16 rounded-full mx-auto mb-2 border-2 border-primary-light/50"
                        />
                        <h4 className="text-md font-medium text-secondary-light">{sub.head}</h4>
                        <p className="text-sm text-gray-400">{sub.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Department Details */}
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