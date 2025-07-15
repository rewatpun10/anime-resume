import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import FloatingHireMe from "./components/FloatingHireMe";
import FunFacts from "./components/FunFacts";
import Navbar from "./components/Navbar";
import WorkExperience from "./components/WorkExperience";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const hireMeRef = useRef(null);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="font-anime duration-500">
      {/* Sections */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero hireMeRef={hireMeRef} />
      <About />
      <Skills />
      <WorkExperience />
      <Projects />
      <FunFacts />
      <Contact />
      <FloatingHireMe targetRef={hireMeRef} />
    </div>
  );
}

export default App;
