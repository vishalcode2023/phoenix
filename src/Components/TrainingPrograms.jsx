const programs = [
  {
    id: "cabin-crew",
    title: "Cabin Crew Professional",
    desc: "Master in-flight service, emergency procedures, and world-class hospitality.",
    image: "https://images.unsplash.com/photo-1774852760183-7bd102188dd6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fENhYmluJTIwQ3JldyUyMFByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "ground-ops",
    title: "Airport Ground Operations",
    desc: "Manage passenger ticketing, ramp handling, and gate management efficiently.",
    image: "https://imgs.search.brave.com/K-bQieb06kRPnpcMhlmrXrUxKWLhIPrgckSa2p_Yjj4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9yZWRh/Y3RpdmUtLWRydXBh/bC0tYWlybGluZXMt/LXB1YmxpYy1maWxl/cy5zMy5ldS13ZXN0/LTIuYW1hem9uYXdz/LmNvbS9zM2ZzLXB1/YmxpYy9zdHlsZXMv/dW5jcm9wcGVkX3Nt/YWxsL3B1YmxpYy8y/MDI2LTA1L3dlYl9H/cm91bmQtSGFuZGxp/bmdfQ1JFRElUX2lT/dG9jay0xMTQxNjQx/MTc0LmpwZz9pdG9r/PWJnNkhubUlo",
  },
  {
    id: "aviation-hospitality",
    title: "Aviation Hospitality Management",
    desc: "Develop high-end customer relations and luxury service for premium airline lounges.",
    image: "https://imgs.search.brave.com/FGw8m0eAVpZi3YoIQiZVy6gnwlgg4M-1wqYJ4lDBubU/rs:fit:500:0:1:0/g:ce/aHR0cDovL3d3dy5n/dWphcmF0dW5pdmVy/c2l0eWF2aWF0aW9u/LmluL2Fzc2V0cy9p/bWFnZXMvY291cnNl/LzEuanBn",
  },
  {
    id: "air-cargo",
    title: "Air Cargo & Ramp Logistics",
    desc: "Learn dangerous goods regulations, aircraft loading, and freight operations.",
    image: "https://imgs.search.brave.com/pCQTZcOChImLne8pEJOxVSIgHLJIVpNIoc9HmdvpZ00/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzIwLzQ0LzgwLzA4/LzM2MF9GXzIwNDQ4/MDA4OThfS3VWYjhE/dFR5alVsV2RxQ25u/WXo3NEhsMGpsQ0VS/QVYuanBn",
  },
  {
    id: "aviation-security",
    title: "Aviation Security & Safety",
    desc: "Ensure airport compliance, terminal security, and passenger screening protocols.",
    image: "https://images.unsplash.com/photo-1615561916422-7014e1078997?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEF2aWF0aW9uJTIwU2VjdXJpdHklMjAlMjYlMjBTYWZldHl8ZW58MHx8MHx8fDA%3D",
  },
];

const TrainingPrograms = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
        <div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Aviation Training Programs
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl">
            Specialized career programs engineered to prepare you for
            high-demand roles in cabin service and airport operations.
          </p>
        </div>

        <a
          href="#programs"
          className="inline-flex items-center justify-center gap-2 bg-[#1D61E7] hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md shrink-0 self-start sm:self-auto"
        >
          <span>See All Programs</span>
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </a>
      </div>

      {/* Grid Layout (Matching 3-Column Asymmetric Style) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
        {/* Left Column (2 Cards Stacked) */}
        <div className="flex flex-col gap-5 lg:gap-6">
          <ProgramCard item={programs[0]} height="h-[260px] sm:h-[280px]" />
          <ProgramCard item={programs[1]} height="h-[260px] sm:h-[280px]" />
        </div>

        {/* Middle Column (1 Tall Featured Card) */}
        <div className="flex">
          <ProgramCard
            item={programs[2]}
            height="h-[320px] md:h-full min-h-[540px]"
          />
        </div>

        {/* Right Column (2 Cards Stacked) */}
        <div className="flex flex-col gap-5 lg:gap-6">
          <ProgramCard item={programs[3]} height="h-[260px] sm:h-[280px]" />
          <ProgramCard item={programs[4]} height="h-[260px] sm:h-[280px]" />
        </div>
      </div>
    </section>
  );
};

// Reusable Program Card
const ProgramCard = ({ item, height }) => {
  return (
    <div
      className={`relative w-full ${height} rounded-3xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 bg-slate-900`}
    >
      {/* Background Image */}
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out opacity-85"
      />

      {/* Dark Scrim Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent" />

      {/* Card Content Footer */}
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex items-end justify-between gap-4 text-white z-10">
        <div className="max-w-[85%]">
          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white mb-1.5">
            {item.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300/90 font-normal line-clamp-2 leading-relaxed">
            {item.desc}
          </p>
        </div>

        {/* Action Button */}
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-slate-900 flex items-center justify-center shrink-0 group-hover:bg-[#1D61E7] group-hover:text-white transition-all duration-300 shadow-md">
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:rotate-45"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TrainingPrograms;
