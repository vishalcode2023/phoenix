import React from "react";

const features = [
  {
    tag: "A decade, minimum",
    title: "Trainers who've lived it",
    description:
      "Every instructor spent ten years or more on the tarmac and in the cabin before they stood in front of a classroom — not theory borrowed from a textbook.",
    icon: "trainer",
  },
  {
    tag: "AASSC certified",
    title: "A credential that means something",
    description:
      "Graduate with an AASSC certification mapped to national skill standards — proof of competencies employers actually recognize.",
    icon: "certificate",
  },
  {
    tag: "Live sessions",
    title: "Time on a real airport floor",
    description:
      "Guided visits into live airport operations put you inside the environment you're training for, long before your first interview.",
    icon: "tower",
  },
  {
    tag: "Hands-on studio",
    title: "Skills airlines hire for",
    description:
      "CRS ticketing, flight safety procedure, professional grooming, and passenger handling — drilled until they're second nature.",
    icon: "skills",
  },
];

function Icon({ name, className }) {
  const icons = {
    trainer: (
      <>
        <circle
          cx="12"
          cy="8"
          r="3.2"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <path
          d="M5.5 20c.6-3.6 3.3-5.5 6.5-5.5s5.9 1.9 6.5 5.5"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <path
          d="M16.5 6.2c1.6.5 2.7 1.9 2.7 3.6 0 1.5-.9 2.8-2.1 3.4"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
      </>
    ),
    certificate: (
      <>
        <rect
          x="4"
          y="4.5"
          width="16"
          height="11"
          rx="1.6"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <path
          d="M7 8h6M7 11h9"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <circle
          cx="9.5"
          cy="18.5"
          r="2.2"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M8.2 20.3L7.6 23l1.9-1.1 1.9 1.1-.6-2.7"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinejoin="round"
        />
      </>
    ),
    tower: (
      <>
        <path
          d="M9 21h6M10 21V9.5h4V21"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <path
          d="M8.5 9.5h7L14 4h-4l-1.5 5.5Z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        <path
          d="M4.5 15.5c1.4-1 3-1.5 4.7-1.5M19.5 15.5c-1.4-1-3-1.5-4.7-1.5"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
      </>
    ),
    skills: (
      <>
        <path
          d="M14.5 4.5l1.8 1.8-8 8-2.6.8.8-2.6 8-8Z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        <path
          d="M4.5 19.5h6"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <path
          d="M15 8.5l1.6-1.6"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
      </>
    ),
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      {icons[name]}
    </svg>
  );
}

export default function CredentialsSection() {
  return (
    <section className="relative w-full py-20 md:py-28 px-4 sm:px-6 md:px-12 bg-white text-slate-900 overflow-hidden">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');`}</style>

      {/* Subtle light ambient glow */}
      <div className="absolute top-0 left-1/4 w-[36rem] h-[36rem] bg-sky-100/60 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-orange-100/50 rounded-full blur-[128px] pointer-events-none" />

      {/* Light blueprint grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.8) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
          <div className="max-w-xl">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest text-[#f05123] mb-4"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              Why train here
            </span>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.05]"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              Built like a real airline
              <br />
              training floor
            </h2>
          </div>
          <p
            className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xs md:text-right"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Every credential below is something you'll actually be asked about
            in an airline interview.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-[28px] p-8 md:p-10 border border-slate-200/80 bg-slate-50/50 hover:bg-white backdrop-blur-md transition-all duration-500 hover:border-[#f05123]/40 hover:shadow-xl shadow-sm"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              {/* Watermark numeral */}
              <span
                className="pointer-events-none absolute -top-3 right-5 text-[6.5rem] leading-none font-semibold text-slate-200/70 group-hover:text-[#f05123]/10 transition-colors duration-500 select-none"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                {["I", "II", "III", "IV"][idx]}
              </span>

              <div className="relative flex items-start gap-5">
                <div className="relative flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-[#00529b] bg-white border border-slate-200 shadow-sm group-hover:border-[#f05123]/40 group-hover:text-[#f05123] transition-colors duration-500">
                  <Icon name={item.icon} className="w-6 h-6" />
                </div>

                <div className="flex-1 min-w-0">
                  <span className="block text-xs font-bold text-[#f05123] mb-2 tracking-wide uppercase">
                    {item.tag}
                  </span>
                  <h3
                    className="text-xl sm:text-2xl font-semibold text-slate-900 mb-3 leading-snug"
                    style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <span className="relative block w-8 group-hover:w-14 h-px bg-gradient-to-r from-[#f05123] to-[#00529b] mt-7 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Fine-print signature line */}
        <div
          className="mt-14 md:mt-16 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs text-slate-500 text-center"
          style={{ fontFamily: '"Inter", sans-serif' }}
        >
          <span>AASSC accredited</span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span>Curriculum aligned to national skill standards</span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span>Trusted by 40+ airline & airport partners</span>
        </div>
      </div>
    </section>
  );
}
