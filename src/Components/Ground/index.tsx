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
  let texture = useTexture("/honeycomb.png");
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;

  texture.offset.set(0.5, 0.5);
  texture.repeat.set(32, 32);

  return (
    <>
      <RigidBody type="fixed" colliders={false}>
        {/* multiply by 2 in order to adjust for RB scaling */}
        <Plane
          rotation={[-Math.PI / 2, 0, 0]}
          args={[floorSize * 2, floorSize * 2]}
          position={[0, -1.3, 0]}
        >
          <meshStandardMaterial
            color={"#7CFC00"}
            roughness={0.902}
            metalness={0.41}
          />
          {/* <meshBasicMaterial color={"#7CFC00"} side={DoubleSide} /> */}
        </Plane>

        <CuboidCollider
          args={[floorSize, 0.01, floorSize]}
          position={[0, -1.3, 0]}
        />
      </RigidBody>
    </>
  );
}
