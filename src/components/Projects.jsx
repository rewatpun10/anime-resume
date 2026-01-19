export default function Projects() {
  const projects = [
    {
      title: "NepaliHub Australia",
      tech: "React, TypeScript, Tailwind, Vercel",
      link: "https://www.nepalihubaustralia.com",
      desc: "Community-focused app showcasing Nepali restaurants, groceries, consultancies, events, and exchange rates. SEO + meta improvements and mobile-first card layouts. MVP uses static data by design with a roadmap for Node API + MongoDB.",
      color:
        "bg-white/80 dark:bg-slate-900/70 border border-slate-200/70 dark:border-slate-800/80",
      icon: "🌏",
    },
    {
      title: "My Portfolio Website",
      tech: "React, Tailwind, Vite",
      link: "https://github.com/rewatpun10/anime-resume",
      desc: "Anime-themed resume site with dark mode and custom styling.",
      color:
        "bg-white/80 dark:bg-slate-900/70 border border-slate-200/70 dark:border-slate-800/80",
      icon: "🖥️",
    },

    {
      title: "RosterMate Backend",
      tech: ".NET 8, C#, CI/CD, Docker, SQL Server",
      link: "https://github.com/rewatpun10/rostermate",
      desc: "Robust API for staff scheduling with role-based access control and JWT authentication.",
      color:
        "bg-white/80 dark:bg-slate-900/70 border border-slate-200/70 dark:border-slate-800/80",
      icon: "🛠️",
    },
    {
      title: "RosterMate Frontend",
      tech: "React, Redux, RTK Query, Tailwind CSS",
      link: "https://github.com/rewatpun10/rostermate-frontend",
      desc: "Responsive frontend for roster scheduling, featuring role-based views and interactive dashboards.",
      color:
        "bg-white/80 dark:bg-slate-900/70 border border-slate-200/70 dark:border-slate-800/80",
      icon: "📋",
    },

    {
      title: "SevenDayPsychology Backend",
      tech: "Java, Spring Boot, JPA",
      link: "https://gitlab.com/rewatpun10/sevendaypsychologyserver",
      desc: "Helps client to book the Appointment",
      color:
        "bg-white/80 dark:bg-slate-900/70 border border-slate-200/70 dark:border-slate-800/80",
      icon: "📅🩺",
    },
  ];

  return (
    <section
      id="projects"
      className="py-12 bg-slate-50 dark:bg-slate-950 text-center transition-colors duration-300"
      data-aos="zoom-in-up"
    >
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-slate-900 dark:text-white">
        Projects
      </h2>
      <div className="grid gap-6 md:grid-cols-2 px-6 max-w-5xl mx-auto">
        {projects.map((p, index) => (
          <div
            key={index}
            className={`${p.color} shadow-sm shadow-slate-900/5 rounded-2xl p-6 text-left transform hover:scale-[1.02] hover:-translate-y-1 transition duration-300`}
          >
            <div className="text-4xl mb-3">{p.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
              {p.title}
            </h3>
            <p className="text-sm text-slate-500 italic mb-2">{p.tech}</p>
            <p className="mb-4 text-slate-600 dark:text-slate-200">{p.desc}</p>
            <a
              href={p.link}
              className="text-teal-600 underline hover:text-teal-700 dark:hover:text-teal-300 transition"
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
