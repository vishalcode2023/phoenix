import React, { useState, useEffect, useCallback } from "react";

const HeroSection = ({ courses = [] }) => {
  const defaultCourses = [
    {
      id: "01",
      slug: "cabin-crew",
      title: "Cabin Crew",
      headline: "Turn Your Passion For People Into A Career In The Skies",
      image: "/img1.png",
      overview:
        "Our comprehensive Cabin Crew training program is designed to transform ambitious individuals into world-class aviation professionals with safety and service protocols.",
    },
    {
      id: "02",
      slug: "airport-ground-operations",
      title: "Ground Operations",
      headline: "The People Behind Every Successful Aircraft Takeoff",
      image: "/img2.png",
      overview:
        "Ground operations are the backbone of the aviation industry. Learn terminal operations, ramp management, and passenger security services.",
    },
  ];

  const courseList = courses && courses.length > 0 ? courses : defaultCourses;
  const [activeCourseId, setActiveCourseId] = useState(
    courseList[0]?.id || "01",
  );
  const [isTransitioning, setIsTransitioning] = useState(false);

  const activeCourse =
    courseList.find((c) => c.id === activeCourseId) || courseList[0];

  // Rotate to next slide
  const nextCourse = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveCourseId((prevId) => {
        const currentIndex = courseList.findIndex((c) => c.id === prevId);
        const nextIndex = (currentIndex + 1) % courseList.length;
        return courseList[nextIndex].id;
      });
      setIsTransitioning(false);
    }, 250);
  }, [courseList]);

  // Automated 3.5-second timer
  useEffect(() => {
    if (courseList.length <= 1) return;

    const interval = setInterval(() => {
      nextCourse();
    }, 3500);

    return () => clearInterval(interval);
  }, [courseList.length, nextCourse]);

  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 py-12 lg:py-16 min-h-[640px] flex items-center justify-between overflow-hidden font-sans select-none">
      {/* Smooth Organic Background Wave */}
      <div className="absolute right-0 top-0 w-[55%] h-full pointer-events-none z-0">
        <svg
          viewBox="0 0 600 700"
          className="w-full h-full object-cover"
          preserveAspectRatio="none"
        >
          <path
            d="M 180 0 C 350 120, 100 320, 220 520 C 300 640, 500 680, 600 700 L 600 0 Z"
            fill="#F4EBDC"
          />
        </svg>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10 w-full relative">
        {/* Left Column: Content & Typography */}
        <div className="lg:col-span-6 space-y-6 max-w-xl">
          {/* Tagline */}
          <p className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">
            GROW YOUR{" "}
            <span className="text-[#cba46a] font-extrabold">CAREER</span> WITH
            FLYNEXT
          </p>

          {/* Dynamic Headline */}
          <h1
            className={`text-4xl sm:text-5xl lg:text-[54px] font-serif text-[#1e2022] leading-[1.12] tracking-tight font-medium transition-all duration-300 min-h-[120px] ${
              isTransitioning
                ? "opacity-0 translate-y-2"
                : "opacity-100 translate-y-0"
            }`}
          >
            {activeCourse.headline}
          </h1>

          {/* Instructor Subtitle */}
          <p className="text-sm font-semibold text-gray-900">
            Unlimited access to all{" "}
            <span className="text-[#cba46a] font-bold">60+ instructors.</span>
          </p>

          {/* Overview Paragraph */}
          <p
            className={`text-xs sm:text-sm leading-relaxed text-gray-500 max-w-md font-normal transition-all duration-300 min-h-[60px] ${
              isTransitioning
                ? "opacity-0 translate-y-2"
                : "opacity-100 translate-y-0"
            }`}
          >
            {activeCourse.overview}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-6 pt-2">
            <button className="flex items-center gap-3 border border-gray-900 hover:bg-gray-900 hover:text-white px-7 py-3 rounded-full text-xs font-semibold text-gray-900 transition-all duration-300 group">
              <span>Start Training</span>
              <span className="text-[#cba46a] group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
            <button className="flex items-center gap-2 text-xs font-semibold text-gray-900 hover:text-[#cba46a] transition-colors py-3">
              <span>Free Trial Course</span>
              <span className="text-[#cba46a]">→</span>
            </button>
          </div>

          {/* Automatic Progress Status Bar */}
          <div className="pt-6 border-t border-gray-200/80">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                Featured Programs
              </span>
              <span className="text-[10px] font-semibold text-[#cba46a] animate-pulse">
                Auto Switching (3.5s)
              </span>
            </div>

            <div className="flex items-center gap-3">
              {courseList.map((course) => {
                const isActive = activeCourseId === course.id;
                return (
                  <div
                    key={course.id}
                    className={`relative text-xs px-4 py-2 rounded-full font-medium transition-all duration-300 overflow-hidden ${
                      isActive
                        ? "bg-gray-900 text-white shadow-md scale-105"
                        : "bg-white/80 border border-gray-200 text-gray-400 opacity-60"
                    }`}
                  >
                    <span>{course.title}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 h-[2px] bg-[#cba46a] w-full animate-[progress_3.5s_linear_infinite]" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Auto-Changing Subject */}
        <div className="lg:col-span-6 relative flex justify-center items-center min-h-[500px]">
          <div className="relative z-10 w-full max-w-[380px] h-[520px] flex justify-center items-end">
            <img
              key={activeCourse.id}
              src={activeCourse.image}
              alt={activeCourse.title}
              className={`max-h-full object-contain filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.18)] transition-all duration-500 transform ${
                isTransitioning
                  ? "opacity-0 scale-95 translate-y-4"
                  : "opacity-100 scale-100 translate-y-0"
              }`}
            />
          </div>

          {/* Floating Play Button */}
          <button
            aria-label="Play promotional video"
            className="absolute top-1/2 left-0 sm:left-4 -translate-y-1/2 w-16 h-16 bg-[#f7eedc]/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-[#e8d2b0] shadow-md hover:scale-110 transition duration-300 z-20 group cursor-pointer"
          >
            <div className="w-0 h-0 border-y-[8px] border-y-transparent border-l-[14px] border-l-[#cba46a] ml-1 group-hover:scale-110 transition-transform" />
          </button>

          {/* Floating Badge 1: Admission Completed */}
          <div className="absolute bottom-10 left-2 sm:-left-4 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100/80 flex items-center gap-3 z-20">
            <div className="w-8 h-8 rounded-full bg-[#fcf4e8] border border-[#f0dfc8] flex items-center justify-center text-[#cba46a] text-sm">
              ⚙
            </div>
            <div>
              <p className="text-[11px] font-bold text-gray-900 leading-tight">
                Congratulations
              </p>
              <p className="text-[10px] text-gray-400 font-normal">
                Your admission completed
              </p>
            </div>
          </div>

          {/* Floating Badge 2: Instructor Connect */}
          <div className="absolute top-1/3 right-0 sm:-right-4 z-20 flex flex-col items-end">
            <svg
              className="w-10 h-8 text-[#cba46a] mb-1 mr-8 opacity-80"
              viewBox="0 0 50 40"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M10 5 C 25 5, 35 15, 35 30 M 28 24 L 35 30 L 40 22"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className="bg-white/95 backdrop-blur-sm p-3.5 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100/80 flex flex-col gap-2 max-w-[170px]">
              <div className="flex items-center gap-2.5">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
                  alt="Instructor Adam"
                  className="w-7 h-7 rounded-full object-cover"
                />
                <p className="text-[10px] font-semibold text-gray-800 leading-tight">
                  Connect With Adam & Start Learning
                </p>
              </div>
              <button className="bg-gray-900 hover:bg-[#cba46a] text-white text-[10px] font-bold py-1 px-3 rounded-md text-center transition-colors">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
export default HeroSection;
