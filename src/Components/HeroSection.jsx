import React, { useState, useEffect, useCallback } from "react";

export const courses = [
  {
    id: "01",
    slug: "cabin-crew",
    title: "Cabin Crew",
    heroHeading: "CABIN CREW",
    headline: "TURN YOUR PASSION FOR PEOPLE INTO A CAREER IN THE SKIES.",
    image:
      "/img1.png",
    overview:
      "Our comprehensive Cabin Crew training program is designed to transform ambitious individuals into world-class aviation professionals. You will learn the delicate balance of exceptional customer service, stringent safety protocols, and emergency management.",
    learningAreas: [
      "In-flight Service & Hospitality",
      "Aviation Safety & Emergency Procedures",
      "Professional Grooming & Etiquette",
      "Personality Development & Communication",
    ],
    eligibility: [
      {
        title: "Education",
        desc: "10+2 from a recognized board or university.",
      },
      { title: "Age", desc: "17 to 27 years at the time of admission." },
      {
        title: "Medical",
        desc: "Physically fit with unblemished complexion. Minimum height requirements apply.",
      },
      { title: "Language", desc: "Fluency in English and Hindi." },
    ],
  },
  {
    id: "02",
    slug: "airport-ground-operations",
    title: "Airport Ground Operations",
    heroHeading: "AIRPORT GROUND OPERATIONS",
    headline: "THE PEOPLE BEHIND EVERY SUCCESSFUL TAKEOFF.",
    image:
      "/img2.png",
    overview:
      "Ground operations are the backbone of the aviation industry. This program equips you with the technical and operational knowledge required to manage terminal operations, ramp handling, and passenger services with precision.",
    learningAreas: [
      "Passenger & Baggage Handling",
      "Ramp Operations & Safety",
      "Aviation Security Awareness",
      "Dangerous Goods Regulations",
    ],
    eligibility: [
      { title: "Education", desc: "10+2 or equivalent in any stream." },
      { title: "Age", desc: "18 to 28 years." },
      { title: "Language", desc: "Basic proficiency in English." },
    ],
  },
  {
    id: "03",
    slug: "commercial-pilot-licence",
    title: "Commercial Pilot Licence",
    heroHeading: "COMMERCIAL PILOT LICENCE",
    headline: "FROM THE CLASSROOM TO THE COCKPIT.",
    image:
      "/img3.png",
    overview:
      "Our flagship CPL program offers rigorous ground school and elite flight training. Designed in accordance with DGCA regulations, this course prepares you for a demanding and highly rewarding career as a commercial airline pilot.",
    learningAreas: [
      "Air Navigation & Meteorology",
      "Aviation Regulations (DGCA)",
      "Technical General & Specific",
      "Extensive Flight Training",
    ],
    eligibility: [
      {
        title: "Education",
        desc: "10+2 with Physics and Mathematics from a recognized board.",
      },
      {
        title: "Age",
        desc: "Minimum 17 years to begin training (18 for license issue).",
      },
      {
        title: "Medical",
        desc: "Class II Medical assessment required to start; Class I required for license issuance.",
      },
      {
        title: "Language",
        desc: "Aviation English Language Proficiency (AELP) required.",
      },
    ],
  },
];

const HeroSection = ({ courseData = courses }) => {
  const [activeCourseId, setActiveCourseId] = useState(
    courseData[0]?.id || "01",
  );

  // Auto-rotate dynamic course slide every 5.5s
  const nextCourse = useCallback(() => {
    setActiveCourseId((prevId) => {
      const idx = courseData.findIndex((c) => c.id === prevId);
      return courseData[(idx + 1) % courseData.length].id;
    });
  }, [courseData]);

  useEffect(() => {
    const timer = setInterval(nextCourse, 5500);
    return () => clearInterval(timer);
  }, [nextCourse]);

  return (
    <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <div className="relative w-full rounded-[28px] overflow-hidden bg-slate-950 min-h-[580px] lg:min-h-[600px] flex items-center shadow-2xl">
        {/* Dynamic Image Cross-Fade Stack */}
        {courseData.map((course) => {
          const isActive = course.id === activeCourseId;
          return (
            <div
              key={course.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-transparent lg:w-[65%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:hidden" />
            </div>
          );
        })}

        {/* Content Overlay */}
        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 px-6 sm:px-12 lg:px-16 py-12 items-center">
          {/* Headline & Overview */}
          <div className="lg:col-span-7 max-w-xl text-white">
            <div className="relative min-h-[140px] sm:min-h-[160px]">
              {courseData.map((course) => {
                const isActive = course.id === activeCourseId;
                return (
                  <div
                    key={course.id}
                    className={`transition-all duration-700 ease-out ${
                      isActive
                        ? "opacity-100 translate-y-0 relative"
                        : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"
                    }`}
                  >
                    <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold leading-[1.15] tracking-tight text-white capitalize mb-4">
                      {course.headline
                        .toLowerCase()
                        .replace(/\b\w/g, (c) => c.toUpperCase())}
                    </h1>
                    <p className="text-xs sm:text-sm leading-relaxed text-gray-200/90 font-normal line-clamp-3">
                      {course.overview}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <button className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 font-semibold px-6 py-3 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-sm">
                Book Your Free Flight
              </button>
              <button className="bg-[#1D61E7] hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-lg shadow-blue-600/40">
                Start Your Journey
              </button>
            </div>

            {/* Ratings & Trainees */}
            <div className="flex items-center gap-4 mt-10 pt-6 border-t border-white/10">
              <div className="flex -space-x-2 overflow-hidden">
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                  alt="Trainee 1"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                  alt="Trainee 2"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 object-cover"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                  alt="Trainee 3"
                />
              </div>

              <div className="border-r border-white/20 pr-4">
                <p className="text-xs sm:text-sm font-bold text-white leading-tight">
                  38,482
                </p>
                <p className="text-[10px] sm:text-xs text-gray-300">
                  Happy Trainee
                </p>
              </div>

              <div>
                <div className="flex items-center gap-1">
                  <span className="text-xs sm:text-sm font-bold text-white">
                    4.8/5
                  </span>
                  <div className="flex text-yellow-400 text-xs">★★★★★</div>
                </div>
                <p className="text-[10px] sm:text-xs text-gray-300">Rating</p>
              </div>
            </div>
          </div>

          {/* Program Selectors */}
          <div className="lg:col-span-5 flex justify-start lg:justify-end items-end h-full mt-6 lg:mt-0">
            <div className="bg-slate-900/60 backdrop-blur-md p-2 rounded-xl border border-white/10 flex gap-2">
              {courseData.map((course) => {
                const isActive = course.id === activeCourseId;
                return (
                  <button
                    key={course.id}
                    onClick={() => setActiveCourseId(course.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {course.title}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
