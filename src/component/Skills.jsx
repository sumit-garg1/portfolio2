import React from "react";

const Skills = () => {
  const skills = [
    { name: "HTML", src: "./image/html.png" },
    { name: "CSS", src: "./image/css.png" },
    { name: "JavaScript", src: "./image/javascript.png" },
    { name: "React", src: "./image/react.png" },
    { name: "Tailwind CSS", src: "./image/Tailwind CSS.png" },
    { name: "Node.js", src: "./image/nodejs.png" },
    { name: "Express.js", src: "./image/express.png" },
    { name: "MongoDB", src: "./image/mongodb.png" },
    { name: "SQL", src: "./image/sql.png" },
    { name: "Git", src: "./image/git.png" },
    { name: "GitHub", src: "./image/github.png" },
  ];

  return (
    <section className="py-10 bg-[#02001e]">
      <h2 className="text-4xl font-bold text-center mb-8 text-white">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full max-w-[900px] mx-auto place-items-center">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="skill-card flex flex-col items-center justify-center p-4 rounded-lg"
          >
            <img
              src={skill.src}
              alt={skill.name}
              className="h-[70px] w-[70px] mb-2"
            />
            <p className="text-lg font-medium text-white">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
