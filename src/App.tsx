import { Canvas } from "@react-three/fiber";
import World from "./Components/World";
import LoadingPage from "./Components/LoadingScreen";
import { Suspense } from "react";
import WorkStation from "./Components/Workstation";
import Monitor from "./Components/Monitor";
import CharacterController from "./Components/CharacterController";
import { Box } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas className="w-screen h-screen" shadows>
        <Suspense>
          <World />

          {/* <WorkStation /> */}
          {/* <Monitor vidSrc="/3Dassets/textures/codeScroll.mp4" /> */}
          {/* <LoadingPage /> */}
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
