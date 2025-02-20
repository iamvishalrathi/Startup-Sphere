import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  CalendarIcon, 
  MapPinIcon, 
  UserGroupIcon, 
  ClockIcon,
  TagIcon,
  VideoCameraIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  ShareIcon,
  HeartIcon
} from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'
import AnimatedBackground from '../components/AnimatedBackground'

const Events = () => {
  // Define events array at the component level
  const events = [
    {
      id: 1,
      title: "Startup Summit 2024",
      type: "Conference",
      status: "Upcoming",
      date: "March 15, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "Innovation Center, Silicon Valley",
      mode: "Hybrid",
      description: "Join industry leaders and innovative startups for a day of networking, knowledge sharing, and opportunities.",
      speakers: [
        { name: "Sarah Johnson", role: "CEO, TechVentures" },
        { name: "Mark Zhang", role: "Venture Capitalist" }
      ],
      topics: ["AI/ML", "Funding", "Growth"],
      registrationLink: "#",
      price: "Free",
      capacity: "500 attendees"
    },
    {
      id: 2,
      title: "Tech Innovators Workshop",
      type: "Workshop",
      status: "Upcoming",
      date: "March 25, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Virtual",
      mode: "Online",
      description: "Hands-on workshop focusing on emerging technologies and their practical applications in startups.",
      speakers: [
        { name: "David Chen", role: "CTO, AI Solutions" },
        { name: "Emily Parker", role: "Tech Lead, Google" }
      ],
      topics: ["Web3", "Blockchain", "Cloud Computing"],
      registrationLink: "#",
      price: "$49",
      capacity: "100 attendees"
    },
    {
      id: 3,
      title: "Investor Networking Night",
      type: "Networking",
      status: "Upcoming",
      date: "April 5, 2024",
      time: "6:30 PM - 9:30 PM",
      location: "Skyline Lounge, Downtown",
      mode: "In-person",
      description: "Exclusive evening of networking with top investors, VCs, and successful entrepreneurs.",
      speakers: [
        { name: "Robert Miller", role: "Partner, VC Fund" },
        { name: "Lisa Wong", role: "Angel Investor" }
      ],
      topics: ["Investment", "Networking", "Pitch Practice"],
      registrationLink: "#",
      price: "$199",
      capacity: "75 attendees"
    },
    {
      id: 4,
      title: "Startup Hackathon 2024",
      type: "Hackathon",
      status: "Upcoming",
      date: "April 15-17, 2024",
      time: "48 Hours",
      location: "Tech Campus",
      mode: "Hybrid",
      description: "48-hour hackathon to build innovative solutions for real-world problems. $10,000 in prizes!",
      speakers: [
        { name: "Alex Rivera", role: "Head of Innovation, Microsoft" },
        { name: "Nina Patel", role: "Product Lead, Amazon" }
      ],
      topics: ["Innovation", "Coding", "Problem Solving"],
      registrationLink: "#",
      price: "$25",
      capacity: "200 teams"
    },
    {
      id: 5,
      title: "Growth Marketing Masterclass",
      type: "Workshop",
      status: "Upcoming",
      date: "April 20, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Business Center",
      mode: "In-person",
      description: "Learn advanced growth marketing strategies from industry experts who've scaled successful startups.",
      speakers: [
        { name: "James Wilson", role: "Growth Lead, Stripe" },
        { name: "Maria Garcia", role: "Marketing Director, Netflix" }
      ],
      topics: ["Marketing", "Growth", "Analytics"],
      registrationLink: "#",
      price: "$149",
      capacity: "50 attendees"
    },
    {
      id: 6,
      title: "Founder Fireside Chat",
      type: "Conference",
      status: "Upcoming",
      date: "May 1, 2024",
      time: "5:00 PM - 7:00 PM",
      location: "Community Hall",
      mode: "Hybrid",
      description: "Intimate discussion with successful founders sharing their journey, challenges, and lessons learned.",
      speakers: [
        { name: "Tom Anderson", role: "Founder, TechStart" },
        { name: "Sophie Kim", role: "CEO, HealthTech" }
      ],
      topics: ["Leadership", "Entrepreneurship", "Success Stories"],
      registrationLink: "#",
      price: "Free",
      capacity: "150 attendees"
    }
  ]

  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filteredEvents, setFilteredEvents] = useState(events)
  const [searchTerm, setSearchTerm] = useState("")
  const [favorites, setFavorites] = useState([])
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)
  const [sortBy, setSortBy] = useState("date") // date, price

  const categories = [
    "All", 
    "Conference", 
    "Workshop", 
    "Networking", 
    "Hackathon", 
    "Online", 
    "In-person", 
    "Free Events"
  ]
  
  useEffect(() => {
    // Load favorites from localStorage
    const savedFavorites = localStorage.getItem('eventFavorites')
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites))
    }
  }, [])

  const toggleFavorite = (eventId) => {
    const newFavorites = favorites.includes(eventId)
      ? favorites.filter(id => id !== eventId)
      : [...favorites, eventId]
    
    setFavorites(newFavorites)
    localStorage.setItem('eventFavorites', JSON.stringify(newFavorites))
  }

  const shareEvent = async (event) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: event.title,
          text: event.description,
          url: window.location.href
        })
      } catch (err) {
        console.log('Error sharing:', err)
      }
    }
  }

  const filterAndSortEvents = () => {
    let result = [...events]

    // Category filter
    if (selectedCategory !== "All") {
      if (selectedCategory === "Free Events") {
        result = result.filter(event => event.price === "Free")
      } else if (selectedCategory === "Online" || selectedCategory === "In-person") {
        result = result.filter(event => event.mode === selectedCategory)
      } else {
        result = result.filter(event => event.type === selectedCategory)
      }
    }

    // Search filter
    if (searchTerm) {
      result = result.filter(event => 
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    // Favorites filter
    if (showFavoritesOnly) {
      result = result.filter(event => favorites.includes(event.id))
    }

    // Sorting
    if (sortBy === "price") {
      result.sort((a, b) => {
        const priceA = a.price === "Free" ? 0 : parseInt(a.price.replace(/[^0-9]/g, ''))
        const priceB = b.price === "Free" ? 0 : parseInt(b.price.replace(/[^0-9]/g, ''))
        return priceA - priceB
      })
    } else {
      result.sort((a, b) => new Date(a.date) - new Date(b.date))
    }

    return result
  }

  useEffect(() => {
    setFilteredEvents(filterAndSortEvents())
  }, [selectedCategory, searchTerm, showFavoritesOnly, sortBy, favorites])

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
              Upcoming Events
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join our community events and connect with fellow entrepreneurs, mentors, and industry experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters Section */}
      <section className="py-8 bg-dark-darker sticky top-16 z-20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search events, topics, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-dark-light border border-gray-700 text-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300"
              />
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  showFavoritesOnly ? 'bg-primary text-white' : 'bg-dark-light text-gray-300 hover:bg-primary/20'
                }`}
              >
                {showFavoritesOnly ? <HeartIconSolid className="h-5 w-5" /> : <HeartIcon className="h-5 w-5" />}
                Favorites
              </button>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-lg bg-dark-light border border-gray-700 text-gray-300 focus:border-primary outline-none"
              >
                <option value="date">Sort by Date</option>
                <option value="price">Sort by Price</option>
              </select>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-dark-light hover:bg-primary/20 text-gray-300 hover:text-primary-light'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredEvents.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-400 text-xl">No events found matching your criteria.</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatePresence mode="wait">
                {filteredEvents.map((event) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    layout
                    className="group relative rounded-lg overflow-hidden"
                  >
                    <div className="p-6 bg-dark-darker/80 backdrop-blur-sm border border-gray-800 rounded-lg hover:border-primary-light transition-all duration-300">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-2">
                          <span className={`px-3 py-1 rounded-full text-sm ${
                            event.status === 'Upcoming' ? 'bg-primary-light/20 text-primary-light' : 
                            'bg-secondary-light/20 text-secondary-light'
                          }`}>
                            {event.status}
                          </span>
                          <div className="flex items-center gap-2">
                            <TagIcon className="h-4 w-4 text-gray-400" />
                            <span className="text-sm text-gray-400">{event.type}</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => shareEvent(event)}
                            className="p-2 rounded-full bg-dark-darker/80 text-gray-300 hover:text-primary-light transition-colors duration-300"
                          >
                            <ShareIcon className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => toggleFavorite(event.id)}
                            className="p-2 rounded-full bg-dark-darker/80 text-gray-300 hover:text-primary-light transition-colors duration-300"
                          >
                            {favorites.includes(event.id) ? (
                              <HeartIconSolid className="h-5 w-5 text-primary-light" />
                            ) : (
                              <HeartIcon className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                      </div>

                      <h2 className="text-2xl font-semibold text-secondary-light mb-4">{event.title}</h2>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 text-gray-300">
                          <CalendarIcon className="h-5 w-5 text-primary-light" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                          <ClockIcon className="h-5 w-5 text-primary-light" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                          <MapPinIcon className="h-5 w-5 text-primary-light" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                          <VideoCameraIcon className="h-5 w-5 text-primary-light" />
                          <span>{event.mode}</span>
                        </div>
                      </div>

                      <p className="text-gray-400 mb-6">{event.description}</p>

                      {/* Speakers */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-primary-light mb-3">Speakers</h4>
                        <div className="space-y-2">
                          {event.speakers.map((speaker, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <UserGroupIcon className="h-5 w-5 text-gray-400" />
                              <div>
                                <p className="text-gray-300">{speaker.name}</p>
                                <p className="text-sm text-gray-400">{speaker.role}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Topics */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {event.topics.map((topic, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary-light"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-primary-light">{event.price}</span>
                        <span className="text-gray-400 text-sm">
                          <UserGroupIcon className="h-4 w-4 inline mr-1" />
                          {event.capacity}
                        </span>
                      </div>

                      <button className="mt-6 w-full py-3 px-4 rounded-lg bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark text-white transition-all duration-300 transform hover:scale-105">
                        Register Now
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Events 