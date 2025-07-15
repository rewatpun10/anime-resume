export default function Contact() {
  return (
    <section
      id="contact"
      data-aos="fade-zoom-in"
      className="scroll-mb-0 min-h-screen py-16 px-6 bg-gradient-to-br from-yellow-100 via-pink-50 to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-center"
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-anime font-bold mb-6 text-gray-800 dark:text-white animate-pop">
        📬 Get in Touch
      </h2>

      {/* Subtext */}
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        I'd love to hear from you!
      </p>

      {/* Contact Info with color blocks */}
      <div className="text-lg text-gray-800 dark:text-gray-200 space-y-4 max-w-md mx-auto">
        <div className="bg-pink-100 dark:bg-pink-900 p-4 rounded-xl shadow-md">
          📱 <span className="font-semibold">Phone:</span> +61 405 882 389
        </div>
        <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-xl shadow-md">
          📧 <span className="font-semibold">Email:</span>{" "}
          <a
            href="mailto:punrewat@gmail.com"
            className="text-blue-600 dark:text-blue-300 underline hover:text-blue-800 dark:hover:text-blue-200 transition"
          >
            punrewat@gmail.com
          </a>
        </div>
        <div className="bg-green-100 dark:bg-green-900 p-4 rounded-xl shadow-md">
          📍 <span className="font-semibold">Location:</span> Canberra,
          Australia
        </div>
      </div>
    </section>
  );
}
