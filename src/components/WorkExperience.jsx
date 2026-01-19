export default function WorkExperience() {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "Elysium Digital",
      location: "Canberra, ACT, Australia",
      period: "Sep 2024 – Jun 2025",
      accent: "bg-amber-400",
      accentText: "text-amber-700 dark:text-amber-300",
      bullets: [
        "Developed reusable React + TypeScript components aligned to the GRDC design system, improving UI consistency across multiple research data modules and reducing duplicated frontend code by ~30%, enabling faster delivery of agriculture insights to industry stakeholders.",

        "Integrated RTK Query to optimize API state management and caching, reducing repeated backend requests and improving perceived responsiveness of research workflows.",

        "Implemented MSAL (Azure Entra) authentication with token-based routing to enable secure access to GRDC datasets while ensuring smooth session transitions for authenticated users.",

        "Converted Figma design specifications into pixel-accurate and mobile-responsive UI components using Tailwind CSS, enhancing cross-device accessibility for farmers, researchers, and internal analysts.",

        "Collaborated with backend/API teams to align REST contract structures and payload design, reducing integration friction and improving feature delivery cadence across teams.",

        "Contributed to accessibility, performance tuning, and UX refinement efforts, supporting GRDC’s objective to improve data discoverability within the grain research community.",
      ],
      aos: "fade-right",
    },
    {
      role: "Full Stack Software Engineer",
      company: "Orion Health",
      location: "Canberra, ACT, Australia",
      period: "Jun 2021 – May 2024",
      accent: "bg-amber-400",
      accentText: "text-amber-700 dark:text-amber-300",
      bullets: [
        "Developed full-stack healthcare features integrating React-based medication administration interfaces with Spring Boot REST endpoints, enabling safer clinical workflows on national EMAR platforms.",

        "Integrated HL7 and FHIR data exchange standards to streamline medication + clinical data workflows between providers, improving interoperability and reducing manual transcription errors.",

        "Automated UI, integration, and unit testing across React, Selenium, JUnit, and Mockito, maintaining ~80% test coverage and improving release confidence for clinical modules.",

        "Dockerized backend services and databases to improve environment consistency, reducing integration issues between development and staging environments for clinical deployments.",

        "Enhanced EMAR data processing performance by ~25% through service-layer optimization and more efficient data transformations, improving clinician experience during medication administration tasks.",

        "Mentored interns and contributed to production deployment of a student-led feature, strengthening organizational onboarding and internal knowledge transfer.",
      ],
      aos: "fade-left",
    },
    {
      role: "Full Stack Developer",
      company: "Smart Data Solutions",
      location: "Nepal (Branch of US-based company)",
      period: "Apr 2017 – May 2018",
      accent: "bg-amber-400",
      accentText: "text-amber-700 dark:text-amber-300",
      bullets: [
        "Built full-stack healthcare insurance portals using Spring Boot and Angular to support claim onboarding and eligibility workflows for insurers and providers, enabling digital self-service in place of manual data handoffs.",

        "Planned and architected REST APIs, database schemas, and integration logic to improve data consistency across insurance workflows and reduce backend service workload during claim processing.",

        "Optimized SQL queries and indexing strategies to improve system performance and support higher claim throughput, reducing latency during insurer and provider interactions.",

        "Delivered features through Agile and TDD practices integrated with GitLab CI/CD and Jenkins pipelines, supporting repeatable deployments and consistent release cadence for US-based clients.",
      ],
      aos: "fade-right",
    },
    {
      role: "Full Stack Developer",
      company: "eSewa Fonepay Pvt Ltd",
      location: "Kathmandu, Nepal",
      period: "Dec 2014 – Mar 2017",
      accent: "bg-amber-400",
      accentText: "text-amber-700 dark:text-amber-300",
      bullets: [
        "Built backend components for Nepal’s first corporate online payment gateway using Spring + MySQL, enabling digital B2B payment transactions and improving financial operational workflows.",

        "Migrated legacy monolithic platforms into Spring Boot microservices, improving scalability, maintainability, and deployment flexibility for fintech services.",

        "Modeled JPA/Hibernate domain entities and optimized database indexing, enhancing data reliability and performance for high-volume transaction flows.",

        "Reduced code duplication by ~30% through reusable service components and improved API design, accelerating development for cross-team payment features.",

        "Collaborated with engineering, QA, and product teams to deliver new payment features aligned to banking and compliance requirements within the corporate fintech ecosystem.",
      ],
      aos: "fade-left",
    },
  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-slate-50 dark:bg-transparent py-12 px-6 transition-colors duration-500"
    >
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Career Timeline
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-slate-100 mb-8">
            Work Experience
          </h2>
        </div>

        <div className="relative mt-2">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-amber-300/60 via-slate-300/60 to-amber-300/60 md:left-1/2"></div>
          <div className="space-y-10">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  data-aos={exp.aos}
                  className="relative md:grid md:grid-cols-2 md:gap-12"
                >
                  <span
                    aria-hidden="true"
                    className={`absolute left-4 top-8 h-4 w-4 rounded-full border-4 border-white/80 shadow md:left-1/2 md:-translate-x-1/2 ${exp.accent} dark:border-slate-900`}
                  ></span>
                  <div
                    className={`pt-2 ${
                      isLeft
                        ? "md:col-start-1 md:pr-10"
                        : "md:col-start-2 md:pl-10"
                    }`}
                  >
                    <div className="rounded-2xl border border-white/70 bg-white/80 px-6 py-5 shadow-lg shadow-slate-900/5 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-[#0f2740]/80">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-white">
                          {exp.role}
                        </h3>
                        <span
                          className={`rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide shadow-sm dark:bg-slate-800/80 ${exp.accentText}`}
                        >
                          {exp.company}
                        </span>
                      </div>
                      <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-300">
                        <span className="inline-flex items-center gap-2">
                          <span
                            className={`h-2 w-2 rounded-full ${exp.accent}`}
                          ></span>
                          {exp.location}
                        </span>
                        <span className="hidden sm:inline-block">•</span>
                        <span>{exp.period}</span>
                      </div>
                      <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-200">
                        {exp.bullets.map((point, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-700 shadow-[0_0_0_2px_rgba(15,23,42,0.08)] dark:bg-amber-200 dark:shadow-[0_0_0_2px_rgba(251,191,36,0.25)]"></span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
