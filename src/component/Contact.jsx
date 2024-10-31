import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#02001e] min-h-screen p-10 flex flex-col items-center">
      <h2 className="text-5xl font-bold text-center text-white mb-16">
        Contact Me
      </h2>

      <div className="w-full max-w-3xl bg-gray-800 rounded-lg shadow-lg p-8 space-y-6">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="text-gray-300 text-lg font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-gray-300 text-lg font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="text-gray-300 text-lg font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message here"
              rows="6"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 pt-8">
          <a
            href="https://github.com/harshitgarg63"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <img src="/github.png" alt="GitHub Profile" className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/harshitgarg63/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <img
              src="/linkedin.png"
              alt="LinkedIn Profile"
              className="w-8 h-8"
            />
          </a>
          <a
            href="mailto:harshitgarg6356@gmail.com"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <img src="/gmail.png" alt="Email" className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
