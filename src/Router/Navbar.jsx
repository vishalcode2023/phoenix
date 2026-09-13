import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  {
    name: "Courses",
    path: "/courses",
    subLinks: [
      {
        name: "Aviation & Hospitality",
        path: "/courses/aviation-hospitality-travel-management",
      },
      {
        name: "Airport Ground Services",
        path: "/courses/airport-ground-services",
      },
    ],
  },
  { name: "About US", path: "/aboutus" },
  { name: "Contact us", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);

  return (
    <div className="w-full px-2 sm:px-4 md:px-6 top-0 z-50">
      <header className="w-full bg-gray-100 px-4 py-3 md:px-8 md:py-4 flex items-center justify-between rounded-b-3xl md:rounded-b-[36px] shadow-sm border-b border-gray-100">
        {/* Brand Logo */}
        <Link to="/" className="no-underline flex items-center gap-3">
          <div className="flex flex-col">
            <img
              src="/logo.png"
              alt="Phoenix Logo"
              className="w-20 sm:w-40 md:w-18 h-auto object-contain"
            />
          </div>
        </Link>

        {/* Center Navigation Links (Desktop) */}
        <ul className="hidden xl:flex items-center gap-6 xl:gap-8 list-none m-0 p-0">
          {navLinks.map((l) => (
            <li key={l.name} className="relative group py-2">
              <NavLink
                to={l.path}
                className={({ isActive }) =>
                  `no-underline text-sm transition-colors duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? "text-[#00529b] font-semibold"
                      : "text-[#1e293b] font-medium hover:text-[#00529b]"
                  }`
                }
              >
                <span>{l.name}</span>
                {l.subLinks && (
                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </NavLink>

              {/* Hover Submenu Dropdown for Courses */}
              {l.subLinks && (
                <div className="absolute left-0 top-full pt-1 hidden group-hover:block w-52 z-50">
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 py-2 flex flex-col overflow-hidden">
                    {l.subLinks.map((sub) => (
                      <NavLink
                        key={sub.name}
                        to={sub.path}
                        className={({ isActive }) =>
                          `px-5 py-2.5 text-sm no-underline transition-colors duration-150 ${
                            isActive
                              ? "bg-sky-50 text-[#00529b] font-semibold"
                              : "text-[#1e293b] font-medium hover:bg-gray-50 hover:text-[#00529b]"
                          }`
                        }
                      >
                        {sub.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Right Action Area (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/apply"
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
          </Link>
        </div>

        {/* Mobile Quick Action & Menu Button */}
        <div className="flex xl:hidden items-center gap-2">
          <Link
            to="/apply"
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
          </Link>

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
        <div className="xl:hidden mt-2 bg-white rounded-2xl px-6 py-5 shadow-lg border border-gray-100 flex flex-col gap-3">
          {navLinks.map((l) =>
            l.subLinks ? (
              <div key={l.name} className="flex flex-col gap-2">
                <button
                  onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                  className="flex items-center justify-between text-left text-sm font-medium text-[#1e293b] bg-transparent border-none p-0 focus:outline-none cursor-pointer"
                >
                  <span>{l.name}</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileCoursesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {mobileCoursesOpen && (
                  <div className="pl-4 flex flex-col gap-2 border-l-2 border-sky-100 my-1">
                    {l.subLinks.map((sub) => (
                      <NavLink
                        key={sub.name}
                        to={sub.path}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          `no-underline text-xs transition-colors duration-200 ${
                            isActive
                              ? "text-[#00529b] font-semibold"
                              : "text-slate-600 font-medium hover:text-[#00529b]"
                          }`
                        }
                      >
                        {sub.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={l.name}
                to={l.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `no-underline text-sm transition-colors duration-200 ${
                    isActive
                      ? "text-[#00529b] font-semibold"
                      : "text-[#1e293b] font-medium hover:text-[#00529b]"
                  }`
                }
              >
                {l.name}
              </NavLink>
            ),
          )}
        </div>
      )}
    </div>
  );
}
