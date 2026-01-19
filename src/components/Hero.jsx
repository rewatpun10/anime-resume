import profileImg from "../assets/profile.png";
import { useRef } from "react";

export default function Hero({ hireMeRef }) {
  return (
    <section
      id="home"
      data-aos="fade-down"
      className="relative overflow-hidden bg-slate-50 dark:bg-transparent pt-20 pb-12 px-6 transition-colors duration-500"
    >
      <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 text-center md:text-left z-10">
        <img
          src={profileImg}
          alt="Rewat"
          className="w-40 h-35 rounded-full object-cover shadow-lg border border-white/70 dark:border-slate-700/80"
        />

        <div>
          <h1 className="text-4xl md:text-5xl font-bold font-display text-slate-900 dark:text-slate-100 mb-4 flex items-center justify-center md:justify-start gap-2">
            Hi, I’m Rewat{" "}
            <span className="inline-block animate-bounce text-2xl">👋</span>
          </h1>

          <p className="text-lg font-semibold text-slate-700 dark:text-amber-200 mb-2">
            Full Stack Software Engineer (React + Java)
          </p>

          {/* Typewriter effect */}
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
            <span className="typewriter block">
              I build things for the web, break them... and fix them before my
              coffee gets cold ☕
            </span>
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#contact">
              <button
                ref={hireMeRef}
                className="bg-amber-500 text-slate-900 px-6 py-2 rounded-full font-semibold shadow-lg shadow-amber-500/30 hover:bg-amber-400 transition  animate-bounce-slow"
              >
                Hire Me
              </button>
            </a>

            <a
              href="/RewatPun_Resume.pdf"
              download
              className="border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-100 px-6 py-2 rounded-full font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition  animate-bounce-slow"
            >
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
