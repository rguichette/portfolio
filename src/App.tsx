import { Canvas } from "@react-three/fiber";
import World from "./Components/World";
import LoadingPage from "./Components/LoadingScreen";
import { Suspense } from "react";
import WorkStation from "./Components/Workstation";
import Monitor from "./Components/Monitor";
import CharacterController from "./Components/CharacterController";
import { Box, OrbitControls, Plane } from "@react-three/drei";
import Portal from "./Components/portal";

import * as THREE from "three";
import Particles from "./Components/Particles";
import Projects from "./Components/Projects";
import { Physics } from "@react-three/rapier";
import City from "./Components/City";
import PlayGound from "./playGround";
import PlayerF from "./Components/Player/PlayerF";

function App() {
  return (
    <>
      <Canvas className="w-screen h-screen" shadows>
        <Suspense>
          <OrbitControls />
          <PlayGound />
          {/* <World /> */}
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
    </>
  );
}

export default App;
