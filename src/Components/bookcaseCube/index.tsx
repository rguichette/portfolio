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

let BookCaseCube = forwardRef(function SeatModel(
  props: InstancedChairProps,
  ref
) {
  let { nodes, scene } = useGLTF(
    "/assets/involvement/bookcaseCube.glb"
  ) as GltfExtend;

  let refT = useRef(null);

  Object.entries(nodes).forEach(([_, node]) => {
    console.log(node);
    (node as Mesh).frustumCulled = false;
  });

  useEffect(() => {
    if (refT.current) {
      console.log(nodes);

      // nodes.forEach((node) => {
      //   console.log("Nodes", node);
      // });
    }
  }, []);

  console.log("CP: ", nodes);

  return (
    <>
      <Merged meshes={nodes} ref={refT} frustumCulled={false}>
        {(ChairParts: any) => {
          let { instances } = props;

          return instances.map((chairInstanceProps, k) => {
            return (
              <RigidBody {...chairInstanceProps} key={k}>
                <mesh position={[0, -1, 0]} key={k} frustumCulled={false}>
                  {Object.entries(ChairParts).map(
                    ([ky, Part]: [string, any]) => {
                      return <Part key={ky} frustumCulled={false} />;
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

export default BookCaseCube;

// "Office Chair" (https://skfb.ly/VUUt) by FangedAnteater is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
