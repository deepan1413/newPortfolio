import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Stars,
  Float,
  Text,
  ScrollControls,
  OrbitControls,
  useGLTF,
  Sky,
} from "@react-three/drei";
import { Environment } from "@react-three/drei";
import { Scene } from "three";
// import KameHouse from "../public/Model/KameHouse";
import CourageHouse from "../public/Model/CourageHouse";
import Ocean from "../public/Model/Ocean";
import { Cloud, Clouds } from "@react-three/drei";

import MyCameraScroll from "./MyCameraControll";
import ScrollHelper from "./components/Scrollhelper";
export default function App() {
  const { nodes } = useGLTF("./Model/scene.glb");
  return (
    <>
      <Sky />
      <Environment preset="city" />

      <directionalLight position={[10, 2, 3]} intensity={5} />
      <directionalLight position={[-10, -2, -3]} intensity={5} />
      <Clouds>
        {/* <Cloud position={[0, 10, 0]} scale={1} opacity={0.5} />
        <Cloud position={[1, 10, 0]} scale={1} opacity={0.5} />
        <Cloud segments={40} bounds={[10, 2, 2]} volume={10} color="orange" />
        <Cloud seed={1} scale={2} volume={5} color="hotpink" fade={100} /> */}
      </Clouds>

      {/* <Float rotationIntensity={1}>
        <Text
          position-y={18}
          rotation-y={0.48 * Math.PI}
          curveRadius={-50}
          fontSize={5}
        >
          {`    Deepan\nKameHouse`}
        </Text>
      </Float> */}
      <CourageHouse />
      {/* <KameHouse /> */}

      <ScrollControls pages={10} damping={2}>
        <OrbitControls
          enableZoom={true}
          // onChange={(e) => {
          //   console.log("Camera Position:", e.target.object.position);
          //   console.log("Camera Rotation:", e.target.object.rotation);
          // }}
        />
        {/* <MyCameraScroll nodes={nodes} /> */}
      </ScrollControls>
      <ScrollHelper />
    </>
  );
}
/*
start position
_x
: 
-0.030211711039026746
_y
: 
-0.6134007351358661
_z
: 
-0.01739495678852457
*/
