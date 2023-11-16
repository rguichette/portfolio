import { Box } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import React from "react";
import { Mesh } from "three";

export default function Domino() {
  return (
    <RigidBody position={[1, -0.5, 0]}>
      <boxGeometry />
      <meshStandardMaterial />
    </RigidBody>
  );
}
