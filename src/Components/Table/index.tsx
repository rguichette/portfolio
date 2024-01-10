import { Box, RoundedBox, useGLTF } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import React from "react";

export default function Table(props: MeshProps) {
  let ts = useGLTF("/assets/involvement/tableStand.glb");
  let { scene: resume } = useGLTF("/resumeSheet.glb");

  return (
    <>
      <mesh {...props}>
        <RigidBody scale={1.6} type="fixed">
          <RoundedBox
            args={[2.9, 0.05, 1.3]}
            radius={0.02}
            position={[0, 0.8, 0]}
          >
            <meshPhysicalMaterial
              color={"#9ea5a9"}
              transparent
              opacity={0.2}
              clearcoat={1}
              reflectivity={0.7}
              ior={2.3}
              metalness={1}
              roughness={0}
            />
          </RoundedBox>
          <primitive object={ts.scene} />
          <mesh scale={0.2} position={[0, 0.84, 0.5]} rotation={[0.0, 0, 0]}>
            <primitive object={resume} />
          </mesh>
        </RigidBody>
      </mesh>
    </>
  );
}
