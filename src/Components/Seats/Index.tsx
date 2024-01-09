import { Merged, useGLTF } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";
import { CuboidCollider, RigidBody, RigidBodyProps } from "@react-three/rapier";
import { forwardRef, useEffect, useRef } from "react";
import { Mesh } from "three";
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

export default Seats;

// "Office Chair" (https://skfb.ly/VUUt) by FangedAnteater is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
