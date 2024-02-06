import {
  Box,
  Effects,
  Plane,
  SpotLight,
  Text,
  Text3D,
} from "@react-three/drei";

import myfront from "/assets/fonts/Tele-Marines_Regular.json?url";
import { MeshProps, extend } from "@react-three/fiber";
import {
  Color,
  Material,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
} from "three";
import { Children, forwardRef, useEffect, useRef } from "react";
import {
  Bloom,
  BrightnessContrast,
  EffectComposer,
  Glitch,
  Noise,
  Outline,
  Select,
  Selection,
  SelectiveBloom,
} from "@react-three/postprocessing";
import { FlickeringSign, Sign } from "../Components/Sign";

export default function PlayGound() {
  console.log(myfront);

  let text = "SKILLS";
  let meshRef1 = useRef<Mesh>(null);

  useEffect(() => {
    console.log(meshRef1.current);
  }, []);

  /**
   *
   *
   *
   *
   *
   *
   *
   *
   *
   */
  return (
    <>
      {/* <FlickeringSign
        lightIntensity={15}
        color="green"
        baseLightStregth={6.5}
        title="Projects"
        position={[1, 2, 1]}
      />
      <FlickeringSign
        lightIntensity={1}
        color="Pink"
        baseLightStregth={2}
        title="Skills"
      />

      <Plane args={[10, 10]} position={[0, 0, -2]}>
        <meshStandardMaterial name="material" />
      </Plane> */}
    </>
  );
}

// useFont.preload("/fonts/helvetiker_regular.typeface.json");
