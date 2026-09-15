import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Router/Navbar";
import Footer from "./Footer";
import StudentShowcase from "./Studentshowcase";

// ============================================================
// TRAINING TOPICS
// ============================================================

const trainingTopics = [
  "Cabin Crew & In-Flight Services",
  "Aviation Safety & Emergency Procedures",
  "Passenger Handling & Customer Service",
  "Grooming & Personality Development",
  "Professional Communication",
  "First Aid & Basic Medical Awareness",
  "Aviation & Hospitality Fundamentals",
  "Airline Interview Preparation",
];

// ============================================================
// COURSE MODULES
// ============================================================

const modules = [
  {
    number: "01",
    title: "Aviation Fundamentals & Aircraft Types",
    description:
      "Build a strong foundation in aviation terminology, airport operations, aircraft components, and commercial airline structures.",
    badge: "Foundation",
    accent: "#00529b",
    accentLight: "rgba(0,82,155,0.08)",
    points: [
      "Aviation terminology",
      "Airport operations",
      "Aircraft components",
    ],
  },
  {
    number: "02",
    title: "Passenger Service & Hospitality",
    description:
      "Develop professional customer service, communication, and hospitality skills to deliver memorable travel experiences.",
    badge: "Service",
    accent: "#f05123",
    accentLight: "rgba(240,81,35,0.08)",
    points: [
      "Customer service",
      "Communication skills",
      "In-flight hospitality",
    ],
  },
  {
    number: "03",
    title: "Dangerous Goods Regulations — DGR",
    description:
      "Understand DGR fundamentals including identification, handling, packaging, labeling, and transport requirements.",
    badge: "Regulatory",
    accent: "#00529b",
    accentLight: "rgba(0,82,155,0.08)",
    points: ["DGR identification", "Safe packaging", "Transport compliance"],
  },
  {
    number: "04",
    title: "Safety & Emergency Procedures",
    description:
      "Learn cabin safety, emergency response, fire safety, first aid, evacuation, and passenger management in airline operations.",
    badge: "Emergency",
    accent: "#f05123",
    accentLight: "rgba(240,81,35,0.08)",
    points: ["Emergency response", "Fire safety", "First aid"],
  },
];

// ============================================================
// ELIGIBILITY
// ============================================================

const eligibilityCriteria = [
  {
    title: "Age",
    value: "18 – 27 Years",
    description:
      "Applicants should be within the specified age range at enrollment.",
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
    title: "Education",
    value: "10+2 or Graduation",
    description:
      "Completion of 12th standard or graduation from a recognized board.",
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
    title: "Height",
    value: "Girls: 156cm · Boys: 166cm",
    description:
      "Healthy, proportionate weight relative to height per airline standards.",
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
    title: "Communication",
    value: "English & Hindi",
    description:
      "Clear speech, confidence, and professional interpersonal abilities.",
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
    title: "Grooming",
    value: "Airline Persona",
    description:
      "Professional grooming, posture, body language, etiquette, and confidence.",
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
    title: "Appearance",
    value: "No Visible Tattoos",
    description:
      "Professional appearance with no visible tattoos, scars, or markings that may conflict with airline grooming standards.",
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

// ============================================================
// CHECK ICON
// ============================================================

function CheckIcon({ color }) {
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

// ============================================================
// ARROW ICON
// ============================================================

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

// ============================================================
// MAIN PAGE
// ============================================================

export default function CabinCrewCoursePage() {
  return (
    <div
      className="w-full min-h-screen bg-white text-gray-900"
      style={{
        fontFamily: '"Inter", sans-serif',
      }}
    >
      {/* =====================================================
          FONTS
      ====================================================== */}

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');
        `}
      </style>

      {/* =====================================================
          1. HERO
      ====================================================== */}

      <section className="max-w-[1400px] mx-auto px-2 sm:px-4 pt-3">
        <div
          className="
            relative
            w-full
            min-h-[560px]
            md:min-h-[760px]
            rounded-[28px]
            md:rounded-[40px]
            overflow-hidden
            flex
            flex-col
            justify-between
            pb-10
            md:pb-16
          "
        >
          {/* Background */}
          <img
            src="/cabin_crew.png"
            alt="Cabin Crew Training"
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              object-center
            "
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

          {/* Navbar */}
          <div className="relative z-30 w-full p-3 sm:p-5">
            <Navbar />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 px-6 md:px-14 pb-2">
            {/* Pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  px-3
                  py-1
                  rounded-full
                  bg-white/10
                  backdrop-blur-md
                  border
                  border-white/20
                  text-xs
                  font-semibold
                  text-white
                "
              >
                ✈ Diploma Program
              </span>

              <span
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  px-3
                  py-1
                  rounded-full
                  bg-[#00529b]/80
                  backdrop-blur-md
                  text-xs
                  font-semibold
                  text-white
                "
              >
                AASSC Certified
              </span>

              <span
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  px-3
                  py-1
                  rounded-full
                  bg-white/10
                  backdrop-blur-md
                  border
                  border-white/20
                  text-xs
                  font-semibold
                  text-white
                "
              >
                6 Months
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                font-semibold
                text-white
                leading-[1.05]
                tracking-tight
                mb-5
                max-w-3xl
              "
              style={{
                fontFamily: '"Space Grotesk", sans-serif',
              }}
            >
              Cabin Crew &
              <br />
              In-Flight Management
            </h1>

            {/* Description */}
            <p
              className="
                text-white/70
                text-sm
                md:text-base
                max-w-md
                mb-8
                leading-relaxed
              "
            >
              Comprehensive training for aspiring cabin crew — from safety
              procedures to airline-ready grooming and communication.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              {/* Enroll */}
              <Link
                to="/contact"
                className="
                  no-underline
                  inline-flex
                  items-center
                  gap-2.5
                  bg-[#9C1726]
                  text-white
                  text-sm
                  font-semibold
                  px-7
                  py-3.5
                  rounded-full
                  transition-all
                  duration-200
                  shadow-lg
                "
              >
                Enroll in this program
                <ArrowIcon />
              </Link>

              {/* FIXED: View curriculum */}
              <a
                href="#modules"
                className="
                  no-underline
                  inline-flex
                  items-center
                  gap-2
                  bg-white/10
                  hover:bg-white/20
                  backdrop-blur-md
                  border
                  border-white/25
                  text-white
                  text-sm
                  font-semibold
                  px-7
                  py-3.5
                  rounded-full
                  transition-all
                  duration-200
                "
              >
                View curriculum
              </a>
            </div>

            {/* Quick Stats */}
            <div
              className="
                flex
                flex-wrap
                gap-6
                mt-10
                pt-8
                border-t
                border-white/15
              "
            >
              {[
                {
                  value: "6 Months",
                  label: "Program duration",
                },
                {
                  value: "4 Modules",
                  label: "Structured curriculum",
                },
                {
                  value: "100%",
                  label: "Placement support",
                },
                {
                  value: "AASSC",
                  label: "Certification",
                },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    className="text-white font-semibold text-lg leading-tight"
                    style={{
                      fontFamily: '"Space Grotesk", sans-serif',
                    }}
                  >
                    {s.value}
                  </div>

                  <div className="text-white/50 text-xs mt-0.5">{s.label}</div>
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
          {/* Left */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00529b]" />

              <span className="text-sm font-medium text-[#00529b]">
                About the program
              </span>
            </div>

            <h2
              className="
                text-3xl
                sm:text-4xl
                font-semibold
                text-gray-900
                leading-[1.1]
                tracking-tight
                mb-5
              "
              style={{
                fontFamily: '"Space Grotesk", sans-serif',
              }}
            >
              Your journey to a high-flying aviation career
            </h2>

            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-lg">
              The Diploma in Cabin Crew & In-Flight Management provides
              comprehensive training for aspiring cabin crew professionals.
              Students develop practical knowledge, professional personality,
              and service skills expected in modern airline environments.
            </p>

            {/* Training Topics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {trainingTopics.map((topic) => (
                <div
                  key={topic}
                  className="
                    flex
                    items-center
                    gap-2.5
                    bg-[#f6f8fa]
                    border
                    border-gray-200
                    rounded-xl
                    px-3.5
                    py-2.5
                  "
                >
                  <span
                    className="
                      w-5
                      h-5
                      rounded-full
                      bg-[#00529b]/10
                      flex
                      items-center
                      justify-center
                      shrink-0
                    "
                  >
                    <CheckIcon color="#00529b" />
                  </span>

                  <span className="text-xs font-medium text-gray-700">
                    {topic}
                  </span>
                </div>
              ))}
            </div>

            {/* Callout */}
            <div
              className="
                mt-6
                flex
                gap-4
                p-5
                rounded-2xl
                border
                border-[#00529b]/20
                bg-[#00529b]/[0.04]
              "
            >
              <div className="w-1 rounded-full bg-[#00529b] shrink-0" />

              <div>
                <p className="text-xs font-semibold text-[#00529b] mb-1">
                  Comprehensive training approach
                </p>

                <p className="text-xs text-gray-500 leading-relaxed">
                  Classroom learning, practical activities, cabin-simulation
                  exercises, grooming sessions, communication training, and
                  industry-oriented preparation.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <img
                src="/gowda.jpeg"
                alt="Airline Training"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                  <p className="text-xs font-semibold text-sky-300 mb-1">
                    Shravya M R
                  </p>

                  <p className="text-sm font-semibold text-white">
                    Cabin Safety Trainer
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div
              className="
                absolute
                -top-4
                -right-4
                bg-white
                border
                border-gray-200
                shadow-lg
                rounded-2xl
                px-5
                py-4
              "
            >
              <div
                className="text-2xl font-semibold text-[#00529b]"
                style={{
                  fontFamily: '"Space Grotesk", sans-serif',
                }}
              >
                100+
              </div>

              <div className="text-xs text-gray-400 mt-0.5">
                Students placed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          3. PLACEMENT BANNER
      ====================================================== */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-4">
        <div className="relative bg-[#04213a] rounded-2xl overflow-hidden p-8 sm:p-10">
          <div
            className="
              absolute
              right-0
              top-0
              bottom-0
              w-1/3
              pointer-events-none
            "
            style={{
              background:
                "radial-gradient(ellipse at right, rgba(59,130,246,0.15), transparent 70%)",
            }}
          />

          <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <span
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  px-3
                  py-1
                  rounded-full
                  bg-white/10
                  border
                  border-white/15
                  text-xs
                  font-semibold
                  text-sky-300
                  mb-4
                "
              >
                Placement support
              </span>

              <h3
                className="
                  text-2xl
                  sm:text-3xl
                  font-semibold
                  text-white
                  leading-snug
                  mb-3
                "
                style={{
                  fontFamily: '"Space Grotesk", sans-serif',
                }}
              >
                Airline interview preparation & career guidance
              </h3>

              <p className="text-white/60 text-sm leading-relaxed max-w-lg mb-5">
                Phoenix provides dedicated career support for airline
                interviews, group discussions, grooming assessments, and
                professional selection processes.
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "Career guidance",
                  "Interview prep",
                  "Resume support",
                  "Placement assistance",
                ].map((t) => (
                  <span
                    key={t}
                    className="
                      text-xs
                      font-medium
                      px-3
                      py-1.5
                      rounded-full
                      bg-white/8
                      border
                      border-white/12
                      text-white/80
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              className="
                shrink-0
                no-underline
                inline-flex
                items-center
                gap-2
                bg-white
                text-[#04213a]
                text-sm
                font-semibold
                px-6
                py-3
                rounded-full
                hover:bg-gray-100
                transition-all
                duration-200
              "
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
        {/* Header */}
        <div
          className="
            border-b
            border-gray-200
            pb-8
            mb-10
            grid
            md:grid-cols-[1fr_auto]
            gap-6
            items-end
          "
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f05123]" />

              <span className="text-sm font-medium text-[#f05123]">
                Structured curriculum
              </span>
            </div>

            <h2
              className="
                text-3xl
                sm:text-4xl
                font-semibold
                text-gray-900
                tracking-tight
              "
              style={{
                fontFamily: '"Space Grotesk", sans-serif',
              }}
            >
              Four modules, one job-ready skillset
            </h2>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
            Step-by-step curriculum crafted by aviation industry experts.
          </p>
        </div>

        {/* Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {modules.map((mod) => (
            <div
              key={mod.number}
              className="
                group
                relative
                bg-white
                border
                border-gray-200
                rounded-2xl
                overflow-hidden
                hover:border-gray-300
                hover:shadow-lg
                transition-all
                duration-300
              "
            >
              {/* Accent */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{
                  background: mod.accent,
                }}
              />

              <div className="p-6 md:p-7">
                {/* Number + Badge */}
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

                {/* Title */}
                <h3
                  className="
                    text-lg
                    font-semibold
                    text-gray-900
                    mb-2
                    leading-snug
                  "
                  style={{
                    fontFamily: '"Space Grotesk", sans-serif',
                  }}
                >
                  {mod.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  {mod.description}
                </p>

                {/* Points */}
                <div
                  className="
                    border-t
                    border-dashed
                    border-gray-200
                    pt-4
                    flex
                    flex-col
                    gap-2
                  "
                >
                  {mod.points.map((pt) => (
                    <div key={pt} className="flex items-center gap-2">
                      <CheckIcon color={mod.accent} />

                      <span className="text-xs text-gray-600">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          5. ELIGIBILITY
      ====================================================== */}

      <section className="bg-[#f6f8fa] border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 md:py-20">
          {/* Header */}
          <div
            className="
              border-b
              border-gray-200
              pb-8
              mb-10
              grid
              md:grid-cols-[1fr_auto]
              gap-6
              items-end
            "
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f05123]" />

                <span className="text-sm font-medium text-[#f05123]">
                  Admission requirements
                </span>
              </div>

              <h2
                className="
                  text-3xl
                  sm:text-4xl
                  font-semibold
                  text-gray-900
                  tracking-tight
                "
                style={{
                  fontFamily: '"Space Grotesk", sans-serif',
                }}
              >
                Eligibility criteria
              </h2>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Start your aviation journey by meeting these basic standards.
            </p>
          </div>

          {/* Eligibility Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {eligibilityCriteria.map((item) => {
              const isBlue = item.accent === "#00529b";

              const rgb = isBlue ? "0,82,155" : "240,81,35";

              return (
                <div
                  key={item.title}
                  className="
                    bg-white
                    border
                    border-gray-200
                    rounded-2xl
                    p-5
                    hover:border-gray-300
                    hover:shadow-md
                    transition-all
                    duration-200
                  "
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    {/* Icon */}
                    <div
                      className="
                        w-10
                        h-10
                        rounded-xl
                        flex
                        items-center
                        justify-center
                        shrink-0
                      "
                      style={{
                        background: `rgba(${rgb},0.08)`,
                        color: item.accent,
                      }}
                    >
                      {item.icon}
                    </div>

                    {/* Required */}
                    <span
                      className="
                        text-[10px]
                        font-semibold
                        px-2
                        py-0.5
                        rounded-full
                        shrink-0
                        mt-1
                      "
                      style={{
                        background: `rgba(${rgb},0.08)`,
                        color: item.accent,
                      }}
                    >
                      Required
                    </span>
                  </div>

                  <p
                    className="
                      text-[10px]
                      font-semibold
                      text-gray-400
                      uppercase
                      tracking-wider
                      mb-1
                    "
                  >
                    {item.title}
                  </p>

                  <p
                    className="
                      text-base
                      font-semibold
                      text-gray-900
                      mb-2
                    "
                    style={{
                      fontFamily: '"Space Grotesk", sans-serif',
                    }}
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

      <StudentShowcase />

      {/* =====================================================
          6. CTA
      ====================================================== */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 md:py-20">
        <div
          className="
            relative
            bg-[#04213a]
            rounded-2xl
            overflow-hidden
            text-center
            px-6
            py-14
            md:py-20
          "
        >
          {/* Glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.15), transparent 60%)",
            }}
          />

          <div className="relative max-w-2xl mx-auto">
            {/* Badge */}
            <span
              className="
                inline-flex
                items-center
                gap-1.5
                px-3
                py-1
                rounded-full
                bg-white/10
                border
                border-white/15
                text-xs
                font-semibold
                text-sky-300
                mb-6
              "
            >
              Begin your journey
            </span>

            {/* Heading */}
            <h2
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                font-semibold
                text-white
                tracking-tight
                leading-[1.1]
                mb-4
              "
              style={{
                fontFamily: '"Space Grotesk", sans-serif',
              }}
            >
              Ready to take off?
            </h2>

            {/* Description */}
            <p
              className="
                text-white/60
                text-sm
                sm:text-base
                leading-relaxed
                mb-8
                max-w-lg
                mx-auto
              "
            >
              Join Phoenix Institute of Aviation & Hospitality and take the
              first step toward becoming a confident, skilled, industry-ready
              cabin crew professional.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact"
                className="
                  no-underline
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  bg-white/10
                  hover:bg-white/15
                  border
                  border-white/20
                  text-white
                  text-sm
                  font-semibold
                  px-7
                  py-3.5
                  rounded-full
                  transition-all
                  duration-200
                "
              >
                Talk to a counsellor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <Footer />
    </div>
  );
}
