import { useState } from "react";

const courses = [
  {
    code: "AHT · 01",
    title: "Aviation Cabin Crew Training",
    duration: "6 Months",
    certification: "AASSC Certified",
    seats: "Batches forming",
    tag: "Most enrolled",
    tagColor: "#f05123",
    tagBg: "#fff3ef",
    href: "/courses/aviation-hospitality-travel-management",
    image:
      "https://plus.unsplash.com/premium_photo-1661746449875-2f8fb11b2251?w=800&auto=format&fit=crop&q=80",
    track: "Career Track · Professional Certification",
    modules: [
      "Basics of Aviation & Aircraft Types",
      "Passenger Service & Hospitality",
      "Dangerous Goods",
      "Safety & Emergency Procedures",
    ],
  },
  {
    code: "AGS · 02",
    title: "Aviation Ground Operations",
    duration: "11 Months",
    certification: "AASSC Certified",
    seats: "Batches forming",
    featured: true,
    tag: "High demand",
    tagColor: "#00529b",
    tagBg: "#eef4fb",
    href: "/courses/airport-ground-services",
    image:
      "https://plus.unsplash.com/premium_photo-1664298927557-d751ca221bff?w=800&auto=format&fit=crop&q=80",
    track: "Career Track · Professional Certification",
    modules: [
      "Ramp Operations",
      "Baggage & Cargo Handling",
      "Marshalling",
      "Safety Compliance",
    ],
  },
];

const stats = [
  { value: "6", label: "Specialisation tracks" },
  { value: "6–11 mo", label: "Program lengths" },
  { value: "100%", label: "Placement support" },
  { value: "17–24", label: "Admission age" },
];

const careerAreas = [
  "Cabin Crew",
  "Ground Staff",
  "Hotel Front Office",
  "Travel & Ticketing",
  "Customer Service",
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

function CheckIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M5 13l4 4L19 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BadgeIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 2l2.4 4.8 5.6.8-4 3.9.9 5.5L12 14.5l-4.9 2.5.9-5.5-4-3.9 5.6-.8z"
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
    <section
      className="relative w-full bg-white"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');`}</style>

      {/* ── Top band ── */}
      <div className="w-full bg-[#FFFFFF] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-10 md:py-12 grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-3 text-[#00529b]">
              <PlaneIcon className="w-4 h-4" />
              <span className="text-xs font-semibold tracking-wide text-[#00529b] uppercase">
                Multiple tracks into the industry
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-[2.6rem] font-semibold text-gray-900 tracking-tight leading-[1.1] max-w-xl"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              Structured courses across aviation, hospitality & travel
            </h2>
            <p className="mt-3 text-gray-500 text-sm leading-relaxed max-w-md">
              Practical, activity-based training with dedicated interview and
              placement support built into every course.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-x-8 gap-y-5 md:border-l md:border-gray-200 md:pl-10">
            {stats.map((s, i) => (
              <div key={i} className="min-w-[90px]">
                <div
                  className="text-2xl font-semibold text-gray-900"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                  {s.value}
                </div>
                <div className="text-xs text-gray-500 mt-0.5 leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Cards — 2-up, landscape layout ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-8 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className={`group relative bg-white rounded-2xl border overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 ${
                course.featured
                  ? "border-[#9C1726]/30 shadow-md"
                  : "border-gray-200 shadow-sm"
              }`}
            >
              {/* Featured ribbon */}
              {course.featured && (
                <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-[#00529b] text-white text-[10px] font-semibold px-2.5 py-1 rounded-full shadow-sm">
                  <PlaneIcon className="w-3 h-3" />
                  Featured
                </div>
              )}

              {/* Top: image strip — landscape, not square */}
              <div className="relative w-full overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Dark gradient only at bottom */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70" />

                {/* Course code top-left */}
                <span className="absolute top-4 left-4 font-mono text-[10px] tracking-widest text-white/70 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-md">
                  {course.code}
                </span>

                {/* Title + cert badge bottom of image */}
                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between gap-3">
                  <h3
                    className="text-white text-xl font-semibold leading-tight drop-shadow"
                    style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                  >
                    {course.title}
                  </h3>
                  <span className="shrink-0 flex items-center gap-1 bg-white/95 text-[#00529b] text-[10px] font-semibold px-2 py-1 rounded-md whitespace-nowrap">
                    <BadgeIcon className="w-3 h-3" />
                    {course.certification}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col gap-4">
                {/* Tag + duration */}
                <div className="flex items-center gap-3">
                  <span
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
                    style={{ color: course.tagColor, background: course.tagBg }}
                  >
                    {course.tag}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-400 font-medium">
                    <ClockIcon className="w-3.5 h-3.5" />
                    {course.duration}
                  </span>
                  <span className="ml-auto text-[11px] text-gray-400 font-medium">
                    {course.track}
                  </span>
                </div>

                {/* Divider */}
                <div className="border-t border-dashed border-gray-200" />

                {/* Curriculum modules */}
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-2.5">
                    What you'll learn
                  </p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {course.modules.map((m, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full bg-[#00529b]/[0.1] flex items-center justify-center text-[#00529b]">
                          <CheckIcon className="w-2.5 h-2.5" />
                        </span>
                        <span className="text-xs text-gray-600 leading-snug">
                          {m}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-dashed border-gray-200" />

                {/* CTA row */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f05123] animate-pulse" />
                    <span className="text-xs font-medium text-[#f05123]">
                      {course.seats}
                    </span>
                  </div>
                  <a
                    href={course.href}
                    className="group/btn inline-flex items-center gap-2 bg-[#9C1726]  text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all duration-200 no-underline shadow-sm hover:shadow-md"
                  >
                    Enroll now
                    <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-[#00529b] transition-all duration-200">
                      <ArrowIcon className="w-3 h-3" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
