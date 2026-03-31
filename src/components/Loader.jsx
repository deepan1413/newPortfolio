import { Html, useProgress } from "@react-three/drei";
import { useState, useEffect, useRef, useCallback } from "react";
import "./Loader.css";

export default function Loader() {
  const { progress } = useProgress();
  const [displayProgress, setDisplayProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);
  const hasReached100 = useRef(false);
  const animFrameRef = useRef(null);
  const targetProgress = useRef(0);

  // Smooth animation towards target progress
  const animateProgress = useCallback(() => {
    setDisplayProgress((prev) => {
      const target = targetProgress.current;
      if (prev >= target) return prev;
      // Ease towards target: move 8% of remaining distance per frame
      const next = prev + Math.max((target - prev) * 0.08, 0.5);
      return Math.min(next, target);
    });
    animFrameRef.current = requestAnimationFrame(animateProgress);
  }, []);

  useEffect(() => {
    animFrameRef.current = requestAnimationFrame(animateProgress);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [animateProgress]);

  // Update target when real progress changes
  useEffect(() => {
    if (progress > targetProgress.current) {
      targetProgress.current = progress;
    }
  }, [progress]);

  // When display progress hits 100%, wait then fade out
  useEffect(() => {
    if (displayProgress >= 99.5 && !hasReached100.current) {
      hasReached100.current = true;
      setDisplayProgress(100);
      // Wait 1.5s for external textures, video, environment to finish
      const delayTimer = setTimeout(() => {
        setFadeOut(true);
        // After fade animation completes, hide entirely
        const fadeTimer = setTimeout(() => {
          setHidden(true);
        }, 800);
        return () => clearTimeout(fadeTimer);
      }, 1500);
      return () => clearTimeout(delayTimer);
    }
  }, [displayProgress]);

  if (hidden) return null;

  return (
    <Html fullscreen>
      <div className={`carte ${fadeOut ? "carte-fade-out" : ""}`}>
        <img className="ship" src="./Textures/logo.png" alt="logo" />

        <p className="title">
          {displayProgress >= 100
            ? "Almost ready..."
            : `Loading... ${Math.floor(displayProgress)}%`}
        </p>
        <p className="subtitle">Deepan's Courage Theme Portfolio</p>

        <div className="progress-container">
          <div
            className="progress-bar"
            style={{ width: `${displayProgress}%` }}
          ></div>
        </div>
      </div>
    </Html>
  );
}
