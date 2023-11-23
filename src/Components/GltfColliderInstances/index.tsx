import { Box, useGLTF } from "@react-three/drei";
import {
  InstancedRigidBodies,
  InstancedRigidBodyProps,
} from "@react-three/rapier";
import React, { useMemo } from "react";

export default function GltfColliderInstances() {
  let COUNT = 3;
  let t = useGLTF(
    "/3Dassets/Environment/plants/stylized_hand_painted_tree.glb"
  );

  const instances = useMemo(() => {
    const instances: InstancedRigidBodyProps[] = [];

    for (let i = 0; i < COUNT; i++) {
      instances.push({
        key: "instance_" + Math.random(),
        position: [Math.random() * 10, Math.random() * 10, Math.random() * 10],
        rotation: [Math.random(), Math.random(), Math.random()],
      });
    }

    return instances;
  }, []);

  console.log(t);

  return (
    <mesh position={[3, 0, 2]}>
      <InstancedRigidBodies instances={instances}>
        <instancedMesh args={[undefined, undefined, COUNT]} />
      </InstancedRigidBodies>
    </mesh>
  );
}
