// src/pages/HomePage.jsx
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Build Your Resume in Minutes ✨
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Create a professional resume with our modern templates. Fast, simple,
          and completely free.
        </p>
        <Link
          to="/templates"
          className="px-8 py-3 rounded-2xl bg-purple-600 text-white font-semibold shadow-lg hover:bg-purple-700 transition"
        >
          Get Started
        </Link>
      </header>

      {/* Features */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        <div className="p-6 bg-white rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-3">📄 Multiple Templates</h2>
          <p className="text-gray-600">
            Choose from modern, creative, and classic templates to match your
            style.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-3">⚡ Easy to Use</h2>
          <p className="text-gray-600">
            Fill in your details and watch your resume come alive instantly.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-3">📥 Export as PDF</h2>
          <p className="text-gray-600">
            Download your polished resume in one click, ready to share anywhere.
          </p>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-16 bg-gradient-to-r from-purple-100 to-blue-100 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Preview Our Templates</h2>
          <p className="text-gray-600 mb-10">
            Select from our curated collection of resume templates designed for
            professionals.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Replace placeholders with template preview images */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src="/public/images/template1.png"
                alt="Template 1"
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <Link
                  to="/templates"
                  className="text-purple-600 font-semibold hover:underline"
                >
                  Use Template 1 →
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src="/public/images/template2.png"
                alt="Template 2"
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <Link
                  to="/templates"
                  className="text-purple-600 font-semibold hover:underline"
                >
                  Use Template 2 →
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src="/public/images/template3.png"
                alt="Template 3"
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <Link
                  to="/templates"
                  className="text-purple-600 font-semibold hover:underline"
                >
                  Use Template 3 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-white text-center mt-auto">
        <p>© {new Date().getFullYear()} Resume Builder. All rights reserved.</p>
      </footer>
    </div>
  );
}
