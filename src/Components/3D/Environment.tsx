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
import { Group } from "three";

export default function Environment() {
  let gltf,
    { animations, scene } = useGLTF("/models/tron_gothic_city_gltf/scene.gltf");

  const { actions } = useAnimations(animations, scene);

  let pointLight = useRef();
  console.log("ANIMATIONS:", animations);
  console.log(THREE.PointLight);

  useHelper(pointLight, THREE.PointLightHelper, 0.4);

  useEffect(() => {
    if (pointLight.current) {
      let pl = pointLight.current as THREE.PointLight;
      pl.position.y = 3.9;
    }
  });

  useFrame(() => {
    actions[0]?.play();
  });

  return (
    <group>
      <ambientLight />
      {/* <pointLight
        ref={pointLight as unknown as Ref<THREE.SpotLight> | undefined}
        // intensity={10}
      /> */}
      <mesh position={[0, 0, 0]} scale={[0.001, 0.001, 0.001]}>
        <primitive object={scene} />
      </mesh>
    </group>
  );
}
