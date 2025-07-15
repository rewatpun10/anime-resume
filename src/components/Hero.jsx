import profileImg from "../assets/profile.png";
import { useRef } from "react";

export default function Hero({ hireMeRef }) {
  return (
    <section
      id="home"
      data-aos="fade-down"
      className="relative overflow-hidden bg-gradient-to-br from-yellow-200 via-yellow-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 py-16 px-6 transition-colors duration-500"
    >
      {/* Floating Blob */}
      <div className="absolute top-[-40px] left-[-40px] w-64 h-64 bg-pink-200 dark:bg-gray-700 rounded-full opacity-30 blur-3xl animate-pulse"></div>

      <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 text-center md:text-left z-10">
        <img
          src={profileImg}
          alt="Rewat"
          className="w-40 h-35 rounded-full object-cover shadow-md border-2 border-indigo-300 dark:border-gray-500"
        />

        <div>
          <h1 className="text-4xl md:text-5xl font-bold font-anime text-gray-800 dark:text-white mb-4 flex items-center justify-center md:justify-start gap-2">
            Hi, I’m Rewat{" "}
            <span className="inline-block animate-bounce text-2xl">👋</span>
          </h1>

          {/* Typewriter effect */}
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            <span className="typewriter block">
              I build things for the web, break them... and fix them before my
              coffee gets cold ☕
            </span>
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#contact">
              <button
                ref={hireMeRef}
                className="bg-pink-400 dark:bg-pink-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-pink-500 dark:hover:bg-pink-500  animate-bounce-slow"
              >
                Hire Me
              </button>
            </a>

            <a
              href="/RewatPun_Resume.pdf"
              download
              className="border border-pink-400 dark:border-pink-600 text-pink-700 dark:text-pink-200 px-6 py-2 rounded-full font-semibold hover:bg-pink-100 dark:hover:bg-pink-900  animate-bounce-slow"
            >
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
