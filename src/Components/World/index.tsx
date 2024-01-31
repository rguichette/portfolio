import "./styles.css";

import {
  Box,
  Cloud,
  Environment,
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

import Skills from "../Resume/Skills/index.tsx";

import { log, vec3 } from "three/examples/jsm/nodes/Nodes.js";
import Projects from "../Resume/Projects/index.tsx";
import Involvement from "../Resume/Involvement/index.tsx";
import { CuboidCollider, Physics, RigidBody } from "@react-three/rapier";
import Player from "../Player/Player.tsx";

import { CameraHelper, Mesh, Vector3 } from "three";

import { OrbitControls as OCtype, RectAreaLightHelper } from "three-stdlib";

import CameraControls from "camera-controls";
import { useAtom } from "jotai";
import { infoAtom } from "../../state/index.tsx";
import CamView from "../CamView/index.tsx";
import City from "../City/index.tsx";
import Ground from "../Ground/index.tsx";
import PlayGound from "../../playGround/index.tsx";
import Contact from "../contact/index..tsx";
import BluePrint from "../City/bluePrint.tsx";
import SkillsDetails from "../SkillsDetails/index.tsx";

CameraControls.install({ THREE: THREE });

let World = () => {
  let characterRef = useRef<Mesh>(null!);
  let [popUP, setPopUP] = useAtom(infoAtom);

  let mLightRef = useRef(null);
  let hLightRef = useRef(null);

  useEffect(() => {});

  useHelper(mLightRef.current && mLightRef, THREE.PointLightHelper);
  // useHelper(hLightRef.current && hLightRef, THREE.HemisphereLightHelper);

  return (
    <>
      <Preload all />
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
          color={new THREE.Color("white")}
          position={[0, 5, 0]}
          noise={50}
        />

        {/* <fog attach="fog" color={"#53376c"} /> */}

        <ambientLight intensity={0.3} />
        <ambientLight intensity={1} />

        {/* /3Dassets/Environment/plants/alien_plant.glb
        public/3Dassets/Environment/plants/plants.glb
        public/3Dassets/Cogs.glb


*/}

        {/* <Environment files={"/assets/skyboxPink2.hdr"} background ground /> */}

        {/* <OrbitControls /> */}
        {/* <Suspense>
          <group position={[-20, 0, -20]}></group>
        </Suspense> */}

        <PlayGound />
        <CamView />
        <Physics gravity={[0, -9.988, 0]}>
          <Suspense>
            <Player position={[0, 1, 0]} ref={characterRef} />
          </Suspense>
          <City />
        </Physics>
      </Suspense>
    </>
  );
};

export default World;
