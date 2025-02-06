const Achievements = () => {
  const stats = [
    { number: "50M+", label: "Funding Raised" },
    { number: "100+", label: "Startups Incubated" },
    { number: "500+", label: "Student Members" },
    { number: "30+", label: "Industry Partners" }
  ]

  return (
    <section className="py-16 bg-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-light">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="card p-6 text-center hover:border-primary-light transition-colors duration-300">
              <span className="block text-4xl font-bold text-secondary-light mb-2">{stat.number}</span>
              <span className="text-gray-400">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements 