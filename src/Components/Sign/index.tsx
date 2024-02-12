import { Text } from "@react-three/drei";
import { GroupProps, MeshProps, useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import React, { useRef } from "react";
import { ReactElement, forwardRef, useEffect } from "react";
import {
  Material,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PointLight,
} from "three";
import { Group } from "three/examples/jsm/libs/tween.module.js";

interface signProps extends MeshProps {
  title?: string;
  material?: Material;
  direction?: boolean;
  color?: string;
}

type FlickerProps = GroupProps & {
  title?: string;
  color?: string;
  baseLightStregth?: number;
  maxLightStregth?: number;
  offset?: number;
  lightIntensity?: number;
};

export function FlickeringSign({
  baseLightStregth = 1.2,
  maxLightStregth = 2,
  offset = 2,
  color = "pink",
  title = "flicker",
  lightIntensity = 2,

  ...props
}: FlickerProps) {
  let mtRef = useRef(null);
  let lightRef = useRef(null);

  let myMat = new MeshStandardMaterial({
    color: color,
    emissive: color,
    emissiveIntensity: baseLightStregth,
    toneMapped: false,
  });

  useFrame(({ clock }) => {
    let rand = Math.floor(Math.random() * 20 + baseLightStregth);

    // console.log("RAND", rand);

    if (rand % 2 == 0 && rand % 3 == 0) {
      myMat.emissiveIntensity =
        Math.floor(Math.sin(clock.elapsedTime * rand)) + offset;
      if (lightRef.current)
        (lightRef.current as PointLight).intensity = lightIntensity / rand;
    } else {
      myMat.emissiveIntensity = baseLightStregth;
      if (lightRef.current)
        (lightRef.current as PointLight).intensity = lightIntensity;
    }
  });

  return (
    <>
      <group {...props}>
        <Sign title={title} name="_sign" direction material={myMat}></Sign>
        <pointLight intensity={lightIntensity} color={color} ref={lightRef} />
      </group>
    </>
  );
}

export let Sign = forwardRef(function Sign(
  {
    title = "hello",
    direction = false,

    material = new MeshStandardMaterial(),
    ...props
  }: signProps,
  ref
) {
  //   console.log("SIGN: ", material);

  let { color } = props;
  if (color) {
    (material as MeshStandardMaterial).color.set(color);
  }

  return (
    <mesh {...props} ref={ref as any}>
      <Text font={"/assets/fonts/Interstellar Trip.ttf"} material={material}>
        {`${title}`} {direction && ">"}
      </Text>
      <Text
        font={"/assets/fonts/Interstellar Trip.ttf"}
        rotation={[0, Math.PI, 0]}
        material={material}
      >
        {direction && "<"} {`${title}`}
        {/* {children ? children : <meshBasicMaterial />} */}
      </Text>
    </mesh>
  );
});
