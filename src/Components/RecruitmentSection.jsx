import React from "react";

const recruiters = [
  {
    name: "Air India SATS",
    logo: "https://img-cdn.publive.online/fit-in/1280x960/filters:format(webp)/afaqs/media/media_files/2025/11/07/air-india-2025-11-07-14-58-30.jpg",
    stripe: "bg-[#00529b]",
  },
  {
    name: "IndiGo",
    logo: "https://imgs.search.brave.com/w2ioJm96rR58U-gFtd2OzznidtolvmdoL1tA_o28eZ4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzA3/L0luZGlHby1Mb2dv/LTUwMHgzMTQuanBn",
    stripe: "bg-[#f05123]",
  },
  {
    name: "Emirates",
    logo: "https://imgs.search.brave.com/AAzn8wKD6F56gqhnI3KcMeHWprZS5hyEbtB5_JMQSN8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzAz/L0VtaXJhdGVzLWxv/Z28tNTAweDI4MS5q/cGc",
    stripe: "bg-slate-700",
  },
  {
    name: "Plaza Premium Group",
    logo: "https://imgs.search.brave.com/NiSN1Nvdp-rdwYbb4vykUagVBRqWzgxcBZ2ARDvfnfM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9haXJw/b3J0aW5kdXN0cnkt/bmV3cy5jb20vd3At/Y29udGVudC91cGxv/YWRzL3NpdGVzLzIv/MjAyMy8wNC9QbGF6/YVByZW1pdW0tTG9n/by5wbmc",
    stripe: "bg-[#00529b]",
  },
  {
    name: "Air India",
    logo: "https://imgs.search.brave.com/JMBhGbwzoShFLjlJNNFYh78phsmNTUMkrz3IW7SuOhw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzVkL2E1/L2Y5LzVkYTVmOTQ5/YzYxMjEyOTIyNjJm/ZTljNmJjNTFkNjQ1/LmpwZw",
    stripe: "bg-[#f05123]",
  },
  {
    name: "Vistara",
    logo: "https://imgs.search.brave.com/9tsDNDoUL8zWkJ3_xskZWgMjmKrXzb2qP6YaKaJnRjw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aGVo/YXJkY29weS5jby93/cC1jb250ZW50L3Vw/bG9hZHMvVmlzdGFy/YS1JbWFnZXMtNy0x/MjAweDgwNS5wbmc",
    stripe: "bg-slate-700",
  },
];

const features = [
  {
    step: "01",
    tag: "Flight faculty",
    title: "Industry-experienced trainers",
    description:
      "Trained directly by active airline commanders, senior cabin crew leads, and ground operation managers.",
    points: ["Real tarmac insights", "Mock aircraft drills", "AASSC standards"],
    stat: {
      value: "12+",
      label: "Years average flight-deck & cabin experience",
    },
    accentColor: "from-[#00529b] to-sky-600",
    lightBg: "bg-blue-50/80",
    textColor: "text-[#00529b]",
    borderColor: "hover:border-[#00529b]/40",
  },
  {
    step: "02",
    tag: "Placement cell",
    title: "Dedicated job assistance",
    description:
      "End-to-end career support including airline CV building, grooming transformations, and guaranteed interview walk-ins.",
    points: [
      "100% placement support",
      "Airline interview coaching",
      "Salary negotiation",
    ],
    stat: { value: "3 wks", label: "Average time to first airline interview" },
    accentColor: "from-[#f05123] to-amber-500",
    lightBg: "bg-orange-50/80",
    textColor: "text-[#f05123]",
    borderColor: "hover:border-[#f05123]/40",
  },
  {
    step: "03",
    tag: "Alumni network",
    title: "A network that keeps hiring",
    description:
      "Graduates refer graduates — alumni working at partner airlines flag openings to our placement cell before they're posted publicly.",
    points: [
      "Referral-first hiring",
      "Active alumni WhatsApp groups",
      "Batch reunions with recruiters",
    ],
    stat: {
      value: "500+",
      label: "Alumni currently working across partner airlines",
    },
    accentColor: "from-emerald-500 to-teal-500",
    lightBg: "bg-emerald-50/80",
    textColor: "text-emerald-600",
    borderColor: "hover:border-emerald-400/40",
  },
];

const stats = [
  { value: "500+", label: "Graduates placed" },
  { value: "40+", label: "Airline & airport partners" },
  { value: "92%", label: "Placement rate" },
  { value: "15 yrs", label: "Training legacy" },
];

function LogoChip({ item }) {
  return (
    <div className="flex-shrink-0 w-60 md:w-72 flex items-center gap-4 md:gap-5 bg-white rounded-2xl pl-5 pr-6 py-5 md:py-6 border border-slate-200/80 shadow-[0_6px_20px_rgba(0,0,0,0.04)] mx-3 md:mx-4">
      <span
        className={`w-2 h-12 md:h-14 rounded-full flex-shrink-0 items-center ${item.stripe}`}
      />
      <img
        src={item.logo}
        alt={item.name}
        className="h-12 md:h-20 max-w-[180px] object-contain"
        onError={(e) => {
          e.currentTarget.style.display = "none";
          e.currentTarget.nextSibling.style.display = "inline-block";
        }}
      />
      <span
        className="hidden text-slate-700 font-semibold text-lg md:text-xl whitespace-nowrap"
        style={{ fontFamily: '"Space Grotesk", sans-serif' }}
      >
        {item.name}
      </span>
    </div>
  );
}

export default function RecruitmentSection() {
  const loopedRecruiters = [...recruiters, ...recruiters];

  return (
    <section className="relative w-full pt-14 md:pt-16 bg-[#f6f8fa] overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track { animation: marquee-scroll 32s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }
      `}</style>

      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-r from-blue-200/20 via-orange-200/20 to-sky-200/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-12 z-10">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 mb-4 text-[#f05123]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f05123] animate-pulse" />
            <span
              className="text-sm font-medium"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              Career launchpad
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.05] mb-4"
            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
          >
            Where our students get hired
          </h2>
          <p
            className="text-slate-500 text-base leading-relaxed"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Leading international airlines and airport operators actively
            recruit from our graduating batches.
          </p>
        </div>
      </div>

      {/* Full-bleed recruiter marquee */}
      <div className="relative mb-12 md:mb-16">
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#f6f8fa] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#f6f8fa] to-transparent z-10 pointer-events-none" />
        <div className="flex w-max marquee-track py-4">
          {loopedRecruiters.map((item, idx) => (
            <LogoChip item={item} key={idx} />
          ))}
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-12 z-10">
        {/* Feature cards — three across, no dead gutters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className={`group relative bg-white rounded-[28px] p-6 md:p-7 border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col overflow-hidden ${item.borderColor}`}
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              <div
                className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.accentColor}`}
              />

              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-xs font-semibold px-3.5 py-1.5 rounded-full ${item.lightBg} ${item.textColor}`}
                >
                  {item.tag}
                </span>
                <span
                  className="text-2xl font-semibold text-slate-200 group-hover:text-slate-300 transition-colors"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                  {item.step}
                </span>
              </div>

              <h3
                className="text-xl md:text-[1.35rem] font-semibold text-slate-900 mb-2.5 group-hover:text-[#00529b] transition-colors leading-tight"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">
                {item.description}
              </p>

              <div className="space-y-2.5 pb-5 mb-5 border-b border-dashed border-slate-200">
                {item.points.map((pt, pIdx) => (
                  <div
                    key={pIdx}
                    className="flex items-center gap-3 text-sm font-medium text-slate-700"
                  >
                    <div
                      className={`w-5 h-5 rounded-full ${item.lightBg} flex items-center justify-center flex-shrink-0`}
                    >
                      <svg
                        className={`w-3 h-3 ${item.textColor}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <div
                className={`flex items-center gap-3.5 rounded-2xl ${item.lightBg} px-4 py-3.5 mb-5`}
              >
                <span
                  className={`text-2xl font-semibold ${item.textColor} whitespace-nowrap`}
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                  {item.stat.value}
                </span>
                <span className="text-xs font-medium text-slate-600 leading-snug">
                  {item.stat.label}
                </span>
              </div>

              <div className="mt-auto flex items-center justify-between text-sm font-semibold text-slate-900">
                <span>Discover opportunity</span>
                <div
                  className={`w-9 h-9 rounded-full ${item.lightBg} flex items-center justify-center group-hover:translate-x-1.5 transition-transform duration-300`}
                >
                  <svg
                    className={`w-4 h-4 ${item.textColor}`}
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats band, pulled closer to the cards above it */}
      <div className="relative mt-12 md:mt-14 bg-[#062a4a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-9 md:py-11 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className={`text-center md:text-left ${idx > 0 ? "md:border-l md:border-white/10 md:pl-6" : ""}`}
            >
              <div
                className="text-3xl md:text-4xl font-semibold text-white tracking-tight"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                {s.value}
              </div>
              <div
                className="mt-1 text-xs md:text-sm text-slate-300"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
