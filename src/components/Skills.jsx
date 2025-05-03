export function Skills() {
  const skills = [
    { name: "React", logo: "/images/tech-logos/react.svg" },
    {
      name: "Node.js",
      logo: "/images/tech-logos/nodejsStackedDark.svg",
    },
    {
      name: "Express.js",
      logo: "/images/tech-logos/expressjs.svg",
    },
    {
      name: "PostgreSQL",
      logo: "/images/tech-logos/postgresql.svg",
    },
    { name: "MongoDB", logo: "/images/tech-logos/MongoDB.png" },
    {
      name: "JavaScript",
      logo: "/images/tech-logos/javascript.svg",
    },
    {
      name: "Tailwind CSS",
      logo: "/images/tech-logos/tailwindcss.svg",
    },
    { name: "AWS", logo: "/images/tech-logos/aws.svg" },
    { name: "Git", logo: "/images/tech-logos/git.svg" },
    { name: "Jira", logo: "/images/tech-logos/jira.svg" },
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
