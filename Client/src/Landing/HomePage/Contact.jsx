import React from "react";

function Contact() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Get in <span className="text-yellow-400">Touch</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form className="bg-white p-4 md:p-8 rounded-lg shadow-lg">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black font-bold py-2 rounded-md hover:bg-yellow-500 transition duration-200"
            >
              Submit
            </button>
          </form>

          {/* Contact Information */}
          <div className="bg-gray-50 p-4 md:p-8 rounded-lg shadow-lg flex flex-col justify-center">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://static1.anpoimages.com/wordpress/wp-content/uploads/2022/07/googleMapsTricksHero.jpg"
                alt="SwarajyAlgo Location"
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-base md:text-lg mt-2 text-gray-800 font-semibold">
              <span className="block text-yellow-400 mb-1">Address:</span>
              SwarajyAlgo, Financial Street, City, Country
            </p>
            <p className="text-base md:text-lg text-gray-800 font-semibold mt-6">
              <span className="mb-1">Email : </span>
              <a
                href="mailto:contact@swarajyalgo.com"
                className="text-blue-600 text-sm md:text-lg"
              >
                contact@swarajyalgo.com
              </a>
            </p>
            <p className="text-base md:text-lg text-gray-800 font-semibold mt-1">
              <span className="mb-1">Phone : </span>
              <a href="" className="text-blue-600 text-sm md:text-lg">
                6264599708
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
