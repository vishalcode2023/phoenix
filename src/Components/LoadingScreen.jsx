import { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 600);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Stage indicator text for a tailored luxury flight feel
  const getStageText = () => {
    if (progress < 35) return "Initializing Systems";
    if (progress < 75) return "Preparing Flight Experience";
    return "Ready For Boarding";
  };

  return (
    <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white text-slate-900 select-none overflow-hidden">
      {/* Subtle Ambient Radial Glow */}
      <div className="pointer-events-none absolute h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[120px] animate-pulse" />

      {/* Elegant Radial Dot Overlay for Depth */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px] opacity-30" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo Container with Soft Halo */}
        <div className="relative group">
          <div className="absolute -inset-4 rounded-full bg-amber-500/15 blur-2xl transition-all duration-700 group-hover:bg-amber-500/25" />
          <img
            src="/logo.png"
            alt="Phoenix Institute of Aviation & Hospitality"
            className="relative h-28 w-28 object-contain filter drop-shadow-[0_12px_24px_rgba(217,119,6,0.12)] transition-transform duration-700 ease-out hover:scale-105"
          />
        </div>

        {/* Live Status Indicator & Dynamic Text */}
        <div className="mt-8 flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-600" />
          </span>
          <p className="text-[10px] font-semibold tracking-[0.35em] text-amber-700/80 uppercase transition-all duration-300">
            {getStageText()}
          </p>
        </div>

        {/* Crisp Monospace Percentage */}
        <div className="mt-2 flex items-baseline gap-1 font-mono">
          <span className="text-5xl font-extralight tracking-tighter text-slate-900 tabular-nums">
            {progress}
          </span>
          <span className="text-xs font-semibold text-amber-600">%</span>
        </div>

        {/* Ultra-Thin Precision Progress Bar */}
        <div className="relative mt-5 h-[3px] w-64 overflow-hidden rounded-full bg-slate-100 ring-1 ring-slate-200/80">
          <div
            className="h-full rounded-full bg-gradient-to-r from-amber-700 via-amber-500 to-amber-300 transition-all duration-150 ease-out shadow-[0_0_8px_rgba(217,119,6,0.4)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Subtitle Branding */}
        <p className="mt-8 text-[9px] font-medium tracking-[0.4em] uppercase text-slate-400/80">
          Phoenix Aviation & Hospitality
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;