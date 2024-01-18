import { Box, Merged, useGLTF } from "@react-three/drei";
import { CuboidCollider, RigidBody, RigidBodyProps } from "@react-three/rapier";
import React, { Suspense, useEffect } from "react";
import { Mesh, MeshPhongMaterial, MeshPhysicalMaterial } from "three";
import { GLTF } from "three-stdlib";

export default function BookStatue(props: RigidBodyProps) {
  let { nodes, scene } = useGLTF("/poses/book.glb") as GLTF & {
    nodes: { Book: Mesh };
  };

  let newMesh = new Mesh(
    nodes.Book.geometry,
    new MeshPhysicalMaterial({
      color: "#fee1ff",
      metalness: 0.816,
      roughness: 0.1,
      reflectivity: 0.7,
      clearcoat: 0.84,
    })
  );
  console.log("M: ", newMesh);

  useEffect(() => {
    if (scene) {
      (scene.children[0] as Mesh).material = new MeshPhysicalMaterial({
        color: "#fee1ff",
        metalness: 0.816,
        roughness: 0.1,
        reflectivity: 0.7,
        clearcoat: 0.84,
      });
      console.log("MAT ", nodes.Book);
    }
  }, []);

  return (
    <>
      <RigidBody colliders={false} type={"fixed"} {...props} scale={3}>
        <mesh geometry={newMesh.geometry} material={newMesh.material} />

        {/* <mesh geometry={nodes.Book} /> */}
        <CuboidCollider args={[0.8, 0.5, 0.4]} position={[0, 0.5, 0]} />
        <CuboidCollider
          args={[1.7, 1, 0.1]}
          position={[0, 0.8, 0.2]}
          rotation={[-0.8, 0, 0]}
        />
      </RigidBody>
    </>
  );
}
