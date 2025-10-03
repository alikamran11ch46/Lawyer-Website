'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface NewsTickerProps {
  news?: string;
  speed?: number;
  bgColor?: string;
}

export default function NewsTicker({
  news = "تازہ ترین خبر: بار کونسل کی اہم اطلاع - نئے اراکین کی رجسٹریشن جاری ہے",
  speed = 20,
  bgColor = "bg-red-600"
}: NewsTickerProps) {
  const [isClosed, setIsClosed] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isClosed) {
      setIsAnimating(true);
    }
  }, [isClosed]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => setIsClosed(true), 300);
  };

  if (isClosed) return null;

  return (
    <div
      className={`${bgColor} text-white overflow-hidden relative transition-all duration-300 ${
        isAnimating ? 'h-10' : 'h-0'
      }`}
      style={{
        transform: isAnimating ? 'translateY(0)' : 'translateY(-100%)',
      }}
    >
      <div className="flex items-center h-full max-w-7xl mx-auto px-4">
        <div className="flex-1 overflow-hidden relative">
          <div
            className="whitespace-nowrap inline-block animate-ticker"
            style={{
              animationDuration: `${speed}s`,
            }}
          >
            <span className="text-sm md:text-base font-medium px-4">
              {news}
            </span>
          </div>
        </div>

        <button
          onClick={handleClose}
          className="ml-4 p-1 hover:bg-white/20 rounded transition-colors flex-shrink-0"
          aria-label="Close ticker"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <style jsx>{`
        @keyframes ticker {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-ticker {
          animation: ticker linear infinite;
        }
      `}</style>
    </div>
  );
}
