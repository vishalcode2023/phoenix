import React from "react";

const mainNavLinks = ["About Phoenix", "Courses", "Placements"];

const courseLinks = [
  "Commercial Pilot Training",
  "Cabin Crew & Hospitality",
  "Airport Ground Handling",
  "Flight Dispatcher Course",
  "Aviation Security & Safety",
];

// Lightweight SVG Social Icons
const SocialIcon = ({ type }) => {
  const icons = {
    linkedin: (
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
    ),
    instagram: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
    facebook: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    ),
    twitter: (
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    ),
  };

  return (
    <svg
      className="w-4 h-4 fill-none stroke-currentColor stroke-2 stroke-linecap-round stroke-linejoin-round"
      viewBox="0 0 24 24"
    >
      {icons[type]}
    </svg>
  );
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-white text-slate-700 font-sans border-t border-slate-200/80 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');
      `}</style>

      {/* Light soft ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-gradient-to-r from-sky-100/70 via-blue-100/40 to-orange-100/50 blur-[120px] pointer-events-none rounded-full" />

      {/* Subtle blueprint grid overlay for light theme */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.6) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Hero CTA Banner */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-12 pt-12 z-10">
        <div className="relative group overflow-hidden bg-gradient-to-r from-[#00529b] via-[#003e75] to-slate-900 rounded-[32px] p-8 sm:p-12 shadow-xl border border-sky-900/20">
          {/* Decorative plane watermark */}
          <svg
            className="absolute -right-8 -bottom-10 w-72 h-72 text-white/[0.05] pointer-events-none transform -rotate-12 group-hover:scale-105 transition-transform duration-700"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
          </svg>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-amber-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#f05123] animate-pulse" />
                Admissions Open 2026–2027
              </div>
              <h3
                className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                Start Your Aviation Career with Phoenix
              </h3>
              <p
                className="text-slate-200 text-sm sm:text-base leading-relaxed"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                Explore industry-accredited courses, top-tier placements, and
                ground-floor aviation training guided by senior airline
                captains.
              </p>
            </div>

            <a
              href="#"
              className="group/btn no-underline bg-[#f05123] hover:bg-[#d94218] text-white text-sm font-semibold px-8 py-4 rounded-full inline-flex items-center gap-3 transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/35 flex-shrink-0"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              <span>Apply Now</span>
              <svg
                className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-200"
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
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-12 pt-16 pb-12 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-200/80">
          {/* Brand Info & Badges */}
          <div className="lg:col-span-5 space-y-5">
            <a href="#" className="no-underline inline-block">
              <img
                src="/logo.png"
                alt="Phoenix Logo"
                className="h-10 w-auto object-contain"
              />
            </a>

            <p
              className="text-slate-600 text-sm leading-relaxed max-w-sm"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              Empowering future aviation professionals with certified training
              programs, hands-on exposure, and world-class placement partners.
            </p>

            {/* Accreditation Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="text-[11px] font-semibold text-[#00529b] bg-sky-50 border border-sky-200/80 px-3 py-1 rounded-full">
                DGCA Aligned
              </span>
              <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 border border-amber-200/80 px-3 py-1 rounded-full">
                AASSC Certified
              </span>
              <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-3 py-1 rounded-full">
                100% Placement Support
              </span>
            </div>

            {/* Social Links */}
            {/* <div className="flex items-center gap-3 pt-2">
              {["linkedin", "instagram", "facebook", "twitter"].map(
                (platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#00529b] border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-white transition-all duration-300 shadow-sm"
                    aria-label={platform}
                  >
                    <SocialIcon type={platform} />
                  </a>
                ),
              )}
            </div> */}
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4
              className="text-slate-900 font-semibold text-xs uppercase tracking-wider"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              Navigation
            </h4>
            <ul
              className="space-y-3 list-none p-0 m-0 text-sm"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              {mainNavLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="group no-underline text-slate-600 hover:text-[#00529b] transition-colors duration-200 inline-flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f05123] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Courses Links */}
          <div className="lg:col-span-4 space-y-4">
            <h4
              className="text-slate-900 font-semibold text-xs uppercase tracking-wider"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              Featured Programs
            </h4>
            <ul
              className="space-y-3 list-none p-0 m-0 text-sm"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              {courseLinks.map((course, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="group no-underline text-slate-600 hover:text-[#00529b] transition-colors duration-200 inline-flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00529b] opacity-40 group-hover:opacity-100 transition-all" />
                    <span>{course}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500"
          style={{ fontFamily: '"Inter", sans-serif' }}
        >
          <p>
            © {new Date().getFullYear()} Phoenix Aviation Academy. All rights
            reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="no-underline text-slate-500 hover:text-slate-800 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="no-underline text-slate-500 hover:text-slate-800 transition-colors"
            >
              Terms & Conditions
            </a>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200/80 hover:bg-[#00529b] flex items-center justify-center text-slate-700 hover:text-white transition-all duration-300 shadow-sm"
              aria-label="Back to top"
            >
              ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
