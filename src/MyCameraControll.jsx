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
import TVScreen from "./Model/TVScreen.jsx";


export default function MyCameraScroll(props) {
  const DoorTexture = useTexture("/Textures/DoorBaked.jpg");
  const [progress, setProgress] = useState(1);
  const [opacity, setOpacity] = useState(0);
  const { camera } = useThree();
  const tlRef = useRef();
  const reactTextRef = useRef();
  const doorRef = useRef();

  const welcomeTextRef = useRef();
  const aboutTextRef = useRef();
  const skillTextRef = useRef();
  const projectTextRef = useRef();
  const byeTextRef = useRef();

  const scroll = useScroll();

  useFrame((state, delta) => {
    tlRef.current.seek(scroll.offset * tlRef.current.duration());
  });

  useLayoutEffect(() => {
    // initial position & rotation
    camera.rotation.set(-0.030211711039026746,-0.6134007351358661
, -0.01739495678852457);
    camera.position.set( -23.234795944690745,  3.2570048661493995,  26.918081948657154);
  }, [camera]);

  useLayoutEffect(() => {
    tlRef.current = gsap.timeline({ paused: true });

    // Move to first position
    tlRef.current.to(camera.position, {
      duration: 2,
      x: 7.7,
      y: 2,
      z: -2.5,
    });

    // Open door animation
    tlRef.current.to(doorRef.current.rotation, {
      duration: 2,
      y: -Math.PI / 2,
    });
    //welcome text visible
    tlRef.current.to(
      welcomeTextRef.current.material,
      {
        opacity: 1,
      },
    
    );
    //middle house
    tlRef.current.to(camera.position, {
      duration: 2,
      x: 2.3,
      y: 1.6,
      z: -2.8,
    });
    //welcome text !visible

    tlRef.current.to(welcomeTextRef.current.material, {
      opacity: 0,
    });
    //
    tlRef.current.to(
      camera.rotation,
      {
        duration: 2,
        x: 0,
        y: Math.PI,
        z: 0,
      },
      "<"
    );
    

    tlRef.current.to(camera.position, {
      duration: 2,
      x: 3.5,
      y: 2,
      z: 1,
    });
    tlRef.current.to(camera.rotation, {
      duration: 2,
      z: 0,
      y: 1.5,
    });
    tlRef.current.to(camera.position, {
      duration: 2,
      x: 3,
      y: 3.0,
      z: 1.2,
    });

    tlRef.current.to(
      camera.rotation,
      {
        duration: 1,
        x: -1.19,
        y: 0.86,
        z: 1.08,
      },

      "<"
    );
    tlRef.current.to(
      skillTextRef.current.material,
      {
        opacity: 1,
      },
      "<"
    );
    tlRef.current.to(camera.position, {
      duration: 2,
      // x: 3.5,
      // y: 3,
      // z: 1,
      x: 1.5,
      y: 3.0,
      z: 1.2,
    });

    tlRef.current.to(camera.rotation, {
      duration: 1,
      x: -0.28,
      y: 0,
      z: 0.08,
    });
    tlRef.current.to(skillTextRef.current.material, {
      opacity: 0,
    });
    tlRef.current.to(camera.position, {
      duration: 1,
      // x: 3.5,
      // y: 3,
      // z: 1,
      x: 1.5,
      y: 2.0,
      z: -2.5,
    });

    tlRef.current.to(camera.rotation, {
      duration: 1,
      x: 0.1,
      y: -1.5,
      z: 0.08,
    });
    //back
    tlRef.current.to(
      camera.position,
      {
        duration: 2,
        // x: 3.5,
        // y: 3,
        // z: 1,
        x: 10.5,
        y: 2.0,
        z: -2.5,
      },
      "<"
    );
    tlRef.current.to(camera.position, {
      duration: 2,
      // x: 3.5,
      // y: 3,
      // z: 1,
      x: -5,
      y: 30.0,
      z: 12.5,
    });
    tlRef.current.to(
      { value: 1 },
      {
        duration: 2,
        value: 10,
        onUpdate: function () {
          setProgress(this.targets()[0].value);
        },
      },
      "<"
    );
    tlRef.current.to(
      { value: -1 },
      {
        value: 1,
        onUpdate: function () {
          setOpacity(this.targets()[0].value);
        },
      },
      "<60%"
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
      <group ref={doorRef} position={[3.976, 0.55, -1.95]}>
        <mesh geometry={props.nodes.DoorMerge.geometry}>
          <meshBasicMaterial map={DoorTexture} map-flipY={false} />
        </mesh>
      </group>
     
      <Text
        position={[2.8, 2, -2.3]}
        ref={welcomeTextRef}
        font="./fonts/Bangers.ttf"
        fontSize={0.1}
        rotation={[0, Math.PI / 2, 0]}
        // rotation-z={900}
        textAlign="center"
        anchorX="center"
        anchorY="middle"
        color="#2d1d04"
        material-opacity={0}
      >
        {"Hi, welcome\nThis is my portfolio house"}
      </Text>
      <Text
        position={[2, 2.1, 1]}
        ref={skillTextRef}
        font="./fonts/Bangers.ttf"
        fontSize={0.1}
        rotation={[0, Math.PI / 3, 0]}
        // rotation-x={ 9000000}
        // rotation-z={Math.PI}
        textAlign="left"
        anchorX="center"
        anchorY="middle"
        color="#2d1d04"
        material-opacity={0}
      >
        {
          "I have some Experience in\nFlutter\nreact\nnode.js\nJava\nThree.js\nHTML & CSS\nIOT"
        }
      </Text>
    </>
  );
}
