import React from "react";

const Skills = () => {
  const skills = [
    { name: "HTML", src: "/src/assets/html.png" },
    { name: "CSS", src: "/src/assets/css.png" },
    { name: "JavaScript", src: "/src/assets/javascript.png" },
    { name: "React", src: "/src/assets/react.png" },
    { name: "Tailwind CSS", src: "/src/assets/Tailwind CSS.png" },
    { name: "Node.js", src: "/src/assets/nodejs.png" },
    { name: "Express.js", src: "/src/assets/express.png" },
    { name: "MongoDB", src: "/src/assets/mongodb.png" },
    { name: "SQL", src: "/src/assets/sql.png" },
    { name: "Git", src: "/src/assets/git.png" },
    { name: "GitHub", src: "/src/assets/github.png" },
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
