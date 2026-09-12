import React, { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const destinations = [
  {
    country: "India",
    detail:
      "Professional Cabin Crew training with airline grooming, communication, safety and customer-service skills.",
    student: "Placed: Ananya Sharma",
    img: "https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=800&auto=format&fit=crop",
    stripe: "bg-[#00529b]",
  },
  {
    country: "Bengaluru",
    detail:
      "Industry-focused training with interview preparation, personality development and airline recruitment guidance.",
    student: "Placed: Priya Reddy",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop",
    stripe: "bg-[#f05123]",
  },
  {
    country: "Mumbai",
    detail:
      "Cabin Crew preparation covering in-flight service, emergency procedures, aviation etiquette and grooming.",
    student: "Placed: Rohan Kumar",
    img: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&auto=format&fit=crop",
    stripe: "bg-[#00529b]",
  },
  {
    country: "Delhi",
    detail:
      "Complete airline career preparation with English communication, soft skills and cabin crew interview training.",
    student: "Placed: Sneha Patel",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop",
    stripe: "bg-[#f05123]",
  },
  {
    country: "Hyderabad",
    detail:
      "Practical aviation hospitality training designed to prepare students for domestic and international airlines.",
    student: "Placed: Rahul Nair",
    img: "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?q=80&w=800&auto=format&fit=crop",
    stripe: "bg-[#00529b]",
  },
  {
    country: "Chennai",
    detail:
      "Airline-ready cabin crew training with professional grooming, passenger handling and hospitality skills.",
    student: "Placed: Kavya Iyer",
    img: "https://images.unsplash.com/photo-1559060017-445e8b7f7f18?q=80&w=800&auto=format&fit=crop",
    stripe: "bg-[#f05123]",
  },
];

export default function StudentShowcase() {
  const trackRef = useRef(null);
  const looped = [...destinations, ...destinations];

  return (
    <section className="relative w-full py-20 md:py-28 bg-[#f6f8fa] overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-left 42s linear infinite;
        }
        .marquee-wrap:hover .marquee-track {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>

      {/* Ambient background glow matching previous sections */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-r from-blue-200/20 via-orange-200/20 to-sky-200/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-12 z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-18">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4 text-[#f05123]">
              <span className="w-2 h-2 rounded-full bg-[#f05123] animate-pulse" />
              <span
                className="text-xs font-bold tracking-widest uppercase"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                Global Flight Bases
              </span>
            </div>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.05]"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              Where our cadets earn their{" "}
              <span className="text-[#00529b]">wings</span>
            </h2>
          </div>

          <p
            className="text-slate-500 text-sm md:text-base leading-relaxed max-w-md pb-1"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            DGCA-recognised flight schools across six countries, chosen for
            approval speed, weather windows, and cost per flying hour.
          </p>
        </div>
      </div>

      {/* Full-bleed Marquee Showcase */}
      <div className="marquee-wrap relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#f6f8fa] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#f6f8fa] to-transparent z-10" />

        <div
          ref={trackRef}
          className="marquee-track flex gap-6 md:gap-8 w-max px-4 sm:px-6 md:px-12 py-4"
        >
          {looped.map((d, i) => (
            <div
              key={i}
              className="group relative flex-none w-72 sm:w-80 h-[430px] rounded-[32px] overflow-hidden border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2 bg-cover bg-center"
              style={{
                backgroundImage: `url(${d.img})`,
                fontFamily: '"Inter", sans-serif',
              }}
            >
              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/10 transition-opacity duration-300 group-hover:opacity-90" />

              {/* Student Placement Badge */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-slate-900 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/60 shadow-sm">
                  <span className={`w-1.5 h-1.5 rounded-full ${d.stripe}`} />
                  {d.student}
                </span>
              </div>

              {/* Bottom Content Area */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7 flex items-end justify-between gap-4">
                <div>
                  <h3
                    className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-amber-300 transition-colors"
                    style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                  >
                    {d.country}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-300 max-w-[210px] line-clamp-3">
                    {d.detail}
                  </p>
                </div>

                {/* Interactive Arrow Button */}
                <div className="flex-none w-11 h-11 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center transition-all duration-300 group-hover:bg-[#00529b] group-hover:border-[#00529b] group-hover:scale-110">
                  <ArrowUpRight className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
