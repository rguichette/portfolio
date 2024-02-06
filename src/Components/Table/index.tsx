import { Box, RoundedBox, useGLTF } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import React from "react";
import { showDownload } from "../../state";
import { useAtom } from "jotai";
import Arrow from "../Arrow";

export default function Table(props: MeshProps) {
  let ts = useGLTF("/assets/involvement/tableStand.glb");
  let { scene: resume } = useGLTF("/resumeSheet.glb");

  let [showDownloadbtn, setShowDownloadBtn] = useAtom(showDownload);

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
          <Arrow instances={[{ position: [1.5, 2, 1], scale: 0.5 }]} />

          <mesh scale={0.2} position={[1.3, 0.84, 0.4]} rotation={[0.0, 0, 0]}>
            <primitive object={resume} />
            <CuboidCollider
              args={[1, 1, 1]}
              position={[25, 15, 15]}
              sensor
              onIntersectionEnter={(e: any) => {
                console.log("downloading Resume...2 success, ", e);

                if (e.rigidBodyObject.name == "charRigidBody") {
                  setShowDownloadBtn(true);
                }
              }}
              onIntersectionExit={() => {
                setShowDownloadBtn(false);
              }}
            />
          </mesh>
        </RigidBody>
      </mesh>
    </>
  );
}
