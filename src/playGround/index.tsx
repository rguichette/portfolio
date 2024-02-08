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
import Bookcase from "../Components/Bookcase";
import summeries from "../statements";

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
  // summeries.involvement.globe

  return (
    <>
      <Bookcase />
      <pointLight />
    </>
  );
}

// useFont.preload("/fonts/helvetiker_regular.typeface.json");
