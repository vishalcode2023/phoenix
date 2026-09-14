import React from "react";

const recruiters = [
  {
    name: "Air India",
    src: "https://imgs.search.brave.com/__EnKxFM3dexdKJHDB1Hag084SUQNVNcCveWPz0F3_w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzA5/L0Fpci1JbmRpYS1M/b2dvLTUwMHgyODEu/anBn",
  },
  {
    name: "IndiGo",
    src: "https://imgs.search.brave.com/uPrh4ycImimOIRWqVLkqWjDTzZMVmZeldelyA2dc5YY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL2luZGln/bzUzMTYuanBn",
  },
  {
    name: "SpiceJet",
    src: "https://imgs.search.brave.com/7zOCB6fJIlfLdDweDU2xj3SyXEqR1Tw-mnzgANWvejQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZGl4LmNvbS9sb2dv/LzIxMzI1NjcucG5n",
  },
  {
    name: "Emirates",
    src: "https://imgs.search.brave.com/_GLM0v_kRj3ysX8rVudBKahUdCZhetzDxyGUIBA2uKo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL2VtaXJh/dGVzLWFpcmxpbmVz/MTc2OC5qcGc",
  },
];

const features = [
  {
    tag: "Faculty",
    title: "Trainers who've worked the job",
    description:
      "Instructors with real aviation and hospitality backgrounds bring workplace expectations into the classroom — drills, not theory.",
    points: [
      "Activity-based classes, not lectures",
      "Mock service drills each week",
      "Real-world scenario walkthroughs",
    ],
    stat: { value: "6", label: "specialisation tracks" },
    accent: "#3b82f6",
    accentLight: "rgba(59,130,246,0.08)",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
        <circle
          cx="16"
          cy="10"
          r="5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M6 26c0-5.523 4.477-10 10-10s10 4.477 10 10"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    tag: "Placement cell",
    title: "Job support that doesn't stop at graduation",
    description:
      "A dedicated team works with you on resume, interviews, and leads — and stays connected as hiring cycles open up after you graduate.",
    points: [
      "Resume and cover letter review",
      "Mock interview coaching",
      "Active placement follow-through",
    ],
    stat: { value: "Ongoing", label: "post-graduation support" },
    accent: "#f97316",
    accentLight: "rgba(249,115,22,0.08)",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
        <rect
          x="6"
          y="10"
          width="20"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M11 10V8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M16 15v4M14 17h4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    tag: "Counselling",
    title: "Clarity before you commit",
    description:
      "Student counsellors help you compare tracks, understand career outcomes, and confirm eligibility — before you enroll, not after.",
    points: [
      "One-on-one counselling sessions",
      "Track comparison guidance",
      "Eligibility walk-through",
    ],
    stat: { value: "18–27", label: "typical admission age" },
    accent: "#10b981",
    accentLight: "rgba(16,185,129,0.08)",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
        <path
          d="M8 20s2-3 8-3 8 3 8 3"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="16" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M6 26h20"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const stats = [
  { value: "6", label: "Specialisation tracks" },
  { value: "6–11 mo", label: "Program lengths" },
  { value: "100%", label: "Placement support" },
  { value: "18–27", label: "Admission age range" },
];

function ArrowRight() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
      <path
        d="M4 10h12M10 4l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckMark({ color }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 shrink-0">
      <path
        d="M3 8l3.5 3.5L13 5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LogoChip({ item }) {
  return (
    <div className="shrink-0 flex items-center justify-center mx-3 px-8 rounded-xl border border-gray-200 bg-white shadow-sm ">
      <img
        src={item.src}
        alt={item.name}
        className="h-[100px] w-auto object-contain  transition-all duration-300"
      />
    </div>
  );
}

export default function RecruitmentSection() {
  const looped = [...recruiters, ...recruiters, ...recruiters];

  return (
    <section
      className="relative w-full overflow-hidden bg-white"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
        .marquee-run { animation: marquee 30s linear infinite; }
        .marquee-run:hover { animation-play-state: paused; }
      `}</style>

      {/* ── Header ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pt-16 md:pt-20 pb-12 md:pb-14">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f97316]" />
            <span className="text-sm font-medium text-[#f97316]">
              Career launchpad
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl md:text-[3.2rem] font-semibold text-gray-900 leading-[1.08] tracking-tight mb-5"
            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
          >
            Where our graduates get hired
          </h2>
          <p className="text-gray-500 text-base leading-relaxed max-w-lg">
            Airlines, airports, and hospitality groups actively recruit from our
            batches — because we train for the job, not just the certificate.
          </p>
        </div>
      </div>

      {/* ── Logo marquee ── */}
      <div className="relative mb-14 md:mb-16">
        <div className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
        <div className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
        <div className="flex w-max items-center marquee-run">
          {looped.map((item, i) => (
            <LogoChip key={i} item={item} />
          ))}
        </div>
      </div>

      {/* ── Feature cards ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pb-4">
        <div className="flex flex-col gap-4">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden border border-gray-200 bg-white hover:border-gray-300 hover:shadow-md transition-all duration-300"
            >
              <div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl group-hover:w-1.5 transition-all duration-300"
                style={{ background: f.accent }}
              />
              <div className="pl-8 pr-6 py-6 md:py-7 grid md:grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-center">
                <div
                  className="hidden md:flex w-14 h-14 rounded-xl items-center justify-center shrink-0"
                  style={{ background: f.accentLight, color: f.accent }}
                >
                  {f.icon}
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-10 flex-1">
                  <div className="flex-1">
                    <div className="flex items-center gap-2.5 mb-2">
                      <span
                        className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full"
                        style={{ background: f.accentLight, color: f.accent }}
                      >
                        {f.tag}
                      </span>
                    </div>
                    <h3
                      className="text-lg md:text-xl font-semibold text-gray-900 mb-1.5 leading-snug"
                      style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                    >
                      {f.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                      {f.description}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 md:min-w-[220px]">
                    {f.points.map((pt, pi) => (
                      <div key={pi} className="flex items-center gap-2.5">
                        <CheckMark color={f.accent} />
                        <span className="text-sm text-gray-600">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex md:flex-col items-center md:items-end gap-4 md:gap-2 shrink-0">
                  <div className="text-right">
                    <div
                      className="text-2xl md:text-3xl font-semibold"
                      style={{
                        color: f.accent,
                        fontFamily: '"Space Grotesk", sans-serif',
                      }}
                    >
                      {f.stat.value}
                    </div>
                    <div className="text-xs text-gray-400 mt-0.5 leading-snug md:text-right">
                      {f.stat.label}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Stats band ── */}
      <div className="relative mt-12 md:mt-14 border-t border-gray-200 bg-[#f6f8fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-10 md:py-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {stats.map((s, i) => (
            <div
              key={i}
              className="md:text-center"
              style={
                i > 0
                  ? { borderLeft: "1px solid #e5e7eb", paddingLeft: "2rem" }
                  : {}
              }
            >
              <div
                className="text-3xl md:text-4xl font-semibold text-gray-900"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                {s.value}
              </div>
              <div className="mt-1 text-xs text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
