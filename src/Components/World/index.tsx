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
import { Suspense, useRef, useState } from "react";
import City from "../City";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";

import wl from "../../world_ItemLocations.ts";
import WorkStation from "../Workstation";
import Keyboard from "../Keyboard";
import Portal from "../portal/index.tsx";

let World = () => {
  // let { scene } = useThree();

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
        <GizmoHelper
          alignment="bottom-right" // widget alignment within scene
          margin={[80, 80]} // widget margins (X, Y)
        >
          <GizmoViewport
            axisColors={["red", "green", "blue"]}
            labelColor="black"
          />
        </GizmoHelper>

        <Portal lightColor={new THREE.Color("green")} />

        <OrbitControls />
      </Suspense>
    </>
  );
};

export default World;
