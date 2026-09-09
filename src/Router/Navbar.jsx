import React, { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Enrollment", href: "#enrollment" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#1D61E7] flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Aviate Academy
            </span>
          </a>

          {/* Clean Navigation Links */}
          <div className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => {
              const isActive = activeNav === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveNav(link.name)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-[#1D61E7] font-semibold"
                      : "text-gray-600 hover:text-[#1D61E7]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-[#1D61E7] hover:bg-blue-700 text-white text-sm font-semibold px-6 py-2.5 rounded-xl shadow-sm transition-all duration-200 hover:shadow-md active:scale-95">
              Apply Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none p-1"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveNav(link.name);
                  setMobileMenuOpen(false);
                }}
                className={`block text-sm font-medium ${
                  activeNav === link.name ? "text-[#1D61E7] font-semibold" : "text-gray-600"
                }`}
              >
                {link.name}
              </a>
            ))}
            <button className="w-full bg-[#1D61E7] text-white text-sm font-semibold py-2.5 rounded-xl shadow-sm mt-2">
              Apply Now
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;