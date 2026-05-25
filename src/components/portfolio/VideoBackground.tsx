import { useEffect, useState, useRef } from "react";

export function VideoBackground() {
  const [mounted, setMounted] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    setMounted(true);
    
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    if (!mounted || !isVisible || !videoRef.current) return;

    const playVideo = async () => {
      try {
        if (videoRef.current) {
          await videoRef.current.play();
        }
      } catch (err) {
        // Autoplay policy or browser block - safe fallback
      }
    };

    playVideo();
  }, [mounted, isVisible]);

  if (!mounted || !isVisible) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none transition-opacity duration-1000 overflow-hidden"
      style={{ zIndex: -20, opacity: loaded ? 0.12 : 0 }}
    >
      <video
        ref={videoRef}
        src="https://assets.mixkit.co/videos/preview/mixkit-circuit-board-pattern-loop-43034-large.mp4"
        loop
        muted
        playsInline
        autoPlay
        onLoadedData={() => setLoaded(true)}
        className="w-full h-full object-cover"
        style={{ filter: "saturate(0.4) contrast(1.1) brightness(0.6)" }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(circle at 50% 50%, transparent 20%, oklch(0.08 0.005 260) 95%)" }}
      />
    </div>
  );
}
