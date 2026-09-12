import { useState } from "react";

const courses = [
  {
    code: "CC · 101",
    title: "Cabin Crew Training",
    duration: "12 months",
    description:
      "Master in-flight safety, luxury hospitality, and international aviation standards.",
    image:
      "https://plus.unsplash.com/premium_photo-1661746449875-2f8fb11b2251?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2FiaW4lMjBDcmV3JTIwVHJhaW5pbmd8ZW58MHx8MHx8fDA%3D",
    tag: "AASSC certified",
    tagBg: "bg-orange-50 text-[#f05123] border-orange-200/60",
    lift: "md:translate-y-3",
  },
  {
    code: "GH · 204",
    title: "Ground Handling",
    duration: "6 months",
    description:
      "Hands-on airport check-in, ramp operations, and baggage safety logistics.",
    image:
      "https://plus.unsplash.com/premium_photo-1664298927557-d751ca221bff?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEdyb3VuZCUyMEhhbmRsaW5nfGVufDB8fDB8fHww",
    tag: "High demand",
    tagBg: "bg-blue-50 text-[#00529b] border-blue-200/60",
    lift: "md:-translate-y-2 z-10",
    featured: true,
  },
  {
    code: "AM · 310",
    title: "Aviation Management",
    duration: "12 months",
    description:
      "CRS ticketing systems, airline operations, and passenger management.",
    image:
      "https://images.unsplash.com/photo-1485310818226-f01c4269687f?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEF2aWF0aW9uJTIwTWFuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D",
    tag: "Practical exposure",
    tagBg: "bg-emerald-50 text-emerald-600 border-emerald-200/60",
    lift: "md:translate-y-3",
  },
];

function PlaneIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M10.5 20.5L12 17l-5-1.2v-1.6L18 9.5V6.8c0-.9-.7-1.6-1.6-1.6-.4 0-.7.1-1 .4L9 10.1 4.4 8.9l-1.4 1 3.6 2.9-1.1 2 2.2-.3 1.1 2.1 1.7-1.1 1 3.9 2-1.9"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M12 7.5V12l3 2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M5 12h13.5M13 6.5L18.5 12 13 17.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CourseCards() {
  return (
    <section className="relative w-full py-16 md:py-24 px-4 sm:px-6 md:px-12 bg-[#f6f8fa] flex flex-col items-center overflow-hidden">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');`}</style>

      {/* single restrained accent glow */}
      <div className="absolute top-10 right-0 w-[28rem] h-[28rem] bg-[#00529b]/[0.06] rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 text-center max-w-xl mx-auto mb-14 md:mb-20">
        <div className="inline-flex items-center gap-2 mb-5 text-[#00529b]">
          <PlaneIcon className="w-4 h-4" />
          <span
            className="text-sm font-medium"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Three tracks into the industry
          </span>
        </div>
        <h2
          className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-900 tracking-tight leading-[1.05]"
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
        >
          Aviation courses
        </h2>
        <p
          className="mt-4 text-gray-500 text-base leading-relaxed"
          style={{ fontFamily: '"Inter", sans-serif' }}
        >
          Airline-grade instructors, real equipment, and a syllabus built around
          what carriers actually hire for.
        </p>
      </div>

      {/* Cards */}
      <div className="relative w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10 items-start z-10">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className={`group bg-white rounded-[28px] shadow-lg hover:shadow-2xl border border-gray-100 flex flex-col overflow-hidden transition-all duration-500 ease-out cursor-pointer ${course.lift}`}
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            {/* Image fills the top of the card — the "window" */}
            <div className="relative w-full aspect-[4/3.3] overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0" />
              {course.featured && (
                <span className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/90 backdrop-blur text-[#00529b] text-[11px] font-semibold px-3 py-1 rounded-full">
                  <PlaneIcon className="w-3 h-3" />
                  Most enrolled
                </span>
              )}
              <span
                className="absolute bottom-4 left-4 text-white font-semibold text-lg leading-tight drop-shadow-sm"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                {course.title}
              </span>
            </div>

            {/* Perforated tear line between the "window" and the ticket stub */}
            <div className="relative">
              <span className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-[#f6f8fa] border border-gray-100" />
              <span className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[#f6f8fa] border border-gray-100" />
              <div className="border-t-2 border-dashed border-gray-200 mx-5" />
            </div>

            {/* Ticket stub / content */}
            <div className="flex-1 flex flex-col justify-between p-5 pt-4">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`text-[11px] font-semibold px-3 py-1 rounded-full border ${course.tagBg}`}
                  >
                    {course.tag}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-medium text-gray-400">
                    <ClockIcon className="w-3.5 h-3.5" />
                    {course.duration}
                  </span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {course.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-dashed border-gray-200 flex items-center justify-between">
                <span className="font-mono text-[11px] tracking-wider text-gray-400">
                  {course.code}
                </span>
                <span className="w-9 h-9 rounded-full bg-[#00529b]/[0.08] flex items-center justify-center text-[#00529b] group-hover:bg-[#00529b] group-hover:text-white transition-colors duration-300">
                  <ArrowIcon className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main CTA */}
      <div className="mt-14 md:mt-20 z-10">
        <a
          href="#courses"
          className="group inline-flex items-center gap-3 bg-[#00529b] hover:bg-[#003e75] text-white font-semibold text-base px-9 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 no-underline"
          style={{ fontFamily: '"Inter", sans-serif' }}
        >
          <span>Explore all courses</span>
          <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#00529b] transition-all duration-300">
            <ArrowIcon className="w-4 h-4" />
          </span>
        </a>
      </div>
    </section>
  );
}
