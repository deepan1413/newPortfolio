import { Analytics } from "@vercel/analytics/react";
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";

import {
  Stars,
  Float,
  Text,
  ScrollControls,
  OrbitControls,
  useGLTF,Html
} from "@react-three/drei";
import "./index.css";
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';

import App from "./App.jsx";
import Loader from "./components/Loader.jsx";

const isMobile = () => {
  return window.innerWidth <= 1000 && window.innerHeight <= 800;
};

const fovForMobile = 100;
const fovForPc = 45;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Canvas
      style={{ background: "black" }}
      camera={{
        fov: isMobile() ? fovForMobile : fovForPc,
        near: 0.1,
        far: 100,
        position: [-22.788208029999996, 3.204538337500003, 26.40998746],
        //  position: [ -23.234795944690745, 3.2570048661493995, 26.918081948657154],
      }}
    >
      <Suspense fallback={<Loader />}>
      {/* <Loader/> */}
      <App />
      </Suspense>
      {/* <Analytics/> */}
       
    </Canvas>
  </StrictMode>
);
/*
-0.39235152254446615, _y: -0.2429883289807452, _z: -0.09923653569102923
*/
