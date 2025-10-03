'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 seconds

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      <div className="relative">
        {/* Animated Justice Scales */}
        <svg
          width="120"
          height="120"
          viewBox="0 0 100 100"
          className="animate-bounce"
        >
          {/* Scale Stand */}
          <line
            x1="50"
            y1="20"
            x2="50"
            y2="70"
            stroke="#D4AF37"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* Base */}
          <line
            x1="30"
            y1="70"
            x2="70"
            y2="70"
            stroke="#D4AF37"
            strokeWidth="8"
            strokeLinecap="round"
          />

          {/* Balance Beam */}
          <line
            x1="20"
            y1="30"
            x2="80"
            y2="30"
            stroke="#D4AF37"
            strokeWidth="5"
            strokeLinecap="round"
            className="animate-[swing_1s_ease-in-out_infinite]"
          />

          {/* Left Pan */}
          <path
            d="M 15 35 Q 20 40, 25 35"
            stroke="#D4AF37"
            strokeWidth="4"
            fill="none"
            className="animate-[swing_1s_ease-in-out_infinite]"
          />
          <line x1="20" y1="30" x2="20" y2="35" stroke="#D4AF37" strokeWidth="3" />

          {/* Right Pan */}
          <path
            d="M 75 35 Q 80 40, 85 35"
            stroke="#D4AF37"
            strokeWidth="4"
            fill="none"
            className="animate-[swing_1s_ease-in-out_infinite]"
          />
          <line x1="80" y1="30" x2="80" y2="35" stroke="#D4AF37" strokeWidth="3" />

          {/* Top Circle */}
          <circle cx="50" cy="20" r="5" fill="#D4AF37" />
        </svg>

        {/* Loading Text */}
        <p className="text-center mt-2 text-[#D4AF37] font-bold text-sm animate-pulse">
          Loading...
        </p>
      </div>

      <style jsx>{`
        @keyframes swing {
          0%, 100% {
            transform: rotate(-2deg);
          }
          50% {
            transform: rotate(2deg);
          }
        }
      `}</style>
    </div>
  );
}
