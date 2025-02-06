const ContactForm = () => {
  return (
    <section className="py-12 bg-dark-darker">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary-light">Let's Connect</h2>
        <form className="bg-dark-light shadow-xl rounded-lg p-8 space-y-6 border border-gray-800">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full rounded-md input-dark"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md input-dark"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full rounded-md input-dark"
              placeholder="Your message here..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors duration-200 ease-in-out font-medium"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm 