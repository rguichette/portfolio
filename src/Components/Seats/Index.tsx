import {
  Box,
  Gltf,
  Instance,
  Instances,
  Merged,
  useGLTF,
} from "@react-three/drei";
import { GroupProps, MeshProps } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
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

let temp = new Object3D();
// TODO: implement instamces

let SeatModel = forwardRef(function SeatModel(props: GroupProps, ref) {
  let { nodes, scene } = useGLTF(
    "public/assets/involvement/office_chair.glb"
  ) as GltfExtend;

  console.log("Scene: ", nodes);

  const instancedMeshRef = useRef();

  //   useEffect(() => {
  //     if (instancedMeshRef.current) {
  //       // Set positions
  //       for (let i = 0; i < 3; i++) {
  //         temp.position.set(Math.random() * 6, Math.random(), Math.random() * 3);
  //         temp.updateMatrix();
  //         instancedMeshRef.current.setMatrixAt(i, temp.matrix);
  //         console.log("hi");
  //       }
  //       // Update the instance
  //       instancedMeshRef.current.instanceMatrix.needsUpdate = true;
  //     }
  //   }, []);

  return (
    <group {...props} ref={ref as any}>
      {Object.entries(nodes).map(([id, _mesh], i) => {
        console.log(_mesh);

        return (
          <mesh args={[_mesh.geometry, undefined]} material={_mesh.material} />
        );
      })}
    </group>
  );
});

export default function Seats() {
  let cs = 0.02;
  return (
    <>
      <SeatModel scale={cs} position={[3.4, -1.3, 0]} rotation={[0, 0.1, 0]} />
      <SeatModel
        scale={cs}
        position={[0.9, -1.3, 1.8]}
        rotation={[0, -0.8, 0]}
      />
      <SeatModel
        scale={cs}
        position={[-1, -1.3, 2.2]}
        rotation={[0, -1.2, 0]}
      />
      {/* left */}
      <SeatModel scale={cs} position={[1, -1.3, -1.6]} rotation={[0, 0.3, 0]} />
      <SeatModel scale={cs} position={[-1, -1.3, -2]} />
    </>
  );
}

// "Office Chair" (https://skfb.ly/VUUt) by FangedAnteater is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
