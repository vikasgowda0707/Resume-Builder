import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md w-full fixed top-0 left-0 z-50">
      {/* Wrapper */}
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold italic">Resume Builder</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <Link to="/home" className="hover:underline">
            Home
          </Link>
          <Link to="/templates" className="hover:underline">
            Templates
          </Link>
          <Link to="/myresume" className="hover:underline">
            My Resume
          </Link>
          <Link to="/about" className="hover:underline">
            About Us
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <span className="text-2xl">&times;</span> // Close icon
          ) : (
            <span className="text-2xl">&#9776;</span> // Hamburger icon
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-blue-700 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <div className="px-6 py-3 space-y-3">
          <Link
            to="/home"
            className="block hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/templates"
            className="block hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Resume Templates
          </Link>
          <Link
            to="/myresume"
            className="block hover:underline"
            onClick={() => setIsOpen(false)}
          >
            My Resume
          </Link>
          <Link
            to="/about"
            className="block hover:underline"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
