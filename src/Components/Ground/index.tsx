import React from "react";
import {
  Box,
  Gltf,
  MeshReflectorMaterial,
  Plane,
  useHelper,
  useTexture,
} from "@react-three/drei";
import { useEffect, useRef } from "react";
import {
  BoxHelper,
  Camera,
  DoubleSide,
  MeshPhongMaterial,
  RepeatWrapping,
  Vector3,
} from "three";

import WorkStation from "../Workstation";
import { CuboidCollider, RigidBody } from "@react-three/rapier";

import { useFrame, useThree } from "@react-three/fiber";
import GltfInstances from "../GltfInstances";

let floorSize = 1000;

export default function Ground() {
  // let texture = useTexture("/honeycomb-hexagon.png");
  // texture.wrapS = RepeatWrapping;
  // texture.wrapT = RepeatWrapping;

  // texture.repeat.set(floorSize, floorSize);
  // texture.repeat.set(4, 4);

  return (
    <>
      <RigidBody type="fixed" colliders={false}>
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1.3, 0]}
          receiveShadow
        >
          {/* multiply by 2 in order to adjust for RB scaling */}
          <planeGeometry args={[floorSize * 2, floorSize * 2]} />
          <MeshReflectorMaterial
            color={"#b7bbf5"}
            mirror={0.23}
            depthScale={5}
            // mixStrength={0.25}
            // mixContrast={2}
            // metalness={0.2}
          />
        </mesh>

        <CuboidCollider
          args={[floorSize, 0.01, floorSize]}
          position={[0, -1.3, 0]}
        />
      </RigidBody>
      {/* <GltfInstances
        file={{
          path: "/3Dassets/Environment/plants/plantsR.glb",
          useDraco: true,
        }}
        scale={0.09}
        randomSpread={{ x: 18, y: 0, z: 18 }}
        startOffset={{ x: 1, y: 0, z: -1 }}
        count={40}
        position={[0, -1.35, 0]}
      /> */}
    </>
  );
}
