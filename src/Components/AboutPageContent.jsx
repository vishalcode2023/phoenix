import React from "react";
import Navbar from "../Router/Navbar";
import Footer from "./Footer";

const airlinePartners = [
  {
    name: "Air India",
    logo: "https://imgs.search.brave.com/Z_plwk6gxfr8yBP-ytzasPJNQwdEcZJAuLOfHuYmwm8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHJhdmVsYW5k/bGVpc3VyZWFzaWEu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy9z/aXRlcy8yLzIwMjMv/MDgvMTExMTAxMjIv/RmVhdHVyZWQtSW5z/aWRlLTItMi0xMDI0/eDU3Ni5qcGc",
  },
  {
    name: "IndiGo",
    logo: "https://imgs.search.brave.com/8dqg6BcAt-CJpDr8Cimze2-Ugi2pbe7CT8gfLgW-jXI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/aGlzdG9yeS5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDkvSW5kaWdvLUxv/Z28tMTAyNHg1NzYu/anBn",
  },
  {
    name: "SpiceJet",
    logo: "https://imgs.search.brave.com/OVh9h6NuR_PMEphGBevWB9NsilPTfq6bkDeqSVxqnp0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzA3/L1NwaWNlSmV0LUxv/Z28tNTAweDMxNC5q/cGc",
  },
  {
    name: "Akasa Air",
    logo: "https://imgs.search.brave.com/jh9CFgphXkVJ-pn-ugj0BYHmAqWkfUUm7K__QY2bxAY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL2FrYXNh/LWFpcjQyMDMuanBn",
  },
  {
    name: "Emirates",
    logo: "https://imgs.search.brave.com/QH77N6kfJI2CUjinfeXARdEcf48zb-nfx0TOjZh1N6I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9kd2ds/b2dvLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxNi8wNC9F/bWlyYXRlcy1sb2dv/LnBuZw",
  },
  {
    name: "Qatar Airways",
    logo: "https://imgs.search.brave.com/fxDBpLJ8Vl32E3N10vPTwdUCoZKqyIPcoyeuD9GfpU4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YnJhbmRjb2xvcmNv/ZGUuY29tL2ltYWdl/cy9jb2xvci1wYWxl/dHRlL3FhdGFyLWFp/cndheXMucG5n",
  },
];

export default function AboutPageContent() {
  return (
    <div className="w-full bg-slate-50 text-slate-800 font-sans min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap');
      `}</style>

      {/* ==========================================
          1. HERO SECTION WITH EMBEDDED NAVBAR
         ========================================== */}
      <section className="max-w-[1400px] mx-auto px-2 sm:px-4 md:px-6 pt-3">
        <div className="relative w-full min-h-[620px] sm:min-h-[680px] md:min-h-[730px] rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl flex flex-col justify-between pb-12">
          {/* Background Aviation Image */}
          <img
            src="/aboutus.png"
            alt="Phoenix Academy Mysore Aviation"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/50 to-slate-950/40" />

          {/* Navbar Embedded Inside Hero Section */}
          <div className="relative top-0 md:-top-3 z-30 w-full p-3 sm:p-5">
            <Navbar />
          </div>

          {/* Centered Hero Main Content */}
          <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center justify-center text-center text-white space-y-6 my-auto pt-6">
            {/* Subtitle Badge */}
            <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-slate-200 uppercase">
              MYSORE'S #1 AVIATION ACADEMY
            </p>

            {/* Main Serif Headline */}
            <h1
              className="text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.15] text-white tracking-tight"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Phoenix Academy, Mysore's 1st Aviation Institute
            </h1>

            {/* Subtext */}
            <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-2xl font-light leading-relaxed">
              Pioneering cabin crew and hospitality training in Mysore with 100%
              placement support.
            </p>

            {/* White Pill CTA Button */}
            <div className="pt-2">
              <a
                href="#journey"
                className="no-underline bg-white hover:bg-slate-100 text-slate-900 font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 inline-block"
              >
                Begin Your Journey
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          2. KEY METRICS & STATS BAR
         ========================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 -mt-10 relative z-20">
        <div className="bg-white border border-slate-200/80 rounded-2xl md:rounded-3xl shadow-xl p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          <div className="text-center pt-2 sm:pt-0">
            <div
              className="text-3xl sm:text-4xl font-bold text-[#00529b]"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              1st
            </div>
            <p className="text-slate-600 text-xs sm:text-sm mt-1 font-medium">
              Aviation Academy in Mysore
            </p>
          </div>

          <div className="text-center pt-2 sm:pt-0 sm:px-2">
            <div
              className="text-3xl sm:text-4xl font-bold text-[#00529b]"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              100%
            </div>
            <p className="text-slate-600 text-xs sm:text-sm mt-1 font-medium">
              Placement Assistance
            </p>
          </div>

          <div className="text-center pt-2 sm:pt-0 sm:px-2">
            <div
              className="text-3xl sm:text-4xl font-bold text-[#00529b]"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              2,500+
            </div>
            <p className="text-slate-600 text-xs sm:text-sm mt-1 font-medium">
              Successful Alumni
            </p>
          </div>

          <div className="text-center pt-2 sm:pt-0 sm:px-2">
            <div
              className="text-3xl sm:text-4xl font-bold text-[#00529b]"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              35+
            </div>
            <p className="text-slate-600 text-xs sm:text-sm mt-1 font-medium">
              Airline & Airport Partners
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================
          3. DETAILED BRAND STORY & HERITAGE
         ========================================== */}
      <section
        className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-20"
        id="journey"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Narrative Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-[#00529b] text-xs font-semibold uppercase tracking-wider">
              Our Legacy in Heritage City
            </div>

            <h2
              className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Empowering Mysore’s Youth for Global Aviation & Hospitality
              Careers
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Established as Mysore's premiere aviation training institute,{" "}
              <strong>Phoenix Academy</strong> was built to bring world-class
              cabin crew, ground handling, and airport management education
              directly to the region.
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              Our curriculum blends rigorous practical grooming, in-flight
              safety mockups, personality development, and intensive mock
              interviews led by former senior flight attendants and airport
              operation managers.
            </p>

            {/* Key Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#f05123] mt-1.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">
                    DGCA-Aligned Modules
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Updated to match international airline standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00529b] mt-1.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">
                    Grooming & Soft Skills
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Fluency, etiquette, and cabin presentation labs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Feature Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 shadow-2xl bg-slate-900 group">
              <img
                src="/img-mob.png"
                alt="Cabin Crew Practical Training"
                className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">
                  Hands-On Flight Simulators
                </span>
                <h3
                  className="text-xl font-bold mt-1"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  Practical Cabin & Safety Training
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          4. CORE ACADEMY PILLARS
         ========================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-bold text-[#f05123] uppercase tracking-widest mb-2">
            The Phoenix Advantage
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-slate-900"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Why Mysore Chooses Phoenix
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Every course is engineered to help students transition seamlessly
            into domestic and international airlines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200/80 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#00529b] flex items-center justify-center font-bold text-xl mb-5">
              ✈️
            </div>
            <h3
              className="text-xl font-bold text-slate-900 mb-2"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Airline Experienced Faculty
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Learn directly from veteran flight attendants, senior airport
              operations managers, and hospitality industry leaders.
            </p>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#f05123] flex items-center justify-center font-bold text-xl mb-5">
              💼
            </div>
            <h3
              className="text-xl font-bold text-slate-900 mb-2"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              100% Placement Cell
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Dedicated placement drives in Mysore, Bengaluru, and major metro
              airports with direct interview access to top airlines.
            </p>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#00529b] flex items-center justify-center font-bold text-xl mb-5">
              🏆
            </div>
            <h3
              className="text-xl font-bold text-slate-900 mb-2"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Modern Infrastructure
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Air-conditioned state-of-the-art classrooms, mock aircraft cabins,
              grooming mirrors, and audio-video communication labs.
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================
          5. HIRING AIRLINES / PLACEMENT PARTNERS
         ========================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-10">
        <div className="relative overflow-hidden rounded-[32px] sm:rounded-[40px] bg-gradient-to-r from-[#051124] via-[#093260] to-[#051124] p-8 sm:p-12 md:p-16 text-center shadow-2xl border border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-400/15 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10">
            <p className="text-[#F3B33E] text-xs sm:text-sm font-bold uppercase tracking-[0.25em] mb-3">
              CAREER OPPORTUNITIES
            </p>

            <h2
              className="text-2xl sm:text-4xl md:text-5xl font-normal text-white mb-10 tracking-tight"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Our Graduates Work With Leading Global Carriers
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5">
              {airlinePartners.map((airline) => (
                <div
                  key={airline.name}
                  className="bg-white hover:bg-slate-50 transition-all duration-300 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full shadow-lg flex items-center gap-3 border border-slate-100 hover:scale-105"
                >
                  <img
                    src={airline.logo}
                    alt={`${airline.name} Logo`}
                    className="h-5 sm:h-6 max-w-[70px] sm:max-w-[90px] object-contain"
                    loading="lazy"
                  />
                  <span className="text-slate-900 font-semibold text-sm sm:text-base whitespace-nowrap">
                    {airline.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
