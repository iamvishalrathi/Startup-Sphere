const Highlights = () => {
  const highlights = [
    {
      title: "Innovation Hub",
      description: "Access to state-of-the-art facilities and resources for prototype development",
      icon: "🚀"
    },
    {
      title: "Mentorship Program",
      description: "One-on-one guidance from industry experts and successful entrepreneurs",
      icon: "👥"
    },
    {
      title: "Funding Support",
      description: "Connect with investors and get support for securing seed funding",
      icon: "💰"
    }
  ]

  return (
    <section className="py-16 bg-dark-darker">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-light">Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="card p-6 text-center hover:border-primary-light transition-colors duration-300">
              <span className="text-4xl mb-4 block">{highlight.icon}</span>
              <h3 className="text-xl font-semibold mb-3 text-secondary-light">{highlight.title}</h3>
              <p className="text-gray-400">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Highlights 