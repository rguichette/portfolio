import { Canvas, useLoader } from "@react-three/fiber";
import World from "./Components/World";
import LoadingPage from "./Components/LoadingScreen";
import { Suspense, useEffect, useState } from "react";
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
import { Provider, useAtom, useAtomValue } from "jotai";

import DetailPopUp from "./Components/DetailPopUp";
import HtmlInteractivity from "./Components/HtmlInteractivity/HtmlInteractivity";
import { DefaultLoadingManager } from "three";
import { enterWorld, isMobileAtom } from "./state";
import MobileControls from "./Components/MobileControls";
import TestAnything, {
  countAtom,
} from "./Components/MobileControls/testAnything";
import MobileControls2 from "./Components/MobileControls2";

import { isMobile } from "is-mobile";

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
  let [_ismobile, setIsMobile] = useAtom(isMobileAtom);

  useEffect(() => {
    if (isMobile()) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [_ismobile, setIsMobile]);

  let worldEdtered = useAtomValue(enterWorld);

  return (
    <>
      {/* this acts as a blinder */}
      {/* <div
        className={`absolute z-10  ${
          worldEdtered && "hidden"
        }  left-0 bg-slate-900 w-screen h-screen  `}
      /> */}
      {/* <MobileControls /> */}

      <KeyboardControls map={co}>
        <Canvas
          className=" w-screen h-screen "
          shadows

          // camera={{ fov: 24, position: [10, -1, 2] }}
        >
          {_ismobile && <MobileControls2 />}
          <World />
          {/* <LoadingPage /> */}
        </Canvas>
      </KeyboardControls>
      <HtmlInteractivity />
    </>
  );
}

export default App;
