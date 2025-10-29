import { useState, useEffect } from 'react';

interface LoadingProps {
  onLoadingComplete?: () => void;
}

export default function Loading({ onLoadingComplete }: LoadingProps) {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    // Fade in
    const fadeInTimer = setTimeout(() => {
      setOpacity(1);
    }, 100);

    // Call onLoadingComplete after fade-in is done
    const completeTimer = setTimeout(() => {
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, 2000); // Total duration: 2 seconds

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(completeTimer);
    };
  }, [onLoadingComplete]);

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black relative">
      <h1
        className="text-white text-4xl md:text-6xl font-bold"
        style={{
          opacity: opacity,
          transition: 'opacity 1.5s ease-in-out'
        }}
      >RANGE OF VIEW
      </h1>
    </div>
  );
}