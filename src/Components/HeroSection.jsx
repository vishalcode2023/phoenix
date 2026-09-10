import React, { useState, useEffect, useCallback } from "react";

export const courses = [
  {
    id: "01",
    slug: "cabin-crew",
    title: "Cabin Crew",
    heroHeading: "CABIN CREW",
    headline: "TURN YOUR PASSION FOR PEOPLE INTO A CAREER IN THE SKIES.",
    desktopImage: "/img1.png",
    mobileImage: "/img1-mobile.png",
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
    desktopImage: "/img2.png",
    mobileImage: "/img2-mobile.png",
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
    <section className="w-full mx-auto px-3 sm:px-6 lg:px-8 mt-4 sm:mt-6">
      {/* Main Hero Card Container */}
      <div className="relative w-full rounded-[24px] sm:rounded-[28px] overflow-hidden bg-slate-950 min-h-[520px] sm:min-h-[580px] flex flex-col justify-end shadow-2xl">
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
              {/* Mobile Image */}
              <img
                src={course.mobileImage || course.image}
                alt={course.title}
                className="block sm:hidden w-full h-full object-cover object-center"
              />
              {/* Desktop Image */}
              <img
                src={course.desktopImage || course.image}
                alt={course.title}
                className="hidden sm:block w-full h-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/20 sm:bg-gradient-to-r sm:from-slate-950/95 sm:via-slate-950/70 sm:to-transparent lg:w-[65%]" />
            </div>
          );
        })}

        {/* Hero Content Overlay */}
        <div className="relative z-10 w-full flex flex-col justify-end p-6 sm:p-10 lg:p-14">
          {/* Main Content Area */}
          <div className="max-w-xl text-white pt-6">
            <div className="relative min-h-[140px] sm:min-h-[150px]">
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
                    <h1 className="text-2xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.2] tracking-tight text-white capitalize mb-3">
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
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mt-6 sm:mt-8">
              <button className="w-full sm:w-auto text-center border border-white/30 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md font-semibold px-6 py-3.5 sm:py-3 rounded-xl text-xs sm:text-sm transition-all duration-200 active:scale-[0.98]">
                Book Your Free Flight
              </button>
              <button className="w-full sm:w-auto text-center bg-[#1D61E7] hover:bg-blue-700 text-white font-semibold px-6 py-3.5 sm:py-3 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-lg shadow-blue-600/30 active:scale-[0.98]">
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default HeroSection;
