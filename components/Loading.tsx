import { useState, useRef, useEffect } from 'react';

interface LoadingProps {
  onLoadingComplete?: () => void;
}

export default function Loading({ onLoadingComplete }: LoadingProps) {
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Ensure video starts playing
      video.play().catch(console.error);
    }
  }, []);

  const handleVideoEnd = () => {
    setIsVideoEnded(true);
    // Call the callback function if provided
    if (onLoadingComplete) {
      onLoadingComplete();
    }
  };

  const handleVideoError = () => {
    console.error('Video failed to load');
    // Fallback to showing the text loading
    setIsVideoEnded(true);
    if (onLoadingComplete) {
      onLoadingComplete();
    }
  };

  // If video has ended, don't render anything (let parent show main content)
  if (isVideoEnded) {
    return null;
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black relative">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        onError={handleVideoError}
      >
        <source src="/loading.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold animate-pulse">
            RANGE OF VIEW
          </h1>
        </div>
      </video>
    </div>
  );
}