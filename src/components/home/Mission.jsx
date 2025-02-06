const Mission = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-dark-light to-dark-darker">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-primary-light">Our Mission</h2>
        <div className="bg-dark-light p-8 rounded-lg shadow-xl border border-gray-800">
          <p className="text-lg text-gray-300 leading-relaxed">
            To foster innovation and entrepreneurship by providing a supportive ecosystem 
            that empowers students and young professionals to transform their ideas into 
            successful ventures.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <div className="text-center">
              <span className="block text-3xl font-bold text-secondary-light">500+</span>
              <span className="text-gray-400">Startups Launched</span>
            </div>
            <div className="text-center">
              <span className="block text-3xl font-bold text-secondary-light">1000+</span>
              <span className="text-gray-400">Students Mentored</span>
            </div>
            <div className="text-center">
              <span className="block text-3xl font-bold text-secondary-light">50+</span>
              <span className="text-gray-400">Active Mentors</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission 