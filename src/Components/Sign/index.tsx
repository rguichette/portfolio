import { Box, Text } from "@react-three/drei";
import { GroupProps, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import {
  DoubleSide,
  Group,
  MeshStandardMaterial,
  PointLight,
  Vector3,
} from "three";

interface SignProps extends GroupProps {
  title?: string;
  boardScale?: Vector3 | undefined;
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

  let lightRef = useRef(null);
  // useHelper(lightRef, PointLightHelper);
  let signMaterialRef = useRef(null);
  let textgroupRef = useRef<Group>(null);

  useEffect(() => {
    if (textgroupRef.current) {
      console.log(textgroupRef.current.children);
    }
  }, []);

  useFrame(({ scene }) => {
    let pl = scene.getObjectByName("signLight") as PointLight;

    if (signMaterialRef.current) {
      let randomBrightness = Math.random();

      if (randomBrightness > 0.87 && randomBrightness < 96) {
        let subtract = randomBrightness - Math.random() + 0.3;

        (signMaterialRef.current as MeshStandardMaterial).opacity =
          subtract * 0.8;

        pl.intensity = subtract * intensity;
      }
    }
  });

  return (
    <group {...props}>
      <Box scale={boardScale}>
        <meshPhysicalMaterial
          transparent
          opacity={0.9}
          roughness={0.2}
          metalness={0.2}
          reflectivity={1}
          iridescence={0.8}
        />
      </Box>

      <group ref={textgroupRef}>
        <Text position={[0, -0.12, 0.07]}>
          {title}
          <meshStandardMaterial
            color={color}
            emissive={color}
            ref={signMaterialRef}
            side={DoubleSide}
          />
        </Text>
      </group>
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
