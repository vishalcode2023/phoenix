import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Router/Navbar";
import Footer from "./Footer";

const faculty = [
  {
    name: "Dr. Ananya Rao",
    role: "Head of Aviation Training",
    category: "Aviation & Academics",
    experience: "12+ Years",
    description:
      "Experienced aviation educator focused on airline operations, aviation standards, student development, and industry-oriented training.",
    image: "/faculty-1.png",
    accent: "#00529b",
    initials: "AR",
  },
  {
    name: "Capt. Arjun Mehta",
    role: "Senior Aviation Trainer",
    category: "Flight & Aviation",
    experience: "10+ Years",
    description:
      "Aviation professional bringing practical industry knowledge into classroom training, operational awareness, and career preparation.",
    image: "/faculty-2.png",
    accent: "#f05123",
    initials: "AM",
  },
  {
    name: "Priya Sharma",
    role: "Cabin Crew & Hospitality Trainer",
    category: "Cabin Crew & Hospitality",
    experience: "8+ Years",
    description:
      "Specialist in grooming, personality development, customer service, communication, and professional cabin crew preparation.",
    image: "/faculty-3.png",
    accent: "#00529b",
    initials: "PS",
  },
  {
    name: "Rahul Kumar",
    role: "Airport Ground Operations Trainer",
    category: "Ground Operations",
    experience: "9+ Years",
    description:
      "Focuses on passenger handling, ramp operations, baggage and cargo, airport safety, and ground service procedures.",
    image: "/faculty-4.png",
    accent: "#f05123",
    initials: "RK",
  },
  {
    name: "Sneha Nair",
    role: "Communication & Personality Trainer",
    category: "Communication & Development",
    experience: "7+ Years",
    description:
      "Helps students develop confident communication, professional etiquette, interview skills, public speaking, and workplace presence.",
    image: "/faculty-5.png",
    accent: "#00529b",
    initials: "SN",
  },
  {
    name: "Vikram Singh",
    role: "Career & Placement Mentor",
    category: "Career Development",
    experience: "10+ Years",
    description:
      "Guides students through career planning, resume preparation, mock interviews, group discussions, and industry opportunities.",
    image: "/faculty-6.png",
    accent: "#f05123",
    initials: "VS",
  },
];

const expertise = [
  {
    number: "01",
    title: "Industry Experience",
    description:
      "Learn from trainers who bring practical aviation and hospitality knowledge into every classroom.",
    accent: "#00529b",
  },
  {
    number: "02",
    title: "Practical Training",
    description:
      "Training goes beyond theory with real-world scenarios, activities, role plays, and operational awareness.",
    accent: "#f05123",
  },
  {
    number: "03",
    title: "Personal Development",
    description:
      "Build communication, confidence, grooming, etiquette, and professional skills for aviation careers.",
    accent: "#00529b",
  },
  {
    number: "04",
    title: "Career Guidance",
    description:
      "Get structured support for interviews, resume building, career planning, and industry readiness.",
    accent: "#f05123",
  },
];

const teachingAreas = [
  "Aviation Fundamentals",
  "Airline & Airport Operations",
  "Cabin Crew Training",
  "Airport Ground Operations",
  "Hospitality & Customer Service",
  "Communication Skills",
  "Grooming & Personality Development",
  "Interview & Career Preparation",
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
      <path
        d="M4 10h12M10 4l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 14 14" fill="none" className="w-3 h-3 shrink-0">
      <path
        d="M2 7l3.5 3.5L12 3"
        stroke="#00529b"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FacultyPage() {
  return (
    <div
      className="w-full min-h-screen bg-white text-gray-900"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
      `}</style>

      {/* =====================================================
          1. HERO
      ====================================================== */}
      <section className="max-w-[1400px] mx-auto px-2 sm:px-4 pt-3">
        <div className="relative w-full min-h-[560px] md:min-h-[700px] rounded-[28px] md:rounded-[40px] overflow-hidden flex flex-col justify-between pb-12 md:pb-16">
          <img
            src="/img4.png"
            alt="Phoenix Institute faculty"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20" />

          <div className="relative z-30 w-full p-3 sm:p-5">
            <Navbar />
          </div>

          <div className="relative z-10 px-6 md:px-14">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white">
                Faculty & Trainers
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00529b]/80 backdrop-blur-md text-xs font-semibold text-white">
                Industry Experts
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white">
                Student Focused
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] tracking-tight max-w-4xl mb-5"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              Meet the people
              <br />
              behind your journey
            </h1>

            <p className="text-white/70 text-sm md:text-base max-w-xl leading-relaxed mb-8">
              Learn from experienced aviation and hospitality professionals
              dedicated to building confident, skilled, and industry-ready
              candidates.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#faculty"
                className="no-underline inline-flex items-center gap-2.5 bg-[#9C1726] text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg"
              >
                Meet our faculty
                <ArrowIcon />
              </a>

              <Link
                to="/contact"
                className="no-underline inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-all duration-200"
              >
                Talk to our team
              </Link>
            </div>

            <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-white/15">
              {[
                ["6+", "Expert trainers"],
                ["50+", "Years combined experience"],
                ["8", "Core teaching areas"],
                ["1", "Student-first approach"],
              ].map(([value, label]) => (
                <div key={label}>
                  <div
                    className="text-white font-semibold text-lg"
                    style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                  >
                    {value}
                  </div>
                  <div className="text-white/50 text-xs mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          2. INTRO
      ====================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00529b]" />
              <span className="text-sm font-medium text-[#00529b]">
                Our faculty
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-[1.1] tracking-tight mb-5"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              Experience meets education
            </h2>

            <p className="text-gray-500 text-sm leading-relaxed max-w-xl mb-6">
              At Phoenix Institute of Aviation & Hospitality, our faculty
              combines classroom expertise with practical industry knowledge.
              Every trainer is focused on helping students understand the
              profession, develop confidence, and prepare for the workplace.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {teachingAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2.5 bg-[#f6f8fa] border border-gray-200 rounded-xl px-3.5 py-2.5"
                >
                  <span className="w-5 h-5 rounded-full bg-[#00529b]/10 flex items-center justify-center">
                    <CheckIcon />
                  </span>
                  <span className="text-xs font-medium text-gray-700">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="/img5.jpeg"
                alt="Faculty training students"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          3. FACULTY LIST
      ====================================================== */}
      <section id="faculty" className="bg-[#f6f8fa] border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 md:py-20">
          <div className="border-b border-gray-200 pb-8 mb-10 grid md:grid-cols-[1fr_auto] gap-6 items-end">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f05123]" />
                <span className="text-sm font-medium text-[#f05123]">
                  Meet the team
                </span>
              </div>

              <h2
                className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                Our faculty & trainers
              </h2>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              A team built around aviation knowledge, practical training,
              communication, and career development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {faculty.map((member) => (
              <article
                key={member.name}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[4/4.3] overflow-hidden bg-gray-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute top-4 left-4">
                    <span
                      className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-white/90"
                      style={{ color: member.accent }}
                    >
                      {member.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4">
                    <div className="text-white/60 text-xs font-medium">
                      {member.experience} industry experience
                    </div>
                  </div>

                  {/* Fallback initials remain visible if the image is absent */}
                  <div
                    className="absolute inset-0 -z-0 flex items-center justify-center text-5xl font-semibold"
                    style={{
                      background: `linear-gradient(145deg, ${member.accent}18, #e9eef3)`,
                      color: member.accent,
                    }}
                  >
                    {member.initials}
                  </div>
                </div>

                <div className="p-6">
                  <h3
                    className="text-lg font-semibold text-gray-900"
                    style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                  >
                    {member.name}
                  </h3>

                  <p
                    className="text-xs font-semibold mt-1 mb-3"
                    style={{ color: member.accent }}
                  >
                    {member.role}
                  </p>

                  <p className="text-xs text-gray-500 leading-relaxed">
                    {member.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-dashed border-gray-200 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">
                      Faculty
                    </span>
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center"
                      style={{
                        background: `${member.accent}10`,
                        color: member.accent,
                      }}
                    >
                      <ArrowIcon />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          4. WHY OUR FACULTY
      ====================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 md:py-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00529b]" />
            <span className="text-sm font-medium text-[#00529b]">
              What makes us different
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight"
            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
          >
            More than classroom teaching
          </h2>

          <p className="text-gray-500 text-sm sm:text-base mt-3 leading-relaxed">
            Our trainers focus on the complete transition from student to
            confident aviation professional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {expertise.map((item) => (
            <div
              key={item.number}
              className="relative bg-white border border-gray-200 rounded-2xl p-6 md:p-7 overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-300"
            >
              <div
                className="absolute top-0 left-0 w-1 h-full"
                style={{ background: item.accent }}
              />

              <div className="flex items-start gap-5">
                <div
                  className="text-4xl font-semibold leading-none shrink-0"
                  style={{
                    color: item.accent,
                    opacity: 0.2,
                    fontFamily: '"Space Grotesk", sans-serif',
                  }}
                >
                  {item.number}
                </div>

                <div>
                  <h3
                    className="text-lg font-semibold text-gray-900 mb-2"
                    style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                  >
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          5. STUDENT-FIRST BANNER
      ====================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-4">
        <div className="relative bg-[#04213a] rounded-2xl overflow-hidden p-8 sm:p-10 md:p-12">
          <div
            className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at right, rgba(59,130,246,0.15), transparent 70%)",
            }}
          />

          <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <span className="inline-flex px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-sky-300 mb-4">
                Student-first approach
              </span>

              <h2
                className="text-2xl sm:text-3xl font-semibold text-white leading-snug mb-3 max-w-2xl"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                Learn from people who understand the industry and understand
                your journey.
              </h2>

              <p className="text-white/60 text-sm leading-relaxed max-w-2xl">
                From your first classroom session to your interview day, our
                faculty helps you develop the knowledge, confidence, and
                professional presence needed to move forward.
              </p>
            </div>

            <Link
              to="/courses/aviation-hospitality-travel-management"
              className="no-underline inline-flex items-center justify-center gap-2 bg-white text-[#04213a] text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-gray-100 transition-all duration-200"
            >
              Explore our courses
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
