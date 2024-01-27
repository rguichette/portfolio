import * as THREE from "three";
import Ground from "../Ground";

import BluePrint from "./bluePrint";
import Plants from "../Plants";

import Projects from "../Resume/Projects";
import Involvement from "../Resume/Involvement";
import WorkExperience from "../Resume/WorkExperience";
import Skills from "../Resume/Skills";
// import { Instructions } from "../ControllsInstructions";
import Sign from "../Sign";
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
      {/* <PlayGound /> */}
      {/* <BluePrint /> */}

      <Instructions scale={2.7} position={[5, 1.5, 6]} />
      {/* <Statues /> */}
      {/* 
      <SuccessStatue scale={3.5} position={[6.5, 0, 35]} />
      <BookStatue position={[40, -1.3, -7]} />
      <BenchStatue scale={1.6} position={[8, 0.7, -40]} />
      <DynamicStatue scale={14} position={[-38, -4, 9]} />

      <Involvement position={[45, 0, 5]} rotation={[0, -Math.PI, 0]} />
      <Projects />
      <Skills position={[-30, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
      <WorkExperience /> */}
      {/* <Bowling scale={1.5} position={[0, 1, 0]} /> */}
      {/* <Dominos />
      <BoxStack /> */}
      {/* signs */}

      <Involvement position={[45, 0, 5]} rotation={[0, -Math.PI, 0]} />

      <RigidBody type="fixed" position={[-4, 0, 1]}>
        <group position={[0, 0.8, 0]}>
          <Sign
            scale={0.3}
            position={[0, -0.5, 3]}
            intensity={5}
            rotation={[0, Math.PI / 2, 0]}
            title="< Pojects"
            boardScale={[5, 1, 0.1] as any}
            color="green"
          />
          <Sign
            scale={0.3}
            position={[-1, 0.7, 3]}
            intensity={5}
            rotation={[0, Math.PI, 0]}
            title="Skills >"
            boardScale={[5, 1, 0.1] as any}
            color="gold"
          />
          <Sign
            scale={0.3}
            position={[0, 0.2, 3]}
            intensity={7}
            rotation={[0, Math.PI, 0]}
            title="< Involvement"
            boardScale={[7, 1.5, 0.1] as any}
            color="#AA336A"
          />
        </group>
      </RigidBody>

      <Sign
        title="Projects"
        boardScale={[5, 1.3, 0.12] as any}
        position={[0, 3, 40]}
        rotation={[0, -Math.PI, 0]}
      />

      <Sign
        title="skills"
        boardScale={[2.5, 1.3, 0.12] as any}
        color="purple"
        position={[-30, 3, -19]}
        rotation={[0, Math.PI / 2, 0]}
      />

      <Sign
        title="Involvement"
        color="yellow"
        boardScale={[5.5, 1.3, 0.12] as any}
        rotation={[0, -Math.PI / 2, 0]}
        position={[35, 3, 0]}
      />

      <Plants />
      <Ground />
    </>
  );
}
