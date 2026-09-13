import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Router/Navbar";
import Footer from "./Footer";

export default function CabinCrewCoursePage() {
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

  const modules = [
    {
      number: "01",
      title: "Aviation Fundamentals & Aircraft Types",
      description:
        "Build a strong foundation in aviation by understanding aviation terminology, airport operations, aircraft components, airline operations, and different types of commercial aircraft.",
      badge: "Foundation Module",
    },
    {
      number: "02",
      title: "Passenger Service & Hospitality",
      description:
        "Develop professional customer service, communication, hospitality, and passenger-handling skills while learning how to deliver a comfortable and memorable travel experience.",
      badge: "Service Excellence",
    },
    {
      number: "03",
      title: "Dangerous Goods Regulations — DGR",
      description:
        "Understand the fundamentals of Dangerous Goods Regulations, including identification, handling, packaging, labeling, storage, and transportation requirements in accordance with applicable aviation regulations.",
      badge: "Regulatory Safety",
    },
    {
      number: "04",
      title: "Safety & Emergency Procedures",
      description:
        "Learn essential cabin safety procedures, emergency response, fire safety, first aid, evacuation procedures, passenger management, and aviation safety practices required in airline operations.",
      badge: "Core Emergency Response",
    },
  ];

  const eligibilityCriteria = [
    {
      title: "Age Standard",
      value: "18 – 26 Years",
      description:
        "Applicants should generally be within the specified age range at the time of enrollment.",
      tag: "Age Eligible",
      icon: "📅",
    },
    {
      title: "Educational Qualification",
      value: "Minimum 10+2 / Graduation",
      description:
        "Candidates should have completed 12th standard (10+2) or graduation from a recognized board or university.",
      tag: "12th Standard Mandatory",
      icon: "🎓",
    },
    {
      title: "Height & Physical Standards",
      value: "Girls: 155+ cm | Boys: 160+ cm",
      description:
        "Candidates should maintain a healthy and proportionate weight according to their height and meet applicable airline requirements.",
      tag: "Physically Prepared",
      icon: "📏",
    },
    {
      title: "Communication Skills",
      value: "Fluent English & Hindi",
      description:
        "Strong English and Hindi communication skills with clear speech, confidence, and professional interpersonal abilities are preferred for cabin crew careers.",
      tag: "Professional Communication",
      icon: "🗣️",
    },
    {
      title: "Grooming & Personality",
      value: "Airline Persona",
      description:
        "A professional cabin crew member represents the airline throughout the passenger journey. Students are trained in personal grooming, posture, body language, etiquette, confidence, and personality development.",
      tag: "Airline Ready",
      icon: "✨",
    },
    {
      title: "Physical & Medical Fitness",
      value: "Class 2 Medical Standard",
      description:
        "Candidates should maintain good physical and medical fitness and meet the applicable health and appearance standards of the airline or employer.",
      tag: "Fit for the Industry",
      icon: "🩺",
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
        <div className="relative w-full min-h-[520px] sm:min-h-[580px] md:min-h-[740px] rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl flex flex-col justify-between pb-12">
          {/* Background Image */}
          <img
            src="/cabin_crew.png"
            alt="Cabin Crew & In-Flight Management"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-slate-950/40" />

          {/* Embedded Navbar */}
          <div className="relative z-30 w-full p-3 sm:p-5">
            <Navbar />
          </div>

          {/* Centered Hero Content */}
          <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center justify-center text-center text-white space-y-5 my-auto pt-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold tracking-widest text-sky-200 uppercase">
              ✈️ Diploma Program
            </span>

            <h1
              className="text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.15] text-white tracking-tight"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Cabin Crew & In-Flight Management
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
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                Your Journey to a High-Flying Aviation Career
              </h2>
            </div>

            <p className="text-slate-600 text-base leading-relaxed">
              The Diploma in Cabin Crew & In-Flight Management provides
              comprehensive training for aspiring cabin crew professionals. At
              Phoenix, students develop the practical knowledge, professional
              personality, and service skills expected in modern airline
              environments.
            </p>

            <p className="text-slate-600 text-base leading-relaxed font-medium">
              Training includes:
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

            <div className="bg-sky-50/80 border-l-4 border-[#00529b] p-5 rounded-r-2xl mt-6">
              <h4 className="text-sm font-bold text-[#00529b] uppercase tracking-wide mb-1">
                Comprehensive Training Approach
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Our program combines classroom learning, practical activities,
                cabin-simulation exercises, grooming sessions, communication
                training, and industry-oriented preparation to help students
                become airline-ready professionals.
              </p>
            </div>
          </div>

          {/* Right Side: Feature Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <img
                src="/img-mob.png"
                alt="Airline Training Practical Session"
                className="w-full h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <p className="text-xs font-semibold uppercase tracking-wider text-sky-300">
                  Practical Exposure
                </p>
                <h3 className="text-lg font-bold text-white mt-1">
                  Mock Cabin Simulation & Air Hostess Labs
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          3. PLACEMENT SUPPORT BANNER
         ========================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-6">
        <div className="bg-gradient-to-br from-slate-900 via-[#003e75] to-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="inline-block px-3 py-1 rounded-full bg-sky-400/20 text-sky-200 text-xs font-semibold uppercase tracking-wider">
              Placement Support
            </span>
            <h3
              className="text-2xl sm:text-4xl font-bold leading-tight"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Airline Interview Preparation & Career Guidance
            </h3>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-light">
              Phoenix provides dedicated career support to help students prepare
              for airline interviews, group discussions, personal interviews,
              grooming assessments, and professional selection processes.
            </p>

            {/* Highlights Bar */}
            <div className="pt-4 flex flex-wrap gap-3">
              {[
                "Career guidance",
                "Interview preparation",
                "Resume support",
                "Placement assistance",
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
            Structured Curriculum
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-slate-900"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Four Modules, One Job-Ready Skillset
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Step-by-step module breakdown crafted by aviation industry experts.
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
                <span>Module Specs Completed</span>
                <span>Includes Assessment</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==========================================
          5. ADMISSION REQUIREMENTS SECTION
         ========================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-16 bg-white rounded-3xl border border-slate-200/80 shadow-sm mb-20">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-[#f05123] text-xs font-semibold uppercase tracking-wider mb-3">
            Admission Requirements
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-slate-900"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Eligibility Criteria
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Start your aviation journey by meeting the basic eligibility and
            professional standards required for cabin crew careers.
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
          6. CALL TO ACTION (CTA) SECTION
         ========================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 pb-20">
        <div className="bg-gradient-to-r from-[#00529b] to-[#003e75] text-white rounded-3xl p-10 sm:p-14 text-center shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <span className="text-xs font-bold tracking-widest text-sky-200 uppercase bg-white/10 px-4 py-1.5 rounded-full border border-white/20">
              Suggested Phoenix CTA
            </span>

            <h2
              className="text-3xl sm:text-5xl font-bold text-white tracking-tight"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              READY TO TAKE OFF?
            </h2>

            <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Your aviation career starts with the right training. Join Phoenix
              Institute of Aviation & Hospitality and take the first step toward
              becoming a confident, skilled, and industry-ready cabin crew
              professional.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
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
