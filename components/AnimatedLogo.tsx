'use client'
import { useEffect, useRef, useState } from 'react';

export default function AnimatedLogo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldPlay, setShouldPlay] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      // Pause when video reaches end
      if (video.currentTime >= video.duration - 0.1) {
        video.pause();
        setShouldPlay(false);

        // Resume after 5 seconds (more time to read text)
        setTimeout(() => {
          setShouldPlay(true);
          video.currentTime = 0;
          video.play().catch(err => console.log('Video play failed:', err));
        }, 5000);
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.play().catch(err => console.log('Video autoplay failed:', err));

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  return (
    <div className="relative w-20 h-20 flex items-center justify-center overflow-hidden flex-shrink-0">
      <video
        ref={videoRef}
        muted
        playsInline
        className="w-full h-full"
        style={{
          objectFit: 'contain',
        }}
      >
        <source src="/logo-animated-new.mp4" type="video/mp4" />
      </video>

      {/* White overlay to hide the line on right side */}
      <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-white"></div>

      {/* White overlay to hide the line on bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white"></div>

      <style jsx>{`
        video {
          background: transparent;
        }
      `}</style>
    </div>
  );
}
