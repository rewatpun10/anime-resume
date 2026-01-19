export default function Contact() {
  return (
    <section
      id="contact"
      data-aos="fade-zoom-in"
      className="scroll-mb-0 py-12 px-6 bg-slate-50 dark:bg-slate-950 text-center"
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-slate-900 dark:text-white animate-pop">
        Get in Touch
      </h2>

      {/* Subtext */}
      <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
        I'd love to hear from you!
      </p>

      {/* Contact Info with color blocks */}
      <div className="text-lg text-slate-700 dark:text-slate-200 space-y-4 max-w-md mx-auto">
        <div className="bg-slate-50 dark:bg-slate-900/70 p-4 rounded-2xl shadow-sm shadow-slate-900/5 border border-slate-200/70 dark:border-slate-800/80">
          📱 <span className="font-semibold">Phone:</span> +61 405 882 389
        </div>
        <div className="bg-slate-50 dark:bg-slate-900/70 p-4 rounded-2xl shadow-sm shadow-slate-900/5 border border-slate-200/70 dark:border-slate-800/80">
          📧 <span className="font-semibold">Email:</span>{" "}
          <a
            href="mailto:punrewat@gmail.com"
            className="text-teal-600 dark:text-teal-300 underline hover:text-teal-700 dark:hover:text-teal-200 transition"
          >
            punrewat@gmail.com
          </a>
        </div>
        <div className="bg-slate-50 dark:bg-slate-900/70 p-4 rounded-2xl shadow-sm shadow-slate-900/5 border border-slate-200/70 dark:border-slate-800/80">
          📍 <span className="font-semibold">Location:</span> Canberra,
          Australia
        </div>
      </div>
    </section>
  );
}
