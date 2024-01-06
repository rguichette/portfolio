import {
  Box,
  Gltf,
  Instance,
  Instances,
  Merged,
  useGLTF,
} from "@react-three/drei";
import { GroupProps, MeshProps } from "@react-three/fiber";
import {
  CuboidCollider,
  RigidBody,
  RigidBodyProps,
  RigidBodyProps,
} from "@react-three/rapier";
import React, { Ref, forwardRef, useEffect, useMemo, useRef } from "react";
import {
  Group,
  InstancedMesh,
  Material,
  Mesh,
  MeshBasicMaterial,
  Object3D,
} from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";

type GltfExtend = GLTF & {
  nodes: Mesh[];
};

export interface InstancedChairProps extends MeshProps {
  instances: RigidBodyProps[];
}
// TODO: implement instamces

let Seats = forwardRef(function SeatModel(props: InstancedChairProps, ref) {
  let { nodes, scene } = useGLTF(
    "public/assets/involvement/office_chair.glb"
  ) as GltfExtend;

  return (
    <>
      <Merged meshes={nodes} ref={ref as any}>
        {(ChairParts: any) => {
          let { instances } = props;

          console.log("Instances: ", instances);

          return instances.map((chairInstanceProps, k) => {
            console.log("C...P:", chairInstanceProps);
            return (
              <RigidBody {...chairInstanceProps} key={k}>
                <mesh position={[0, -1, 0]}>
                  {Object.entries(ChairParts).map(
                    ([k, Part]: [string, any]) => {
                      return <Part key={k} />;
                    }
                  )}
                </mesh>
                <CuboidCollider
                  args={[1, 1, 1]}
                  scale={[0.7, 1, 0.7]}
                  key={k}
                />
              </RigidBody>
            );
          });
        }}
      </Merged>
    </>
  );
});

// export default function Seats() {
//   let cs = 0.02;
//   return (
//     <>
//       <SeatModel scale={cs} position={[3.4, -1.3, 0]} rotation={[0, 0.1, 0]} />
//       {/* <SeatModel
//         scale={cs}
//         position={[0.9, -1.3, 1.8]}
//         rotation={[0, -0.8, 0]}
//       />
//       <SeatModel
//         scale={cs}
//         position={[-1, -1.3, 2.2]}
//         rotation={[0, -1.2, 0]}
//       /> */}
//       {/* left */}
//       {/* <SeatModel scale={cs} position={[1, -1.3, -1.6]} rotation={[0, 0.3, 0]} />
//       <SeatModel scale={cs} position={[-1, -1.3, -2]} /> */}
//     </>
//   );
// }

export default Seats;

// "Office Chair" (https://skfb.ly/VUUt) by FangedAnteater is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
