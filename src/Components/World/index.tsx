import "./styles.css";

import {
  Box,
  Environment,
  GizmoHelper,
  GizmoViewport,
  Grid,
  Html,
  KeyboardControls,
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
import CharacterController, { co } from "../CharacterController/index.tsx";
import Skills from "../Resume/Skills/index.tsx";

import { OrbitControls as OC } from "three-stdlib";
import { log, vec3 } from "three/examples/jsm/nodes/Nodes.js";
import Experience from "../Experience/index.tsx";
import Projects from "../Projects/index.tsx";
import Involvement from "../Involvement/index.tsx";

let World = () => {
  // let { scene } = useThree();

  let ccr = useRef(null!);

  // scene.background = new THREE.Color("rgba(63,74,205,1)");
  // {"x":0}, {"y":-10}, {"z":0}
  // console.log(wl.)

  const lightRef = useRef<THREE.DirectionalLight>(null!);
  const charRef = useRef<THREE.Mesh>(null!);

  let dcRef = useRef<OC>(null!);
  let camRef = useRef<THREE.PerspectiveCamera>(null!);

  useEffect(() => {
    if (camRef.current) {
      if (charRef.current) camRef.current.lookAt(charRef.current.position);
      charRef.current?.add(camRef.current);

      // camRef.current.zoom = 0.1;
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
    c?.getWorldPosition(y.add(new THREE.Vector3(1, 15.0, 16)));
    // console.log(y);

    c?.add(camera);

    // add( new THREE.Vector3(0,0,0));

    camera.lookAt(y.add(new THREE.Vector3(0.1, 0.6, 0.1)));
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

        <Skills scale={0.5} position={[-10, 0, 30]} />
        {/* <Experience position={[-25, 0, -25]} Mcolor="red" /> */}
        {/* <Experience position={[-25, 0, -25]} Mcolor="red" />
        <Projects position={[17, 0, 30]} Mcolor="green" />*/}
        <Involvement position={[25, 0, -35]} Mcolor="blue" />

        <KeyboardControls map={co}>
          <Character
            scale={0.3}
            ref={charRef}
            name="character"
            position={[0, -0.35, 0]}
          />
          <CharacterController obj={charRef} />
        </KeyboardControls>

        <Box>
          <meshBasicMaterial wireframe color={"red"} />
        </Box>

        <OrbitControls
          minPolarAngle={0.1}
          maxPolarAngle={1.6}
          // enableZoom={false}
        />

        <PerspectiveCamera
          ref={camRef}
          position={[0, -0.5, 5]}
          // near={0.2}
          // zoom={0.5}
          makeDefault
        />
      </Suspense>
    </>
  );
};

export default World;
