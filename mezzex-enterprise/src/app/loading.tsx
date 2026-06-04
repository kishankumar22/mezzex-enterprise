'use client';

export default function Loading() {
  return (
    <>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0f172a]">
        {/* Glow */}
        <div className="absolute h-40 w-40 rounded-full bg-[#2f5a84]/30 blur-3xl animate-pulse" />

        {/* Loader */}
        <div className="relative flex items-center justify-center">
          {/* Outer Ring */}
          <div className="h-24 w-24 rounded-full border-4 border-[#2f5a84]/30 border-t-[#38bdf8] animate-spin" />

          {/* Inner Ring */}
          <div className="absolute h-16 w-16 rounded-full border-4 border-[#ffffff20] border-b-white animate-[spin_1.2s_linear_infinite]" />

          {/* Center Dot */}
          <div className="absolute h-4 w-4 rounded-full bg-white animate-ping" />
        </div>

        {/* Bottom Text */}
        <div className="absolute bottom-20 text-center">
          <h2 className="text-xl font-semibold tracking-[6px] text-white">
            MEZZEX
          </h2>

          <p className="mt-2 text-sm text-gray-300 animate-pulse">
            Loading Experience...
          </p>
        </div>
      </div>

      <style jsx global>{`
        .fixed {
          animation: hideLoader 5s forwards;
        }

        @keyframes hideLoader {
          0% {
            opacity: 1;
            visibility: visible;
          }

          90% {
            opacity: 1;
          }

          100% {
            opacity: 0;
            visibility: hidden;
          }
        }
      `}</style>
    </>
  );
}