import { Box, Merged, Sphere, useGLTF, useTexture } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";
import { CuboidCollider, RigidBody, RigidBodyProps } from "@react-three/rapier";
import React from "react";
import { BoxGeometry, Mesh, MeshStandardMaterial } from "three";

interface StackInstancedMesh extends MeshProps {
  instances: RigidBodyProps[];
}

function StackInst(props: StackInstancedMesh) {
  let { instances } = props;
  let box = new Mesh(
    new BoxGeometry(1, 1, 1),
    new MeshStandardMaterial({ color: "pink" })
  );

  return (
    <>
      <mesh {...props}>
        <Merged meshes={[box]} frustumCulled={false}>
          {(B: any) => {
            return instances.map((instProps, k) => {
              return (
                <RigidBody {...instProps} key={k} colliders={false}>
                  <B />
                  <CuboidCollider args={[0.5, 0.5, 0.5]} />
                </RigidBody>
              );
            });
          }}
        </Merged>
      </mesh>
    </>
  );
}

export default function BoxStack() {
  let instances: RigidBodyProps[] = [
    { position: [1, 0, 1] },
    { position: [1, 0, 2] },
    { position: [1, 0, 3] },
    { position: [2, 0, 1] },
    { position: [2, 0, 2] },
    { position: [2, 0, 3] },
    { position: [3, 0, 1] },
    { position: [3, 0, 2] },
    { position: [3, 0, 3] },

    //second row (up)
    { position: [2, 1, 2] },
    { position: [1, 1, 2] },
    { position: [3, 1, 2] },
    //third row
    { position: [2, 2, 2] },
    { position: [2, 3, 2] },
    { position: [2, 4, 2] },
  ];

  return (
    <>
      <mesh position={[15, -3.5, 0]}>
        <StackInst instances={instances} scale={1} position={[3, 3, 1]} />;
        <StackInst instances={instances} scale={1} position={[9, 3, 1]} />;
        {/* create bridge with top */}
        <StackInst
          instances={[
            { scale: [4, 1, 1], position: [-1, 2, 2] },
            { position: [-1, 3, 2] },
            { position: [-1, 4, 2] },
            { position: [-1, 5, 2] },
            { position: [-1, 6, 2] },
          ]}
          scale={1}
          position={[9, 3, 1]}
        />
        <RigidBody />
      </mesh>
      <RigidBody scale={3} position={[15, 3, -12]} colliders="ball">
        <Sphere />
      </RigidBody>
    </>
  );
}
