export default function FunFacts() {
  const facts = [
    {
      emoji: "🎮",
      text: "I love playing PS5 — especially FIFA.",
      bgColor:
        "bg-white/80 dark:bg-slate-900/70 border border-slate-200/70 dark:border-slate-800/80",
    },
    {
      emoji: "🏍️",
      text: "Weekend motorbike rides are my therapy.",
      bgColor:
        "bg-white/80 dark:bg-slate-900/70 border border-slate-200/70 dark:border-slate-800/80",
    },
    {
      emoji: "⚽",
      text: "Enjoy playing football with friends on weekends.",
      bgColor:
        "bg-white/80 dark:bg-slate-900/70 border border-slate-200/70 dark:border-slate-800/80",
    },
    {
      emoji: "📷",
      text: "Enjoy capturing moments with my camera.",
      bgColor:
        "bg-white/80 dark:bg-slate-900/70 border border-slate-200/70 dark:border-slate-800/80",
    },
    {
      emoji: "🥟",
      text: "Massive momo fan — steamed or fried, I love them all!",
      bgColor:
        "bg-white/80 dark:bg-slate-900/70 border border-slate-200/70 dark:border-slate-800/80",
    },
    {
      emoji: "🎧",
      text: "Spotify on loop — coding with chill lo-fi beats.",
      bgColor:
        "bg-white/80 dark:bg-slate-900/70 border border-slate-200/70 dark:border-slate-800/80",
    },
    {
      emoji: "📚",
      text: "Believe in lifelong learning and growth mindset.",
      bgColor:
        "bg-white/80 dark:bg-slate-900/70 border border-slate-200/70 dark:border-slate-800/80",
    },
    {
      emoji: "✈️",
      text: "Dreaming of visiting the UK 🇬🇧, USA 🇺🇸, and Japan 🇯🇵 — culture, landscapes, and food!",
      bgColor:
        "bg-white/80 dark:bg-slate-900/70 border border-slate-200/70 dark:border-slate-800/80",
    },
    {
      emoji: "🌱",
      text: "Currently learning .NET and loving the challenge.",
      bgColor:
        "bg-white/80 dark:bg-slate-900/70 border border-slate-200/70 dark:border-slate-800/80",
    },
  ];

  return (
    <section
      id="fun-facts"
      className="py-12 px-6 bg-slate-50 dark:bg-slate-950 text-center"
      data-aos="zoom-in-up"
    >
      <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-8">
        Fun Facts About Me
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {facts.map((fact, index) => (
          <div
            key={index}
            className={`p-5 rounded-2xl shadow-sm shadow-slate-900/5 hover:scale-[1.02] transition-transform duration-300 text-left ${fact.bgColor}`}
            data-aos="zoom-in"
          >
            <div className="text-4xl mb-3">{fact.emoji}</div>
            <p className="text-slate-700 dark:text-slate-200 font-medium">
              {fact.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
