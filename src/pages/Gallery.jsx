import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MagnifyingGlassIcon, 
  HeartIcon, 
  ShareIcon,
  ArrowTopRightOnSquareIcon,
  CalendarIcon,
  TagIcon
} from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'
import AnimatedBackground from '../components/AnimatedBackground'

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [favorites, setFavorites] = useState([])
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [filteredImages, setFilteredImages] = useState([])

  const categories = ['All', 'Events', 'Workshops', 'Team', 'Office', 'Celebrations']

  const images = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b',
      title: 'Annual Startup Summit 2023',
      category: 'Events',
      date: '2023-12-15',
      description: 'Highlights from our biggest event of the year',
      tags: ['conference', 'networking', 'innovation']
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655',
      title: 'Tech Workshop Series',
      category: 'Workshops',
      date: '2023-11-20',
      description: 'Hands-on learning sessions with industry experts',
      tags: ['learning', 'technology', 'development']
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
      title: 'Team Building Day',
      category: 'Team',
      date: '2023-10-05',
      description: 'Our amazing team during the annual team building event',
      tags: ['team', 'culture', 'fun']
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
      title: 'Modern Office Space',
      category: 'Office',
      date: '2023-09-15',
      description: 'Our newly renovated office space designed for collaboration',
      tags: ['workspace', 'design', 'innovation']
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622',
      title: 'Holiday Celebration',
      category: 'Celebrations',
      date: '2023-12-22',
      description: 'End of year celebrations with the entire team',
      tags: ['celebration', 'team', 'party']
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa',
      title: 'Hackathon 2023',
      category: 'Events',
      date: '2023-08-30',
      description: '48 hours of non-stop innovation and coding',
      tags: ['hackathon', 'coding', 'innovation']
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998',
      title: 'Design Workshop',
      category: 'Workshops',
      date: '2023-07-15',
      description: 'UI/UX design workshop with industry experts',
      tags: ['design', 'workshop', 'learning']
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4',
      title: 'Team Lunch',
      category: 'Team',
      date: '2023-11-10',
      description: 'Monthly team lunch and bonding session',
      tags: ['team', 'culture', 'food']
    },
    {
      id: 9,
      url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0',
      title: 'Board Meeting',
      category: 'Office',
      date: '2023-10-20',
      description: 'Quarterly board meeting and strategy session',
      tags: ['meeting', 'business', 'strategy']
    }
  ]

  useEffect(() => {
    const savedFavorites = localStorage.getItem('galleryFavorites')
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites))
    }
  }, [])

  const toggleFavorite = (imageId) => {
    const newFavorites = favorites.includes(imageId)
      ? favorites.filter(id => id !== imageId)
      : [...favorites, imageId]
    
    setFavorites(newFavorites)
    localStorage.setItem('galleryFavorites', JSON.stringify(newFavorites))
  }

  const shareImage = async (image) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: image.title,
          text: image.description,
          url: image.url
        })
      } catch (err) {
        console.log('Error sharing:', err)
      }
    }
  }

  const filterImages = () => {
    let result = [...images]

    if (selectedCategory !== 'All') {
      result = result.filter(img => img.category === selectedCategory)
    }

    if (searchTerm) {
      result = result.filter(img => 
        img.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        img.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        img.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    if (showFavoritesOnly) {
      result = result.filter(img => favorites.includes(img.id))
    }

    setFilteredImages(result)
  }

  useEffect(() => {
    filterImages()
  }, [selectedCategory, searchTerm, showFavoritesOnly, favorites])

  // Initialize filteredImages with all images on component mount
  useEffect(() => {
    setFilteredImages(images)
  }, [])

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
              Our Gallery
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Capturing moments of innovation, collaboration, and success
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-dark-darker sticky top-16 z-20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search images..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-dark-light border border-gray-700 text-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
              />
            </div>
            <button
              onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                showFavoritesOnly ? 'bg-primary text-white' : 'bg-dark-light text-gray-300 hover:bg-primary/20'
              }`}
            >
              {showFavoritesOnly ? <HeartIconSolid className="h-5 w-5" /> : <HeartIcon className="h-5 w-5" />}
              Favorites
            </button>
          </div>

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

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredImages.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-400 text-xl">No images found matching your criteria.</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="wait">
                {filteredImages.map((image) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="group relative rounded-lg overflow-hidden"
                  >
                    <div className="aspect-w-16 aspect-h-12 relative">
                      <img
                        src={image.url}
                        alt={image.title}
                        className="object-cover w-full h-full rounded-lg cursor-pointer transform transition-transform duration-300 group-hover:scale-105"
                        onClick={() => setSelectedImage(image)}
                        loading="lazy"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/800x600?text=Image+Not+Found'
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-darker/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="text-lg font-semibold text-white mb-2">{image.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-gray-300">
                            <CalendarIcon className="h-4 w-4" />
                            <span>{new Date(image.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                          onClick={() => shareImage(image)}
                          className="p-2 rounded-full bg-dark-darker/80 text-white hover:bg-primary/80 transition-colors duration-300"
                        >
                          <ShareIcon className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => toggleFavorite(image.id)}
                          className="p-2 rounded-full bg-dark-darker/80 text-white hover:bg-primary/80 transition-colors duration-300"
                        >
                          {favorites.includes(image.id) ? (
                            <HeartIconSolid className="h-5 w-5 text-primary-light" />
                          ) : (
                            <HeartIcon className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-dark-darker/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative max-w-4xl w-full bg-dark-darker rounded-lg overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300 mb-4">{selectedImage.description}</p>
              <div className="flex flex-wrap gap-2">
                {selectedImage.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary-light"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default Gallery 