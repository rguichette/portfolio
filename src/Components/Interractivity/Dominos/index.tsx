import { Box } from "@react-three/drei";
import { InstancedMeshProps } from "@react-three/fiber";
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

const COUNT = 7;
let geometry = new BoxGeometry(0.5, 1, 1);

export default function Domino() {
  const instances = useMemo(() => {
    const instances: InstancedRigidBodyProps[] = [];

    let basePos = 1;

    for (let i = 0; i < COUNT; i++) {
      instances.push({
        key: "instance_" + Math.random(),
        scale: [0.5, 2, 1],
        position: [basePos, Math.random() * 10, 1],
        angularDamping: 0.4,
      });
      basePos += 1;
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
    <InstancedRigidBodies instances={instances}>
      <instancedMesh args={[geometry, mat, COUNT]} count={COUNT} />
    </InstancedRigidBodies>
  );
}
