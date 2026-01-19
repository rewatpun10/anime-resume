export default function About() {
  const aboutBadges = [
    { text: "👯 Team Player", color: "bg-white/80 dark:bg-[#0f2740]/70" },
    {
      text: "⏱️ Time Management Ninja",
      color: "bg-white/80 dark:bg-[#0f2740]/70",
    },
    { text: "🧠 Problem Solver", color: "bg-white/80 dark:bg-[#0f2740]/70" },
    {
      text: "🧘‍♂️ Calm Under Pressure",
      color: "bg-white/80 dark:bg-[#0f2740]/70",
    },
    { text: "🗣️ Strong Communicator", color: "bg-white/80 dark:bg-[#0f2740]/70" },
    {
      text: "🧪 Clean Code Advocate",
      color: "bg-white/80 dark:bg-[#0f2740]/70",
    },
    {
      text: "☕ Coffee-to-Code Converter",
      color: "bg-white/80 dark:bg-[#0f2740]/70",
    },
    {
      text: "😺 Occasionally Debugs with a Cat on Keyboard",
      color: "bg-white/80 dark:bg-[#0f2740]/70",
    },
  ];

  return (
    <section
      className="relative overflow-hidden bg-slate-50 dark:bg-transparent py-12 px-6 transition-colors duration-500"
      data-aos="fade-down"
      id="about"
    >
      <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 text-center dark:text-slate-100 mb-8 animate-fade-in">
        About Me
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
      className={`px-4 py-2 rounded-full text-sm font-semibold text-slate-700 dark:text-slate-100 shadow-sm shadow-slate-900/10 border border-slate-200/80 dark:border-amber-500/20 hover:scale-105 transition-transform duration-300 ${color}`}
    >
      {text}
    </div>
  );
}
