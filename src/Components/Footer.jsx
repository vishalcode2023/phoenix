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
      aria-hidden="true"
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
      address:
        "Diyan Complex, shop No.23/E 1,2nd floor, opp. KHB Complex, Kuvempu Nagara, Mysuru, Karnataka 570023",
    },
  ],

  phones = ["+91 98869 22036"],

  emails = ["infophoenixacadem@gmail.com"],

  socials = ["facebook", "instagram", "twitter", "linkedin"],
}) {
  return (
    <div className="w-full px-2 sm:px-4 py-2">
      <footer
        className="
          relative
          w-full
          min-h-[600px]
          overflow-hidden
          rounded-[28px]
          sm:rounded-[34px]
          md:rounded-[44px]
          bg-slate-900
          shadow-sm
        "
        style={{
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/* =====================================================
            GOOGLE FONTS
        ====================================================== */}
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Inter:wght@400;500;600;700&display=swap');
          `}
        </style>

        {/* =====================================================
            BACKGROUND IMAGE
        ====================================================== */}
        <img
          src={bgImage}
          alt=""
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
          "
          onError={(e) => {
            console.error("Footer background image failed to load:", bgImage);

            e.currentTarget.style.display = "none";
          }}
        />

        {/* =====================================================
            DARK OVERLAY
        ====================================================== */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(5,15,30,0.55) 0%, rgba(5,15,30,0.35) 35%, rgba(5,15,30,0.60) 70%, rgba(5,15,30,0.90) 100%)",
          }}
        />

        {/* =====================================================
            TOP CONTENT
        ====================================================== */}
        <div
          className="
            relative
            z-10
            px-5
            sm:px-8
            md:px-16
            pt-14
            sm:pt-16
            md:pt-20
            pb-10
            text-center
          "
        >
          {/* Heading */}
          <h2
            className="
              m-0
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-normal
              leading-tight
              text-white
              drop-shadow-md
            "
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
            }}
          >
            {headlinePrefix} <span className="italic">{headlineAccent}</span>{" "}
            {headlineSuffix}
          </h2>

          {/* Description */}
          {sub && (
            <p
              className="
                max-w-2xl
                mx-auto
                mt-5
                mb-0
                text-sm
                sm:text-base
                leading-relaxed
                text-white/85
              "
            >
              {sub}
            </p>
          )}

          {/* CTA */}
          <a
            href={ctaLink}
            className="
              mt-8
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-[#9C1726]
              border
              border-white
              px-8
              py-3.5
              text-sm
              font-semibold
              text-white
              no-underline
              shadow-lg
              shadow-black/20
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-gray-100
              hover:text-[#9C1726]
              hover:shadow-xl
            "
          >
            {ctaText}
          </a>
        </div>

        {/* =====================================================
            CONTACT CARD
        ====================================================== */}
        <div
          className="
            relative
            z-10
            px-4
            sm:px-8
            md:px-12
            pb-8
          "
        >
          <div
            className="
              rounded-[22px]
              sm:rounded-[26px]
              border
              border-white/10
              bg-slate-950/70
              p-6
              sm:p-8
              md:p-10
              backdrop-blur-md
            "
          >
            <div
              className="
                grid
                grid-cols-1
                gap-10
                md:grid-cols-12
                md:gap-8
              "
            >
              {/* =================================================
                  LOGO
              ================================================== */}
              <div
                className="
                  md:col-span-3
                  flex
                  justify-center
                  md:justify-start
                "
              >
                <a
                  href="/"
                  className="inline-block no-underline"
                  aria-label="Phoenix Institute of Aviation & Hospitality"
                >
                  <img
                    src={logo}
                    alt="Phoenix Institute of Aviation & Hospitality"
                    className="
                      h-[90px]
                      sm:h-[105px]
                      md:h-[120px]
                      w-auto
                      max-w-[220px]
                      object-contain
                    "
                  />
                </a>
              </div>

              {/* =================================================
                  BRANCHES
              ================================================== */}
              <div
                className="
                  md:col-span-5
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  gap-7
                "
              >
                {branches.map((branch) => (
                  <div key={branch.label} className="space-y-2">
                    {/* Branch title */}
                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        text-xs
                        font-semibold
                        tracking-wide
                        text-white
                      "
                    >
                      <Icon
                        type="pin"
                        className="
                          h-4
                          w-4
                          flex-shrink-0
                          text-[#f05123]
                        "
                      />

                      <span>{branch.label}</span>
                    </div>

                    {/* Address */}
                    <p
                      className="
                        m-0
                        text-xs
                        sm:text-[13px]
                        leading-relaxed
                        text-slate-300
                      "
                    >
                      {branch.address}
                    </p>
                  </div>
                ))}
              </div>

              {/* =================================================
                  GET IN TOUCH
              ================================================== */}
              <div
                className="
                  md:col-span-4
                  space-y-4
                "
              >
                {/* Heading */}
                <h4
                  className="
                    m-0
                    text-xs
                    font-semibold
                    tracking-[0.12em]
                    text-white
                  "
                >
                  GET IN TOUCH
                </h4>

                {/* Phones */}
                <div className="space-y-2">
                  {phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s+/g, "")}`}
                      className="
                        flex
                        items-center
                        gap-2
                        text-xs
                        sm:text-[13px]
                        text-slate-300
                        no-underline
                        transition-colors
                        hover:text-white
                      "
                    >
                      <Icon
                        type="phone"
                        className="
                          h-4
                          w-4
                          flex-shrink-0
                          text-[#f05123]
                        "
                      />

                      <span>{phone}</span>
                    </a>
                  ))}
                </div>

                {/* Emails */}
                <div className="space-y-2">
                  {emails.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="
                        flex
                        items-center
                        gap-2
                        text-xs
                        sm:text-[13px]
                        text-slate-300
                        no-underline
                        break-all
                        transition-colors
                        hover:text-white
                      "
                    >
                      <Icon
                        type="mail"
                        className="
                          h-4
                          w-4
                          flex-shrink-0
                          text-[#f05123]
                        "
                      />

                      <span>{email}</span>
                    </a>
                  ))}
                </div>

                {/* =================================================
                    SOCIAL MEDIA
                ================================================== */}
                <div className="flex items-center gap-2 pt-1">
                  {socials.map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      aria-label={platform}
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/15
                        bg-white/10
                        text-white
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-[#f05123]
                        hover:bg-[#f05123]
                      "
                    >
                      <Icon type={platform} className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              COPYRIGHT & DEVELOPER
          ====================================================== */}
          <div className="mt-5 text-center space-y-1">
            {/* Copyright */}
            <p
              className="
                m-0
                text-[11px]
                leading-relaxed
                text-white/60
              "
            >
              © {new Date().getFullYear()} Phoenix Institute of Aviation &
              Hospitality. All rights reserved.
            </p>

            {/* Developed By */}
            <p
              className="
                m-0
                text-[11px]
                leading-relaxed
                text-white/50
              "
            >
              Developed by{" "}
              <a
                href="https://koworks.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-white/70
                  font-semibold
                  no-underline
                  hover:text-white
                  transition-colors
                  duration-200
                "
              >
                Koworks
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
