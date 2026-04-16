import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../../assets/resumelogo.png";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white/70 backdrop-blur-xl flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="flex  items-center  text-xl font-bold text-indigo-900">
          <Link to="/" className="flex items-center">
            <span className="flex  items-center ">
              <img src={Logo} alt="logo" className="w-20 h-20 object-contain" />
              Lumia AI
            </span>
          </Link>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {[
            { name: "Home", id: "home" },
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "About", id: "about" },
          ].map((item) => (
            <a
              key={item.name}
              href={`#${item.id}`}
              className="text-gray-600 hover:text-indigo-900 font-medium transition"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          <Link
            to="/login"
            className="text-gray-600 font-semibold hover:text-indigo-900 items-center justify-center flex "
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-full font-bold"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-2xl text-indigo-900 p-2"
        >
          {isMobileMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      <div
        className={`fixed z-100 top-16 left-0 w-[60%] bg-white/95 backdrop-blur-xl items-center shadow-xl rounded-r-2xl flex flex-col gap-6 p-6 text-lg transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Links */}
        {[
          { name: "Home", id: "home" },
          { name: "Features", id: "features" },
          { name: "Pricing", id: "pricing" },
          { name: "About", id: "about" },
        ].map((item) => (
          <a
            key={item.name}
            href={`#${item.id}`}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-700 hover:text-indigo-900 font-semibold"
          >
            {item.name}
          </a>
        ))}

        {/* Buttons */}
        <Link
          to="/login"
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-gray-700"
        >
          Login
        </Link>

        <Link
          to="/register"
          onClick={() => setIsMobileMenuOpen(false)}
          className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-full font-bold text-center"
        >
          Get Started
        </Link>
      </div>
    </>
  );
}
