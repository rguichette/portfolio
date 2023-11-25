import {
  Box,
  Gltf,
  Sphere,
  shaderMaterial,
  useAnimations,
  useGLTF,
  useHelper,
} from "@react-three/drei";
import {
  MaterialNode,
  MeshProps,
  extend,
  useFrame,
  useThree,
} from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import {
  Color,
  MeshMatcapMaterial,
  MeshPhongMaterial,
  MeshPhongMaterialParameters,
  MeshPhysicalMaterial,
  PointLight,
  PointLightHelper,
  ShaderLib,
  ShaderMaterial,
  SpotLight,
  SpotLightHelper,
} from "three";

import CustomShaderMaterial from "three-custom-shader-material";
import waveVertexShader from "./waveVertexShader.glsl";

interface OrbLight extends MeshProps {
  /** stregth of the light */
  intensity?: number;

  /**flickering of the light source */
  random?: boolean;
  pulse?: boolean;
  shapeColor?: string;
  lightColor?: string;
}

//TODO: fix this
// let orbLightDefaults: OrbLight = {
//   intensity: 1,
//   random: false,
//   pulse: true,
// };

export default function OrbLight({
  shapeColor = "white",
  lightColor = shapeColor,
  ...props
}: OrbLight) {
  let uniforms = {
    uTime: { value: 0 },
  };

  let materialRef = useRef<MeshPhongMaterial>(null);
  let pointLightRef = useRef(null);

  useFrame(({ clock }) => {
    uniforms.uTime.value = clock.elapsedTime;

    if (props.pulse) {
      (pointLightRef.current as unknown as PointLight).intensity = Math.abs(
        Math.sin(clock.elapsedTime) * 10
      );
    }

    // if (pointLightRef.current) {
    //   (pointLightRef.current as PointLight).intensity = Math.abs(
    //     Math.sin(clock.elapsedTime) * 10
    //   );

    //   if (props.random) {
    //     (pointLightRef.current as PointLight).intensity = Math.abs(
    //       Math.sin(clock.elapsedTime) * 10
    //     );
    //   }
    // }
  });

  useHelper(pointLightRef.current && pointLightRef, PointLightHelper);

  //   interface;
  return (
    <mesh {...props}>
      <sphereGeometry />
      <CustomShaderMaterial
        transparent
        opacity={0.4}
        baseMaterial={MeshPhysicalMaterial}
        vertexShader={waveVertexShader}
        color={shapeColor}
        uniforms={uniforms}
        // wireframe
      />

      <pointLight
        ref={pointLightRef}
        color={lightColor}
        intensity={props.intensity}
      />
    </mesh>
  );
}
