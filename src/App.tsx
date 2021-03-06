import { Suspense, useEffect, useRef, useState } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import {
  Box,
  OrbitControls,
  PerspectiveCamera,
  Plane,
  Sphere,
  useHelper,
} from "@react-three/drei";
import { Character, Environment, TvArea } from "./Components/3D";
import { Monitor } from "./Components/3D";
import WorkMonitors from "./Components/3D/WorkMonitors";
import CameraControls from "./Components/Controls/CameraControls";
import { CameraHelper } from "three";

function App() {
  const [count, setCount] = useState(0);

  let r = useRef();
  let char = useRef();
  let cam = useRef();

  //pretend char lives here to work with cam.

  useEffect(() => {
    let _c = char.current as unknown as THREE.Mesh;
    // if (_c) _c.rotation.y = Math.PI / 2;
  }, []);

  return (
    <div className="App">
      <Canvas camera={cam.current}>
        <Suspense>
          {/* <Environment /> */}
          {/* <Monitor position={[1, 2, 5]} scale={[5, 5, 5]} /> */}
          {/* <TvArea /> */}
          {/* <WorkMonitors /> */}
          {/* <PerspectiveCamera
            // makeDefault
            ref={r}
            //  position={[0, 0, 5]}
          /> */}
          <Environment />
          <ambientLight />
          {/* 
          <Plane
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, 0, 2]}
            scale={[20, 20, 20]}
          >
            <meshBasicMaterial color={"gray"} />
          </Plane> */}
          {/* {console.log(r)} */}
          <Character ref={char} />
          {/* <Box position={[1, 0.5, 0]} /> */}
          <CameraControls character={char} />
          {/* <Box ref={boxRef} /> */}
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
