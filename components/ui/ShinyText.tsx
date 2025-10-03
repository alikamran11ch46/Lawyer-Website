'use client';

import React, { CSSProperties, useState, useEffect } from 'react';

interface ShinyTextProps {
  text?: string;
  texts?: string[];
  interval?: number;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

export default function ShinyText({
  text,
  texts,
  interval = 15000,
  disabled = false,
  speed = 3,
  className = '',
}: ShinyTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayTexts = texts || (text ? [text] : []);

  useEffect(() => {
    if (displayTexts.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayTexts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [displayTexts.length, interval]);

  const animationDuration = `${speed}s`;

  const shineStyle: CSSProperties = {
    background: disabled
      ? 'inherit'
      : 'linear-gradient(110deg, #D4AF37 33%, #FFD700 50%, #D4AF37 66%)',
    WebkitBackgroundClip: disabled ? 'unset' : 'text',
    backgroundClip: disabled ? 'unset' : 'text',
    WebkitTextFillColor: disabled ? 'inherit' : 'transparent',
    backgroundSize: '200% 100%',
    animation: disabled ? 'none' : `shine ${animationDuration} linear infinite`,
  };

  return (
    <>
      <style jsx>{`
        @keyframes shine {
          0% {
            background-position: 200% center;
          }
          100% {
            background-position: -200% center;
          }
        }
      `}</style>
      <span className={className} style={shineStyle}>
        {displayTexts[currentIndex]}
      </span>
    </>
  );
}
