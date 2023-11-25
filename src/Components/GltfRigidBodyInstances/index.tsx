import {
  Box,
  Instance,
  Instances,
  Merged,
  PivotControls,
  Trail,
  TransformControls,
  useGLTF,
} from "@react-three/drei";
import React, { Ref, forwardRef, useEffect, useMemo, useRef } from "react";
import {
  BoxGeometry,
  Group,
  InstancedMesh,
  Mesh,
  MeshBasicMaterial,
  Object3D,
} from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";

import * as BufferGeometryUtils from "three/addons/utils/BufferGeometryUtils.js";
import { Geometry } from "three/examples/jsm/deprecated/Geometry.js";
import { InstancedMeshProps } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";

type GLTFResult = GLTF & {
  nodes: {};
  materials: {};
};

type InstanceProps = InstancedMeshProps & {
  /*** location of gltf file. {path: url, useDraco: bool  } */
  file: { path: string; useDraco?: boolean };
  /***number of instances. default: 5  */
  count?: number;
  /***
    random distance spread between each instance. default: {x:3, y:0, z:3}
    */
  randomSpread?: { x: number; y: number; z: number };
  /**if true, the distances between each instance will be random. default: true.
   *
   */
  randomDist?: boolean;
  /** constant distance between meshes.  can only use if randomDist is false. default: {x:2, y:0, z:2},  */
  distance?: { x: number; y: number; z: number };
  /** random offset - helpful when trying to avoid certain positions. defualt: {x:0,y:0,z:0} */
  startOffset?: { x: number; y: number; z: number };
};

let GltfRigidBodyInstances = forwardRef<Group, InstanceProps>(
  (
    {
      count = 5,
      randomSpread = { x: 3, y: 0, z: 3 },
      randomDist = true,
      distance = { x: 2, y: 0, z: 2 },
      startOffset = { x: 0, y: 0, z: 0 },
      file = { path: "", useDraco: true },
      ...props
    },
    ref
  ) => {
    const { nodes, scene } = useGLTF(
      file.path,

      file.useDraco
    ) as GLTFResult;

    console.log("HELLO N: ", scene);

    let instances = useMemo(() => {
      let instances = [];

      for (let i = 0; i < count; i++) {
        instances.push(
          <Merged meshes={nodes} key={"_mergedRigidBodyInstance: " + i}>
            {({ ...items }) => (
              <>
                <group>
                  {Object.values(items).map((I, ind) => {
                    return (
                      <mesh key={ind}>
                        <I key={ind} />
                      </mesh>
                    );
                  })}
                </group>
              </>
            )}
          </Merged>
        );
      }
      return instances;
    }, [nodes, props]);

    let plantRef = useRef(null);
    let instancedMeshRef = useRef(null);

    useEffect(() => {
      // console.log(plantRef.current);
      let IM = instancedMeshRef.current as unknown as Mesh;
      // console.log(
      //   "Instances count",
      //   (instancedMeshRef.current as unknown as InstancedMesh).children
      // );

      let dist = { x: distance.x, y: distance.y, z: distance.z };
      instances.forEach((_, i) => {
        console.log(i);
        if (randomDist) {
          // console.log("children", IM.children);
          IM.children[i].position.set(
            (Math.random() * 101 - 50) * randomSpread.x + startOffset.x,
            (Math.random() * 101 - 50) * randomSpread.y + startOffset.y,
            (Math.random() * 101 - 50) * randomSpread.z + startOffset.z
          );
        } else {
          dist.x += distance.x + startOffset.x;
          dist.y += distance.y + startOffset.y;
          dist.z += distance.z + startOffset.z;
          IM.children[i].position.set(dist.x, dist.y, dist.z);
        }
      });
    }, [instances]);

    console.log(instances);

    // console.log(scene);
    return (
      <>
        <group ref={ref}>
          <instancedMesh ref={instancedMeshRef} count={count} {...props}>
            {instances.map((M, i) => {
              console.log("M is:", M);
              return <mesh key={i}>{M}</mesh>;
            })}
          </instancedMesh>
        </group>
      </>
    );
  }
);

export default GltfRigidBodyInstances;
