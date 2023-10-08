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
import { CuboidCollider, RigidBody } from "@react-three/rapier";

// import desk from "../../3Dassets/glassDesk.glb";

let WorkStation: React.FC<MeshProps> = forwardRef<Mesh, MeshProps>(
  (props, ref) => {
    let monRef = useRef<Mesh & MonitorProps>(null!);
    let monRefRight = useRef<Mesh & MonitorProps>(null!);
    let monRefLeft = useRef<Mesh & MonitorProps>(null!);

    let monGroupRef = useRef<THREE.Group>(null);

    let [toggle, setToggle] = useState(false);

    // let { scene: desk } = useGLTF("/3Dassets/glassDesk.glb");
    // let keyboardTexture = useTexture("/");

    useEffect(() => {
      //turn on and off

      if (monGroupRef.current) {
        if (monGroupRef.current.children) {
          monGroupRef.current.children.map((c) => {
            console.log("child: ", c);
            if (toggle) {
              (
                (c.children[0] as Mesh).material as MeshBasicMaterial
              ).color.setRGB(1, 1, 1);
            } else {
              (
                (c.children[0] as Mesh).material as MeshBasicMaterial
              ).color.setRGB(0, 0, 0);
            }
          });
        }
      }
    }, [toggle]);

    //   "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"

    return (
      <>
        <mesh {...props} ref={ref}>
          <group position={[0, 1, 0]}>
            <group ref={monGroupRef}>
              <Monitor
                scale={0.2}
                position={[3.3, 0, 0]}
                rotation={[0, -0.8, 0]}
                vidSrc={"/3Dassets/textures/codeScroll.mp4"}
                vidOptions={{ muted: true }}
                ref={monRefLeft}
              />

              <Monitor
                scale={0.2}
                position={[0, 0, -1.2]}
                vidSrc={"/3Dassets/textures/codeScroll.mp4"}
                vidOptions={{ muted: true }}
                ref={monRef}
              />

              <Monitor
                scale={0.2}
                position={[-3.3, 0, 0]}
                rotation={[0, 0.8, 0]}
                ref={monRefRight}
                vidSrc={"/3Dassets/textures/codeScroll.mp4"}
                vidOptions={{ muted: true }}
              />
            </group>
            <CuboidCollider
              args={[1, 1, 0.8]}
              sensor
              position={[0, 0, 0.7]}
              onIntersectionEnter={() => {
                setToggle(true);
              }}
            />

            <CuboidCollider
              args={[5, 1, 0.01]}
              sensor
              position={[0, 0, 2]}
              onCollisionExit={() => {
                if (toggle) {
                  setToggle(false);
                }
                console.log("exiting...");
              }}
            />
          </group>

          <Keyboard position={[0, -0.5, 0]} scale={2} rotation={[-0.7, 0, 0]} />
        </mesh>
      </>
    );
  }
);

export default WorkStation;
