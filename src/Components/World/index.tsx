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
  PerspectiveCamera,
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

import { OrbitControls as OC } from "three-stdlib";
import { log } from "three/examples/jsm/nodes/Nodes.js";

let World = () => {
  // let { scene } = useThree();

  let ccr = useRef(null!);

  // scene.background = new THREE.Color("rgba(63,74,205,1)");
  // {"x":0}, {"y":-10}, {"z":0}
  // console.log(wl.)

  const lightRef = useRef<THREE.DirectionalLight>(null!);
  const charRef = useRef<THREE.Mesh>(null);

  let dcRef = useRef<OC>(null!);
  let camRef = useRef<THREE.PerspectiveCamera>(null!);

  useEffect(() => {
    if (camRef.current) {
      camRef.current.position.z = 2.5;
      camRef.current.position.y = 1;
      if (charRef.current) camRef.current.lookAt(charRef.current.position);
      charRef.current?.add(camRef.current);
      // camRef.current.position.z = -5;
      // camRef.current.rotation.x = -Math.PI / 2;
      // .position = new THREE.Vector3(0, 0, 0);
    }
    // charRef.current?.add(camRef.current);
    // (dcRef.current as typeof PerspectiveCamera)
    // charRef.current?.add(dcRef.current.object);
    // console.log("myControls", dcRef.current.object);
  });

  useFrame(({ camera, scene }) => {
    let c = scene.getObjectByName("character");
    // console.log("this: ", c);
    let y = new THREE.Vector3();
    c?.getWorldPosition(y);
    // console.log(y);
    c?.add(camera);

    // add( new THREE.Vector3(0,0,0));

    camera.lookAt(y);
    camera.updateProjectionMatrix();
  });
  // useHelper(lightRef, THREE.DirectionalLightHelper, 15, "red");
  useHelper(camRef, THREE.CameraHelper);

  // let offset = new THREE.Vector3(0, 0.3, -2.5);
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
        <Character scale={0.5} ref={charRef} name="character" />

        {/* TODO: remove and place inside City */}
        {/* <Skills /> */}

        {/* <GizmoHelper
          alignment="bottom-right" // widget alignment within scene
          margin={[80, 80]} // widget margins (X, Y)
        >
          <GizmoViewport
            axisColors={["red", "green", "blue"]}
            labelColor="black"
          />
        </GizmoHelper> */}

        {/* <CharacterController obj={ccr} /> */}
        <OrbitControls />

        <PerspectiveCamera ref={camRef} makeDefault position={[0, 1.2, 3.5]} />
      </Suspense>
    </>
  );
};

export default World;
