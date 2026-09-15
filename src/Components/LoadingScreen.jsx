import { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);

          setTimeout(() => {
            onComplete();
          }, 500);

          return 100;
        }

        return prev + 2;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="Phoenix Institute of Aviation & Hospitality"
          className="w-32 h-32 object-contain"
        />

        {/* Percentage */}
        <p className="mt-8 text-3xl font-semibold text-slate-800">
          {progress}%
        </p>

        {/* Progress Bar */}
        <div className="mt-4 w-52 h-1 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-slate-800 transition-all duration-100"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        {/* Loading Text */}
        <p className="mt-4 text-xs tracking-[0.3em] uppercase text-slate-400">
          Loading
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
