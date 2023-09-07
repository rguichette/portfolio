import "./styles.css";

import {
  Box,
  Environment,
  GizmoHelper,
  GizmoViewport,
  Grid,
  Html,
  Lightformer,
  OrbitControls,
  Plane,
  PresentationControls,
  TransformControls,
  useFBX,
  useHelper,
} from "@react-three/drei";
import InfoCard from "../InfoCard";
import { Suspense, useEffect, useRef, useState } from "react";
import City from "../City";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";

import wl from "../../world_ItemLocations.ts";
import WorkStation from "../Workstation";
import Keyboard from "../Keyboard";
import Portal from "../portal/index.tsx";
import Character from "../Character/index.tsx";
import CharacterController from "../CharacterController/index.tsx";
import Skills from "../Resume/Skills/index.tsx";

let World = () => {
  // let { scene } = useThree();

  let ccr = useRef(null!);

  // scene.background = new THREE.Color("rgba(63,74,205,1)");
  // {"x":0}, {"y":-10}, {"z":0}
  // console.log(wl.)

  const lightRef = useRef<THREE.DirectionalLight>(null!);

  useHelper(lightRef, THREE.DirectionalLightHelper, 15, "red");

  return (
    <>
      <Suspense>
        <ambientLight
          intensity={1}
          position={[0, 0, 0]}
          // color={"rgb(37, 150, 190)"}
        />

        <directionalLight
          ref={lightRef}
          intensity={0.4}
          position={[0, 20, 0]}
          // rotation={[0, 0, Math.PI]}
          castShadow
          scale={4}
        />

        <City />

        {/* TODO: remove and place inside City */}
        <Skills />

        <GizmoHelper
          alignment="bottom-right" // widget alignment within scene
          margin={[80, 80]} // widget margins (X, Y)
        >
          <GizmoViewport
            axisColors={["red", "green", "blue"]}
            labelColor="black"
          />
        </GizmoHelper>

        <CharacterController obj={ccr} />

        <OrbitControls />
      </Suspense>
    </>
  );
};

export default World;
