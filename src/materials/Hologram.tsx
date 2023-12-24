import React from "react";
import { MeshBasicMaterial, MeshPhongMaterial } from "three";
import CustomShaderMaterial from "three-custom-shader-material";
import hologramShader from "../shaders/holograph.frag";
import { useFrame } from "@react-three/fiber";

export default function Hologram() {
  let uniforms = {
    uTime: { value: 0 },
  };
  useFrame(({ clock }) => {
    uniforms.uTime.value = clock.elapsedTime;
  });

  return (
    <CustomShaderMaterial
      fragmentShader={hologramShader}
      baseMaterial={MeshBasicMaterial}
      transparent
      color={"blue"}
      uniforms={uniforms}
    />
  );
}
