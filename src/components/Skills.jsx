export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Skills",
      color:
        "bg-white/80 dark:bg-[#0f2740]/70 border border-slate-200/70 dark:border-amber-500/20",
      items: [
        "React.js",
        "TypeScript",
        "JavaScript",
        "Redux",
        "RTK Query",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "Responsive UI",
        "Component Architecture",
        "State Management",
        "API Integration",
        "Authentication (MSAL/OAuth2)",
        "Form Handling",
        "Testing (Jest)",
        "Accessibility",
        "SEO",
        "Figma-to-UI",
        "Vercel Deployment",
      ],
    },
    {
      title: "Backend Skills",
      color:
        "bg-white/80 dark:bg-[#0f2740]/70 border border-slate-200/70 dark:border-amber-500/20",
      items: [
        "Java",
        "Spring Boot",
        "Spring MVC",
        "Microservices",
        "REST APIs",
        "JPA/Hibernate",
        "SQL/MySQL",
        "Oracle",
        "Data Modeling",
        "API Design",
        "Schema Design",
        "JUnit",
        "Mockito",
        "Selenium",
        "TDD",
        "Integration Testing",
        "Event-driven Principles",
        "Domain Modeling",
        "Server-side Architecture",
      ],
    },
    {
      title: "DevOps & Tooling",
      color:
        "bg-white/80 dark:bg-[#0f2740]/70 border border-slate-200/70 dark:border-amber-500/20",
      items: [
        "Docker",
        "GitLab CI/CD",
        "Jenkins",
        "Bamboo",
        "Git (GitLab, GitHub, Bitbucket)",
        "Postman",
        "Insomnia",
      ],
    },
  ];

  return (
    <section
      id="skills"
      data-aos="zoom-in-up"
      className="relative overflow-hidden bg-slate-50 dark:bg-transparent py-12 px-6 transition-colors duration-500"
    >
      <div className="pointer-events-none absolute -top-20 right-10 h-40 w-40 rounded-full bg-amber-200/30 blur-3xl dark:bg-amber-500/10"></div>
      <div className="pointer-events-none absolute -bottom-24 left-8 h-52 w-52 rounded-full bg-orange-200/20 blur-3xl dark:bg-orange-500/10"></div>
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-slate-900 text-center dark:text-slate-100">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {skillCategories.map((cat, index) => (
          <div
            key={index}
            className={`rounded-2xl p-6 text-left border-l-4 border-amber-400/80 bg-gradient-to-br from-white/90 to-slate-50/80 dark:from-[#0f2740]/90 dark:to-[#0b1e34]/90 shadow-sm shadow-slate-900/10 hover:shadow-xl hover:-translate-y-1 transition ${cat.color}`}
          >
            <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-white">
              {cat.title}
            </h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 dark:text-slate-200 marker:text-amber-600 dark:marker:text-amber-300">
              {cat.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
