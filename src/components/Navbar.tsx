import { useEffect, useState } from "react";

const sections = [
  "home",
  "about",
  "skills",
  "experience",
  "projects",
  "fun-facts",
  "contact",
];

type NavbarProps = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = sections
        .map((id) => {
          const el = document.getElementById(id);
          return el ? { id, offsetTop: el.offsetTop } : null;
        })
        .filter(Boolean) as { id: string; offsetTop: number }[];

      const scrollY = window.scrollY + 100;

      for (let i = offsets.length - 1; i >= 0; i--) {
        if (scrollY >= offsets[i].offsetTop) {
          setActive(offsets[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        {/* Logo & Dark Mode Toggle */}
        <div className="flex items-center gap-4">
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            🧑‍💻 Rewat
          </div>

          {/* Animated Dark Mode Toggle */}
          <div
            onClick={() => setDarkMode(!darkMode)}
            className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition-all duration-500
      ${darkMode ? "bg-gray-700" : "bg-yellow-300"}`}
          >
            <div
              className={`w-6 h-6 rounded-full shadow-md transform transition-all duration-500 flex items-center justify-center text-xs
        ${darkMode ? "translate-x-8 bg-white" : "translate-x-0 bg-white"}`}
            >
              {darkMode ? "🌙" : "☀️"}
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm md:text-base font-medium">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`capitalize transition hover:text-pink-500 ${
                  active === section
                    ? "text-pink-600 dark:text-pink-400 font-bold"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 dark:text-white focus:outline-none"
          >
            {isOpen ? "✖️" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col gap-4 text-base font-medium">
            {sections.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={handleLinkClick}
                  className={`capitalize block transition hover:text-pink-500 ${
                    active === section
                      ? "text-pink-600 dark:text-pink-400 font-bold"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
