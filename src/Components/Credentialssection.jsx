import React, { useState } from "react";

const features = [
  {
    tag: "A decade, minimum",
    title: "Trainers who've lived it",
    description:
      "Every instructor spent ten years or more on the tarmac and in the cabin before they stood in front of a classroom — not theory borrowed from a textbook.",
    icon: "trainer",
    accent: "#00529b",
    accentLight: "rgba(0,82,155,0.08)",
    stat: { value: "10+", label: "Years avg. experience" },
  },
  {
    tag: "AASSC certified",
    title: "A credential that means something",
    description:
      "Graduate with an AASSC certification mapped to national skill standards — proof of competencies employers actually recognize.",
    icon: "certificate",
    accent: "#f05123",
    accentLight: "rgba(240,81,35,0.08)",
    stat: { value: "AASSC", label: "Nationally recognized" },
  },
  {
    tag: "Live sessions",
    title: "Time on a real airport floor",
    description:
      "Guided visits into live airport operations put you inside the environment you're training for, long before your first interview.",
    icon: "tower",
    accent: "#00529b",
    accentLight: "rgba(0,82,155,0.08)",
    stat: { value: "Live", label: "Airport floor visits" },
  },
  {
    tag: "Hands-on studio",
    title: "Skills airlines hire for",
    description:
      "CRS ticketing, flight safety procedure, professional grooming, and passenger handling — drilled until they're second nature.",
    icon: "skills",
    accent: "#f05123",
    accentLight: "rgba(240,81,35,0.08)",
    stat: { value: "4+", label: "Core skill modules" },
  },
];

function Icon({ name, color }) {
  const paths = {
    trainer: (
      <>
        <circle cx="12" cy="8" r="3.2" stroke={color} strokeWidth="1.5" />
        <path
          d="M5.5 20c.6-3.6 3.3-5.5 6.5-5.5s5.9 1.9 6.5 5.5"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M16.5 6.2c1.6.5 2.7 1.9 2.7 3.6 0 1.5-.9 2.8-2.1 3.4"
          stroke={color}
          strokeWidth="1.3"
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
          stroke={color}
          strokeWidth="1.5"
        />
        <path
          d="M7 8h6M7 11h9"
          stroke={color}
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <circle cx="9.5" cy="18.5" r="2.2" stroke={color} strokeWidth="1.3" />
        <path
          d="M8.2 20.3L7.6 23l1.9-1.1 1.9 1.1-.6-2.7"
          stroke={color}
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </>
    ),
    tower: (
      <>
        <path
          d="M9 21h6M10 21V9.5h4V21"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M8.5 9.5h7L14 4h-4l-1.5 5.5Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M4.5 15.5c1.4-1 3-1.5 4.7-1.5M19.5 15.5c-1.4-1-3-1.5-4.7-1.5"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </>
    ),
    skills: (
      <>
        <path
          d="M14.5 4.5l1.8 1.8-8 8-2.6.8.8-2.6 8-8Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M4.5 19.5h6"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M15 8.5l1.6-1.6"
          stroke={color}
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </>
    ),
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      {paths[name]}
    </svg>
  );
}

function CheckIcon({ color }) {
  return (
    <svg viewBox="0 0 14 14" fill="none" className="w-3 h-3 shrink-0">
      <path
        d="M2 7l3.5 3.5L12 3.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CredentialsSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      className="relative w-full bg-[#f6f8fa] overflow-hidden"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');`}</style>

      {/* ── Top header band — white, bordered ── */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-10 md:py-12">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-end">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f05123]" />
                <span className="text-sm font-medium text-[#f05123]">
                  Why train here
                </span>
              </div>
              <h2
                className="text-3xl sm:text-4xl md:text-[2.8rem] font-semibold text-gray-900 tracking-tight leading-[1.08]"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                A curriculum built around practical skills
              </h2>
              <p className="mt-3 text-gray-500 text-sm leading-relaxed max-w-lg">
                Every module below is something you'll use in the classroom —
                and later in an interview.
              </p>
            </div>

            {/* Quick trust pills */}
            <div className="flex flex-wrap md:flex-col gap-2 md:items-end">
              {[
                "Structured course materials",
                "Activity-based classes",
                "Ongoing placement support",
              ].map((t, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full"
                >
                  <span className="w-1 h-1 rounded-full bg-[#00529b]" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Cards grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-gray-300 hover:shadow-lg transition-all duration-300 cursor-default"
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Accent top bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] transition-all duration-300"
                style={{
                  background: item.accent,
                  opacity: hovered === idx ? 1 : 0.4,
                }}
              />

              <div className="p-6 md:p-7 flex flex-col h-full">
                {/* Top row: icon + tag + stat */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3">
                    {/* Icon box */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300"
                      style={{ background: item.accentLight }}
                    >
                      <Icon name={item.icon} color={item.accent} />
                    </div>
                    {/* Tag */}
                    <span
                      className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
                      style={{
                        background: item.accentLight,
                        color: item.accent,
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>

                  {/* Stat — top right */}
                  <div className="text-right shrink-0">
                    <div
                      className="text-xl font-semibold leading-tight"
                      style={{
                        color: item.accent,
                        fontFamily: '"Space Grotesk", sans-serif',
                      }}
                    >
                      {item.stat.value}
                    </div>
                    <div className="text-[10px] text-gray-400 mt-0.5 leading-snug">
                      {item.stat.label}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-semibold text-gray-900 mb-2.5 leading-snug"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-5">
                  {item.description}
                </p>

                {/* Divider */}
                <div className="border-t border-dashed border-gray-200 mb-4" />

                {/* Bottom checklist — derived from description keywords */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {[
                    idx === 0 && [
                      "Mock drills",
                      "Real scenarios",
                      "Industry mentors",
                    ],
                    idx === 1 && [
                      "AASSC mapped",
                      "Skill standards",
                      "Employer recognized",
                    ],
                    idx === 2 && [
                      "Live airport visits",
                      "Real operations",
                      "Pre-interview exposure",
                    ],
                    idx === 3 && [
                      "CRS ticketing",
                      "Safety procedures",
                      "Passenger handling",
                    ],
                  ][idx]?.map((pt, pi) => (
                    <div key={pi} className="flex items-center gap-1.5">
                      <CheckIcon color={item.accent} />
                      <span className="text-xs text-gray-600">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
