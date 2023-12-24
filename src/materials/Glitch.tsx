import React from "react";
import { DoubleSide, MeshBasicMaterial, MeshPhysicalMaterial } from "three";

import CustomShaderMaterial from "three-custom-shader-material";

import glitch from "../shaders/glitch.frag";
import { useFrame } from "@react-three/fiber";
import { uniform } from "three/examples/jsm/nodes/Nodes.js";

export default function Glitch() {
  let uniforms = {
    uTime: { value: 0 },
  };

  useFrame(({ clock }) => {
    uniforms.uTime.value = clock.elapsedTime;
  });

  return (
    <CustomShaderMaterial
      baseMaterial={MeshBasicMaterial}
      //...Any props
      transparent
      fragmentShader={glitch}
      // vertexShader={holographShaderVert}
      uniforms={uniforms}
      side={DoubleSide}
      // wiref rame
    />
  );
}
