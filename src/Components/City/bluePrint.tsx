import {
  Box,
  Cone,
  Cylinder,
  Gltf,
  Ring,
  Text,
  useGLTF,
} from "@react-three/drei";
import React, { useEffect } from "react";
import Hologram from "../../materials/Hologram";
import Glitch from "../../materials/Glitch";
import {
  Color,
  DoubleSide,
  MeshBasicMaterial,
  MeshStandardMaterial,
  RingGeometry,
} from "three";
import Ground from "../Ground";

export default function BluePrint() {
  let test = useGLTF("/Light4.glb");
  let m = new MeshStandardMaterial();
  m.emissive = new Color("red");
  m.emissiveIntensity = 10;
  m.toneMapped = false;

  useEffect(() => {
    console.log("SCENE:", test.scene.children[0].children);
  }, []);

  return (
    <>
      <Box material={m} />

      <mesh position={[0, 0, 4]}>
        <primitive object={test.scene} />
      </mesh>
      {/* play */}
      <group>
        <Ring
          args={[13.5, 14, 1]}
          rotation={[-Math.PI / 2, 0, 0.7]}
          position={[-35, 0, 32]}
        >
          <meshBasicMaterial color={"#B10DFF"} />
        </Ring>
        <Ring
          args={[13.5, 14, 1]}
          rotation={[-Math.PI / 2, 0, 1.05]}
          position={[22, 0, 0]}
        >
          <meshBasicMaterial color={"#B10DFF"} />
        </Ring>
        <Ring
          args={[13.5, 14, 1]}
          rotation={[-Math.PI / 2, 0, 1.2]}
          position={[-20, 0, -20]}
        >
          <meshBasicMaterial color={"#B10DFF"} />
        </Ring>
      </group>
      {/* hobbiie */}
      <group name="hobbies">
        <Cylinder scale={3.5} position={[8, 0.6, 38]} />
        {/* <Cylinder scale={3.5} position={[-38, 0.6, 9]} /> */}
        {/* <Cylinder scale={3.5} position={[8, 0.6, -38]} /> */}

        <Cylinder scale={3.5} position={[38, 0.6, -8]} />
      </group>

      <mesh scale={5}>
        <primitive object={test} />
      </mesh>
      <group position={[0, -1, 0]}>
        <Ring rotation={[-Math.PI / 2, 0, 0]} args={[49.5, 50]}>
          <meshBasicMaterial color={"#FF0000"} />
        </Ring>
        <Ring
          rotation={[-Math.PI / 2, 0, 0]}
          args={[18.5, 19]}
          position={[31, 0, 0]}
        >
          <meshBasicMaterial color={"#FF0AC9"} />
        </Ring>
        <Ring
          rotation={[-Math.PI / 2, 0, 0]}
          args={[18.5, 19]}
          position={[-31, 0, 0]}
        >
          <meshBasicMaterial color={"#FF0AC9"} />
        </Ring>
        <Ring
          rotation={[-Math.PI / 2, 0, 0]}
          args={[18.5, 19]}
          position={[0, 0, 31]}
        >
          <meshBasicMaterial color={"#FF0AC9"} />
        </Ring>
        <Ring
          rotation={[-Math.PI / 2, 0, 0]}
          args={[18.5, 19]}
          position={[0, 0, -27]}
        >
          <meshBasicMaterial color={"#FF0AC9"} />
        </Ring>
        <Ring
          rotation={[-Math.PI / 2, 0, 0]}
          args={[18.5, 19]}
          position={[0, 0, 0]}
        >
          <meshBasicMaterial color={"#d6fdc8"} />
        </Ring>
        <Ring
          rotation={[-Math.PI / 2, 0, 0]}
          args={[18.5, 19]}
          position={[0, 0, 25]}
        >
          <meshBasicMaterial color={"black"} />
        </Ring>

        {/* Controls */}
        <Box
          name="controls_directions"
          position={[5, 3, 6]}
          scale={[4, 6, 0.1]}
        />

        {/* 

////
///
///

*/}

        {/* DIRECTIONS --> STREET SIGNS */}
        <mesh name="directions" position={[-4, 1.6, 3.5]} scale={0.5}>
          <Box
            position={[0, 2.5, -1]}
            scale={[2, 0.7, 0.1]}
            rotation={[0, Math.PI / 2, 0.11]}
          />
          <Box position={[1, 1.6, 0]} scale={[2, 0.7, 0.1]}>
            <Text scale={0.4} position={[0, 0, 0.6]}>
              Hello
              <meshBasicMaterial color={"yellow"} side={DoubleSide} />
            </Text>
            <meshBasicMaterial side={DoubleSide} transparent opacity={0.5} />
          </Box>
          <Box
            position={[-1, 0.6, 0]}
            scale={[2, 0.7, 0.1]}
            rotation={[0, 0, 0.15]}
          >
            <Text scale={0.4} position={[0, 0, 0.6]}>
              Hello
              <meshBasicMaterial color={"black"} side={DoubleSide} />
            </Text>
            <meshBasicMaterial side={DoubleSide} transparent opacity={0.5} />
          </Box>
          <Box
            position={[0, -0.5, 1]}
            scale={[2, 0.7, 0.1]}
            rotation={[0, Math.PI / 2.1, 0.1]}
          />

          <meshBasicMaterial color={"black"} />
        </mesh>

        <Box
          position={[31, 4, -17]}
          scale={[3.5, 1, 0.5]}
          rotation={[0, -0.4, 0]}
        />

        <Box
          position={[32, 4, -15]}
          scale={[3.5, 1, 0.5]}
          rotation={[0, 1, 0]}
        />

        {/* end SIGNS */}

        {/* <Ring rotation={[Math.PI / 2, 0, Math.PI / 4]} args={[25, 24, 4]}>
          <meshBasicMaterial color={"green"} />
        </Ring> */}
        <Ring rotation={[Math.PI / 2, 0, Math.PI / 4]} args={[50, 49, 4]}>
          <meshBasicMaterial color={"green"} />
        </Ring>

        {/* divide */}
        {/* <Box args={[110, 1, 1]} position={[0, 0, 4]} rotation={[0, -0.5, 0]}>
          <meshBasicMaterial color={"red"} />
        </Box> */}
        {/* <Cone rotation={[Math.PI / 2, 0, 0]} scale={3}>
          <meshBasicMaterial color={"yellow"} />
        </Cone> */}

        {/* Plants */}
        <group name="plants">
          <Box position={[-10, 0, -1]}>
            <meshBasicMaterial color={"green"} />
          </Box>
          <Box position={[15.5, 0, 11]}>
            <meshBasicMaterial color={"green"} />
          </Box>
          <Box position={[-16.5, 0, 16]}>
            <meshBasicMaterial color={"green"} />
          </Box>
          <Box position={[18, 0, -16]}>
            <meshBasicMaterial color={"green"} />
          </Box>
          <Box position={[-17, 0, -14]}>
            <meshBasicMaterial color={"green"} />
          </Box>
        </group>
      </group>

      {/* Phones */}
      <mesh name={"Phones"}>
        <Box scale={[0.4, 0.6, 0.03]} position={[0, 0, 27]}>
          <meshBasicMaterial color={"blue"} />
        </Box>
        <Box scale={[0.4, 0.6, 0.03]} position={[-16, 0, -18]}>
          <meshBasicMaterial color={"blue"} />
        </Box>
        <Box scale={[0.4, 0.6, 0.03]} position={[17, 0, -21]}>
          <meshBasicMaterial color={"blue"} />
        </Box>
        <Box scale={[0.4, 0.6, 0.03]} position={[24, 0, 0]}>
          <meshBasicMaterial color={"blue"} />
        </Box>
        <Box scale={[0.4, 0.6, 0.03]} position={[-24, 0, 0]}>
          <meshBasicMaterial color={"blue"} />
        </Box>
      </mesh>

      <fog near={0.2} far={1} />
    </>
  );
}

// https://sketchfab.com/3d-models/male-lowpoly-base-mesh-44b8e235695442fab39b4439a1588618
