'use client'

import { useState, useEffect } from 'react';

interface TextTypeProps {
  text: string[];
  typingSpeed?: number;
  pauseDuration?: number;
  showCursor?: boolean;
  cursorCharacter?: string;
}

export default function TextType({
  text,
  typingSpeed = 30,
  pauseDuration = 60000,
  showCursor = true,
  cursorCharacter = '|'
}: TextTypeProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setDisplayText('');
        setCharIndex(0);
        setCurrentIndex((currentIndex + 1) % text.length);
      }, pauseDuration);
      return () => clearTimeout(pauseTimer);
    }

    const currentText = text[currentIndex];

    if (charIndex < currentText.length) {
      const typingTimer = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(typingTimer);
    } else if (charIndex === currentText.length) {
      setIsPaused(true);
    }
  }, [charIndex, currentIndex, isPaused, text, typingSpeed, pauseDuration]);

  return (
    <span>
      {displayText}
      {showCursor && <span className="animate-pulse">{cursorCharacter}</span>}
    </span>
  );
}
