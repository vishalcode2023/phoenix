import { useState } from "react";

const courses = [
  {
    title: "Cabin Crew Training",
    duration: "12 Months",
    description:
      "Master in-flight safety, luxury hospitality, and international aviation standards.",
    image: "https://plus.unsplash.com/premium_photo-1661746449875-2f8fb11b2251?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2FiaW4lMjBDcmV3JTIwVHJhaW5pbmd8ZW58MHx8MHx8fDA%3D",
    tag: "AASSC Certified",
    tagBg: "bg-orange-50 text-[#f05123] border-orange-200/60",
    rotationClass:
      "md:-rotate-2 md:translate-y-4 hover:rotate-0 hover:translate-y-0",
  },
  {
    title: "Ground Handling",
    duration: "6 Months",
    description:
      "Hands-on airport check-in, ramp operations, and baggage safety logistics.",
    image: "https://plus.unsplash.com/premium_photo-1664298927557-d751ca221bff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEdyb3VuZCUyMEhhbmRsaW5nfGVufDB8fDB8fHww",
    tag: "High Demand",
    tagBg: "bg-blue-50 text-[#00529b] border-blue-200/60",
    rotationClass:
      "md:rotate-0 md:-translate-y-2 z-10 hover:-translate-y-4 shadow-2xl",
  },
  {
    title: "Aviation Management",
    duration: "12 Months",
    description:
      "CRS ticketing systems, airline operations, and passenger management.",
    image: "https://images.unsplash.com/photo-1485310818226-f01c4269687f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEF2aWF0aW9uJTIwTWFuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D",
    tag: "Practical Exposure",
    tagBg: "bg-emerald-50 text-emerald-600 border-emerald-200/60",
    rotationClass:
      "md:rotate-2 md:translate-y-4 hover:rotate-0 hover:translate-y-0",
  },
];

export default function CourseCards() {
  return (
    <section className="relative w-full py-16 md:py-24 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-gray-50 via-white to-slate-50 flex flex-col items-center overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#00529b]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#f05123]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Larger Header Section */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-10 md:mb-14">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#f05123] bg-orange-50 border border-orange-100 uppercase mb-3">
          Build Your Career
        </span>
        <h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-none"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Aviation Courses
        </h2>
      </div>

      {/* Course Cards Grid */}
      <div className="relative w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch z-10">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className={`group bg-white rounded-[32px] p-5 sm:p-6 shadow-xl hover:shadow-2xl border border-gray-100 flex flex-col justify-between transition-all duration-500 ease-out cursor-pointer ${course.rotationClass}`}
          >
            {/* Top Text Content (Streamlined) */}
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span
                  className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${course.tagBg}`}
                >
                  {course.tag}
                </span>
                <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-full">
                  {course.duration}
                </span>
              </div>

              <h3 className="text-gray-900 font-bold text-xl md:text-2xl leading-tight mb-2 group-hover:text-[#00529b] transition-colors">
                {course.title}
              </h3>

              <p className="text-gray-500 text-xs sm:text-sm font-normal leading-relaxed mb-4">
                {course.description}
              </p>
            </div>

            {/* Larger Image Box */}
            <div className="relative w-full aspect-[4/3.4] rounded-[24px] overflow-hidden bg-gray-100 shadow-inner mt-2">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-300" />

              {/* Bottom Action Label */}
              
            </div>
          </div>
        ))}
      </div>

      {/* Main CTA Button */}
      <div className="mt-12 md:mt-16 z-10">
        <a
          href="#courses"
          className="group inline-flex items-center gap-3 bg-[#00529b] hover:bg-[#003e75] text-white font-semibold text-base px-9 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 no-underline"
        >
          <span>Explore All Courses</span>
          <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#00529b] transition-all duration-300">
            <svg
              className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}
