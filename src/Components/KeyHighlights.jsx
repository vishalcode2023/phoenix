import { useState } from "react";

const courses = [
  {
    code: "CC · 101",
    title: "Cabin Crew Training",
    duration: "12 months",
    seats: "24 seats left",
    description:
      "Master in-flight safety, luxury hospitality, and international aviation standards.",
    image:
      "https://plus.unsplash.com/premium_photo-1661746449875-2f8fb11b2251?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2FiaW4lMjBDcmV3JTIwVHJhaW5pbmd8ZW58MHx8MHx8fDA%3D",
    tag: "AASSC certified",
    tagBg: "bg-orange-50 text-[#f05123] border-orange-200/60",
  },
  {
    code: "GH · 204",
    title: "Ground Handling",
    duration: "6 months",
    seats: "9 seats left",
    description:
      "Hands-on airport check-in, ramp operations, and baggage safety logistics.",
    image:
      "https://plus.unsplash.com/premium_photo-1664298927557-d751ca221bff?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEdyb3VuZCUyMEhhbmRsaW5nfGVufDB8fDB8fHww",
    tag: "High demand",
    tagBg: "bg-blue-50 text-[#00529b] border-blue-200/60",
    featured: true,
  },
  {
    code: "AM · 310",
    title: "Aviation Management",
    duration: "12 months",
    seats: "31 seats left",
    description:
      "CRS ticketing systems, airline operations, and passenger management.",
    image:
      "https://images.unsplash.com/photo-1485310818226-f01c4269687f?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEF2aWF0aW9uJTIwTWFuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D",
    tag: "Practical exposure",
    tagBg: "bg-emerald-50 text-emerald-600 border-emerald-200/60",
  },
];

const stats = [
  { value: "94%", label: "placed within 6 months" },
  { value: "38", label: "partner airlines & airports" },
  { value: "1,200+", label: "graduates flying today" },
  { value: "15 yrs", label: "training operators" },
];

const airlines = [
  "IndiGo",
  "Vistara",
  "Air India",
  "SpiceJet",
  "Emirates",
  "Qatar Airways",
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

function SeatIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M6 12V6a2 2 0 0 1 2-2h1.5M6 12h12M6 12l-1.5 6M18 12V6a2 2 0 0 0-2-2h-1.5M18 12l1.5 6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CourseCards() {
  return (
    <section className="relative w-full py-14 md:py-20 px-4 sm:px-6 md:px-12 bg-[#f6f8fa] flex flex-col items-center overflow-hidden">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');`}</style>

      <div className="absolute top-0 right-0 w-[32rem] h-[32rem] bg-[#00529b]/[0.06] rounded-full blur-3xl pointer-events-none -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[24rem] h-[24rem] bg-[#f05123]/[0.04] rounded-full blur-3xl pointer-events-none translate-y-1/3" />

      {/* Header + stats side by side on desktop, so the top band isn't just a headline floating in space */}
      <div className="relative z-10 w-full max-w-6xl grid md:grid-cols-[1.1fr_1fr] gap-10 md:gap-8 items-end mb-12 md:mb-16">
        <div>
          <div className="inline-flex items-center gap-2 mb-4 text-[#00529b]">
            <PlaneIcon className="w-4 h-4" />
            <span
              className="text-sm font-medium"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              Three tracks into the industry
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl md:text-[3.4rem] font-semibold text-gray-900 tracking-tight leading-[1.05]"
            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
          >
            Aviation courses built around what carriers hire for
          </h2>
          <p
            className="mt-4 text-gray-500 text-base leading-relaxed max-w-md"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Airline-grade instructors, real equipment, and cohorts that start
            every quarter.
          </p>
        </div>

        <div
          className="grid grid-cols-2 gap-x-6 gap-y-6 md:border-l md:border-gray-200 md:pl-8"
          style={{ fontFamily: '"Inter", sans-serif' }}
        >
          {stats.map((s, i) => (
            <div key={i}>
              <div
                className="text-2xl md:text-3xl font-semibold text-gray-900"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                {s.value}
              </div>
              <div className="text-sm text-gray-500 mt-1 leading-snug">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="relative w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch z-10">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className={`group bg-white rounded-[28px] shadow-md hover:shadow-xl border ${
              course.featured ? "border-[#00529b]/25" : "border-gray-100"
            } flex flex-col overflow-hidden transition-shadow duration-300 cursor-pointer`}
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            <div className="relative w-full aspect-[4/2.6] overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-black/0" />
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

            <div className="relative">
              <span className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-[#f6f8fa] border border-gray-100" />
              <span className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[#f6f8fa] border border-gray-100" />
              <div className="border-t-2 border-dashed border-gray-200 mx-5" />
            </div>

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

              <div className="mt-5 pt-4 border-t border-dashed border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] tracking-wider text-gray-400">
                    {course.code}
                  </span>
                  <span className="w-9 h-9 rounded-full bg-[#00529b]/[0.08] flex items-center justify-center text-[#00529b] group-hover:bg-[#00529b] group-hover:text-white transition-colors duration-300">
                    <ArrowIcon className="w-4 h-4" />
                  </span>
                </div>
                <div className="flex items-center gap-1.5 mt-3 text-xs font-medium text-[#f05123]">
                  <SeatIcon className="w-3.5 h-3.5" />
                  {course.seats}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trust row + CTA share one band instead of leaving a gap below the cards */}
      <div className="relative z-10 w-full max-w-6xl mt-14 md:mt-16 pt-10 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <p
            className="text-xs uppercase tracking-wide text-gray-400 mb-3"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Graduates placed at
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-2">
            {airlines.map((name, i) => (
              <span
                key={i}
                className="text-gray-400 font-medium text-sm"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        <a
          href="#courses"
          className="group inline-flex items-center gap-3 bg-[#00529b] hover:bg-[#003e75] text-white font-semibold text-base px-9 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 no-underline shrink-0"
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
