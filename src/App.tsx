import { Canvas } from "@react-three/fiber";
import World from "./Components/World";
import LoadingPage from "./Components/LoadingScreen";
import { Suspense } from "react";
import WorkStation from "./Components/Workstation";
import Monitor from "./Components/Monitor";
import CharacterController from "./Components/CharacterController";
import { Box, Html, OrbitControls, Plane } from "@react-three/drei";
import Portal from "./Components/portal";

import * as THREE from "three";
import Particles from "./Components/Particles";
import Projects from "./Components/Resume/Projects";
import { Physics } from "@react-three/rapier";
import City from "./Components/City";
import PlayGound from "./playGround";
import Player from "./Components/Player/Player";
import { useAtomValue } from "jotai";

import DetailPopUp from "./Components/DetailPopUp";
import HtmlInteractivity from "./Components/HtmlInteractivity/HtmlInteractivity";

function App() {
  return (
    <>
      <Canvas
        className="w-screen h-screen"
        shadows
        // camera={{ fov: 24, position: [10, -1, 2] }}
      >
        <Suspense>
          <World />

          {/* <Particles /> */}

          {/* <Portal
            lightColor={new THREE.Color("yellow")}
            position={[3, 0, 10]}
          /> */}
          {/* <Portal lightColor={new THREE.Color("green")} position={[0, 0, 0]} /> */}

          {/* <WorkStation /> */}
          {/* <Monitor vidSrc="/3Dassets/textures/codeScroll.mp4" /> */}
          {/* <LoadingPage /> */}
        </Suspense>
      </Canvas>

      {/* <>{en && <button className="absolute top-0 z-10">Engage</button>}</> */}
      {/* {details && <DetailPopUp />} */}
      <HtmlInteractivity />
    </>
  );
}

export default App;
