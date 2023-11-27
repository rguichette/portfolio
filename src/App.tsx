import { Canvas, useLoader } from "@react-three/fiber";
import World from "./Components/World";
import LoadingPage from "./Components/LoadingScreen";
import { Suspense, useState } from "react";
import WorkStation from "./Components/Workstation";
import Monitor from "./Components/Monitor";

import {
  Box,
  Html,
  KeyboardControls,
  OrbitControls,
  Plane,
  useProgress,
} from "@react-three/drei";
import Portal from "./Components/portal";

import * as THREE from "three";
import Projects from "./Components/Resume/Projects";
import { Physics } from "@react-three/rapier";
import City from "./Components/City";
import PlayGound from "./playGround";
import Player from "./Components/Player/Player";
import { useAtomValue } from "jotai";

import DetailPopUp from "./Components/DetailPopUp";
import HtmlInteractivity from "./Components/HtmlInteractivity/HtmlInteractivity";
import { DefaultLoadingManager } from "three";
import { enterWorld } from "./state";
import MobileControls from "./Components/MobileControls";

enum Controls {
  forward = "forward",
  back = "back",
  left = "left",
  right = "right",
  jump = "jump",
}

let co = [
  { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
  { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
  { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
  { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
  { name: Controls.jump, keys: ["Space"] },
];
function App() {
  let worldEdtered = useAtomValue(enterWorld);
  return (
    <>
      {/* this acts as a blinder */}
      {/* <div
        className={`absolute z-10  ${
          worldEdtered && "hidden"
        }  left-0 bg-slate-900 w-screen h-screen  `}
      /> */}
      <KeyboardControls map={co}>
        <Canvas
          className=" w-screen h-screen bg-green-300 "
          shadows

          // camera={{ fov: 24, position: [10, -1, 2] }}
        >
          {/* <LoadingPage /> */}

          <World />
          {/* <LoadingPage /> */}

          {/* <WorkStation /> */}
          {/* <Monitor vidSrc="/3Dassets/textures/codeScroll.mp4" /> */}
        </Canvas>
        <MobileControls />
      </KeyboardControls>
      <HtmlInteractivity />
    </>
  );
}

export default App;
