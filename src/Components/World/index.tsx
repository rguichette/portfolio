import "./styles.css";

import {
  Box,
  Cloud,
  Gltf,
  Html,
  KeyboardControls,
  OrbitControls,
  OrbitControlsProps,
  PerspectiveCamera,
  Plane,
  Sparkles,
  Sphere,
  Stars,
  Text3D,
  useHelper,
} from "@react-three/drei";
import InfoCard from "../InfoCard";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import City from "../City";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";

import WorkStation from "../Workstation";
import Keyboard from "../Keyboard";
import Portal from "../portal/index.tsx";

import Skills from "../Resume/Skills/index.tsx";

import { log, vec3 } from "three/examples/jsm/nodes/Nodes.js";
import Experience from "../Experience/index.tsx";
import Projects from "../Resume/Projects/index.tsx";
import Involvement from "../Resume/Involvement/index.tsx";
import { CuboidCollider, Physics, RigidBody } from "@react-three/rapier";
import Player from "../Player/Player.tsx";

import { CameraHelper, Mesh, Vector3 } from "three";

import { OrbitControls as OCtype } from "three-stdlib";

import CameraControls from "camera-controls";
import { useAtom } from "jotai";
import { infoAtom } from "../../state/index.tsx";
import DetailCard from "../Cards/detailCard.tsx";
import CamView from "../CamView/index.tsx";
import City2 from "../City2/index.tsx";
import GltfInstances from "../Nature/index.tsx";

CameraControls.install({ THREE: THREE });

let World = () => {
  let characterRef = useRef<Mesh>(null!);
  let [popUP, setPopUP] = useAtom(infoAtom);

  enum Controls {
    forward = "forward",
    back = "back",
    left = "left",
    right = "right",
    jump = "jump",
  }

  let co = [
    { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
    { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
    { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
    { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
    { name: Controls.jump, keys: ["Space"] },
  ];

  return (
    <>
      <Suspense>
        <Stars
          radius={70}
          count={5000}
          factor={4}
          saturation={2}
          fade
          speed={1}
        />

        <Sparkles
          size={10}
          scale={[400, 10, 400]}
          count={2000}
          color={new THREE.Color("yellow")}
          position={[0, 5, 0]}
          noise={50}
        />

        {/* <fog attach="fog" near={3} far={15} color={"#eedfa3"} /> */}

        <directionalLight
          intensity={0.4}
          position={[0, 20, 0]}
          rotation={[0, Math.PI, 0]}
          castShadow
          scale={4}
        />
        <ambientLight intensity={0.9} />

        {/* <Nature /> */}
        <GltfInstances
          file={{
            path: "/3Dassets/Environment/plants/alien_plant.glb",
            useDraco: true,
          }}
          onClick={() => {
            console.log("CLICKED!");
          }}
          distance={{ x: 10, y: 0, z: 10 }}
          randomSpread={{ x: 40, y: 10, z: 33 }}
          scale={0.3}
          position={[0, -1.5, 0]}
          startOffset={4}
        />

        {/* /3Dassets/Environment/plants/alien_plant.glb
        public/3Dassets/Environment/plants/plants.glb


*/}
        <OrbitControls />

        {/* <CamView /> */}
        <KeyboardControls map={co}>
          <Physics debug gravity={[0, -9.988, 0]}>
            <Player position={[0, 1, 0]} ref={characterRef} />

            <City2 />
          </Physics>
        </KeyboardControls>

        {/* {popUP && (
          <Html fullscreen>
            <div className="bg-slate-500 h-screen w-screen items-center align-middle justify-center content-center flex flex-col">
              <div className="details flex ">
                <DetailCard title="FrontEnd" />
                <DetailCard title="BackEnd" />
              </div>

              <button
                className="bg-slate-300 p-2 w-28 rounded-xl mt-4"
                onClick={() => {
                  console.log("closing...");
                  setPopUP(false);
                }}
              >
                Exit
              </button>
            </div>
  
          </Html>
        )} */}
      </Suspense>
    </>
  );
};

export default World;
