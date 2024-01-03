import * as THREE from "three";
import Ground from "../Ground";
import {
  Box,
  Gltf,
  Merged,
  Plane,
  Ring,
  RoundedBox,
  useGLTF,
  useVideoTexture,
} from "@react-three/drei";

import BluePrint from "./bluePrint";
import Plants from "../Plants";
import { DoubleSide, Material, Mesh, MeshBasicMaterial } from "three";
import { color } from "three/examples/jsm/nodes/Nodes.js";
import { Suspense, useEffect } from "react";
import Projects from "../Resume/Projects";
import Involvement from "../Resume/Involvement";
import Seats from "../Seats";
import Statues from "../Statues";
import WorkExperience from "../Resume/WorkExperience";
import Skills from "../Resume/Skills";

export default function City() {
  return (
    <>
      {/* <BluePrint /> */}

      {/* <Statues /> */}

      {/* ACTUAL CITY */}

      <Involvement position={[45, 0, 5]} rotation={[0, -Math.PI, 0]} />
      <Projects />
      <Skills />
      {/* <WorkExperience /> */}

      <Plants />
      <Ground />
    </>
  );
}
