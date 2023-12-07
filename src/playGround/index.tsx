import {
  Box,
  Detailed,
  Gltf,
  Instance,
  Instances,
  InstancesProps,
  KeyboardControls,
  Merged,
  OrbitControls,
  Plane,
  Sphere,
  useGLTF,
} from "@react-three/drei";
import {
  CuboidCollider,
  InstancedRigidBodies,
  InstancedRigidBodyProps,
  Physics,
  RapierRigidBody,
  RigidBody,
} from "@react-three/rapier";
import React, { Suspense, useEffect, useMemo, useRef } from "react";

import {
  AmbientLight,
  BoxGeometry,
  BufferGeometry,
  Euler,
  InstancedMesh,
  Mesh,
  MeshBasicMaterial,
  MeshPhongMaterial,
  MeshStandardMaterial,
  Object3D,
  SphereGeometry,
  Vector3,
} from "three";
import { InstancedMeshProps, extend, useFrame } from "@react-three/fiber";
import * as BufferGeometryUtils from "three/addons/utils/BufferGeometryUtils.js";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";
import { instance } from "three/examples/jsm/nodes/Nodes.js";
import { ForwardRefComponent } from "@react-three/drei/helpers/ts-utils";

// import p from "/smallPlant.glb";

type GLTFExtension = GLTF & {
  nodes: any;
};

export default function PlayGound() {
  let t = useGLTF("/smallPlant.glb");
  let COUNT = 2;

  const instancedMeshRef = useRef<InstancedMesh>();
  console.log(instancedMeshRef.current);

  let { nodes } = useGLTF("/smallPlant.glb") as GLTFExtension;

  let meshPositions = [];

  useEffect(() => {
    if (instancedMeshRef.current) {
      console.log(instancedMeshRef.current.children);
      instancedMeshRef.current.children.forEach((child) => {
        return meshPositions.push(child.position);
      });
    }
  }, []);

  const instances = useMemo(() => {
    const instances: InstancedRigidBodyProps[] = [];

    return instances;
  }, []);

  return (
    <>
      <group>
        <ambientLight />
        <OrbitControls />
      </group>

      <Merged meshes={nodes}>
        {() =>
          Object.entries(nodes).map(([key, _Obj]) => {
            let Obj = _Obj as Mesh;
            // console.log(Obj);
            return (
              <Instances
                args={[Obj.geometry, Obj.material, 1]}
                ref={instancedMeshRef as any}
              >
                <Instance scale={0.2} />
                <Instance scale={0.2} position={[100, 4, 300]} />
                <Instance scale={0.2} position={[300, -8, 100]} />
              </Instances>
            );
          })
        }
      </Merged>

      {/* PHYSICS */}
    </>
  );
}
