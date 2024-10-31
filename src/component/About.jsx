import React from "react";

const About = () => {
  return (
    <section className="py-10 px-5 bg-[#02001e] min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-10 text-white">About</h2>
      <div className="flex flex-col md:flex-row items-center md:items-start max-w-[1000px] mx-auto">
        <img
          src="./image/Photo.jpg"
          alt="Harshit Garg"
          className="h-[250px] w-[250px] rounded-md mb-5 md:mb-0 md:mr-8"
        />
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-4 text-white">👋 Hey there</h1>
          <p className="text-white leading-relaxed mb-6 text-xl">
            I'm Harshit Garg, a passionate and skilled developer with a strong
            foundation in various programming languages and frameworks. My
            expertise spans HTML, CSS, JavaScript, React, Node.js, Express.js,
            Tailwind CSS, and MongoDB. With a knack for backend development and
            a keen eye for frontend design, I also excel in SQL. I am committed
            to creating efficient, high-quality web applications and thrive on
            creating elegant code that makes an impact.
          </p>
          <a
            href="./image/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Harshit_Garg_resume.pdf"
          >
            <button className="text-white bg-blue-600 font-medium py-2 px-4 rounded-md border border-blue-600 hover:bg-blue-700 transition duration-200">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
