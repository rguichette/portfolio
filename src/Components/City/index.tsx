import * as THREE from "three";
import Ground from "../Ground";

import BluePrint from "./bluePrint";
import Plants from "../Plants";

import Projects from "../Resume/Projects";
import Involvement from "../Resume/Involvement";
import WorkExperience from "../Resume/WorkExperience";
import Skills from "../Resume/Skills";
// import { Instructions } from "../ControllsInstructions";

import { CuboidCollider, RigidBody } from "@react-three/rapier";
import Contact from "../contact/index.";
import PlayGound from "../../playGround";
import { Instructions } from "../Controls";
import SuccessStatue from "../StatueComponents/SuccessStatue";
import BookStatue from "../StatueComponents/BookStatue";
import BenchStatue from "../StatueComponents/WorkoutStatue";
import DynamicStatue from "../StatueComponents/DynamicStatue";
import Bowling from "../bowling";
import Dominos from "../Domino";
import BoxStack from "../stack";
import Introducion from "../Introduction";
import Arrow from "../Arrow";
import { FlickeringSign, Sign } from "../Sign";

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

      {/* <PlayGound /> */}
      {/* <BluePrint /> */}

      <Instructions scale={2.7} position={[5, 1.5, 6]} />
      <Introducion position={[-2, 0, 2]} />
      {/* <Statues /> */}

      <SuccessStatue scale={3.5} position={[6.5, 0, 35]} />
      <BookStatue position={[40, -1.3, -7]} />
      <BenchStatue scale={1.6} position={[8, 0.7, -40]} />
      <DynamicStatue scale={14} position={[-38, -4, 9]} />

      <Involvement position={[45, 0, 5]} rotation={[0, -Math.PI, 0]} />
      <Projects position={[0, 0.5, 8]} />
      <Skills position={[-30, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
      {/* <WorkExperience /> */}
      {/* <Bowling scale={1.5} position={[0, 1, 0]} /> */}
      <Dominos />
      <BoxStack />
      {/* signs*/}

      {/* <Involvement position={[5, 0, 5]} rotation={[0, -Math.PI, 0]} /> */}
      <Arrow
        instances={[
          {
            position: [-23, 3, -15.4],
            rotation: [0, Math.PI / 2, 0],
            key: "A_1",
          },
          {
            position: [43, 1.5, 3],
            key: "A_2",
          },
        ]}
      />

      {/* Entry Direction */}
      <group position={[0, 1, 0]}>
        <FlickeringSign
          title="Projects"
          scale={0.4}
          position={[0, -0.5, 3]}
          baseLightStregth={6.5}
          color="green"
          rotation={[0, -Math.PI / 2, 0]}
        />
        <FlickeringSign
          title="Skills"
          scale={0.4}
          position={[-1, 0.7, 3]}
          color="gold"
          rotation={[0, Math.PI, 0]}
        />
        <FlickeringSign
          scale={0.4}
          position={[0, 0.2, 3]}
          rotation={[0, 0, 0]}
          lightIntensity={6}
          baseLightStregth={10}
          title="Involvement"
          color="#AA336A"
        />
      </group>

      <group name="current_locations" position={[0, 3.2, 0]}>
        <Sign title="Projects" position={[7, 0, 40]} color="limegreen" />
        <Sign
          title="Involvement"
          position={[50, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
          color="purple"
        />
        <Sign
          title="Skills"
          position={[-30, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
          color="gold"
        />
      </group>

      <Plants />
      <Ground />
    </>
  );
}
