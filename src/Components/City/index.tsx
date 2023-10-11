import {
  Box,
  Gltf,
  Instance,
  Instances,
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
      <mesh rotation={[0, 2, 0]}>
        <Monitor position={[0, 7, -35]} scale={0.6} rotation={[0.4, 0, 0]} />
      </mesh>

      <mesh rotation={[0, -1.5, 0]} position={[60, 6, 60]}>
        <Monitor scale={1.5} rotation={[0, 0, 0]} />
      </mesh>

      {/* <Factory position={[0, 0, 0]} scale={[2, 1, 2]} /> */}
      {/* <Factory position={[8, 4, 15]} scale={[3, 4, 6]} /> */}
      {/* <Instances limit={10} range={100}>
        <LL position={[1, 0.78, 8]} scale={2} />

        <Instance position={[0, 1, 0]} />
        <Instance position={[0, 1, 5]} />
      </Instances> */}

      {/* [-15, 0, 10] */}
      <Skills position={[55, 0, 10]} scale={1} />
      <Involvement position={[-57, -0.7, -56]} />
      {/* <WorkStation position={[0, 1, 0]} /> */}
      <Projects position={[0, 0, 56]} rotation={[0, 0.6, 0]} />

      {/* <Experience /> */}

      <Ground />
      {/* <Box /> */}
    </>
  );
}
