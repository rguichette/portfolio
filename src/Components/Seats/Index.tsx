import {
  Box,
  Gltf,
  Instance,
  Instances,
  Merged,
  useGLTF,
} from "@react-three/drei";
import { GroupProps, MeshProps } from "@react-three/fiber";
import { CuboidCollider, RigidBody, RigidBodyProps } from "@react-three/rapier";
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

          return instances.map((chairInstanceProps, k) => {
            return (
              <RigidBody {...chairInstanceProps} key={k}>
                <mesh position={[0, -1, 0]} key={k}>
                  {Object.entries(ChairParts).map(
                    ([ky, Part]: [string, any]) => {
                      return <Part key={ky} />;
                    }
                  )}
                </mesh>
                <CuboidCollider
                  args={[1, 1, 1]}
                  scale={[0.7, 1, 0.7]}
                  key={"Cubeoid_" + k}
                />
              </RigidBody>
            );
          });
        }}
      </Merged>
    </>
  );
});

export default Seats;

// "Office Chair" (https://skfb.ly/VUUt) by FangedAnteater is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
