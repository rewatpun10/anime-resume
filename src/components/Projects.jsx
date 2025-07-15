export default function Projects() {
  const projects = [
    {
      title: "My Portfolio Website",
      tech: "React, Tailwind, Vite",
      link: "https://github.com/rewatpun10/anime-resume",
      desc: "Anime-themed resume site with dark mode and custom styling.",
      color: "bg-pink-100 dark:bg-pink-200",
      icon: "🖥️",
    },

    {
      title: "RosterMate Backend",
      tech: ".NET 8, C#, SQL Server",
      link: "https://github.com/rewatpun10/rostermate",
      desc: "Robust API for staff scheduling with role-based access control and JWT authentication.",
      color: "bg-emerald-100 dark:bg-emerald-200",
      icon: "🛠️",
    },
    {
      title: "RosterMate Frontend",
      tech: "React, Redux, RTK Query, Tailwind CSS",
      link: "https://github.com/rewatpun10/rostermate-frontend",
      desc: "Responsive frontend for roster scheduling, featuring role-based views and interactive dashboards.",
      color: "bg-cyan-100 dark:bg-cyan-200",
      icon: "📋",
    },

    {
      title: "SevenDayPsychology Backend",
      tech: "Java, Spring Boot, JPA",
      link: "https://gitlab.com/rewatpun10/sevendaypsychologyserver",
      desc: "Helps client to book the Appointment",
      color: "bg-indigo-100 dark:bg-indigo-200",
      icon: "📅🩺",
    },
  ];

  return (
    <section
      id="projects"
      className="py-12 bg-yellow-50 dark:bg-gray-900 text-center transition-colors duration-300"
      data-aos="zoom-in-up"
    >
      <h2 className="text-3xl font-anime mb-6 text-gray-900 dark:text-white">
        📦 Projects
      </h2>
      <div className="grid gap-6 md:grid-cols-2 px-6">
        {projects.map((p, index) => (
          <div
            key={index}
            className={`${p.color} shadow rounded-lg p-6 text-left transform hover:scale-105 hover:-translate-y-1 transition duration-300`}
          >
            <div className="text-4xl mb-3">{p.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-800">
              {p.title}
            </h3>
            <p className="text-sm text-gray-500 italic mb-2">{p.tech}</p>
            <p className="mb-4 text-gray-700 dark:text-gray-800">{p.desc}</p>
            <a
              href={p.link}
              className="text-blue-500 underline hover:text-blue-600 dark:hover:text-blue-400 transition"
              target="_blank"
              rel="noreferrer"
            >
              Visit Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
