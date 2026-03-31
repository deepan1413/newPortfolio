import { Html, useProgress } from "@react-three/drei";
import { useState, useEffect, useRef } from "react";
import "./Loader.css";

export default function Loader() {
  const { progress } = useProgress();
  const [displayProgress, setDisplayProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);
  const hasReached100 = useRef(false);

  useEffect(() => {
    if (progress > displayProgress) {
      setDisplayProgress(progress);
    }
  }, [progress, displayProgress]);

  // When progress hits 100%, wait a bit for external assets then fade out
  useEffect(() => {
    if (displayProgress >= 100 && !hasReached100.current) {
      hasReached100.current = true;
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
