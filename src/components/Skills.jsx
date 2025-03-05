import React from "react";

const Skills = () => {
  const skills = {
    "Front-End": [
      "React",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
    ],
    "Back-End": ["Node.js", "Express", "RESTful APIs", "Axios"],
    Databases: ["PostgreSQL", "MongoDB"],
    Tools: ["Git", "GitHub", "Jira"],
    Other: [
      "OOP",
      "Data Structures",
      "Algorithms",
      "Problem Solving",
      "Unit Testing",
    ],
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-green mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, skillsList], index) => (
            <div
              key={index}
              className="bg-beige p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-green mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillsList.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-green text-black px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
