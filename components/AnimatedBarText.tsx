'use client'
import { useEffect, useState } from 'react';

export default function AnimatedBarText() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`text-content ${isVisible ? 'animate-in' : ''}`}>
      <div className="font-bold text-2xl text-black">
        District Bar Association
      </div>
      <div className="text-base font-bold text-black">
        Tando Muhammad Khan
      </div>

      <style jsx>{`
        .text-content {
          opacity: 0;
          transform: translateX(-30px);
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .text-content.animate-in {
          opacity: 1;
          transform: translateX(0);
        }

        @keyframes shimmer {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        /* Add golden glow effect */
        .font-bold {
          text-shadow: 0 0 10px rgba(255, 215, 0, 0.2);
        }
      `}</style>
    </div>
  );
}
