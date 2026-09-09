import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-5 max-w-7xl mx-auto">
      {/* Brand Logo */}
      <div className="flex items-center gap-0.5 text-2xl font-extrabold tracking-tight text-gray-900 cursor-pointer">
        <span>Flynext</span>
        <span className="text-amber-500 text-3xl leading-none">+</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden lg:flex items-center gap-8 text-xs font-semibold text-gray-700 uppercase tracking-wide">
        <a href="#home" className="hover:text-amber-600 transition-colors">
          Home
        </a>
        <a href="#pages" className="hover:text-amber-600 transition-colors">
          Pages
        </a>
        <a href="#blog" className="hover:text-amber-600 transition-colors">
          Blog
        </a>
        <a href="#about" className="hover:text-amber-600 transition-colors">
          About Us
        </a>
        <a href="#fleet" className="hover:text-amber-600 transition-colors">
          Our Fleet
        </a>
        <a href="#contacts" className="hover:text-amber-600 transition-colors">
          Contacts
        </a>
      </div>

      {/* Right Action Items */}
      <div className="flex items-center gap-5">
        <a
          href="mailto:contact@flynext.com"
          className="hidden md:flex items-center gap-2 text-xs font-semibold text-gray-800 hover:text-amber-600 transition-colors"
        >
          <svg
            className="w-4 h-4 text-amber-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          contact@flynext.com
        </a>

        <button className="flex items-center gap-2 bg-[#e4caa3] hover:bg-[#d8bb90] text-gray-900 font-bold px-5 py-2.5 rounded-full text-xs tracking-wider uppercase transition duration-200 shadow-sm">
          APPLY ONLINE
        </button>
      </div>
    </nav>
  );
};


export default Navbar;


