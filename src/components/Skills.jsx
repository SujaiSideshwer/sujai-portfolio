export function Skills() {
  const skills = [
    { name: "React", logo: "src/assets/tech-logos/react.svg" },
    { name: "Node.js", logo: "src/assets/tech-logos/nodejsStackedDark.svg" },
    { name: "Express.js", logo: "src/assets/tech-logos/expressjs.svg" },
    { name: "PostgreSQL", logo: "src/assets/tech-logos/postgresql.svg" },
    { name: "MongoDB", logo: "src/assets/tech-logos/MongoDB.png" },
    { name: "JavaScript", logo: "src/assets/tech-logos/javascript.svg" },
    { name: "Tailwind CSS", logo: "src/assets/tech-logos/tailwindcss.svg" },
    { name: "AWS", logo: "src/assets/tech-logos/aws.svg" },
    { name: "Git", logo: "src/assets/tech-logos/git.svg" },
    { name: "Jira", logo: "src/assets/tech-logos/jira.svg" },
  ];

  return (
    <section id="skills" className="py-12">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-16 h-16 mb-2 object-contain"
            />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
