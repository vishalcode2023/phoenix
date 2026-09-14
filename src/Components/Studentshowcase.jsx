import React, { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const destinations = [
  {
    city: "Mysore",
    role: "Cabin Crew",
    airline: "Air India",
    student: "Ananya Sharma",
    batch: "Batch 2024",
    img: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=800&auto=format&fit=crop",
    accent: "#00529b",
  },
  {
    city: "Bengaluru",
    role: "Ground Staff",
    airline: "IndiGo",
    student: "Priya Reddy",
    batch: "Batch 2024",
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop",
    accent: "#f05123",
  },
  {
    city: "Mumbai",
    role: "Cabin Crew",
    airline: "SpiceJet",
    student: "Rohan Kumar",
    batch: "Batch 2023",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    accent: "#00529b",
  },
  {
    city: "Delhi",
    role: "Airport Lounge",
    airline: "Vistara",
    student: "Sneha Patel",
    batch: "Batch 2024",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    accent: "#f05123",
  },
  {
    city: "Hyderabad",
    role: "Ground Ops",
    airline: "Air Arabia",
    student: "Rahul Nair",
    batch: "Batch 2023",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    accent: "#00529b",
  },
  {
    city: "Chennai",
    role: "Cabin Crew",
    airline: "Emirates",
    student: "Kavya Iyer",
    batch: "Batch 2024",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop",
    accent: "#f05123",
  },
];

function StarIcon() {
  return (
    <svg viewBox="0 0 12 12" fill="currentColor" className="w-2.5 h-2.5">
      <path d="M6 0l1.5 4H12l-3.5 2.5 1.5 4L6 8 2 10.5l1.5-4L0 4h4.5z" />
    </svg>
  );
}

export default function StudentShowcase() {
  const looped = [...destinations, ...destinations];

  return (
    <section
      className="relative w-full bg-white overflow-hidden"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .sb-track { animation: marquee-left 48s linear infinite; }
        .sb-wrap:hover .sb-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .sb-track { animation: none; }
        }
      `}</style>

      {/* ── Header — tight, full-width, border-boxed ── */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-8 md:py-10">

          {/* Top micro-row */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f05123]" />
              <span className="text-sm font-medium text-[#f05123]">Student placements</span>
            </div>
            <a
              href="#placements"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#00529b] hover:underline no-underline"
            >
              View all placements
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Headline + description + stats — all in one band */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-end">
            <div>
              <h2
                className="text-4xl sm:text-5xl font-semibold text-gray-900 tracking-tight leading-[1.08] mb-3"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                Real students, real careers
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed max-w-lg">
                Every card is a graduate now working in aviation or hospitality — trained here in Mysore.
              </p>
            </div>

            {/* Stats inline with header */}
            <div className="flex items-center gap-6 md:gap-8 md:border-l md:border-gray-200 md:pl-8">
              {[
                { value: "200+", label: "Placed" },
                { value: "40+", label: "Recruiters" },
                { value: "100%", label: "Support" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div
                    className="text-2xl font-semibold text-gray-900"
                    style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                  >
                    {s.value}
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Marquee — sits flush below the header border ── */}
      <div className="sb-wrap relative py-8 md:py-10">
        

        <div className="sb-track flex gap-5 w-max px-4">
          {looped.map((d, i) => (
            <div
              key={i}
              className="group relative flex-none w-[260px] sm:w-[280px] rounded-2xl overflow-hidden cursor-pointer"
              style={{ height: "380px" }}
            >
              <img
                src={d.img}
                alt={d.student}
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/5" />

              {/* Top badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span
                  className="flex items-center gap-1.5 text-[10px] font-semibold px-2.5 py-1 rounded-full text-white"
                  style={{ background: d.accent }}
                >
                  <StarIcon />
                  {d.airline}
                </span>
                <span className="text-[10px] font-medium text-white/70 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
                  {d.batch}
                </span>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span
                  className="inline-block text-[10px] font-semibold px-2.5 py-0.5 rounded-full mb-3"
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    color: "rgba(255,255,255,0.9)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  {d.role}
                </span>
                <div className="flex items-end justify-between gap-2">
                  <div>
                    <p
                      className="text-white font-semibold text-base leading-tight"
                      style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                    >
                      {d.student}
                    </p>
                    <p className="text-white/60 text-xs mt-0.5">{d.city}</p>
                  </div>
                  <div
                    className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ background: d.accent }}
                  >
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </section>
  );
}