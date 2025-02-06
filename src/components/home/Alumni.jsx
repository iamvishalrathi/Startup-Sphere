const Alumni = () => {
  const alumni = [
    {
      name: "Sarah Johnson",
      company: "TechFlow Solutions",
      role: "Founder & CEO",
      image: "https://i.pravatar.cc/150?img=1",
      quote: "The startup sphere gave me the foundation I needed to build my tech company."
    },
    {
      name: "Michael Chen",
      company: "EcoInnovate",
      role: "Co-founder",
      image: "https://i.pravatar.cc/150?img=2",
      quote: "The mentorship and network I gained here were invaluable to my journey."
    },
    {
      name: "Priya Patel",
      company: "FinTech Pro",
      role: "CTO",
      image: "https://i.pravatar.cc/150?img=3",
      quote: "From student project to successful startup - all thanks to Startup Sphere."
    }
  ]

  return (
    <section className="py-16 bg-dark-darker">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-light">Alumni Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {alumni.map((alum, index) => (
            <div key={index} className="card p-6 hover:border-primary-light transition-colors duration-300">
              <div className="flex items-center mb-4">
                <img src={alum.image} alt={alum.name} className="w-16 h-16 rounded-full mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-secondary-light">{alum.name}</h3>
                  <p className="text-primary-light">{alum.role}</p>
                  <p className="text-gray-400 text-sm">{alum.company}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"{alum.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Alumni 