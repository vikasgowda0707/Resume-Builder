// src/pages/AboutUs.jsx
export default function AboutUs() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gradient-to-b from-white to-purple-50">
      {/* Header */}
      <header className="py-16 text-center px-6">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          About Us
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our mission is to help students and professionals create
          job-winning resumes with ease, speed, and style.
        </p>
      </header>

      {/* Mission Section */}
      <section className="py-12 px-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold text-purple-700 mb-3">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We believe everyone deserves a chance to showcase their skills
            and experience in the best way possible. That’s why we’ve built
            Resume Builder — a free and simple tool that empowers you to
            create professional resumes in minutes.
          </p>
        </div>
        <img
          src="/images/about.png"
          alt="Mission illustration"
          className="rounded-xl shadow-md"
        />
      </section>

      {/* Values Section */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-purple-700 mb-6">
            What We Value
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-purple-50 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">✨ Simplicity</h3>
              <p className="text-gray-600">
                Easy-to-use interface that saves you time and effort.
              </p>
            </div>
            <div className="p-6 bg-purple-50 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">🎨 Design</h3>
              <p className="text-gray-600">
                Modern, attractive templates built for real job markets.
              </p>
            </div>
            <div className="p-6 bg-purple-50 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">🚀 Growth</h3>
              <p className="text-gray-600">
                Helping you stand out and land your dream career.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team / Credits */}
      <section className="py-12 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">Who We Are</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Resume Builder is created with ❤️ by passionate developers who
          want to make career tools accessible for everyone.
        </p>
        <p className="text-gray-600 text-sm">
          Built with React, TailwindCSS, and creativity.
        </p>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-white text-center mt-auto">
        <p>© {new Date().getFullYear()} Resume Builder. All rights reserved.</p>
      </footer>
    </div>
  );
}
