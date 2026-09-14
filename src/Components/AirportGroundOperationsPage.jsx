import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Router/Navbar";
import Footer from "./Footer";

// ============================================================
// AIRPORT GROUND OPERATIONS PAGE
// Same visual system as the Cabin Crew page:
// Playfair/Space Grotesk headings, rounded cards, blue/orange accents.
// ============================================================

const trainingTopics = [
  "Airport & Airline Operations",
  "Passenger Handling",
  "Ramp Operations",
  "Baggage & Cargo Handling",
  "Aircraft Turnaround Procedures",
  "Ground Support Equipment",
  "Aviation Safety & Emergency Procedures",
  "Communication & Customer Service",
  "Professional Grooming & Personality Development",
  "Airline & Airport Interview Preparation",
];

const modules = [
  {
    number: "01",
    title: "Ramp Operations",
    description:
      "Learn how airport ramp teams coordinate aircraft turnaround, ramp safety, ground support equipment, aircraft movement, and communication with airline and ground operations teams.",
    badge: "Airside Operations",
    accent: "#00529b",
    accentLight: "rgba(0,82,155,0.08)",
    points: [
      "Ramp operations",
      "Aircraft turnaround",
      "Ground Support Equipment",
    ],
  },
  {
    number: "02",
    title: "Baggage & Cargo Operations",
    description:
      "Understand the fundamentals of baggage handling, cargo and mail operations, loading procedures, documentation, load control, and ground support equipment.",
    badge: "Logistics & Load",
    accent: "#f05123",
    accentLight: "rgba(240,81,35,0.08)",
    points: ["Baggage handling", "Cargo documentation", "Loading procedures"],
  },
  {
    number: "03",
    title: "Passenger Handling & Airport Services",
    description:
      "Develop professional skills in check-in procedures, boarding assistance, passenger service, baggage support, customer interaction, and airport service operations.",
    badge: "Passenger Experience",
    accent: "#00529b",
    accentLight: "rgba(0,82,155,0.08)",
    points: ["Check-in procedures", "Boarding assistance", "Passenger service"],
  },
  {
    number: "04",
    title: "Safety, Compliance & Emergency Procedures",
    description:
      "Build awareness of airside safety, aircraft movement procedures, operational compliance, emergency response, workplace safety, and airport security practices.",
    badge: "Security & Safety",
    accent: "#f05123",
    accentLight: "rgba(240,81,35,0.08)",
    points: [
      "Airside safety",
      "Emergency response",
      "Airport security awareness",
    ],
  },
];

const eligibilityCriteria = [
  {
    title: "Age Standard",
    value: "18 – 27 Years",
    description:
      "Applicants should generally fall within the specified age range at the time of enrollment.",
    tag: "Career Ready",
    accent: "#00529b",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect
          x="3"
          y="4"
          width="18"
          height="17"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M3 9h18M8 2v4M16 2v4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Educational Qualification",
    value: "Minimum 10+2",
    description:
      "Candidates should have completed 12th standard / 10+2 from a recognized board.",
    tag: "10+2 Mandatory",
    accent: "#f05123",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path
          d="M12 3L2 8l10 5 10-5-10-5z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M6 10.5V16c0 1.657 2.686 3 6 3s6-1.343 6-3v-5.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Height & Physical Fitness",
    value: "Female: 156+ cm | Male: 166",
    description:
      "Candidates should maintain a healthy body weight proportionate to their height and meet applicable employer requirements.",
    tag: "Physically Prepared",
    accent: "#00529b",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path
          d="M12 3v18M9 6h6M9 18h6M9 12h6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Communication Skills",
    value: "Good English & Hindi",
    description:
      "Good English and Hindi communication skills, clear speech, confidence, and professional interpersonal skills are important for airport-facing roles.",
    tag: "Bilingual Advantage",
    accent: "#f05123",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path
          d="M8 12h.01M12 12h.01M16 12h.01M3 12c0-4.418 4.03-8 9-8s9 3.582 9 8-4.03 8-9 8c-1.43 0-2.782-.316-4-.882L3 20l1.118-4.118A8.003 8.003 0 0 1 3 12z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Grooming & Appearance",
    value: "Professional Presence",
    description:
      "Develop a professional appearance through training in grooming, posture, body language, etiquette, confidence, and workplace presentation.",
    tag: "Industry Ready",
    accent: "#00529b",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M6 21v-1a6 6 0 0 1 12 0v1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Appearance Policy",
    value: "No Visible Tattoos",
    description:
      "Maintain a professional appearance and follow applicable airport, airline, employer, uniform, and appearance policies.",
    tag: "Professional Standards",
    accent: "#f05123",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M8.5 8.5l7 7M15.5 8.5l-7 7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const courseHighlights = [
  {
    icon: "✈️",
    title: "Aviation Fundamentals",
    description: "Understand airport, airline, and aviation operations.",
  },
  {
    icon: "👥",
    title: "Passenger Handling",
    description:
      "Develop professional passenger service and customer-handling skills.",
  },
  {
    icon: "🛫",
    title: "Ramp Operations",
    description: "Learn aircraft turnaround and airside ground operations.",
  },
  {
    icon: "📦",
    title: "Baggage & Cargo",
    description:
      "Understand baggage, cargo, mail, documentation, and loading processes.",
  },
  {
    icon: "💬",
    title: "Communication Development",
    description:
      "Improve English communication, confidence, and professional interaction.",
  },
  {
    icon: "🎯",
    title: "Interview Preparation",
    description:
      "Prepare through mock interviews, group discussions, and career guidance.",
  },
  {
    icon: "👔",
    title: "Grooming & Personality",
    description:
      "Build the professional presence expected in aviation environments.",
  },
  {
    icon: "🌏",
    title: "Career Opportunities",
    description:
      "Prepare for opportunities across Indian and international aviation organizations.",
  },
];

const syllabus = [
  {
    moduleNum: "01",
    title: "GROUND SERVICE OPERATIONS",
    subtitle:
      "Passenger Handling • Cargo Handling • Ramp Management • Airport Services",
    topics: [
      "Airline and airport department overview",
      "Passenger check-in and boarding procedures",
      "Passenger service and assistance",
      "Baggage handling procedures",
      "Cargo handling fundamentals",
      "Cargo documentation",
      "Ramp operations and aircraft turnaround",
      "Ground Support Equipment awareness",
      "Airside safety procedures",
      "Professional grooming for ground staff",
    ],
  },
  {
    moduleNum: "02",
    title: "AVIATION, TOURISM & HOSPITALITY",
    subtitle: "Aviation Fundamentals • Travel • Hospitality • Customer Service",
    topics: [
      "Introduction to the aviation industry",
      "Airport operations",
      "Tourism fundamentals",
      "Travel and reservation basics",
      "Hospitality and customer service",
      "Airline branding and service standards",
      "Passenger experience management",
    ],
  },
  {
    moduleNum: "03",
    title: "PROFESSIONAL & INTERVIEW SKILLS",
    subtitle:
      "Communication • Public Speaking • Group Discussions • Mock Interviews",
    topics: [
      "Professional communication",
      "Public speaking",
      "Body language",
      "Confidence building",
      "Resume preparation",
      "Group discussion practice",
      "Mock airline interviews",
      "Personal interview preparation",
      "Workplace etiquette",
    ],
  },
  {
    moduleNum: "04",
    title: "SAFETY & OPERATIONAL TRAINING",
    subtitle:
      "Airside Safety • Compliance • Emergency Response • Operational Awareness",
    topics: [
      "Airport safety procedures",
      "Ramp safety",
      "Aircraft movement awareness",
      "Ground handling safety",
      "Emergency response fundamentals",
      "Airport security awareness",
      "Operational communication",
      "Workplace safety and compliance",
    ],
  },
];

function ArrowIcon() {
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

function CheckIcon({ color = "#00529b" }) {
  return (
    <svg viewBox="0 0 14 14" fill="none" className="w-3 h-3 shrink-0">
      <path
        d="M2 7l3.5 3.5L12 3"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AirportGroundOperationsPage() {
  return (
    <div
      className="w-full min-h-screen bg-white text-gray-900"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
      `}</style>

      {/* =====================================================
          1. HERO
      ====================================================== */}
      <section className="max-w-[1400px] mx-auto px-2 sm:px-4 pt-3">
        <div className="relative w-full min-h-[560px] md:min-h-[760px] rounded-[28px] md:rounded-[40px] overflow-hidden flex flex-col justify-between pb-10 md:pb-16">
          <img
            src="/img2.png"
            alt="Airport Ground Operations"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

          <div className="relative z-30 w-full p-3 sm:p-5">
            <Navbar />
          </div>

          <div className="relative z-10 px-6 md:px-14 pb-2">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white">
                ✈ Diploma Program
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00529b]/80 backdrop-blur-md text-xs font-semibold text-white">
                Airport Operations
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white">
                Job-Ready Training
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] tracking-tight mb-5 max-w-4xl"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              Airport Ground
              <br />
              Operations
            </h1>

            <p className="text-white/70 text-sm md:text-base max-w-xl mb-8 leading-relaxed">
              Comprehensive training for aspiring airport professionals —
              covering passenger handling, ramp operations, baggage and cargo,
              safety, communication, and airline interview preparation.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="no-underline inline-flex items-center gap-2.5 bg-[#00529b] hover:bg-[#003e75] text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg"
              >
                Enroll in this program
                <ArrowIcon />
              </Link>

              <a
                href="#modules"
                className="no-underline inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-all duration-200"
              >
                View curriculum
              </a>
            </div>

            <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-white/15">
              {[
                { value: "4 Modules", label: "Core curriculum" },
                { value: "10+", label: "Training topics" },
                { value: "100%", label: "Interview preparation" },
                { value: "Airport", label: "Career focused" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-white font-semibold text-lg leading-tight"
                    style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-white/50 text-xs mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          2. ABOUT THE PROGRAM
      ====================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00529b]" />
              <span className="text-sm font-medium text-[#00529b]">
                About the program
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-[1.1] tracking-tight mb-5"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              Your gateway to a career in airport ground operations
            </h2>

            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xl">
              Airport operations depend on a skilled team working behind the
              scenes. Phoenix's Diploma in Airport Ground Operations introduces
              students to the key functions that keep airport and airline
              operations running smoothly.
            </p>

            <p className="text-gray-600 text-sm font-medium mb-4">
              Industry-focused training includes:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {trainingTopics.map((topic) => (
                <div
                  key={topic}
                  className="flex items-center gap-2.5 bg-[#f6f8fa] border border-gray-200 rounded-xl px-3.5 py-2.5"
                >
                  <span className="w-5 h-5 rounded-full bg-[#00529b]/10 flex items-center justify-center shrink-0">
                    <CheckIcon />
                  </span>

                  <span className="text-xs font-medium text-gray-700">
                    {topic}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex gap-4 p-5 rounded-2xl border border-[#00529b]/20 bg-[#00529b]/[0.04]">
              <div className="w-1 rounded-full bg-[#00529b] shrink-0" />

              <div>
                <p className="text-xs font-semibold text-[#00529b] mb-1">
                  Comprehensive training approach
                </p>

                <p className="text-xs text-gray-500 leading-relaxed">
                  Classroom learning, practical airport-oriented activities,
                  operational awareness, communication training, grooming,
                  interview preparation, and career guidance.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <img
                src="/img-3-mob.png"
                alt="Airport Ground Handling Operations"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                  <p className="text-xs font-semibold text-sky-300 mb-1">
                    Practical exposure
                  </p>

                  <p className="text-sm font-semibold text-white">
                    Airside Ramp & Aircraft Turnaround Training
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-white border border-gray-200 shadow-lg rounded-2xl px-5 py-4">
              <div
                className="text-2xl font-semibold text-[#00529b]"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                4
              </div>

              <div className="text-xs text-gray-400 mt-0.5">Core modules</div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          3. CAREER SUPPORT BANNER
      ====================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-4">
        <div className="relative bg-[#04213a] rounded-2xl overflow-hidden p-8 sm:p-10">
          <div
            className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at right, rgba(59,130,246,0.15), transparent 70%)",
            }}
          />

          <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-sky-300 mb-4">
                Placement support
              </span>

              <h3
                className="text-2xl sm:text-3xl font-semibold text-white leading-snug mb-3"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                Training that takes you from the classroom to the airport
              </h3>

              <p className="text-white/60 text-sm leading-relaxed max-w-xl mb-5">
                Phoenix provides career guidance and placement assistance to
                help students prepare for opportunities with airlines, airports,
                ground handling companies, cargo services, and aviation support
                organizations.
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "Airlines & Airport Authorities",
                  "Ground Handling Agencies",
                  "Cargo Services",
                  "Aviation Support Units",
                ].map((item) => (
                  <span
                    key={item}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/8 border border-white/12 text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              className="shrink-0 no-underline inline-flex items-center gap-2 bg-white text-[#04213a] text-sm font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-all duration-200"
            >
              Talk to a counsellor
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          4. MODULES
      ====================================================== */}
      <section
        id="modules"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 md:py-20"
      >
        <div className="border-b border-gray-200 pb-8 mb-10 grid md:grid-cols-[1fr_auto] gap-6 items-end">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f05123]" />
              <span className="text-sm font-medium text-[#f05123]">
                Structured curriculum
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              Four modules, one job-ready skillset
            </h2>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
            Step-by-step curriculum designed around essential airport ground
            operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {modules.map((mod) => (
            <div
              key={mod.number}
              className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 hover:shadow-lg transition-all duration-300"
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: mod.accent }}
              />

              <div className="p-6 md:p-7">
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="text-4xl font-semibold leading-none"
                    style={{
                      color: mod.accent,
                      fontFamily: '"Space Grotesk", sans-serif',
                      opacity: 0.25,
                    }}
                  >
                    {mod.number}
                  </span>

                  <span
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      background: mod.accentLight,
                      color: mod.accent,
                    }}
                  >
                    {mod.badge}
                  </span>
                </div>

                <h3
                  className="text-lg font-semibold text-gray-900 mb-2 leading-snug"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                  {mod.title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  {mod.description}
                </p>

                <div className="border-t border-dashed border-gray-200 pt-4 flex flex-col gap-2">
                  {mod.points.map((point) => (
                    <div key={point} className="flex items-center gap-2">
                      <CheckIcon color={mod.accent} />
                      <span className="text-xs text-gray-600">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          5. COURSE HIGHLIGHTS
      ====================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-4">
        <div className="bg-[#f6f8fa] rounded-3xl border border-gray-200 p-8 sm:p-10 md:p-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00529b]" />

              <span className="text-sm font-medium text-[#00529b]">
                Program overview
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              Course highlights
            </h2>

            <p className="text-gray-500 text-sm sm:text-base mt-3 leading-relaxed">
              Everything you need to become airport-ready, focusing on the
              practical skills employers expect from entry-level aviation
              professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {courseHighlights.map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200"
              >
                <div className="text-3xl mb-4">{item.icon}</div>

                <h4
                  className="text-base font-semibold text-gray-900 mb-2"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                  {item.title}
                </h4>

                <p className="text-xs text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          6. COMPLETE SYLLABUS
      ====================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 md:py-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f05123]" />

            <span className="text-sm font-medium text-[#f05123]">
              Comprehensive training
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight"
            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
          >
            Ground operations curriculum
          </h2>

          <p className="text-gray-500 text-sm sm:text-base mt-3">
            Detailed syllabus covering essential airport and airline operational
            skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {syllabus.map((item) => (
            <div
              key={item.moduleNum}
              className="bg-white border border-gray-200 rounded-2xl p-6 md:p-7 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-4xl font-semibold text-[#00529b]/25">
                  {item.moduleNum}
                </span>

                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#00529b]/[0.08] text-[#00529b]">
                  MODULE {item.moduleNum}
                </span>
              </div>

              <h3
                className="text-lg font-semibold text-gray-900"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                {item.title}
              </h3>

              <p className="text-xs font-medium text-[#f05123] mt-1 mb-5">
                {item.subtitle}
              </p>

              <ul className="space-y-2.5 list-none p-0 m-0">
                {item.topics.map((topic) => (
                  <li
                    key={topic}
                    className="flex items-start gap-2.5 text-xs text-gray-600"
                  >
                    <CheckIcon color="#00529b" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          7. ELIGIBILITY
      ====================================================== */}
      <section className="bg-[#f6f8fa] border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 md:py-20">
          <div className="border-b border-gray-200 pb-8 mb-10 grid md:grid-cols-[1fr_auto] gap-6 items-end">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f05123]" />

                <span className="text-sm font-medium text-[#f05123]">
                  Admission requirements
                </span>
              </div>

              <h2
                className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                Eligibility criteria
              </h2>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Start your aviation journey by meeting these basic standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {eligibilityCriteria.map((item) => {
              const rgb = item.accent === "#00529b" ? "0,82,155" : "240,81,35";

              return (
                <div
                  key={item.title}
                  className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-gray-300 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: `rgba(${rgb},0.08)`,
                        color: item.accent,
                      }}
                    >
                      {item.icon}
                    </div>

                    <span
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 mt-1"
                      style={{
                        background: `rgba(${rgb},0.08)`,
                        color: item.accent,
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>

                  <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">
                    {item.title}
                  </p>

                  <p
                    className="text-base font-semibold text-gray-900 mb-2"
                    style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                  >
                    {item.value}
                  </p>

                  <p className="text-xs text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          8. CTA
      ====================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 md:py-20">
        <div className="relative bg-[#04213a] rounded-2xl overflow-hidden text-center px-6 py-14 md:py-20">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.15), transparent 60%)",
            }}
          />

          <div className="relative max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-sky-300 mb-6">
              Begin your journey
            </span>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-[1.1] mb-4"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              Ready to start your airport career?
            </h2>

            <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto">
              Join Phoenix Institute of Aviation & Hospitality and build the
              skills, confidence, and professional presence required for airport
              ground operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact"
                className="no-underline inline-flex items-center justify-center gap-2 bg-white text-[#04213a] text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-gray-100 transition-all duration-200 shadow-lg"
              >
                Apply Now
                <ArrowIcon />
              </Link>

             
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
