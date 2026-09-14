import Navbar from "../Router/Navbar";

export default function HeroSection({
  desktopVideo = "",
  mobileVideo = "",
  posterImage = "/img1.png",
  mobilePosterImage = "/img-mob.png", // ← new prop, falls back to posterImage
  tag = "MYSORE'S #1 AVIATION ACADEMY",
  headline = "Phoenix Academy, Mysore's 1st Aviation Institute",
  sub = "Pioneering cabin crew and hospitality training in Mysore with 100% placement support.",
  ctaText = "Begin Your Journey",
  ctaLink = "/contact",
}) {
  const mobPoster = mobilePosterImage || posterImage;

  return (
    <div className="w-full px-2 sm:px-4 py-2">
      <section className="relative w-full min-h-[680px] md:min-h-[705px] rounded-[32px] md:rounded-[44px] overflow-hidden shadow-sm flex items-end justify-center text-center p-6 pb-12 md:p-12 md:pb-16">
        {/* Floating Top Navbar Container */}
        <div className="absolute -top-1 md:-top-10 left-0 w-full z-30 p-2 sm:p-4 md:p-6">
          <Navbar />
        </div>

        {/* Desktop Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
          src={desktopVideo}
          poster={posterImage}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Mobile: static image fallback (always rendered behind video) */}
        <div
          className="absolute inset-0 w-full h-full block md:hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${mobPoster})` }}
        />

        {/* Mobile Video (renders on top of image, so image shows until video loads) */}
        {(mobileVideo || desktopVideo) && (
          <video
            className="absolute inset-0 w-full h-full object-cover block md:hidden"
            src={mobileVideo || desktopVideo}
            poster={mobPoster}
            autoPlay
            loop
            muted
            playsInline
          />
        )}

        {/* Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.85) 100%)",
          }}
        />

        {/* Content Stack */}
        <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto text-white">
          {tag && (
            <p className="m-0 mb-3 text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-white/90 drop-shadow-sm">
              {tag}
            </p>
          )}

          <h1
            className="m-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-white drop-shadow-md"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            {headline}
          </h1>

          {sub && (
            <p className="mt-4 mb-0 text-xs sm:text-sm md:text-base font-light text-white/90 max-w-lg leading-relaxed drop-shadow-sm">
              {sub}
            </p>
          )}

          <a
            href={ctaLink}
            className="mt-6 inline-flex items-center justify-center text-xs sm:text-sm font-medium px-8 py-3.5 rounded-full text-white bg-[#9C1726] hover:bg-gray-100 transition-all duration-200 shadow-md hover:shadow-lg no-underline"
          >
            {ctaText}
          </a>
        </div>
      </section>
    </div>
  );
}