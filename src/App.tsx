import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { Environment } from "./Components/3D";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Canvas>
        {/* <mesh>
         
          <planeGeometry args={[1, 1, 1]} />
        </mesh> */}
        {/* <ambientLight /> */}
        {/* <Sphere args={[0.5]}>
          <meshBasicMaterial color="hotpink" />
        </Sphere> */}
        <Environment />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
