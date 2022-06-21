import React, { Ref, useEffect, useRef } from "react";
import * as THREE from "three";
import {
  Box,
  Sphere,
  SpotLight,
  useAnimations,
  useGLTF,
  useHelper,
} from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Group, MeshBasicMaterial } from "three";

export default function Environment() {
  let gltf,
    { animations, scene } = useGLTF("/models/Home.glb");

  console.log("====================================");
  console.log("HOUSE: ", scene);
  console.log("====================================");
  return (
    <mesh scale={0.5} name="homeMesh">
      <primitive object={scene} />;
      <meshBasicMaterial opacity={1} />
    </mesh>
  );
}
