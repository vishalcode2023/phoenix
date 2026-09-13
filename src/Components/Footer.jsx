import React from "react";

// Lightweight SVG Icons
const Icon = ({ type, className = "w-4 h-4" }) => {
  const icons = {
    linkedin: (
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
    ),
    instagram: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
    facebook: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    ),
    twitter: (
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    ),
    pin: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
    phone: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
    mail: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 6-10 7L2 6" />
      </>
    ),
  };

  return (
    <svg
      className={`${className} fill-none stroke-current stroke-2`}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      {icons[type]}
    </svg>
  );
};

export default function Footer({
  bgImage = "/img1.png",
headlinePrefix = "Build Your Future",
headlineAccent = "in Aviation",
headlineSuffix = "",
  sub = "We are proud to offer top quality training courses that teach life skills and corporate skills, along with training and 1st job placement assistance in aviation & hospitality.",
  ctaText = "Enquire Now",
  ctaLink = "/contact",
  logo = "/logo.png",
  branches = [
    {
      label: "MYSORE (HQ)",
      address: "Address line 1, 5th Block, Mysore, Karnataka 570001",
    },
    {
      label: "BENGALURU BRANCH",
      address: "Address line 1, 11th Main Rd, Bengaluru, Karnataka 560041",
    },
  ],
  phones = ["+91 97314 32324", "+91 93806 79590"],
  emails = ["info@phoenixacademy.com", "admissions@phoenixacademy.com"],
  socials = ["facebook", "instagram", "twitter", "linkedin"],
}) {
  return (
    <div className="w-full px-2 sm:px-4 py-2">
      <footer
        className="relative w-full min-h-[600px] rounded-[32px] md:rounded-[44px] overflow-hidden shadow-sm bg-slate-900"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Inter:wght@400;500;600;700&display=swap');
        `}</style>

        {/* Background image (plain <img> so load errors are visible / debuggable) */}
        <img
          src={bgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            console.error("Footer background image failed to load:", bgImage);
          }}
        />

        {/* Overlay for readability */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(5,15,30,0.55) 0%, rgba(5,15,30,0.35) 35%, rgba(5,15,30,0.6) 70%, rgba(5,15,30,0.85) 100%)",
          }}
        />

        {/* Top content: headline + CTA */}
        <div className="relative z-10 pt-16 pb-10 px-6 md:px-16 text-center">
          <h2
            className="m-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-tight drop-shadow-md"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            {headlinePrefix}{" "}
            <span className="italic">{headlineAccent}</span> {headlineSuffix}
          </h2>

          {sub && (
            <p className="mt-5 mb-0 text-sm sm:text-base text-white/85 max-w-2xl mx-auto leading-relaxed">
              {sub}
            </p>
          )}

          <a
            href={ctaLink}
            className="mt-8 inline-flex items-center justify-center text-sm font-semibold px-8 py-3.5 rounded-full text-white bg-[#9C1726]  transition-all duration-200 shadow-lg shadow-orange-900/20 hover:shadow-orange-900/30 no-underline"
          >
            {ctaText}
          </a>
        </div>

        {/* Bottom dark glass contact card */}
        <div className="relative z-10 px-4 sm:px-8 md:px-12 pb-8">
          <div className="bg-slate-950/70 backdrop-blur-md border border-white/10 rounded-[24px] p-6 sm:p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Logo */}
              <div className="md:col-span-3 flex md:justify-start justify-center">
                <a href="#" className="no-underline inline-block">
                  <img
                    src={logo}
                    alt="Logo"
                    className="h-30 w-auto object-contain"
                  />
                </a>
              </div>

              {/* Branches */}
              <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {branches.map((branch) => (
                  <div key={branch.label} className="space-y-2">
                    <div className="flex items-center gap-2 text-white text-xs font-semibold tracking-wide">
                      <Icon type="pin" className="w-3.5 h-3.5 text-[#f05123]" />
                      {branch.label}
                    </div>
                    <p className="m-0 text-slate-300 text-xs sm:text-[13px] leading-relaxed">
                      {branch.address}
                    </p>
                  </div>
                ))}
              </div>

              {/* Get in touch */}
              <div className="md:col-span-4 space-y-3">
                <h4 className="m-0 text-white text-xs font-semibold tracking-wide">
                  GET IN TOUCH
                </h4>

                <div className="space-y-1">
                  {phones.map((phone) => (
                    <div
                      key={phone}
                      className="flex items-center gap-2 text-slate-300 text-xs sm:text-[13px]"
                    >
                      <Icon type="phone" className="w-3.5 h-3.5 text-[#f05123] flex-shrink-0" />
                      {phone}
                    </div>
                  ))}
                </div>

                <div className="space-y-1">
                  {emails.map((email) => (
                    <div
                      key={email}
                      className="flex items-center gap-2 text-slate-300 text-xs sm:text-[13px]"
                    >
                      <Icon type="mail" className="w-3.5 h-3.5 text-[#f05123] flex-shrink-0" />
                      {email}
                    </div>
                  ))}
                </div>

                {/* Socials */}
                <div className="flex items-center gap-2 pt-2">
                  {socials.map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      aria-label={platform}
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#f05123] border border-white/15 flex items-center justify-center text-white transition-all duration-300"
                    >
                      <Icon type={platform} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom copyright line */}
          <p className="text-center text-white/60 text-[11px] mt-5 mb-0">
            © {new Date().getFullYear()} Phoenix Institute of Aviation &
            Hospitality. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}