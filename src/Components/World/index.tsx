import "./styles.css";

import {
  Box,
  Cloud,
  Gltf,
  Html,
  Instance,
  Instances,
  KeyboardControls,
  OrbitControls,
  OrbitControlsProps,
  PerspectiveCamera,
  Plane,
  Preload,
  Sparkles,
  Sphere,
  Stars,
  Text3D,
  useHelper,
} from "@react-three/drei";
import InfoCard from "../InfoCard";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";
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
import City from "../City/index.tsx";
import Ground from "../Ground/index.tsx";
import PlayGound from "../../playGround/index.tsx";
import Contact from "../contact/index..tsx";

CameraControls.install({ THREE: THREE });

let World = () => {
  let characterRef = useRef<Mesh>(null!);
  let [popUP, setPopUP] = useAtom(infoAtom);

  let mLightRef = useRef(null);

  useEffect(() => {});

  useHelper(mLightRef.current && mLightRef, THREE.PointLightHelper);

  return (
    <>
      <Suspense>
        <Stars
          radius={70}
          count={2000}
          factor={4}
          saturation={2}
          fade
          speed={1}
        />
        <Sparkles
          size={10}
          scale={[250, 10, 250]}
          count={1000}
          color={new THREE.Color("yellow")}
          position={[0, 5, 0]}
          noise={50}
        />

        {/* <fog attach="fog" near={1} far={75} color={"#53376c"} /> */}

        <ambientLight intensity={1.2} />
        {/* /3Dassets/Environment/plants/alien_plant.glb
        public/3Dassets/Environment/plants/plants.glb
        public/3Dassets/Cogs.glb


*/}
        <OrbitControls />
        {/* <Suspense>
          <group position={[-20, 0, -20]}></group>
        </Suspense> */}
        {/* <CamView /> */}

        <Physics debug gravity={[0, -9.988, 0]}>
          <Suspense>
            <Player position={[0, 1, 0]} ref={characterRef} />
          </Suspense>
          {/* <PlayGound /> */}
          <City />
        </Physics>

        <Preload all />
      </Suspense>
    </>
  );
};

export default World;
