import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Courses",
    path: "/courses",
    subLinks: [
      {
        name: "Air Hostess",
        path: "/courses/aviation-hospitality-travel-management",
      },
      {
        name: "Airport Ground Operations",
        path: "/courses/airport-ground-services",
      },
    ],
  },
  {
    name: "Faculty",
    path: "/faculty",
  },
  {
    name: "About us",
    path: "/aboutus",
  },
  {
    name: "Contact us",
    path: "/contact",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsOpen(false);
    setMobileCoursesOpen(false);
  };

  return (
    <div className="relative w-full px-3 sm:px-5 md:px-8 pt-3 md:pt-5 z-50">
      {/* =========================================================
          NAVBAR
      ========================================================= */}
      <header
        className="
          relative
          w-full
          bg-gray-100
          px-4
          py-3
          md:px-8
          md:py-4
          flex
          items-center
          justify-between
          rounded-[24px]
          md:rounded-[32px]
          shadow-md
          border
          border-gray-200
        "
      >
        {/* =====================================================
            LOGO
        ===================================================== */}
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="
            no-underline
            flex
            items-center
            shrink-0
          "
        >
          <img
            src="/logo.png"
            alt="Phoenix Logo"
            className="
              w-20
              h-auto
              object-contain
            "
          />
        </Link>

        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}
        <ul
          className="
            hidden
            xl:flex
            items-center
            gap-6
            xl:gap-8
            list-none
            m-0
            p-0
          "
        >
          {navLinks.map((link) => (
            <li key={link.name} className="relative group py-2">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `
                    no-underline
                    text-sm
                    flex
                    items-center
                    gap-1.5
                    whitespace-nowrap
                    transition-colors
                    duration-200
                    ${
                      isActive
                        ? "text-[#00529b] font-semibold"
                        : "text-[#1e293b] font-medium hover:text-[#00529b]"
                    }
                  `
                }
              >
                <span>{link.name}</span>

                {link.subLinks && (
                  <svg
                    className="
                      w-3.5
                      h-3.5
                      transition-transform
                      duration-200
                      group-hover:rotate-180
                    "
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

              {/* =================================================
                  DESKTOP COURSES DROPDOWN
              ================================================= */}
              {link.subLinks && (
                <div
                  className="
                    absolute
                    left-1/2
                    -translate-x-1/2
                    top-full
                    pt-3
                    hidden
                    group-hover:block
                    w-[280px]
                    z-[100]
                  "
                >
                  <div
                    className="
                      bg-white
                      rounded-2xl
                      shadow-xl
                      border
                      border-gray-100
                      py-2
                      overflow-hidden
                    "
                  >
                    {link.subLinks.map((sub) => (
                      <NavLink
                        key={sub.name}
                        to={sub.path}
                        className={({ isActive }) =>
                          `
                            block
                            w-full
                            px-5
                            py-3
                            text-sm
                            no-underline
                            whitespace-nowrap
                            transition-all
                            duration-200
                            ${
                              isActive
                                ? "bg-sky-50 text-[#00529b] font-semibold"
                                : "text-[#1e293b] font-medium hover:bg-gray-50 hover:text-[#00529b]"
                            }
                          `
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

        {/* =====================================================
            DESKTOP BUTTONS
        ===================================================== */}
        <div className="hidden xl:flex items-center gap-3 shrink-0">
  

          {/* Contact */}
          <Link
            to="/contact"
            className="
              no-underline
              bg-[#9C1726]
              hover:bg-[#7f1220]
              text-white
              text-sm
              font-semibold
              px-6
              py-2.5
              rounded-[13px]
              inline-flex
              items-center
              justify-center
              gap-2
              transition-all
              duration-200
              shadow-sm
              whitespace-nowrap
            "
          >
            <span>Contact Us</span>

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

        {/* =====================================================
            MOBILE / TABLET RIGHT SIDE
        ===================================================== */}
        <div className="flex xl:hidden items-center gap-2">
          {/* Mobile Apply */}
          <Link
            to="/apply"
            className="
              md:hidden
              no-underline
              bg-[#00529b]
              hover:bg-[#003e75]
              text-white
              text-xs
              font-semibold
              px-4
              py-2
              rounded-full
              inline-flex
              items-center
              gap-1
              transition-all
              duration-200
            "
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

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="
              p-2
              text-gray-700
              hover:text-[#00529b]
              focus:outline-none
              transition-colors
              duration-200
            "
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
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

      {/* =========================================================
          MOBILE MENU
      ========================================================= */}
      {isOpen && (
        <div
          className="
            xl:hidden
            mt-3
            w-full
            bg-white
            rounded-[24px]
            shadow-xl
            border
            border-gray-200
            overflow-hidden
          "
        >
          <nav className="w-full px-5 py-5">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.subLinks ? (
                    /* =================================================
                       MOBILE COURSES
                    ================================================= */
                    <div className="w-full">
                      <button
                        type="button"
                        onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                        className="
                          w-full
                          flex
                          items-center
                          justify-between
                          text-left
                          bg-transparent
                          border-0
                          outline-none
                          cursor-pointer
                          px-3
                          py-3.5
                          text-[15px]
                          font-medium
                          text-[#1e293b]
                          hover:text-[#00529b]
                          transition-colors
                          duration-200
                        "
                      >
                        <span>Courses</span>

                        <svg
                          className={`
                            w-4
                            h-4
                            shrink-0
                            transition-transform
                            duration-200
                            ${mobileCoursesOpen ? "rotate-180" : ""}
                          `}
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

                      {/* Course Submenu */}
                      {mobileCoursesOpen && (
                        <div
                          className="
                            ml-3
                            mb-2
                            pl-4
                            border-l-2
                            border-sky-100
                            flex
                            flex-col
                          "
                        >
                          {link.subLinks.map((sub) => (
                            <NavLink
                              key={sub.name}
                              to={sub.path}
                              onClick={closeMobileMenu}
                              className={({ isActive }) =>
                                `
                                  block
                                  w-full
                                  text-left
                                  no-underline
                                  px-3
                                  py-3
                                  text-sm
                                  whitespace-nowrap
                                  transition-colors
                                  duration-200
                                  ${
                                    isActive
                                      ? "text-[#00529b] font-semibold"
                                      : "text-slate-600 font-medium hover:text-[#00529b]"
                                  }
                                `
                              }
                            >
                              {sub.name}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    /* =================================================
                       NORMAL MOBILE LINK
                    ================================================= */
                    <NavLink
                      to={link.path}
                      onClick={closeMobileMenu}
                      className={({ isActive }) =>
                        `
                          block
                          w-full
                          text-left
                          no-underline
                          px-3
                          py-3.5
                          text-[15px]
                          transition-colors
                          duration-200
                          ${
                            isActive
                              ? "text-[#00529b] font-semibold"
                              : "text-[#1e293b] font-medium hover:text-[#00529b]"
                          }
                        `
                      }
                    >
                      {link.name}
                    </NavLink>
                  )}
                </div>
              ))}
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
