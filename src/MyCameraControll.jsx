import { useLayoutEffect, useRef, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import {
  useScroll,
  Text,
  Text3D,
  useTexture,
  Billboard,
  RoundedBox,
} from "@react-three/drei";
import gsap from "gsap";

export default function MyCameraScroll(props) {
  const [progress, setProgress] = useState(1);
  const [opacity, setOpacity] = useState(0);
  const { camera } = useThree();
  const tlRef = useRef();
  const frontDoorRef = useRef();
  const windmillLeaf = useRef();
  const introTextRef = useRef();
  const welcomeTextRef = useRef();
  const collegeTextRef = useRef();
  const skillTextRef = useRef();
  const languagesTextRef = useRef();
  const projectsTextRef = useRef();
  const hobbiesTextRef = useRef();
  const quotesTextRef = useRef();
  const scroll = useScroll();

  // start position: [ -23.234795944690745, 3.2570048661493995, 26.918081948657154],

  useFrame((state, delta) => {
    tlRef.current.seek(scroll.offset * tlRef.current.duration());
  });
  useFrame(() => {
    if (windmillLeaf.current) {
      windmillLeaf.current.rotation.z -= 0.02;
    }
  });

  useLayoutEffect(() => {
    tlRef.current = gsap.timeline({ paused: true });
    //first position
    // -2.939923478216972, y: 1.1872855480563205, z: 4.116440804404311,
    //r -0.012440764314818395, _y: -0.2958413038911087, _z: -0.003627210232000859
    tlRef.current.to(camera.position, {
      duration: 1,
      x: -2.939923478216972,
      y: 1.1872855480563205,
      z: 4.116440804404311,
    });

    tlRef.current.to(
      camera.rotation,
      {
        x: -0.012440764314818395,
        y: -0.2958413038911087,
        z: -0.003627210232000859,
      },
      "<"
    );

    tlRef.current.to(welcomeTextRef.current.material, {
      opacity: 1,
    });
    //door open
    tlRef.current.to(
      frontDoorRef.current.rotation,
      {
        duration: 0.3,
        y: -Math.PI / 2,
      },
      "<"
    );
  }, [camera]);

  useThree(({ gl }) => {
    gl.setAnimationLoop(() => {
      if (tlRef.current) {
        tlRef.current.progress(scroll.offset);
      }
    });
  });

  return (
    <>
      <group
        ref={frontDoorRef}
        position={[-3.051, 1.155, -0.123]}
        scale={[2.27, 2.27, 3.446]}
      >
        <mesh geometry={props.nodes.frontDoor.geometry}>
          <meshStandardMaterial color="#2a9f7c" />
        </mesh>
      </group>
      <mesh
        ref={windmillLeaf}
        geometry={props.nodes.windmillLeaf.geometry}
        material={props.nodes.windmillLeaf.material}
        position={[-5.451, 11.01, -19.27]}
      ></mesh>
      //cube
      <mesh
        position={[-20.969403340083357, 2.939446891699828, 24.293568958663037]}
        rotation={[-0.1, Math.PI / 3.8, 0]}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
      <Text
        // -23.234795944690745, 3.2570048661493995, 26.918081948657154
        position={[-20.969403340083357, 2.939446891699828, 24.293568958663037]}
        //l-r  , t-down , f-b
        ref={welcomeTextRef}
        font="./fonts/Bangers.ttf"
        fontSize={0.2}
        rotation={[-0.1, Math.PI / 3.8, 0]}
        rotation-y={6}
        textAlign="center"
        anchorX="center"
        anchorY="middle"
        color="#2d1d04"
        material-opacity={1}
      >
        {"Hi, welcome\nThis is my courage themed portfolio"}
      </Text>
    </>
  );
}
