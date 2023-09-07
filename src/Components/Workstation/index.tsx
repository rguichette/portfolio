import {
  Box,
  Gltf,
  Html,
  Plane,
  RoundedBox,
  TransformControls,
  useGLTF,
  useTexture,
  useVideoTexture,
} from "@react-three/drei";
import { MeshProps, useFrame, useLoader } from "@react-three/fiber";
import React, {
  Suspense,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { Mesh, MeshBasicMaterial, MeshStandardMaterial } from "three";

import { MonitorProps } from "../Monitor";
import * as THREE from "three";
import Monitor from "../Monitor";
import Keyboard from "../Keyboard";

// import desk from "../../3Dassets/glassDesk.glb";

let WorkStation: React.FC<MeshProps> = forwardRef<Mesh, MeshProps>(
  (props, ref) => {
    let monRef = useRef<Mesh & MonitorProps>(null!);
    let monRefRight = useRef<Mesh & MonitorProps>(null!);
    let monRefLeft = useRef<Mesh & MonitorProps>(null!);

    let [toggle, setToggle] = useState(false);

    // let { scene: desk } = useGLTF("/3Dassets/glassDesk.glb");
    // let keyboardTexture = useTexture("/");

    useEffect(() => {
      //turn on and off
      if (toggle) {
        console.log("turning on...");
        (
          (monRef.current.children[0] as Mesh).material as MeshBasicMaterial
        ).color.setRGB(1, 1, 1);

        console.log(
          ((monRef.current.children[0] as Mesh).material as MeshBasicMaterial)
            .color
        );
      } else {
        console.log("turning off...");
        (
          (monRef.current.children[0] as Mesh).material as MeshBasicMaterial
        ).color.setRGB(0, 0, 0);
      }

      monRefRight.current.position.x = 16;
      monRef.current.position.z = -4;
      monRefRight.current.rotation.y = -0.5;

      monRef.current.position.z = -5;

      monRefLeft.current.position.x = -16;
      monRefLeft.current.position.z = 0;
      monRefLeft.current.rotation.y = 0.5;
    }, [toggle]);

    //   "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"

    return (
      <>
        <mesh {...props} ref={ref}>
          <group scale={0.0265} position={[0, -0.4, 0]}>
            <group scale={0.8} position={[0, 6, -2.5]}>
              <Monitor
                ref={monRef}
                position={[0, 13, 0]}
                vidSrc={"/3Dassets/textures/codeScroll.mp4"}
                vidOptions={{
                  unsuspend: "canplay",
                  muted: true,
                  start: toggle,
                }}

                // vidSrc={
                //   "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
                // }
              />

              <Monitor
                ref={monRefRight}
                position={[0, 13, 0]}
                vidSrc={"/3Dassets/textures/codeScroll.mp4"}
                vidOptions={{
                  unsuspend: "canplay",
                  muted: true,
                  start: toggle,
                }}
              />
              <Monitor
                ref={monRefLeft}
                position={[0, 13, 0]}
                vidSrc={"/3Dassets/textures/codeScroll.mp4"}
                vidOptions={{
                  unsuspend: "canplay",
                  muted: true,
                  start: toggle,
                }}
              />
            </group>
            {/*desk*/}
            {/* <Gltf src="/3Dassets/glassDesk.glb" scale={[13, 12, 8]} /> */}
            {/* <Keyboard/> */}

            <Keyboard
              scale={10}
              rotation={[-Math.PI / 2 + 0.3, 0, 0]}
              position={[0, 8, 0]}
            />
          </group>
        </mesh>
      </>
    );
  }
);

export default WorkStation;
