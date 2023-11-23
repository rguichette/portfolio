import { Canvas, useLoader } from "@react-three/fiber";
import World from "./Components/World";
import LoadingPage from "./Components/LoadingScreen";
import { Suspense, useState } from "react";
import WorkStation from "./Components/Workstation";
import Monitor from "./Components/Monitor";

import {
  Box,
  Html,
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

function App() {
  return (
    <>
      <Canvas
        className="w-screen h-screen"
        shadows
        // camera={{ fov: 24, position: [10, -1, 2] }}
      >
        {/* <LoadingPage /> */}

        <World />
        {/* <LoadingPage /> */}
        {/* <WorkStation /> */}
        {/* <Monitor vidSrc="/3Dassets/textures/codeScroll.mp4" /> */}
      </Canvas>

      {/* <HtmlInteractivity /> */}
    </>
  );
}

export default App;
