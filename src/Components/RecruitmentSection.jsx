const recruiters = [
  { name: "Air India SATS", logo: "/logos/airindia-sats.png" },
  { name: "IndiGo", logo: "/logos/indigo.png" },
  { name: "Emirates", logo: "/logos/emirates.png" },
  { name: "Plaza Premium", logo: "/logos/plaza-premium.png" },
  { name: "Air India", logo: "/logos/airindia.png" },
  { name: "Vistara", logo: "/logos/vistara.png" },
];

const highlights = [
  {
    number: "01",
    tag: "10+ Years Experience",
    title: "Industry-Experienced Faculty",
    description:
      "Trained directly by active airline captains, cabin crew leads, and airport managers with real tarmac expertise.",
    tagStyle: "bg-blue-50 text-[#00529b] border-blue-100",
    iconBg: "bg-blue-50 text-[#00529b]",
    hoverBorder: "hover:border-[#00529b]/30",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 14l9-5-9-5-9 5 9 5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        />
      </svg>
    ),
  },
  {
    number: "02",
    tag: "100% Career Assistance",
    title: "Placement Support",
    description:
      "Dedicated first job assistance, personalized resume building, and intensive airline mock interview preparation.",
    tagStyle: "bg-orange-50 text-[#f05123] border-orange-100",
    iconBg: "bg-orange-50 text-[#f05123]",
    hoverBorder: "hover:border-[#f05123]/30",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

export default function RecruitmentSection() {
  return (
    <section className="relative w-full py-16 md:py-24 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-gray-50 via-sky-50/20 to-white overflow-hidden">
      {/* Background Soft Glow Accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-r from-blue-100/40 via-orange-100/30 to-sky-100/40 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Title & Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#f05123] bg-orange-50 border border-orange-100 uppercase mb-3">
            Hiring Partners
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Our Top Recruiters
          </h2>
        </div>

        {/* Clean Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5 mb-12 md:mb-16">
          {recruiters.map((item, idx) => (
            <div
              key={idx}
              className="h-20 bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex items-center justify-center group"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-12 md:mb-16" />

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {highlights.map((card, idx) => (
            <div
              key={idx}
              className={`relative bg-white rounded-[28px] p-7 md:p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group ${card.hoverBorder}`}
            >
              {/* Top Row: Icon & Tag */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-2xl ${card.iconBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                  >
                    {card.icon}
                  </div>
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${card.tagStyle}`}
                  >
                    {card.tag}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-gray-900 font-bold text-xl md:text-2xl mb-2 group-hover:text-[#00529b] transition-colors">
                  {card.title}
                </h3>

                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="pt-4 border-t border-gray-50 flex items-center justify-between text-xs font-semibold text-gray-400 group-hover:text-gray-700 transition-colors">
                <span>Learn More</span>
                <span className="text-[#00529b] group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
