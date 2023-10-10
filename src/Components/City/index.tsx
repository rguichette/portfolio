import {
  Box,
  Gltf,
  Plane,
  Sphere,
  useHelper,
  useTexture,
} from "@react-three/drei";
import { useEffect, useRef } from "react";
import {
  BoxHelper,
  Camera,
  DoubleSide,
  MeshPhongMaterial,
  Vector3,
} from "three";
import LL from "../BuildingComponents/LL";
import Ground from "../Ground";
import Factory from "../BuildingComponents/Factory";
import Monitor from "../Monitor";
import Library from "../BuildingComponents/Library";
import Skills from "../Resume/Skills";
import Experience from "../Experience";
import Involvement from "../Resume/Involvement";
import Player from "../Player/Player";
import WorkStation from "../Workstation";
import Projects from "../Resume/Projects";

export default function City() {
  // let txt = useTexture("/city01.png");
  // let txt2 = useTexture("/wing5.png");
  // let txt3 = useTexture("/wing2.png");
  // let txt4 = useTexture("/wing4.png");

  return (
    <>
      {/* <Monitor position={[0, 7, -5]} scale={0.4} rotation={[0.4, 0, 0]} /> */}

      {/* <Factory position={[0, 0, 0]} scale={[2, 1, 2]} /> */}
      {/* <Factory position={[8, 4, 15]} scale={[3, 4, 6]} /> */}
      {/* <LL position={[1, 0.5, 8]} scale={2} /> */}

      {/* <Skills position={[0, 0, 0]} scale={1} /> */}
      {/* <Involvement position={[0, -0.7, 0]} /> */}
      {/* <WorkStation scale={1.5} position={[0, 1, 0]} /> */}
      {/* <Projects /> */}

      {/* <Experience /> */}
      <Box />
      <Ground />
      {/* <Box /> */}
    </>
  );
}
