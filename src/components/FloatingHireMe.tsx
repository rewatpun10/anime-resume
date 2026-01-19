import { useEffect, useRef, useState } from "react";

export default function FloatingHireMe({ targetRef }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );

    if (targetRef.current) observer.observe(targetRef.current);

    return () => {
      if (targetRef.current) observer.unobserve(targetRef.current);
    };
  }, [targetRef]);

  if (!visible) return null;

  return (
    <button
      onClick={() => {
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth" });
      }}
      className="fixed bottom-6 right-6 bg-slate-900 text-white px-4 py-2 rounded-full shadow-lg shadow-slate-900/20 hover:bg-slate-800 transition z-50"
      data-aos="zoom-in-up"
    >
      📩 Hire Me
    </button>
  );
}
