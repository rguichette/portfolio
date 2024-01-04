import { Box, Text, useHelper } from "@react-three/drei";
import { GroupProps, MeshProps, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import {
  MeshStandardMaterial,
  PointLight,
  PointLightHelper,
  SpotLightHelper,
  Vector3,
} from "three";

interface SignProps extends GroupProps {
  title?: string;
  boardScale?: Vector3;
  intensity?: number;
  color?: string;
}

export default function Sign(props: SignProps) {
  let {
    title = "hello >",
    boardScale = new Vector3(3, 1, 0.1),
    intensity = 2,
    color = "green",
    ...restprops
  } = props;

  let lightRef = useRef();
  useHelper(lightRef, PointLightHelper);
  let signMaterialRef = useRef();

  useFrame(({ scene }) => {
    let pl = scene.getObjectByName("signLight") as PointLight;

    if (signMaterialRef.current) {
      // console.log(
      //   "SIGN: ",
      //   (signMaterialRef.current as MeshStandardMaterial).opacity
      // );

      let randomBrightness = Math.random();

      console.log(pl);

      // console.log(randomBrightness);
      if (randomBrightness > 0.87 && randomBrightness < 96) {
        let subtract = randomBrightness - Math.random() + 0.3;

        (signMaterialRef.current as MeshStandardMaterial).opacity = subtract;

        pl.intensity = subtract * intensity;
      }
    }
  });

  return (
    <group {...props}>
      <Box scale={boardScale}>
        <meshPhysicalMaterial
          transparent
          opacity={0.6}
          roughness={0.2}
          metalness={0.2}
          reflectivity={1}
          iridescence={0.8}
        />
      </Box>
      <Text position={[0, -0.12, 0.07]}>
        {title}
        <meshStandardMaterial
          color={color}
          emissive={color}
          ref={signMaterialRef}
        />
      </Text>

      <pointLight
        ref={lightRef}
        position={[0, 0, 0]}
        intensity={intensity}
        color={color}
        scale={boardScale}
        name="signLight"
      />
    </group>
  );
}
