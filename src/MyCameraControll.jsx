import { useLayoutEffect, useRef, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import projects from "./projects.json";
import {
  CSS2DRenderer,
  CSS2DObject,
} from "three/examples/jsm/renderers/CSS2DRenderer";
import {
  useScroll,
  Text,
  Text3D,
  useTexture,
  Billboard,
  RoundedBox,
  Html,
} from "@react-three/drei";

import gsap from "gsap";
import * as THREE from "three";

import { Vector3, Euler } from "three";
import Label from "../public/Model/ProjectCard";
export default function MyCameraScroll(props) {
  const video = document.createElement("video");

  video.src = "./tv.mp4";
  video.muted = true;
  video.volume = 0;
  video.loop = true;
  video.playsInline = true;
  video.autoplay = true;
  video.muted = true;
  video.autoplay = true;
  video.playsInline = true;
  video.loop = true;
  video.preload = "auto";
  video.play().catch((err) => {
    console.warn("Autoplay failed:", err);
  });

  const TVScreen = new THREE.VideoTexture(video);
  TVScreen.center.set(0.65, 0.32);
  TVScreen.rotation = Math.PI / 2;
  TVScreen.repeat.set(2, 1);
  TVScreen.wrapS = THREE.ClampToEdgeWrapping;
  TVScreen.wrapT = THREE.ClampToEdgeWrapping;
  const CameraLogger = ({ camera }) => {
    const prevPos = useRef(new Vector3());
    const prevRot = useRef(new Euler());

    useFrame(() => {
      if (
        !camera.position.equals(prevPos.current) ||
        !camera.rotation.equals(prevRot.current)
      ) {
        console.log("Position:", camera.position);
        console.log("Rotation:", camera.rotation);

        prevPos.current.copy(camera.position);
        prevRot.current.copy(camera.rotation);
      }
    });

    return null;
  };
  const walltexture = useLoader(TextureLoader, "/Textures/wall.jpg");

  const [progress, setProgress] = useState(1);
  const [opacity, setOpacity] = useState(0);
  const { camera } = useThree();
  const tlRef = useRef();
  const frontDoorRef = useRef();
  const shelfLeftDoorRef = useRef();
  const shelfRigtDoorRef = useRef();
  const windmillLeaf = useRef();
  const introTextRef = useRef();
  const welcomeTextRef = useRef();
  const showTextRef = useRef();

  const collegeTextRef = useRef();
  const diplomaTextRef = useRef();
  const rightskillTextRef = useRef();
  const leftskillTextRef = useRef();
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
    tlRef.current.to(camera.position, {
      duration: 2,
      x: -20.55,
      y: 2.88,
      z: 23.78,
    });
    tlRef.current.to(welcomeTextRef.current.material, {
      duration: 2,
      opacity: 1,
    });
    tlRef.current.to(camera.position, {
      duration: 2,
      x: -12.713621,
      y: 2.18403,
      z: 13.097359,
    });
    tlRef.current.to(introTextRef.current.material, {
      duration: 2,
      opacity: 1,
    });

    tlRef.current.to(camera.position, {
      duration: 2,
      x: -2.939923478216972,
      y: 1.1872855480563205,
      z: 4.116440804404311,
    });

    tlRef.current.to(
      camera.rotation,
      {
        duration: 2,
        x: -0.012440764314818395,
        y: -0.2958413038911087,
        z: -0.003627210232000859,
      },
      "<"
    );

    //door open
    tlRef.current.to(frontDoorRef.current.rotation, {
      duration: 2,
      y: -Math.PI / 2,
    });
    tlRef.current.to(camera.position, {
      duration: 2,
      x: -2.3432409371826726,
      y: 1,
      z: -2,
    });
    tlRef.current.to(
      camera.rotation,
      {
        duration: 2,
        x: 0,
        y: -1.6,
        z: 0,
      },
      "<"
    );

    tlRef.current.to(showTextRef.current.material, {
      duration: 2,
      opacity: 1,
    });

    tlRef.current.to(camera.position, {
      duration: 2,
      x: -2.8,
      y: 1.8,
      z: -2.6,
    });
    tlRef.current.to(
      camera.rotation,
      {
        duration: 2,
        x: 0,
        y: 0,
        z: 0,
      },
      "<"
    );
    tlRef.current.to(
      [collegeTextRef.current.material, diplomaTextRef.current.material],
      { duration: 2, opacity: 1 },
      "<"
    );
    tlRef.current.to(camera.position, {
      duration: 2,
      x: -4.7,
      z: -0.1,
    });

    tlRef.current.to(camera.position, {
      duration: 2,
      x: -5.201455857336265,
      y: 3.2517468963757246,
      z: -5.957551709864222,
    });
    tlRef.current.to(
      camera.rotation,

      {
        duration: 2,
        x: 0,
        y: -1.6,
        z: 0,
      }
    );
    tlRef.current.to(camera.position, {
      duration: 2,
      x: -3,
      y: 5,
      z: -6.5,
    });
    tlRef.current.to(
      camera.rotation,

      {
        duration: 2,
        x: 0,
        y: 0,
        z: 0,
      },
      "<"
    );
    tlRef.current.to(
      languagesTextRef.current.material,
      {
        opacity: 1,
      },
      "<"
    );
    tlRef.current.to(camera.position, {
      duration: 2,
      x: -2.78,
      y: 4.23,
      z: -5.2,
    });
    tlRef.current.to(languagesTextRef.current.material, {
      opacity: 0,
    });
    tlRef.current.to(shelfLeftDoorRef.current.rotation, {
      duration: 2,
      y: -0.868,
    });

    tlRef.current.to(
      shelfRigtDoorRef.current.rotation,
      {
        duration: 2,
        y: 0.824,
      },
      "<"
    );
    tlRef.current.to(
      rightskillTextRef.current.material,
      {
        opacity: 1,
      },
      "<"
    );
    tlRef.current.to(
      leftskillTextRef.current.material,
      {
        opacity: 1,
      },
      "<"
    );
    tlRef.current.to(camera.position, {
      duration: 2,
      x: -1.6,
      y: 4,
      z: -5.6,
    });
    tlRef.current.to(
      camera.rotation,

      {
        duration: 2,
        x: 0,
        y: -3,
        z: 0,
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
      >
        <meshStandardMaterial color="#8b3e2f" metalness={0.2} roughness={0.9} />
      </mesh>
      <mesh
        ref={shelfLeftDoorRef}
        geometry={props.nodes.shelfDoorLeft.geometry}
        material={props.nodes.shelfDoorLeft.material}
        position={[-3.148, 4.112, -6.612]}
        rotation={[Math.PI, -3.1, Math.PI]}
      >
        <meshPhysicalMaterial map={walltexture} />
      </mesh>
      <mesh
        ref={shelfRigtDoorRef}
        geometry={props.nodes.shelfDoorRight.geometry}
        material={props.nodes.shelfDoorRight.material}
        position={[-2.393, 4.103, -6.612]}
        rotation={[-Math.PI, 3.1, -Math.PI]}
      >
        <meshPhysicalMaterial map={walltexture} />
      </mesh>
      <mesh
        geometry={props.nodes.TVScreen.geometry}
        material={props.nodes.TVScreen.material}
        position={[-0.392, 0.75, -2.192]}
        rotation={[0, 0.002, -Math.PI / 2]}
        scale={0.534}
      >
        <meshPhysicalMaterial map={TVScreen} />
      </mesh>
      <group>
        <mesh
          geometry={props.nodes.PhotoFrameScene2.geometry}
          material={props.nodes.PhotoFrameScene2.material}
          position={[-1.458, 3.923, -4.482]}
          rotation={[1.598, 0, -3.129]}
          scale={[0.446, 0.091, 0.309]}
        >
          <Label text="Hello---------------World" position={[1, 0.1, 0]} />
        </mesh>
      </group>
      <Text
        // -23.234795944690745, 3.2570048661493995, 26.918081948657154
        position={[-17.969403340083357, 3, 21.293568958663037]}
        //l-r  , t-down , f-b
        ref={welcomeTextRef}
        font="./fonts/Bangers.ttf"
        fontSize={0.2}
        rotation={[0, -7, 0]}
        textAlign="center"
        anchorX="center"
        anchorY="middle"
        color="#2d1d04"
        material-opacity={0}
      >
        {"Hi, welcome\nThis is my courage themed portfolio"}
      </Text>
      <CameraLogger camera={camera} />
      <Text
        // -23.234795944690745, 3.2570048661493995, 26.918081948657154
        position={[-9.969403340083357, 2.2, 10.293568958663037]}
        //l-r  , t-down , f-b
        ref={introTextRef}
        font="./fonts/Bangers.ttf"
        fontSize={0.3}
        rotation={[0, -7, 0]}
        textAlign="center"
        anchorX="center"
        anchorY="middle"
        color="#2d1d04"
        material-opacity={0}
      >
        {"i'm deepan\njunior software developer, b.tech(CSE)"}
      </Text>
      <Text
        // -23.234795944690745, 3.2570048661493995, 26.918081948657154
        position={[-1.2454121182227138, 1.3, -2.1]}
        //l-r  , t-down , f-b
        ref={showTextRef}
        font="./fonts/Bangers.ttf"
        fontSize={0.2}
        rotation={[0, 30, 0]}
        textAlign="center"
        anchorX="center"
        anchorY="middle"
        color="#2d1d04"
        material-opacity={0}
      >
        {"i like cartoons"}
      </Text>
      <Text
        // -23.234795944690745, 3.2570048661493995, 26.918081948657154
        position={[-3.5, 1.806, -4.1]}
        //l-r  , t-down , f-b
        ref={collegeTextRef}
        font="./fonts/Bangers.ttf"
        fontSize={0.1}
        rotation={[0, 0, 0]}
        textAlign="center"
        anchorX="center"
        anchorY="middle"
        color="#2d1d04"
        material-opacity={0}
      >
        {"b.tech cse\nvtu\n7.4cgp\n2022 – 2026"}
      </Text>
      <Text
        // -23.234795944690745, 3.2570048661493995, 26.918081948657154
        position={[-2.3, 1.806, -4.1]}
        //l-r  , t-down , f-b
        ref={diplomaTextRef}
        font="./fonts/Bangers.ttf"
        fontSize={0.1}
        rotation={[0, 0, 0]}
        textAlign="center"
        anchorX="center"
        anchorY="middle"
        color="#2d1d04"
        material-opacity={0}
      >
        {"diploma cse\nkmptc\n7.6cgp\n2019 – 2022"}
      </Text>
      <Text
        // -23.234795944690745, 3.2570048661493995, 26.918081948657154
        position={[-3, 5.12, -6.9]}
        //l-r  , t-down , f-b
        ref={languagesTextRef}
        font="./fonts/Bangers.ttf"
        fontSize={0.05}
        rotation={[0, 0, 0]}
        textAlign="center"
        anchorX="center"
        anchorY="middle"
        color="#2d1d04"
        material-opacity={0}
      >
        {"Languages"}
      </Text>
      <Text
        // -23.234795944690745, 3.2570048661493995, 26.918081948657154
        position={[-2.32, 4.2, -6.4]}
        //l-r  , t-down , f-b
        ref={rightskillTextRef}
        font="./fonts/Bangers.ttf"
        fontSize={0.05}
        rotation={[0, 11.55, 0]}
        textAlign="right"
        anchorX="center"
        anchorY="middle"
        color="#2d1d04"
        material-opacity={0}
      >
        {
          "i'm having experince on\nflutter\nreact\nthree.js\njava\njavascript\npython,c"
        }
      </Text>
      <Text
        position={[-3.23, 4.2, -6.5]}
        //l-r  , t-down , f-b
        ref={leftskillTextRef}
        font="./fonts/Bangers.ttf"
        fontSize={0.05}
        rotation={[0, -11.55, 0]}
        textAlign="left"
        anchorX="center"
        anchorY="middle"
        color="#2d1d04"
        material-opacity={0}
      >
        {"\nnode.js\nsql\nblender\nadobe ae,pr\nfigma\nIOT\nnetworking(CCNA)"}
      </Text>
    </>
  );
}
