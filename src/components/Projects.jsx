import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Netflix-Style YouTube Video Web App",
      description:
        "A full-stack web application with a Netflix-inspired UI for searching and watching YouTube videos.",
      technologies: ["React", "Node.js", "PostgreSQL", "YouTube API"],
      link: "https://github.com/SujaiSideshwer/Youtube-Netflix-Clone-PERN-Stack",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-green mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-beige p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-black">
                {project.title}
              </h3>
              <p className="text-black mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-green text-white px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="mt-4 inline-block text-green hover:underline"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
