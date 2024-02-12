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
import { useAtom, useAtomValue } from "jotai";
import { showEngageButton } from "../../state";
import Arrow from "../Arrow";
// import { showEngageButton } from "../../state";

// import desk from "../../3Dassets/glassDesk.glb";

let WorkStation: React.FC<MeshProps> = forwardRef<Mesh, MeshProps>(
  (props, ref) => {
    let monRef = useRef<Mesh & MonitorProps>(null!);
    let monRefRight = useRef<Mesh & MonitorProps>(null!);
    let monRefLeft = useRef<Mesh & MonitorProps>(null!);

    let monGroupRef = useRef<THREE.Group>(null);

    let [showEngBtn, setEngBtn] = useAtom(showEngageButton);

    return (
      <>
        <mesh {...props} ref={ref}>
          <group position={[0, 1, 0]}>
            <group ref={monGroupRef}>
              <Monitor
                scale={0.2}
                position={[3.3, 0, 0]}
                rotation={[0, -0.8, 0]}
                vidSrc={"/assets/videoTextures/blue.mp4"}
                vidOptions={{ muted: true }}
                ref={monRefLeft}
              />

              <Monitor
                scale={0.2}
                position={[0, 0, -1.2]}
                vidSrc={"/assets/videoTextures/data.mp4"}
                vidOptions={{ muted: true }}
                ref={monRef}
              />

              <Monitor
                scale={0.2}
                position={[-3.3, 0, 0]}
                rotation={[0, 0.8, 0]}
                ref={monRefRight}
                vidSrc={"/assets/videoTextures/green.mp4"}
                vidOptions={{ muted: true }}
              />
            </group>
          </group>

          <Keyboard position={[0, -0.5, 0]} scale={2} rotation={[-0.7, 0, 0]} />

          <CuboidCollider
            args={[1, 1, 1]}
            sensor
            onIntersectionEnter={() => {
              setEngBtn(true);
              // console.log("collision....");
            }}
            onIntersectionExit={() => {
              setEngBtn(false);
            }}
          />
        </mesh>
      </>
    );
  }
);

export default WorkStation;

// Video by <a href="https://pixabay.com/users/skarletmotion-6385614/?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=178565">Skarlet Motion</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=178565">Pixabay</a>
// Video by <a href="https://pixabay.com/users/republica-24347/?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=171">Republica</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=171">Pixabay</a>

// Video by <a href="https://pixabay.com/users/skarletmotion-6385614/?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=177220">Skarlet Motion</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=177220">Pixabay</a>
