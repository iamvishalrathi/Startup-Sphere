import { useState } from 'react'
import { motion } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/outline'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const categories = [
    { name: "Events", id: "events" },
    { name: "Workspace", id: "workspace" },
    { name: "Team", id: "team" },
    { name: "Success Stories", id: "success" }
  ]

  const photos = [
    {
      id: 1,
      category: "events",
      title: "Startup Weekend 2023",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b",
      description: "Annual startup pitching competition"
    },
    {
      id: 2,
      category: "workspace",
      title: "Innovation Hub",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
      description: "Our modern coworking space"
    },
    {
      id: 3,
      category: "team",
      title: "Team Building 2023",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      description: "Annual team building event"
    },
    {
      id: 4,
      category: "success",
      title: "Graduation Day",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18",
      description: "Celebrating our successful startups"
    },
    {
      id: 5,
      category: "events",
      title: "Tech Conference 2023",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
      description: "Annual technology conference"
    },
    {
      id: 6,
      category: "workspace",
      title: "Meeting Rooms",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
      description: "State-of-the-art meeting facilities"
    },
    // Add more photos here
  ]

  const [activeCategory, setActiveCategory] = useState("all")

  const filteredPhotos = activeCategory === "all" 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory)

  return (
    <div className="pt-16 bg-dark min-h-screen">
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-dark-darker to-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-light to-secondary-light text-transparent bg-clip-text">
            Photo Gallery
          </h1>
          <p className="text-xl text-gray-300">
            Capturing moments of innovation and success
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full transition-colors duration-300 ${
              activeCategory === "all"
                ? "bg-primary-light text-white"
                : "bg-dark-light text-gray-300 hover:bg-primary-light/20"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                activeCategory === category.id
                  ? "bg-primary-light text-white"
                  : "bg-dark-light text-gray-300 hover:bg-primary-light/20"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedImage(photo)}
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 p-4">
                    <h3 className="text-xl font-semibold text-white">{photo.title}</h3>
                    <p className="text-gray-300">{photo.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-primary-light"
            >
              <XMarkIcon className="h-8 w-8" />
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />
            <div className="mt-4">
              <h3 className="text-2xl font-semibold text-white">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery 