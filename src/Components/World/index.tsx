import "./styles.css";

import {
  Box,
  KeyboardControls,
  OrbitControls,
  PerspectiveCamera,
  Sphere,
  Text3D,
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
import Particles from "../Particles/index.tsx";
import { Physics } from "@react-three/rapier";
import Player from "../Player/Player.tsx";

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

  enum Controls {
    forward = "forward",
    back = "back",
    left = "left",
    right = "right",
    jump = "jump",
  }

  useEffect(() => {
    if (camRef.current) {
      if (charRef.current) camRef.current.lookAt(charRef.current.position);
      charRef.current?.add(camRef.current);
    }
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

  // let ch = useFBX("/3Dassets/character/ch12.fbx");

  // let offset = new THREE.Vector3(0, 0.3, -2.5);
  return (
    <>
      <Suspense>
        <directionalLight
          ref={lightRef}
          intensity={0.4}
          position={[0, 20, 0]}
          rotation={[0, 0, Math.PI]}
          castShadow
          scale={4}
        />

        {/* <City /> */}

        {/* <Skills scale={0.5} position={[-25, 0, 35]} /> */}
        {/* <Experience position={[-25, 0, -25]} Mcolor="red" /> */}
        {/* <Experience position={[-25, 0, -25]} Mcolor="red" /> */}
        {/* <Involvement position={[25, 0, -35]} Mcolor="blue" /> */}
        {/* <Projects position={[20, 0, 30]} Mcolor="green" /> */}
        {/* <Particles /> */}
        <group position={[2, -0.4, 1]}>
          <Sphere scale={0.2} />
        </group>

        {/* <Text3D
          font={"fonts/Ultra_Regular.json"}
          bevelEnabled
          size={2}
          curveSegments={12}
        >
          Hello
        </Text3D> */}

        <KeyboardControls map={co}>
          <Physics debug>
            <Player />
          </Physics>
          {/* <CharacterController obj={charRef} /> */}
        </KeyboardControls>

        <Box position={[0, 0, -3]}>
          <meshBasicMaterial color={"red"} />
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
