import { Box, Merged, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import {
  Color,
  Group,
  InstancedMesh,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
} from "three";
import { GLTF } from "three-stdlib";

export default function Arrow() {
  let { nodes } = useGLTF("/arrow.glb") as GLTF & {
    nodes: { Arrow: Mesh; ArrowCenter: Mesh };
  };

  let ArrowsRef = useRef(null);

  let { Arrow, ArrowCenter } = nodes;

  useEffect(() => {
    console.log((ArrowsRef.current as Group).position);
  }, []);

  useFrame(({ clock }) => {
    //change colors and opacity
    if (nodes) {
      let Am = Arrow.material as MeshStandardMaterial;
      let AcM = ArrowCenter.material as MeshStandardMaterial;

      Am.color = new Color("gold");
      Am.transparent = true;
      Am.opacity = Math.sin(clock.elapsedTime * 3);

      AcM.color = new Color("#008080");
      AcM.transparent = true;
      AcM.opacity = Math.sin(clock.elapsedTime * 3);
    }

    //animimate position

    if (ArrowsRef.current) {
      (ArrowsRef.current as Group).position.y =
        -Math.sin(clock.elapsedTime * 3 - 1) / 2;
    }
  });

  return (
    <Merged meshes={nodes} ref={ArrowsRef}>
      {({ Arrow, ArrowCenter }) => {
        let a1Ref = useRef(null);

        return (
          <>
            <mesh position={[0, 2, 0]}>
              <Arrow position={[0, 0, 2]} />
              <ArrowCenter position={[0, 0, 2]} scale={0.3} />
            </mesh>
          </>
        );
      }}
    </Merged>
  );
}
