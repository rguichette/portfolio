import React from "react";
import { Box, Gltf, Plane, useHelper, useTexture } from "@react-three/drei";
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
        {/* multiply by 2 in order to adjust for RB scaling */}
        <Plane
          rotation={[-Math.PI / 2, 0, 0]}
          args={[floorSize * 2, floorSize * 2]}
          position={[0, -1.3, 0]}
          receiveShadow
        >
          {/* <meshStandardMaterial map={texture} transparent /> */}
          {/* <meshBasicMaterial color={"#7CFC00"} side={DoubleSide} /> */}
          <meshPhongMaterial
            color={"#e5d45b"}
            emissive={"#5b56be"}
            shininess={0.557}
            reflectivity={0.7}
            side={DoubleSide}
          />
        </Plane>

        <CuboidCollider
          args={[floorSize, 0.01, floorSize]}
          position={[0, -1.3, 0]}
        />
      </RigidBody>
    </>
  );
}
