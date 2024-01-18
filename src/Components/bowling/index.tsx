import {
  Box,
  Cylinder,
  Merged,
  Sphere,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";
import {
  CuboidCollider,
  RigidBody,
  RigidBodyProps,
  RoundCylinderCollider,
  TrimeshCollider,
} from "@react-three/rapier";
import React from "react";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";
import { log } from "three/examples/jsm/nodes/Nodes.js";

interface BowlingInstanceMesh extends MeshProps {
  instances: RigidBodyProps[];
}

function BowlingSub(props: BowlingInstanceMesh) {
  let { nodes } = useGLTF("/3Dassets/bowling_pin.glb") as any;
  let t = useTexture("/bowlingTexture.png");

  let { instances } = props;

  return (
    <>
      <mesh {...props}>
        <Merged meshes={nodes} frustumCulled={false}>
          {({ ...items }) => {
            console.log(items);

            return instances.map((instProps, k) => {
              return (
                <RigidBody {...instProps} key={k}>
                  {Object.entries(items).map(([name, Part]: [string, any]) => (
                    // <mesh key={"rigidInstMesh" + name}>
                    <Part />

                    // </mesh>
                  ))}
                </RigidBody>
              );
            });
          }}
        </Merged>
        <RigidBody colliders="ball">
          <Sphere scale={0.3} />
        </RigidBody>
      </mesh>
    </>
  );
}

export default function Bowling(props: MeshProps) {
  let instances: RigidBodyProps[] = [
    {
      position: [0.5, 0, 0.5],
    },
    {
      position: [0.7, 0, 0.75],
    },
    {
      position: [0.3, 0, 0.75],
    },
    { position: [0.1, 0, 1] },
    { position: [0.5, 0, 1] },
    { position: [0.9, 0, 1] },

    { position: [1, 0, 1.25] },
    { position: [0.7, 0, 1.25] },
    { position: [0.25, 0, 1.25] },
    { position: [-0.1, 0, 1.25] },
  ];

  return <BowlingSub instances={[{ position: [2, 1, 0] }]} {...props} />;
}
// <Cylinder args={[0.1, 0.1, 0.7]}>
//   <meshPhongMaterial map={t} />
// </Cylinder>
