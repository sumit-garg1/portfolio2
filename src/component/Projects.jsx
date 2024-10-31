import React from "react";

const Projects = () => {
  return (
    <div className="bg-[#02001e] p-10 min-h-screen">
      <h2 className="text-5xl font-bold text-center text-white mb-16">
        Projects
      </h2>
      <div className="space-y-16 max-w-6xl mx-auto">
        {/* Project 1 */}
        <div className="relative flex flex-col md:flex-row items-center md:space-x-10 transition duration-300 ease-in-out">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <a
              href="https://foods-recipesapp.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/src/assets/recipes.png"
                alt="Food Recipes App"
                className="w-full rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105"
              />
            </a>
          </div>
          <div className="md:w-1/2 text-center md:text-left space-y-4">
            <h3 className="text-3xl font-semibold text-orange-400">
              Food Recipes App
            </h3>
            <p className="text-gray-300 text-lg">
              A responsive web application for browsing a variety of recipes.
              Built using React, Tailwind CSS, and integrated with the Dummy
              API.
            </p>
            <a
              href="https://foods-recipesapp.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 transition duration-300"
            >
              View Project
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="relative flex flex-col md:flex-row-reverse items-center md:space-x-10 transition duration-300 ease-in-out">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <a
              href="https://imdbclones.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/src/assets/imdb.png"
                alt="IMDB Clone"
                className="w-full rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105"
              />
            </a>
          </div>
          <div className="md:w-1/2 text-center md:text-left space-y-4">
            <h3 className="text-3xl font-semibold text-purple-400">
              IMDB Clone
            </h3>
            <p className="text-gray-300 text-lg">
              A clone of IMDb featuring a watchlist, filter options, and search
              functionality. Powered by TMDB API.
            </p>
            <a
              href="https://imdbclones.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-500 text-white py-2 px-6 rounded-full hover:bg-purple-600 transition duration-300"
            >
              View Project
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="relative flex flex-col md:flex-row items-center md:space-x-10 transition duration-300 ease-in-out">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <a
              href="https://harshitgarg63.github.io/Tailwind-landing-page/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/src/assets/LandingPage.png"
                alt="Landing Page"
                className="w-full rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105"
              />
            </a>
          </div>
          <div className="md:w-1/2 text-center md:text-left space-y-4">
            <h3 className="text-3xl font-semibold text-teal-400">
              Landing Page
            </h3>
            <p className="text-gray-300 text-lg">
              A beautifully designed landing page built with Tailwind CSS.
            </p>
            <a
              href="https://harshitgarg63.github.io/Tailwind-landing-page/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-teal-500 text-white py-2 px-6 rounded-full hover:bg-teal-600 transition duration-300"
            >
              View Project
            </a>
          </div>
        </div>

        {/* Project 4 */}
        <div className="relative flex flex-col md:flex-row-reverse items-center md:space-x-10 transition duration-300 ease-in-out">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <a
              href="https://todolistprojects.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/src/assets/Todo.png"
                alt="Todo List"
                className="w-full rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105"
              />
            </a>
          </div>
          <div className="md:w-1/2 text-center md:text-left space-y-4">
            <h3 className="text-3xl font-semibold text-blue-400">Todo List</h3>
            <p className="text-gray-300 text-lg">
              A simple and effective todo list app to manage your daily tasks,
              built with React.js and CSS.
            </p>
            <a
              href="https://todolistprojects.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
