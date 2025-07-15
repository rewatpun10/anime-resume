export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      color: "bg-yellow-100 dark:bg-yellow-200",
      items: ["Java", ".Net", "JavaScript", "TypeScript"],
    },
    {
      title: "Frontend",
      color: "bg-blue-100 dark:bg-blue-200",
      items: [
        "React.js",
        "Angular.js",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "Tailwind CSS",
        "YUI",
      ],
    },
    {
      title: "Backend",
      color: "bg-green-100 dark:bg-green-200",
      items: ["Spring Boot", "Spring MVC", "Node.js"],
    },
    {
      title: "Databases",
      color: "bg-pink-100 dark:bg-pink-200",
      items: ["MySQL", "Oracle"],
    },
    {
      title: "Tools & Frameworks",
      color: "bg-purple-100 dark:bg-purple-200",
      items: ["JPA", "Hibernate", "JDBC", "Maven", "Gradle", "Docker"],
    },
    {
      title: "Testing",
      color: "bg-orange-100 dark:bg-orange-200",
      items: ["JUnit", "Mockito", "Jest", "Selenium", "Cucumber"],
    },
    {
      title: "CI/CD & DevOps",
      color: "bg-indigo-100 dark:bg-indigo-200",
      items: ["GitLab", "Jenkins", "Bamboo"],
    },
    {
      title: "Version Control",
      color: "bg-lime-100 dark:bg-lime-200",
      items: ["Git", "GitHub", "Bitbucket", "Sourcetree"],
    },
    {
      title: "API Testing",
      color: "bg-rose-100 dark:bg-rose-200",
      items: ["Postman", "Insomnia"],
    },
    {
      title: "Authentication",
      color: "bg-teal-100 dark:bg-teal-200",
      items: ["MSAL", "OAuth 2.0", "JWT"],
    },
    {
      title: "IDEs",
      color: "bg-sky-100 dark:bg-sky-200",
      items: ["IntelliJ IDEA", "Eclipse", "VS Code", "NetBeans"],
    },
  ];

  return (
    <section
      id="skills"
      data-aos="zoom-in-up"
      className="relative overflow-hidden bg-gradient-to-br from-purple-100 via-yellow-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 py-16 px-6 transition-colors duration-500"
    >
      <h2 className="text-3xl font-anime mb-8 text-gray-900 text-center dark:text-white">
        🛠️ Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {skillCategories.map((cat, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 text-left shadow hover:shadow-lg transition ${cat.color}`}
          >
            <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-900">
              {cat.title}
            </h3>
            <ul className="flex flex-wrap gap-2 text-sm text-gray-800">
              {cat.items.map((item, i) => (
                <li
                  key={i}
                  className="bg-white dark:bg-gray-100 px-3 py-1 rounded-full shadow text-gray-700 dark:text-gray-800 hover:scale-105 transition text-xs font-medium"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
