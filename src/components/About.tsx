export default function About() {
  const aboutBadges = [
    { text: "👯 Team Player", color: "bg-pink-200 dark:bg-pink-300" },
    {
      text: "⏱️ Time Management Ninja",
      color: "bg-yellow-200 dark:bg-yellow-300",
    },
    { text: "🧠 Problem Solver", color: "bg-green-200 dark:bg-green-300" },
    { text: "🧘‍♂️ Calm Under Pressure", color: "bg-blue-200 dark:bg-blue-300" },
    { text: "🗣️ Strong Communicator", color: "bg-red-200 dark:bg-red-300" },
    {
      text: "🧪 Clean Code Advocate",
      color: "bg-orange-200 dark:bg-orange-300",
    },
    {
      text: "☕ Coffee-to-Code Converter",
      color: "bg-teal-200 dark:bg-teal-300",
    },
    {
      text: "😺 Occasionally Debugs with a Cat on Keyboard",
      color: "bg-lime-200 dark:bg-lime-300",
    },
  ];

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-yellow-100 via-yellow-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 py-16 px-6 transition-colors duration-500"
      data-aos="fade-down"
      id="about"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center dark:text-white font-anime mb-8 animate-fade-in">
        🍩 About Me
      </h2>

      <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto animate-slide-up">
        {aboutBadges.map((badge, index) => (
          <span key={index}>
            <Badge text={badge.text} color={badge.color} />
          </span>
        ))}
      </div>
    </section>
  );
}

function Badge({ text, color }: { text: string; color: string }) {
  return (
    <div
      className={`px-4 py-2 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-900 shadow hover:scale-105 transition-transform duration-300 ${color} animate-bounce-slow`}
    >
      {text}
    </div>
  );
}
