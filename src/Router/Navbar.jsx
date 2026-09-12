import { useState } from "react";

const navLinks = ["About Phoenix", "Courses", "Placements"];

export default function Navbar() {
  const [active, setActive] = useState("Courses");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full px-2 sm:px-4 md:px-6 top-0 z-50">
      <header className="w-full bg-gray-100 px-4 py-3 md:px-8 md:py-4 flex items-center justify-between rounded-b-3xl md:rounded-b-[36px] shadow-sm border-b border-gray-100">
        {/* Brand Logo */}
        <a href="#" className="no-underline flex items-center gap-3">
          <div className="flex flex-col">
            <img
              src="/logo.png"
              alt="Phoenix Logo"
              className="w-20 sm:w-40 md:w-18 h-auto object-contain"
            />
          </div>
        </a>

        {/* Center Navigation Links (Desktop) */}
        <ul className="hidden xl:flex items-center gap-6 xl:gap-8 list-none m-0 p-0">
          {navLinks.map((l) => (
            <li key={l}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActive(l);
                }}
                className="no-underline text-sm font-medium transition-colors duration-200"
                style={{
                  color: active === l ? "#00529b" : "#1e293b",
                  fontWeight: active === l ? "600" : "500",
                }}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Action Area (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          {/* Circular Search Button */}

          {/* Apply Button */}
          <a
            href="#"
            className="no-underline bg-[#00529b] hover:bg-[#003e75] text-white text-sm font-semibold px-6 py-2.5 rounded-full inline-flex items-center gap-2 transition-all duration-200 shadow-sm"
          >
            <span>Apply</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>

        {/* Mobile Quick Action & Menu Button */}
        <div className="flex xl:hidden items-center gap-2">
          <a
            href="#"
            className="no-underline bg-[#00529b] text-white text-xs font-semibold px-4 py-2 rounded-full inline-flex items-center gap-1 md:hidden"
          >
            <span>Apply</span>
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-700 hover:text-black focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="xl:hidden mt-2 bg-white rounded-2xl px-6 py-5 shadow-lg border border-gray-100 flex flex-col gap-4">
          

          {navLinks.map((l) => (
            <a
              key={l}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActive(l);
                setIsOpen(false);
              }}
              className="no-underline text-sm font-medium transition-colors duration-200"
              style={{
                color: active === l ? "#00529b" : "#1e293b",
                fontWeight: active === l ? "600" : "500",
              }}
            >
              {l}
            </a>
          ))}

          
        </div>
      )}
    </div>
  );
}
