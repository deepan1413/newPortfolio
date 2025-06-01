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
import Model from "../public/Model/Model";

import { Cloud, Clouds } from "@react-three/drei";

import MyCameraScroll from "./MyCameraControll";
import ScrollHelper from "./components/Scrollhelper";
export default function App() {
  const { nodes } = useGLTF("./Model/model.glb");

  return (
    <>
      <Sky />
      <Environment preset="city" />

      <directionalLight position={[10, 2, 3]} intensity={5} />
      <directionalLight position={[-10, -2, -3]} intensity={5} />
      <Clouds>
        <Cloud
          position={[5, 13, -10]}
          bounds={[10, 2, 2]}
          scale={1}
          opacity={0.5}
        />
        <Cloud
          position={[4, 13, 10]}
          bounds={[10, 2, 2]}
          scale={1}
          opacity={0.5}
        />
        <Cloud
          position={[-6, 13, -10]}
          bounds={[10, 2, 2]}
          scale={1}
          opacity={0.5}
        />
      </Clouds>
     
      <Model />
      <ScrollControls pages={14}>
        {/* <OrbitControls
          enableZoom={true}
          onChange={(e) => {
            console.log("Camera Position:", e.target.object.position);
            console.log("Camera Rotation:", e.target.object.rotation);
          }}
        /> */}

        <MyCameraScroll nodes={nodes} />
      </ScrollControls>
      <ScrollHelper />
    </>
  );
}
