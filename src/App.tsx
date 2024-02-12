import { Canvas, useLoader } from "@react-three/fiber";
import World from "./Components/World";
import LoadingPage from "./Components/LoadingScreen";
import { Suspense, useEffect, useState } from "react";

import { KeyboardControls } from "@react-three/drei";

import * as THREE from "three";
import Projects from "./Components/Resume/Projects";
import { Physics } from "@react-three/rapier";

import { Provider, useAtom, useAtomValue } from "jotai";

// import DetailPopUp from "./Components/DetailPopUp";
import HtmlInteractivity from "./Components/HtmlInteractivity/HtmlInteractivity";
import { DefaultLoadingManager } from "three";
import { enterWorld, showSkillsSummary } from "./state";
// import MobileControls from "./Components/MobileControls";
// import TestAnything, {
//   countAtom,
// } from "./Components/MobileControls/testAnything";
// import MobileControls2 from "./Components/MobileControls2";

import { isMobile } from "is-mobile";
import InfoCrad from "./Components/InfoCard";
import SkillsDetails from "./Components/SkillsDetails";
import MobileControls2 from "./Components/MobileControls2";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  Selection,
  SelectiveBloom,
} from "@react-three/postprocessing";
import Warning from "./Components/Warning";

enum Controls {
  forward = "forward",
  back = "back",
  left = "left",
  right = "right",
  jump = "jump",
  run = "run",
}

let co = [
  { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
  { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
  { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
  { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
  { name: Controls.jump, keys: ["Space"] },
  {
    name: Controls.run,
    keys: ["ShiftRight", "ShiftLeft"],
  },
];
function App() {
  // if (isMobile()) {
  //   console.log("MOBILE!");
  // } else {
  //   console.log("NOT MOBILE");
  // }
  // let [_ismobile, setIsMobile] = useAtom(isMobileAtom);

  // useEffect(() => {
  //   if (isMobile()) {
  //     setIsMobile(true);
  //   } else {
  //     setIsMobile(false);
  //   }
  // }, [_ismobile, setIsMobile]);

  // let worldEdtered = useAtomValue(enterWorld);

  return (
    <>
      {/* this acts as a blinder */}
      {/* <div
        className={`absolute z-10  ${
          worldEdtered && "hidden"
        }  left-0 bg-slate-900 w-screen h-screen  `}
      /> */}
      {/* <MobileControls /> */}

      {/* <InfoCrad /> */}
      {/* {showSkills && <SkillsDetails />} */}
      <Warning />
      <KeyboardControls map={co}>
        <Canvas
          className=" w-screen h-screen "
          shadows
          camera={{ far: 10000 }}

          // camera={{ fov: 24, position: [10, -1, 2] }}
        >
          <MobileControls2 />
          <World />
        </Canvas>
        <HtmlInteractivity />
      </KeyboardControls>
    </>
  );
}

export default App;
