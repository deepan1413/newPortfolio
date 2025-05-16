import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { RepeatWrapping } from "three";
import * as THREE from "three";
export default function Model(props) {
  const { nodes, materials } = useGLTF("./Model/scene.glb");
  const floorTextures = useTexture("./Textures/HDFloorBaked.jpg");
  const sandTextures = useTexture("./Textures/IslandBaked.jpg");
  const rockTextures = useTexture("./Textures/RockBaked.jpg");
  const bushTextures = useTexture("./Textures/BushBaked.jpg");
  const palmTextures = useTexture("./Textures/PalmBaked.jpg");
  const [wallExtTexture, wallInTexture] = useTexture([
    "./Textures/te.jpg",
    "./Textures/WallIn.jpg",
  ]);
  const reactMugTexture = useTexture('./Textures/ReactMugBaked.jpg')
  const ThreejsMugTexture = useTexture('./Textures/ThreejsMugBaked.jpg')
  const SymfonyMugTexture = useTexture('./Textures/SymfonyMugBaked.jpg')
  const BlenderMugTexture = useTexture('./Textures/BlenderMugBaked.jpg')

  const roofTexture = useTexture("./Textures/HugeRoofBaked.jpg");
  const kitchenTexture = useTexture("./Textures/KitchenBaked.jpg");
  const bedroomTextures = useTexture("./Textures/BedroomBaked.jpg");
  const livingroomTextures = useTexture("./Textures/LivingroomBaked2.jpg");
  const lunchroomTextures = useTexture("./Textures/LunchroomBaked.jpg");
  const bathroomTextures = useTexture("./Textures/BathroomBaked.jpg");
  const windowsTextures = useTexture("./Textures/WindowBaked.jpg");
  reactMugTexture.flipY = false;
  reactMugTexture.center.set(0.5, 0.5);
  reactMugTexture.rotation = Math.PI / 1050;
  
  ThreejsMugTexture.flipY = false;
  ThreejsMugTexture.center.set(0.5, 0.5);
  ThreejsMugTexture.rotation = Math.PI / 1050;
  
  SymfonyMugTexture.flipY = false;
  SymfonyMugTexture.center.set(0.5, 0.5);
  SymfonyMugTexture.rotation = Math.PI / 1050;
  
  BlenderMugTexture.flipY = false;
  BlenderMugTexture.center.set(0.5, 0.5);
  BlenderMugTexture.rotation = Math.PI / 1050;
  
  roofTexture.flipY = false;
  roofTexture.center.set(0.5, 0.5);
  roofTexture.rotation = Math.PI / 1050;

  kitchenTexture.flipY = false;
  kitchenTexture.center.set(0.5, 0.5);
  kitchenTexture.rotation = Math.PI / 1050;

  bedroomTextures.flipY = false;
  bedroomTextures.center.set(0.5, 0.5);
  bedroomTextures.rotation = Math.PI / 1050;

  livingroomTextures.flipY = false;
  livingroomTextures.center.set(0.5, 0.5);
  livingroomTextures.rotation = Math.PI / 1050;

  lunchroomTextures.flipY = false;
  lunchroomTextures.center.set(0.5, 0.5);
  lunchroomTextures.rotation = Math.PI / 1050;

  bathroomTextures.flipY = false;
  bathroomTextures.center.set(0.5, 0.5);
  bathroomTextures.rotation = Math.PI / 1050;

  windowsTextures.flipY = false;
  windowsTextures.center.set(0.5, 0.5);
  windowsTextures.rotation = Math.PI / 1050;

  wallExtTexture.flipY = false;
  wallExtTexture.rotation = Math.PI / 1050;
  wallInTexture.flipY = false;
  wallInTexture.center.set(0.5, 0.5);
  wallInTexture.rotation = Math.PI / 1050;
  palmTextures.flipY = false;
  palmTextures.center.set(0.5, 0.5);
  palmTextures.rotation = Math.PI / 1050;
  
  sandTextures.flipY = false;
  bushTextures.flipY = false;
  bushTextures.center.set(0.5, 0.5);
  bushTextures.rotation = Math.PI / 1050;
  sandTextures.flipY = false;
  sandTextures.center.set(0.5, 0.5);
  sandTextures.rotation = Math.PI / 1050;
  rockTextures.flipY = false;
  rockTextures.center.set(0.5, 0.5);
  rockTextures.rotation = Math.PI / 1050;
  return (
    <group {...props} dispose={null}>
      <group
        position={[2.458, 1.535, 0.653]}
        rotation={[-1.509, 1.569, 1.512]}
        scale={0.167}
      >
        <mesh
          geometry={nodes.Curve072.geometry}
          material={materials["SVGMat.001"]}
        />
        <mesh
          geometry={nodes.Curve072_1.geometry}
          material={materials["base_0.001"]}
        />
      </group>
      <group
        position={[1.444, 1.597, 1.115]}
        rotation={[0, 1.566, 0]}
        scale={1.525}
      >
        <mesh
          geometry={nodes.Curve024.geometry}
          material={materials["SVGMat.022"]}
        />
        <mesh
          geometry={nodes.Curve024_1.geometry}
          material={materials["base_0.004"]}
        />
        <mesh
          geometry={nodes.Curve024_2.geometry}
          material={materials["SVGMat.023"]}
        />
        <mesh
          geometry={nodes.Curve024_3.geometry}
          material={materials["SVGMat.026"]}
        />
      </group>
      <group
        position={[2.131, 1.6, 0.646]}
        rotation={[0, -0.065, Math.PI / 2]}
        scale={[0.066, 0.099, 0.099]}
      >
        <mesh
          geometry={nodes.Cube013.geometry}
          material={materials["white.001"]}
        />
        <mesh
          geometry={nodes.Cube013_1.geometry}
          material={materials["SVGMat.008"]}
        />
        <mesh
          geometry={nodes.Cube013_2.geometry}
          material={materials["SVGMat.011"]}
        />
      </group>
      <group
        position={[3.171, 1.661, 2.999]}
        rotation={[-Math.PI, -0.799, -Math.PI]}
        scale={0.003}
      >
        <mesh
          geometry={nodes["Tux-printable"].geometry}
          material={materials.black}
        />
        <mesh
          geometry={nodes["Tux-printable_1"].geometry}
          material={materials.white}
        />
        <mesh
          geometry={nodes["Tux-printable_2"].geometry}
          material={materials.orange}
        />
      </group>
      <group
        position={[1.423, 1.504, 0.62]}
        rotation={[Math.PI / 2, 0, 1.647]}
        scale={0.112}
      >
        <mesh
          geometry={nodes.Cube011.geometry}
          material={materials["Material.044"]}
        />
        <mesh
          geometry={nodes.Cube011_1.geometry}
          material={materials["Material.002"]}
        />
      </group>
      <group
        position={[1.817, 1.602, 1.087]}
        rotation={[-2.218, -1.561, -0.644]}
        scale={[0.073, 0.11, 0.11]}
      >
        <mesh
          geometry={nodes.Cube134.geometry}
          material={materials["base_0.026"]}
        />
        <mesh
          geometry={nodes.Cube134_1.geometry}
          material={materials["base_0.028"]}
        />
        <mesh
          geometry={nodes.Cube134_2.geometry}
          material={materials["base_0.029"]}
        />
      </group>
      <mesh
        geometry={nodes.IslandMerge.geometry}
        material={nodes.IslandMerge.material}
        position={[0, -1.146, 0]}
      >
        <meshBasicMaterial map={sandTextures} />
      </mesh>
      <mesh
        geometry={nodes.RoofMerge.geometry}
        material={nodes.RoofMerge.material}
        position={[4.1, 5.903, 0]}
        rotation={[-0.522, 0, 0]}
      >
            <meshBasicMaterial map={roofTexture}/>

        </mesh>
      <mesh
        geometry={nodes.KitchenMerge.geometry}
        material={nodes.KitchenMerge.material}
        position={[2.181, 0.721, 2.601]}
        rotation={[0, Math.PI / 2, 0]}
        >
        <meshBasicMaterial map={kitchenTexture}/>

    </mesh>
      <mesh
        geometry={nodes.BedroomMerge.geometry}
        material={nodes.BedroomMerge.material}
        position={[2.9, 3.139, -0.1]}
        rotation={[0, -Math.PI / 2, 0]}
        >
        <meshBasicMaterial map={bedroomTextures}  />
    </mesh>
      <mesh
        geometry={nodes.RockMerge.geometry}
        material={nodes.RockMerge.material}
        position={[8.978, -0.789, 8.994]}
        rotation={[0, -0.609, 0]}
        scale={0.751}
      >
        <meshBasicMaterial map={rockTextures} />
      </mesh>
      <mesh
        geometry={nodes.BushMerge.geometry}
        material={nodes.BushMerge.material}
        position={[0.648, 5.028, 6.409]}
        rotation={[0, 0.506, 0]}
      >
        <meshBasicMaterial map={bushTextures} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.FloorMerge.geometry}
        material={nodes.FloorMerge.material}
      >
        <meshBasicMaterial map={floorTextures} map-flipY={false} side={2} />
      </mesh>
      <mesh
        geometry={nodes.WallInMerge.geometry}
        material={nodes.WallInMerge.material}
        position={[-0.006, 0.574, 3.834]}
      >
        <meshBasicMaterial map={wallInTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.WindowsMerge.geometry}
        material={nodes.WindowsMerge.material}
        position={[4.167, 1.987, 0.095]}
        rotation={[0, -0.125, 0]}
        >
        <meshBasicMaterial map={windowsTextures} />
    </mesh>
      <mesh
        geometry={nodes.WallExtMerge.geometry}
        material={nodes.WallExtMerge.material}
        position={[-0.006, 0.6, -4.011]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <meshBasicMaterial
          map={wallExtTexture}
          map-flipY={false}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh
        geometry={nodes.LivingroomMerge.geometry}
        material={nodes.LivingroomMerge.material}
        position={[0.24, 0.89, -1.4]}
        >
        <meshBasicMaterial map={livingroomTextures} />
    </mesh>
      <mesh
        geometry={nodes.BathroomMerge.geometry}
        material={nodes.BathroomMerge.material}
        position={[-1.559, 1.748, 0.024]}
        rotation={[0, -Math.PI / 2, 0]}
        >
        <meshBasicMaterial map={bathroomTextures}  />
    </mesh>
      <mesh
        geometry={nodes.JavascriptSoap.geometry}
        material={nodes.JavascriptSoap.material}
      />
      <mesh
        geometry={nodes.PythonSoap.geometry}
        material={nodes.PythonSoap.material}
      />
      <mesh
        geometry={nodes.CssSoap.geometry}
        material={nodes.CssSoap.material}
      />
      <mesh
        geometry={nodes.ReactMug.geometry}
        material={nodes.ReactMug.material}
        >
        <meshBasicMaterial map={reactMugTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.ThreeJSMug.geometry}
        material={nodes.ThreeJSMug.material}
        position={[2.065, 1.511, 1.151]}
        rotation={[-3.141, 0.182, -3.141]}
        >
        <meshBasicMaterial map={ThreejsMugTexture} map-flipY={false} />

      </mesh>
      <mesh
        geometry={nodes.SymfonyMug.geometry}
        material={nodes.SymfonyMug.material}
        >
        <meshBasicMaterial map={SymfonyMugTexture} map-flipY={false} />

      </mesh>
      <mesh
        geometry={nodes.BlenderMug.geometry}
        material={nodes.BlenderMug.material}
        >
        <meshBasicMaterial map={BlenderMugTexture} map-flipY={false} />

      </mesh>
      <mesh
        geometry={nodes.LunchroomMerge.geometry}
        material={nodes.LunchroomMerge.material}
        position={[0.7, 0.6, 0.4]}
        >
        <meshBasicMaterial map={lunchroomTextures} />
    </mesh>
      <mesh
        geometry={nodes.PalmMerge.geometry}
        material={nodes.PalmMerge.material}
        position={[-6.454, -0.165, 3.178]}
        rotation={[0, -0.985, 0]}
      >
        <meshBasicMaterial map={palmTextures} map-flipY={false} />
      </mesh>
    </group>
  );
}

useGLTF.preload("./Model/scene.glb");
