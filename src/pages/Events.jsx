import { useState } from 'react'

const Events = () => {
  const [events] = useState([
    {
      id: 1,
      title: "Startup Weekend 2024",
      date: "March 15-17, 2024",
      location: "Innovation Hub",
      description: "54-hour weekend event where groups of developers, business managers, startup enthusiasts, marketing experts, and more pitch ideas for new startup companies.",
      type: "Workshop",
      status: "Upcoming",
      registrationLink: "#"
    },
    {
      id: 2,
      title: "Tech Talks Series",
      date: "Every Tuesday",
      location: "Virtual",
      description: "Weekly tech talks featuring industry experts sharing insights on emerging technologies and startup trends.",
      type: "Webinar",
      status: "Ongoing",
      registrationLink: "#"
    },
    {
      id: 3,
      title: "Investor Pitch Day",
      date: "April 5, 2024",
      location: "Main Auditorium",
      description: "Selected startups get the opportunity to pitch their ideas to a panel of investors and venture capitalists.",
      type: "Competition",
      status: "Upcoming",
      registrationLink: "#"
    }
  ])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-primary-light mb-12 text-center">Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <div key={event.id} className="card p-6 hover:border-primary-light transition-colors duration-300">
            <div className="flex justify-between items-start mb-4">
              <span className={`px-3 py-1 rounded-full text-sm ${
                event.status === 'Upcoming' ? 'bg-primary-light/20 text-primary-light' : 
                'bg-secondary-light/20 text-secondary-light'
              }`}>
                {event.status}
              </span>
              <span className="text-sm text-gray-400">{event.type}</span>
            </div>
            <h2 className="text-xl font-semibold text-secondary-light mb-2">{event.title}</h2>
            <div className="text-gray-400 text-sm space-y-2 mb-4">
              <p className="flex items-center">
                <span className="mr-2">📅</span> {event.date}
              </p>
              <p className="flex items-center">
                <span className="mr-2">📍</span> {event.location}
              </p>
            </div>
            <p className="text-gray-300 mb-6">{event.description}</p>
            <a
              href={event.registrationLink}
              className="block text-center bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors duration-200"
            >
              Register Now
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Events 