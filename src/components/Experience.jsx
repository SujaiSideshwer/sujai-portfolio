import React from "react";

const Experience = () => {
  const experiences = [
    {
      company: "Cognizant",
      role: "Software Associate",
      duration: "2022 - Present",
      description:
        "Designed and developed internal web applications for Cargill Inc. using the PERN stack.",
    },
    {
      company: "CAD MACRO Design & Solutions Pvt. Ltd.",
      role: "Software Engineer Intern",
      duration: "2021 - 2022",
      description: "Developed CAM software for EDM machines using Python.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">
                {exp.role} - {exp.company}
              </h3>
              <p className="text-gray-600 mt-2">{exp.description}</p>
              <p className="text-gray-500 text-sm mt-2">{exp.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
