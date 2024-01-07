import * as THREE from "three";
import Ground from "../Ground";
import {
  Box,
  Gltf,
  Merged,
  Plane,
  Ring,
  RoundedBox,
  Text,
  useGLTF,
  useVideoTexture,
} from "@react-three/drei";

import BluePrint from "./bluePrint";
import Plants from "../Plants";
import { DoubleSide, Material, Mesh, MeshBasicMaterial, Vector3 } from "three";
import { color } from "three/examples/jsm/nodes/Nodes.js";
import { Suspense, useEffect } from "react";
import Projects from "../Resume/Projects";
import Involvement from "../Resume/Involvement";
import Seats from "../Seats";
import Statues from "../Statues";
import WorkExperience from "../Resume/WorkExperience";
import Skills from "../Resume/Skills";
import { DesktopInstructions } from "../Controlls";
import Sign from "../Sign";
import { Physics, RigidBody } from "@react-three/rapier";
import Contact from "../contact/index.";

export default function City() {
  let contactScale = 0.3;
  return (
    <>
      <Contact
        position={[0, 0.5, 0]}
        instances={[
          {
            position: [0, 0, 27],
            rotation: [0, Math.PI, 0],
            scale: contactScale,
          },
          {
            position: [-16, 0, -18],
            rotation: [0, Math.PI, 0],
            scale: contactScale,
          },
          {
            position: [17, 0, -21],
            rotation: [0, Math.PI, 0],
            scale: contactScale,
          },
          {
            position: [24, 0, 0],
            rotation: [0, Math.PI, 0],
            scale: contactScale,
          },
          {
            position: [-24, 0, 0],
            rotation: [0, Math.PI, 0],
            scale: contactScale,
          },
        ]}
      />

      <Contact
        instances={[{ position: [0, 0, 3.5], rotation: [0, Math.PI, 0] }]}
      />
      <BluePrint />
      {/* <DesktopInstructions /> */}

      {/* <Statues /> */}

      {/* <Involvement position={[0, 0, 0]} rotation={[0, -Math.PI, 0]} /> */}
      {/* <Involvement position={[45, 0, 5]} rotation={[0, -Math.PI, 0]} /> */}
      {/* <Projects /> */}
      {/* <Skills position={[-30, 0, 0]} rotation={[0, Math.PI / 2, 0]} /> */}
      {/* <WorkExperience /> */}

      {/* signs */}
      {/* <RigidBody type="fixed" position={[-4, 0, 1]}>
        <group position={[0, 0.8, 0]}>
          <Sign
            scale={0.3}
            position={[0, -0.5, 3]}
            intensity={5}
            rotation={[0, Math.PI / 2, 0]}
            title="< Pojects"
            boardScale={new Vector3(5, 1, 0.1)}
            color="green"
          />
          <Sign
            scale={0.3}
            position={[-1, 0.7, 3]}
            intensity={5}
            rotation={[0, Math.PI, 0]}
            title="Skills >"
            boardScale={new Vector3(5, 1, 0.1)}
            color="gold"
          />
          <Sign
            scale={0.3}
            position={[0, 0.2, 3]}
            intensity={7}
            rotation={[0, Math.PI, 0]}
            title="< Involvement"
            boardScale={new Vector3(7, 1.5, 0.1)}
            color="#AA336A"
          />
        </group>
      </RigidBody> */}

      {/* <Plants /> */}
      <Ground />
    </>
  );
}
