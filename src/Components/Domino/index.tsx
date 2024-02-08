import { Merged, Cylinder, Box } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";
import { CuboidCollider, RigidBody, RigidBodyProps } from "@react-three/rapier";
import React from "react";
import { BoxGeometry, Mesh, MeshBasicMaterial, Sphere } from "three";

interface DominoInstanceMesh extends MeshProps {
  instances: RigidBodyProps[];
}
function Dom(props: DominoInstanceMesh) {
  let { instances } = props;
  console.log("Instances", instances);

  let m = new MeshBasicMaterial({ color: "#d9b99b" });

  let box = new Mesh(new BoxGeometry(1, 2, 0.2), m);

  return (
    <>
      <mesh {...props} key={"dom_wrapper"}>
        <Merged meshes={[box]} frustumCulled={false} key={"domino_"}>
          {(B) => {
            return instances.map((instProps, k) => {
              return (
                <RigidBody {...instProps} key={k}>
                  <B />
                  <CuboidCollider args={[0.5, 1, 0.17]} />
                </RigidBody>
              );
            });
          }}
        </Merged>
      </mesh>
    </>
  );
}

export default function Dominos() {
  let instances: RigidBodyProps[] = [
    {
      position: [1, 1, 1],
    },
    {
      position: [0.5, 1, 2],
    },
    {
      position: [1, 1, 3],
    },
    {
      position: [0.5, 1, 4],
    },
    {
      position: [1, 1, 5],
    },
    {
      position: [1.5, 1, 6],
    },
    {
      position: [1, 1, 7],
    },
    {
      position: [0.5, 1, 8],
    },
    {
      position: [1.5, 1, 9],
    },
    {
      position: [0.5, 1, 10],
    },
  ];

  return <Dom instances={instances} position={[-5, 0, -34]} scale={2} />;
}
