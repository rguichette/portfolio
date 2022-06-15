import { Suspense, useRef, useState } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import {
  Box,
  OrbitControls,
  PerspectiveCamera,
  Plane,
  Sphere,
} from "@react-three/drei";
import { Character, Environment, TvArea } from "./Components/3D";
import { Monitor } from "./Components/3D";
import WorkMonitors from "./Components/3D/WorkMonitors";
import CameraControls from "./Components/Controls/CameraControls";

function App() {
  const [count, setCount] = useState(0);

  let r = useRef();

  //pretend char lives here to work with cam.

  return (
    <div className="App">
      <Canvas>
        <Suspense>
          {/* <Environment /> */}
          {/* <Monitor position={[1, 2, 5]} scale={[5, 5, 5]} /> */}
          {/* <TvArea /> */}
          {/* <WorkMonitors /> */}
          <PerspectiveCamera makeDefault ref={r} position={[0, 0, 5]} />
          <ambientLight />

          <Plane
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -2, 2]}
            scale={[20, 20, 20]}
          >
            <meshBasicMaterial color={"gray"} />
          </Plane>
          {/* {console.log(r)} */}
          <Character cam={r as unknown as THREE.PerspectiveCamera} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
