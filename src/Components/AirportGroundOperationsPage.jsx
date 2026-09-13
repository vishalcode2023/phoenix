import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Router/Navbar";
import Footer from "./Footer";

export default function AirportGroundOperationsPage() {
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
    },
    {
      number: "02",
      title: "Baggage & Cargo Operations",
      description:
        "Understand the fundamentals of baggage handling, cargo and mail operations, loading procedures, documentation, load control, and ground support equipment.",
      badge: "Logistics & Load",
    },
    {
      number: "03",
      title: "Passenger Handling & Airport Services",
      description:
        "Develop professional skills in check-in procedures, boarding assistance, passenger service, baggage support, customer interaction, and airport service operations.",
      badge: "Passenger Experience",
    },
    {
      number: "04",
      title: "Safety, Compliance & Emergency Procedures",
      description:
        "Build awareness of airside safety, aircraft movement procedures, operational compliance, emergency response, workplace safety, and airport security practices.",
      badge: "Security & Safety",
    },
  ];

  const eligibilityCriteria = [
    {
      title: "Age Standard",
      value: "18 – 27 Years",
      description:
        "Applicants should generally fall within the specified age range at the time of enrollment.",
      tag: "Career Ready",
      icon: "📅",
    },
    {
      title: "Educational Qualification",
      value: "Minimum 10+2",
      description:
        "Candidates should have completed 12th standard / 10+2 from a recognized board.",
      tag: "10+2 Mandatory",
      icon: "🎓",
    },
    {
      title: "Height & Physical Fitness",
      value: "Female: 155+ cm | Male: Standard",
      description:
        "Candidates should maintain a healthy body weight proportionate to their height and meet applicable employer requirements.",
      tag: "Physically Prepared",
      icon: "📏",
    },
    {
      title: "Communication Skills",
      value: "Good English & Hindi",
      description:
        "Good English and Hindi communication skills, clear speech, confidence, and professional interpersonal skills are important for airport-facing roles.",
      tag: "Bilingual Advantage",
      icon: "🗣️",
    },
    {
      title: "Grooming & Appearance",
      value: "Professional Presence",
      description:
        "Develop a professional appearance through training in grooming, posture, body language, etiquette, confidence, and workplace presentation.",
      tag: "Industry Ready",
      icon: "✨",
    },
    {
      title: "Uniform Compliance",
      value: "Aviation Policy Standard",
      description:
        "Students should maintain a professional appearance and comply with airport, airline, and employer uniform and appearance standards, including applicable tattoo policies.",
      tag: "Professional Standards",
      icon: "👔",
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
      subtitle:
        "Aviation Fundamentals • Travel • Hospitality • Customer Service",
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

  return (
    <div className="w-full bg-slate-50 text-slate-800 font-sans min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap');
      `}</style>

      {/* ==========================================
          1. HERO SECTION WITH EMBEDDED NAVBAR
         ========================================== */}
      <section className="max-w-[1400px] mx-auto px-2 sm:px-4 md:px-6 pt-3">
        <div className="relative w-full min-h-[520px] sm:min-h-[580px] md:min-h-[680px] rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl flex flex-col justify-between pb-12">
          {/* Background Image */}
          <img
            src="/img3.png"
            alt="Airport Ground Operations"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/75 to-slate-950/40" />

          {/* Embedded Navbar */}
          <div className="relative z-30 w-full p-3 sm:p-5">
            <Navbar />
          </div>

          {/* Centered Hero Content */}
          <div className="relative top-20 z-10 max-w-4xl mx-auto px-6 flex flex-col items-center justify-center text-center text-white space-y-5 my-auto pt-6">
            <h1
              className="text-3xl sm:text-5xl md:text-6xl  font-normal leading-[1.15] text-white tracking-tight"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Airport Ground Operations
            </h1>

            
            <div className="pt-3">
              <Link
                to="/contact"
                className="no-underline bg-[#00529b] hover:bg-[#003e75] text-white text-sm sm:text-base font-semibold px-8 py-3.5 rounded-full inline-flex items-center gap-3 transition-all duration-300 shadow-xl hover:scale-105"
              >
                <span>Enroll in This Program</span>
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
          </div>
        </div>
      </section>

      {/* ==========================================
          2. ABOUT THE PROGRAM SECTION
         ========================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Overview & Checklist */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-[#00529b] text-xs font-semibold uppercase tracking-wider mb-3">
                About The Program
              </span>
              <h2
                className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight"
                
              >
                Your Gateway to a Career in Airport Ground Operations
              </h2>
            </div>

            <p className="text-slate-600 text-base leading-relaxed">
              Airport operations depend on a skilled team working behind the
              scenes. Phoenix's Diploma in Airport Ground Operations introduces
              students to the key functions that keep airport and airline
              operations running smoothly.
            </p>

            <p className="text-slate-600 text-base leading-relaxed font-medium">
              Industry-Focused Training — Students gain practical knowledge in:
            </p>

            {/* Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {trainingTopics.map((topic, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200/80 shadow-sm"
                >
                  <div className="w-6 h-6 rounded-full bg-sky-100 text-[#00529b] flex items-center justify-center font-bold text-xs flex-shrink-0">
                    ✓
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-800">
                    {topic}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Feature Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <img
                src="/img-3-mob.png"
                alt="Airport Ground Handling Operations"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <p className="text-xs font-semibold uppercase tracking-wider text-sky-300">
                  Ground Support Excellence
                </p>
                <h3 className="text-lg font-bold text-white mt-1">
                  Airside Ramp & Aircraft Turnaround Labs
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          3. CAREER SUPPORT BANNER
         ========================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-6">
        <div className="bg-gradient-to-br from-slate-900 via-[#003e75] to-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="inline-block px-3 py-1 rounded-full bg-sky-400/20 text-sky-200 text-xs font-semibold uppercase tracking-wider">
              Career Support
            </span>
            <h3
              className="text-2xl sm:text-4xl font-bold leading-tight"
              
            >
              Training That Takes You From the Classroom to the Airport
            </h3>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-light">
              Phoenix provides career guidance and placement assistance to help
              students prepare for opportunities with airlines, airports, ground
              handling companies, cargo services, and aviation support
              organizations.
            </p>

            {/* Highlights Bar */}
            <div className="pt-4 flex flex-wrap gap-3">
              {[
                "Airlines & Airport Authorities",
                "Ground Handling Agencies",
                "Cargo Services",
                "Aviation Support Units",
              ].map((item, idx) => (
                <span
                  key={idx}
                  className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-white"
                >
                  ✨ {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          4. FOUR MODULES, ONE JOB-READY SKILLSET
         ========================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-20">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-[#00529b] text-xs font-semibold uppercase tracking-wider mb-3">
            Core Curriculum
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-slate-900"
            
          >
            Four Modules, One Job-Ready Skillset
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Essential operational modules engineered for modern airport
            environment standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modules.map((mod) => (
            <div
              key={mod.number}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-black text-[#00529b] opacity-80 group-hover:scale-110 transition-transform">
                    {mod.number}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                    {mod.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#00529b] transition-colors">
                  {mod.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {mod.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#00529b]">
                <span>Operational Module</span>
                <span>Practical Evaluation</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==========================================
          5. COURSE HIGHLIGHTS
         ========================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-16 bg-white rounded-3xl border border-slate-200/80 shadow-sm mb-20">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-[#00529b] text-xs font-semibold uppercase tracking-wider mb-3">
            Program Overview
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-slate-900"
            
          >
            Course Highlights
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Everything you need to become airport-ready — focusing on the skills
            employers expect from entry-level aviation professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courseHighlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 p-6 rounded-2xl border border-slate-200/60 hover:bg-sky-50/50 transition-colors"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h4 className="text-base font-bold text-slate-900 mb-2">
                {item.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ==========================================
          6. COMPLETE SYLLABUS
         ========================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-16 mb-20">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-[#f05123] text-xs font-semibold uppercase tracking-wider mb-3">
            Comprehensive Training
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-slate-900"
            
          >
            Ground Operations Curriculum
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Detailed syllabus designed for all essential airport and airline
            departments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {syllabus.map((syll) => (
            <div
              key={syll.moduleNum}
              className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-full bg-[#00529b] text-white text-xs font-bold">
                  MODULE {syll.moduleNum}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mt-2">
                {syll.title}
              </h3>
              <p className="text-xs font-medium text-[#f05123] mb-5">
                {syll.subtitle}
              </p>

              <ul className="space-y-2.5 list-none p-0 m-0">
                {syll.topics.map((topic, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-xs text-slate-700"
                  >
                    <span className="text-[#00529b] font-bold mt-0.5">•</span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ==========================================
          7. ADMISSION REQUIREMENTS SECTION
         ========================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-16 bg-white rounded-3xl border border-slate-200/80 shadow-sm mb-20">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-[#00529b] text-xs font-semibold uppercase tracking-wider mb-3">
            Admission Requirements
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-slate-900"
            
          >
            Eligibility Criteria
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Take your first step toward an aviation career by meeting the basic
            entry requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eligibilityCriteria.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 p-6 rounded-2xl border border-slate-200/60 flex flex-col justify-between hover:bg-sky-50/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="px-2.5 py-1 rounded-full bg-white border border-slate-200 text-[11px] font-semibold text-[#00529b]">
                    {item.tag}
                  </span>
                </div>

                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {item.title}
                </h4>

                <p className="text-base font-bold text-slate-900 mt-1 mb-2">
                  {item.value}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==========================================
          8. CALL TO ACTION (CTA) SECTION
         ========================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 pb-20">
        <div className="bg-gradient-to-r from-[#00529b] to-[#003e75] text-white rounded-3xl p-10 sm:p-14 text-center shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <span className="text-xs font-bold tracking-widest text-sky-200 uppercase bg-white/10 px-4 py-1.5 rounded-full border border-white/20">
              FROM TRAINING TO TAKEOFF
            </span>

            <h2
              className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight"
              
            >
              Build Skills. Gain Confidence. Start Your Aviation Career.
            </h2>

            <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
              At Phoenix Institute of Aviation & Hospitality, we focus on
              transforming aspiring aviation professionals into confident,
              skilled, and industry-ready candidates.
            </p>

            {/* Stat Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 max-w-xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                <div className="text-2xl font-black text-white">10+</div>
                <div className="text-xs text-sky-200 mt-1">
                  Industry-Focused Modules
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                <div className="text-2xl font-black text-white">01</div>
                <div className="text-xs text-sky-200 mt-1">
                  Dedicated Career Goal
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                <div className="text-2xl font-black text-white">100%</div>
                <div className="text-xs text-sky-200 mt-1">
                  Interview Prep Support
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/apply"
                className="w-full sm:w-auto bg-white text-[#00529b] hover:bg-sky-50 font-bold px-8 py-3.5 rounded-full shadow-lg transition-all duration-300 text-sm no-underline inline-flex items-center justify-center gap-2"
              >
                <span>Apply Now</span>
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

              <Link
                to="/contact"
                className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 text-sm no-underline inline-flex items-center justify-center gap-2"
              >
                <span>Talk to Our Counsellor</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
