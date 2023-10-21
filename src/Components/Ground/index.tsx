import React from "react";
import { Box, Gltf, Plane, useHelper, useTexture } from "@react-three/drei";
import { useEffect, useRef } from "react";
import {
  BoxHelper,
  Camera,
  DoubleSide,
  MeshPhongMaterial,
  Vector3,
} from "three";

import wl from "../../world_ItemLocations";
import Skills from "../Resume/Skills";
import WorkStation from "../Workstation";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import world_ItemLocations from "../../world_ItemLocations";
import { useFrame, useThree } from "@react-three/fiber";

let floorSize = 1000;

export default function Ground() {
  return (
    <RigidBody type="fixed" colliders={false}>
      {/* multiply by 2 in order to adjust for RB scaling */}
      <Plane
        rotation={[-Math.PI / 2, 0, 0]}
        args={[floorSize * 2, floorSize * 2, floorSize * 2]}
        position={[0, -1.3, 0]}
      >
        <meshBasicMaterial
          // wireframe
          color={"#D95030"}
          side={DoubleSide}
        />
      </Plane>
      <CuboidCollider
        args={[floorSize, 0.01, floorSize]}
        position={[0, -1.3, 0]}
      />
    </RigidBody>
  );
}