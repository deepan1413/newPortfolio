import { Html, useProgress } from "@react-three/drei";
import { useState, useEffect } from "react";
import "./Loader.css";

export default function Loader() {
  const { progress } = useProgress();
  const [displayProgress, setDisplayProgress] = useState(0);

  // 🔹 Prevent progress from going backward
  useEffect(() => {
    if (progress > displayProgress) {
      setDisplayProgress(progress);
    }
  }, [progress, displayProgress]);

  return (
    <Html fullscreen>
      <div className="carte">
        <img className="ship" src="./Textures/logo.png" alt="logo" />

        <p className="title">Loading... {Math.floor(displayProgress)}%</p>
        <p className="subtitle">Deepan's Courage Theme Portfolio</p>

        {/* Linear Progress Bar */}
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
