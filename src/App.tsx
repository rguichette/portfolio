import { Suspense, useState } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { Environment } from "./Components/3D";
import { Monitor } from "./Components/3D/Displays";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Canvas>
        <Suspense>
          <Environment />
          <Monitor position={[1, 2, 5]} scale={[5, 5, 5]} />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
