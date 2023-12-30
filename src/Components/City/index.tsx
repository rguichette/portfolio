import * as THREE from "three";
import Ground from "../Ground";
import {
  Box,
  Gltf,
  Merged,
  Plane,
  Ring,
  RoundedBox,
  useGLTF,
  useVideoTexture,
} from "@react-three/drei";

import BluePrint from "./bluePrint";
import Plants from "../Plants";
import { DoubleSide, Material, Mesh, MeshBasicMaterial } from "three";
import { color } from "three/examples/jsm/nodes/Nodes.js";
import { Suspense, useEffect } from "react";
import Projects from "../Resume/Projects";
import Involvement from "../Resume/Involvement";
import Seats from "../Seats/Index";

export default function City() {
  let { scene: dynamic, nodes } = useGLTF("/poses/dynamic.glb");
  let { scene: book } = useGLTF("/poses/book.glb");
  let { scene: sucessGroup } = useGLTF("/poses/mf_Accomplished.glb");

  let sgTexture = useVideoTexture("public/textures/video/Code.mp4");

  useEffect(() => {
    console.log("DYNAMIC:", dynamic.children[0].children[0]);
    dynamic.children[0].children[0].material = new MeshBasicMaterial({
      color: "blue",
      opacity: 0.4,
      transparent: true,
    });

    if (dynamic.children[0]) {
      // console.log(
      //   "COL: ",
      //   (dynamic.children[0].children[0] as Mesh).material.color?.set(
      //     1,
      //     0.3,
      //     0.1
      //   )
      // );
    }

    book.children.map((b, i) => {
      (b as Mesh).material = new THREE.MeshPhysicalMaterial({
        metalness: 0.3,
        reflectivity: 0.5,
      });
    });
  }, [dynamic, book]);

  let baseMaterial = new THREE.MeshStandardMaterial({ color: "green" });

  return (
    <>
      {/* <BluePrint /> */}

      {/* statues */}
      <mesh
        scale={14}
        position={[-38, -4, 9]}
        material={new THREE.MeshStandardMaterial({ color: "green" })}
      >
        <primitive object={dynamic} />
        <Box scale={[1, 0.1, 1]} position={[0, 0.2, 0]} />
      </mesh>

      <mesh scale={1.6} position={[8, 0.7, -40]}>
        <Gltf
          src="/poses/MeshBench.glb"
          scale={0.05}
          position={[0, -0.95, 0]}
        />

        <mesh position={[0, -1.2, 0]}>
          <Box scale={[1.8, 0.2, 3.8]} material={baseMaterial} />
          <Box
            scale={[1.8, 0.2, 3.4]}
            position={[0, 0.2, 0]}
            material={baseMaterial}
          />
        </mesh>
      </mesh>

      <spotLight position={[1, 1, -2]} />
      <mesh scale={3} position={[40, -1.3, -7]}>
        <primitive object={book} />
      </mesh>
      <Suspense>
        <mesh scale={3.5} position={[6.5, 0, 35]}>
          <primitive object={sucessGroup} />
          <Plane scale={[2, 1.1, 1]} position={[0, 1.2, 0.5]}>
            <meshBasicMaterial
              side={DoubleSide}
              map={sgTexture}
              transparent
              opacity={0.5}
            />
          </Plane>
          <Box scale={[2, 0.1, 2]} position={[0, -0.2, 0]} />
        </mesh>
      </Suspense>
      {/* ACTUAL CITY */}

      <Projects />
      <Involvement position={[45, 0, 5]} rotation={[0, -Math.PI, 0]} />
      <Plants />
      <Ground />
    </>
  );
}
