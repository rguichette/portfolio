import { Canvas } from "@react-three/fiber";
import World from "./Components/World";
import LoadingPage from "./Components/LoadingScreen";
import { Html } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas className="w-screen h-screen">
        <Html center>
          <LoadingPage />
        </Html>
      </Canvas>
    </>
  );
}

export default App;
