export default function FunFacts() {
  const facts = [
    {
      emoji: "🎮",
      text: "I love playing PS5 — especially FIFA 25!",
      bgColor: "bg-purple-100 dark:bg-purple-900",
    },
    {
      emoji: "🏍️",
      text: "Weekend motorbike rides are my therapy.",
      bgColor: "bg-red-100 dark:bg-red-900",
    },
    {
      emoji: "⚽",
      text: "Enjoy playing football with friends on weekends.",
      bgColor: "bg-green-100 dark:bg-green-900",
    },
    {
      emoji: "📷",
      text: "Enjoy capturing moments with my camera.",
      bgColor: "bg-yellow-100 dark:bg-yellow-900",
    },
    {
      emoji: "🥟",
      text: "Massive momo fan — steamed or fried, I love them all!",
      bgColor: "bg-pink-100 dark:bg-pink-900",
    },
    {
      emoji: "🎧",
      text: "Spotify on loop — coding with chill lo-fi beats.",
      bgColor: "bg-indigo-100 dark:bg-indigo-900",
    },
    {
      emoji: "📚",
      text: "Believe in lifelong learning and growth mindset.",
      bgColor: "bg-blue-100 dark:bg-blue-900",
    },
    {
      emoji: "✈️",
      text: "Dreaming of visiting the UK 🇬🇧, USA 🇺🇸, and Japan 🇯🇵 — culture, landscapes, and food!",
      bgColor: "bg-teal-100 dark:bg-teal-900",
    },
    {
      emoji: "🌱",
      text: "Currently learning .NET and loving the challenge.",
      bgColor: "bg-lime-100 dark:bg-lime-900",
    },
  ];

  return (
    <section
      id="fun-facts"
      className="py-16 px-6 bg-gradient-to-br from-blue-100 via-yellow-50 to-pink-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-center"
      data-aos="zoom-in-up"
    >
      <h2 className="text-3xl md:text-4xl font-bold font-anime text-gray-800 dark:text-white mb-8">
        🎉 Fun Facts About Me
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {facts.map((fact, index) => (
          <div
            key={index}
            className={`p-4 rounded-xl shadow hover:scale-105 transition-transform duration-300 text-left ${fact.bgColor}`}
            data-aos="zoom-in"
          >
            <div className="text-4xl mb-3">{fact.emoji}</div>
            <p className="text-gray-800 dark:text-gray-200 font-medium">
              {fact.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
