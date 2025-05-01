export function Experience() {
  const experiences = [
    {
      company: "Cognizant",
      logo: "src/assets/cognizant.png",
      role: "Software Associate",
      description:
        "Designed and developed internal web apps using the PERN stack for Cargill Inc., improving operational efficiency by 25%. Deployed solutions to AWS ensuring 99.9% uptime.",
    },
    {
      company: "CAD MAcRO Design & Solutions",
      logo: "src/assets/cadmacro.png",
      role: "Software Engineer Intern",
      description:
        "Developed Python-based CAM software for EDM machines, enhancing simulation accuracy by 15% and improving manufacturing workflows.",
    },
  ];

  return (
    <section id="experience" className="py-12 space-y-8">
      <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="flex items-center gap-6">
          <img
            src={exp.logo}
            alt={`${exp.company} logo`}
            className="w-20 h-20 object-contain"
          />
          <div>
            <h3 className="text-xl font-semibold">
              {exp.role} @ {exp.company}
            </h3>
            <p className="mt-2">{exp.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
