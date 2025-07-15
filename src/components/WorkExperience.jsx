export default function WorkExperience() {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "Elysium Digital",
      location: "Canberra, ACT, Australia",
      period: "Sep 2024 – Present",
      bgColor: "bg-pink-100 dark:bg-pink-200",
      bullets: [
        "Developed scalable React components for the GRDC platform.",
        "Used RTK Query to streamline API interactions.",
        "Integrated MSAL for secure Azure Entra ID authentication.",
        "Collaborated with backend and UX teams.",
        "Led component documentation standards.",
      ],
      aos: "fade-right",
    },
    {
      role: "Full Stack Software Engineer",
      company: "Orion Health",
      location: "Canberra, ACT, Australia",
      period: "Jun 2021 – May 2024",
      bgColor: "bg-blue-100 dark:bg-blue-200",
      bullets: [
        "Integrated third-party APIs and HL7 FHIR.",
        "Optimized CI/CD pipelines with GitLab and Bamboo.",
        "Wrote automated UI and integration tests.",
        "Mentored ANU interns; project went live.",
        "Used Docker for containerized DBs.",
      ],
      aos: "fade-left",
    },
    {
      role: "Full Stack Developer",
      company: "Smart Data Solutions",
      location: "Nepal (Branch of US-based company)",
      period: "Apr 2017 – May 2018",
      bgColor: "bg-yellow-100 dark:bg-yellow-200",
      bullets: [
        "Built healthcare portals with Spring Boot & Angular.",
        "Designed scalable database schemas.",
        "Used Agile and TDD for reliable delivery.",
        "Collaborated with US stakeholders.",
      ],
      aos: "fade-right",
    },
    {
      role: "Full Stack Developer",
      company: "eSewa Fonepay Pvt Ltd",
      location: "Kathmandu, Nepal",
      period: "Dec 2014 – Mar 2017",
      bgColor: "bg-green-100 dark:bg-green-200",
      bullets: [
        "Migrated monolith to Spring Boot microservices.",
        "Developed reusable business services.",
        "Helped launch Nepal’s first corporate payment gateway.",
        "Mentored junior devs and supported deployments.",
      ],
      aos: "fade-left",
    },
  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-gradient-to-br from-yellow-100 via-yellow-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 py-16 px-6 transition-colors duration-500"
    >
      <h2 className="text-3xl md:text-4xl font-anime text-center font-bold mb-12 text-gray-800 dark:text-white">
        💼 Work Experience
      </h2>

      <div className="max-w-5xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            data-aos={exp.aos}
            className={`p-6 rounded-xl shadow hover:shadow-lg transition duration-300 text-left ${exp.bgColor}`}
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
              <h3 className="text-xl font-semibold text-pink-600 dark:text-pink-400">
                {exp.role} – {exp.company}
              </h3>
              <span className="text-sm text-gray-500 dark:text-gray-800">
                {exp.period}
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-600 mb-2 italic">
              📍 {exp.location}
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-800 space-y-1">
              {exp.bullets.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
