function ContactForm() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto bg-yellow-500 flex items-center flex-col rounded-[70px] py-10">
        <h2 className="text-4xl font-extrabold text-center mb-8 text-black">Contact Us</h2>
        <form className="space-y-6 w-full max-w-lg">
          <div>
            <label for="name" className="uppercase text-black font-bold">name</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none bg-white/70"
            />
          </div>
          <div>
          <label for="email" className="uppercase text-black font-bold">email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none bg-white/70"
            />
          </div>
          <div>
          <label for="message" className="uppercase text-black font-bold">message</label>
            <textarea
            id="message"
              placeholder="Message"
              rows="4"
              className="w-full px-4 py-2 rounded-3xl border border-gray-300 focus:outline-none bg-white/70"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-700 text-white py-2 rounded-md hover:bg-rose-700 transition-colors"
          >
            Send the message
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm

