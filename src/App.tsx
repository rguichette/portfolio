import { Canvas } from "@react-three/fiber";
import World from "./Components/World";
import LoadingPage from "./Components/LoadingScreen";
import { Html } from "@react-three/drei";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Canvas className="w-screen h-screen" shadows>
        <Suspense>
          <World />
        </Suspense>
        {/* <LoadingPage /> */}
      </Canvas>
    </>
  );
}

export default App;
