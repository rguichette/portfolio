import { Box } from "@react-three/drei";
import { InstancedMeshProps, MeshProps } from "@react-three/fiber";
import {
  InstancedRigidBodies,
  InstancedRigidBodyProps,
  RigidBody,
} from "@react-three/rapier";
import React, { useEffect, useMemo, useRef } from "react";
import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
} from "three";
import { color } from "three/examples/jsm/nodes/Nodes.js";

type layoutProps = MeshProps & {
  randomRot?: boolean;
  startingPos?: number;
  spacing: number;
  numberOfPieces?: number;
  mass?: number;
};

export default function Domino({
  randomRot = true,
  startingPos = 0,
  numberOfPieces = 5,
  mass = 1,
  ...props
}: layoutProps) {
  let geometry;
  const COUNT = numberOfPieces;
  const instances = useMemo(() => {
    geometry = new BoxGeometry(0.5, 1, 1);

    const instances: InstancedRigidBodyProps[] = [];

    let basePos = 10;
    let baseRot = 0;

    for (let i = 0; i < COUNT; i++) {
      instances.push({
        key: "instance_" + Math.random(),
        scale: [0.5, 2, 1],
        rotation: [0, baseRot, 0],
        position: [basePos, Math.random() * 10, 1],
        angularDamping: 0.4,
      });
      basePos += 1;
      baseRot += 0.1;
    }

    return instances;
  }, []);

  let instanceMeshRef = useRef<InstancedMeshProps>(null);

  let c = ["#008080", , "#ff1493", "#ec1313", "#4ff0f3", "#e18fc7"];

  let colorList: string | any[] = [];

  instances.forEach((m) => {
    console.log(m);
  });

  let mat = new MeshStandardMaterial({
    color: c[Math.floor(Math.random() * c.length)],
  });

  return (
    <mesh {...props}>
      <InstancedRigidBodies instances={instances} mass={mass}>
        <instancedMesh args={[geometry, mat, COUNT]} />
      </InstancedRigidBodies>
    </mesh>
  );
}
