import { Box, Instance, Instances, Merged, useGLTF } from "@react-three/drei";
import {
  CuboidCollider,
  InstancedRigidBodies,
  InstancedRigidBodyProps,
  RapierRigidBody,
} from "@react-three/rapier";
import React, { useEffect, useMemo, useRef } from "react";
import { Mesh, Vector3 } from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";

type NGLTF = GLTF & {
  nodes: any;
};

export default function Plants() {
  let { nodes, scene } = useGLTF("public/plants/office_plant.glb") as NGLTF;

  let plantRef = useRef(null);

  let rigidBodiesRef = useRef<RapierRigidBody[]>(null);

  let COUNT = 5;
  let positions = [];

  //   const instances = useMemo(() => {
  //     const instances: InstancedRigidBodyProps[] = [];

  //     for (let i = 0; i < COUNT; i++) {
  //       instances.push({
  //         key: "instance_" + Math.random(),
  //         position: [Math.random() * 10, Math.random() * 10, Math.random() * 10],
  //         rotation: [Math.random(), Math.random(), Math.random()],
  //       });
  //     }
  //     console.log("POSITIONS:", positions);
  //     return instances;
  //   }, [positions.length]);

  let instances:
    | InstancedRigidBodyProps[]
    | { key: string; position: Vector3 }[] = [];

  useEffect(() => {
    if (plantRef.current) {
      // console.log("plantRef: ", plantRef.current);
      (plantRef.current as Mesh).children.forEach((child) => {
        // console.log(child.position);
        instances.push({
          key: "instance_" + Math.random(),

          position: child.position,
        });
      });
      //handle physics here...
    }
  });

  return (
    <>
      {Object.entries(nodes).map(([key, _mesh]) => {
        return (
          <Instances
            args={[(_mesh as Mesh).geometry, (_mesh as Mesh).material, 1]}
            key={key}
            position={[0, -1.3, 0]}
            ref={plantRef}
          >
            <Instance
              position={[-10, 0, -1]}
              scale={1.57}
              frustumCulled={false}
            />
            <Instance
              position={[15.5, 0, 11]}
              scale={1.32}
              frustumCulled={false}
            />
            <Instance
              position={[-16.5, 0, 16]}
              scale={1.42}
              frustumCulled={false}
            />
            <Instance
              position={[18, 0, -16]}
              scale={1.42}
              frustumCulled={false}
            />
            <Instance
              position={[-17, 0, -14]}
              scale={1.22}
              frustumCulled={false}
            />
          </Instances>
        );
      })}

      <InstancedRigidBodies
        ref={rigidBodiesRef}
        instances={instances}
        colliders="cuboid"
        type="fixed"
        colliderNodes={[<CuboidCollider args={[0.5, 0.5, 0.5]} />]}
      >
        <instancedMesh
          args={[undefined, undefined, COUNT]}
          count={COUNT}
        ></instancedMesh>
      </InstancedRigidBodies>
    </>
  );
}
