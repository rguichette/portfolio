import { Box, Merged, Sphere, useGLTF } from "@react-three/drei";
import { MeshProps, useFrame } from "@react-three/fiber";
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

interface ArrowProps extends MeshProps {
  instances: MeshProps[];
  outerColor?: string;
  innerColor?: string;
}

export default function Arrow(props: ArrowProps) {
  let { nodes } = useGLTF("/arrow.glb") as GLTF & {
    nodes: { Arrow: Mesh; ArrowCenter: Mesh };
  };

  let ArrowsRef = useRef(null);

  let { Arrow, ArrowCenter } = nodes;

  useFrame(({ clock }) => {
    //change colors and opacity
    if (nodes) {
      let Am = Arrow.material as MeshStandardMaterial;
      let AcM = ArrowCenter.material as MeshStandardMaterial;
      let outcol = props.outerColor ? props.outerColor : "gold";
      let innercol = props.innerColor ? props.innerColor : "#008080";

      Am.color = new Color(outcol);
      Am.transparent = true;
      Am.opacity = Math.sin(clock.elapsedTime * 3) * 0.2;

      AcM.color = new Color(innercol);
      AcM.transparent = true;
      AcM.opacity = Math.sin(clock.elapsedTime * 3) * 0.7;
    }

    //animimate position

    if (ArrowsRef.current) {
      (ArrowsRef.current as Group).position.y =
        -Math.sin(clock.elapsedTime * 3 - 1) / 2;
    }
  });

  let { instances } = props;
  //   let { hasInstances } = props.instances;

  //   console.log("HAS INSTANCE: ", hasInstances);
  return (
    <Merged meshes={nodes} ref={ArrowsRef} frustumCulled={false}>
      {({ Arrow, ArrowCenter }: { Arrow: any; ArrowCenter: any }) => {
        let a1Ref = useRef(null);

        // console.log("inst; ", instances);

        if (!instances || instances.length == 0) {
          return (
            <mesh>
              {/* <Arrow /> */}
              {/* <ArrowCenter scale={0.3} /> */}
            </mesh>
          );
        }

        return instances.map((instProps, k) => {
          //   console.log("INST: ", instProps);
          // let rk = Math.random();
          // console.log("RK: ", rk);
          return (
            <mesh {...instProps}>
              <Arrow />
              <ArrowCenter scale={0.3} />
            </mesh>
          );
        });

        //   <>
        //     <mesh position={[0, 2, 0]}>
        //       <Arrow position={[0, 0, 2]} />
        //       <ArrowCenter position={[0, 0, 2]} scale={0.3} />
        //     </mesh>
        //   </>
      }}
    </Merged>
  );
}
