import "./styles.css";

import {
  Box,
  Gltf,
  KeyboardControls,
  OrbitControlsProps,
  PerspectiveCamera,
  Plane,
  Sphere,
  Text3D,
  useHelper,
} from "@react-three/drei";
import InfoCard from "../InfoCard";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";
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

import { log, vec3 } from "three/examples/jsm/nodes/Nodes.js";
import Experience from "../Experience/index.tsx";
import Projects from "../Resume/Projects/index.tsx";
import Involvement from "../Resume/Involvement/index.tsx";
import Particles from "../Particles/index.tsx";
import { CuboidCollider, Physics, RigidBody } from "@react-three/rapier";
import Player from "../Player/Player.tsx";

import { CameraHelper, Mesh, Vector3 } from "three";

import { OrbitControls as OCtype } from "three-stdlib";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

import CameraControls from "camera-controls";
import CamView from "../CamView/index.tsx";

CameraControls.install({ THREE: THREE });

let World = () => {
  let characterRef = useRef<Mesh>(null!);

  // let { camera, gl, scene } = useThree();
  // let camRef = useRef<THREE.PerspectiveCamera>(null!);
  // let ran = 0;
  // let [character, setCharacter] = useState(null);

  // useEffect(() => {
  //   // Access myRef.current here after the component has rendered
  //   console.log(characterRef.current);
  // }, [scene]);
  //MINE DOWN HERE:

  // // camera.rotation.set(0, Math.PI, 0);
  // camera.position.set(0, 2, -1);
  // camera.rotation.set(0, Math.PI, 0);
  // // camera.scale.set(0.1, 0.1, 0.1);

  // const controls = new OrbitControls(camera, gl.domElement);

  // useThree(({ scene }) => {
  //   let character = scene.getObjectByName("charRigidBody");

  //   console.log("CHARACTER: ", character);
  // });

  // let camOrigin = new Vector3(0, 1, 0);
  // let camOffset = new Vector3(0, 1, 1);

  // camera.position.set(camOffset.x, camOffset.y, camOffset.z);
  // camera.lookAt(camOrigin);

  // // controls.enableZoom = false;
  // controls.enablePan = false;
  // // controls.minPolarAngle = Math.PI / 4;
  // controls.maxPolarAngle = Math.PI / 2.2;

  // useFrame(() => {
  //   let character = scene.getObjectByName("charRigidBody");
  //   if (character) {
  //     // character.add(camera);
  //     // camera.lookAt(character.position.clone());
  //   }
  // });

  /*MINE *******MINE*********/

  // useFrame(({ scene, camera, clock }) => {
  //   const character = scene.getObjectByName("charRigidBody");
  //   let p = scene.getObjectByName("Player");

  //   if (character) {
  //     character.add(camera);

  //     // character.lookAt(character.position);
  //     //   controls.target.set(
  //     //     character.position.x,
  //     //     character.position.y + 1,
  //     //     character.position.z
  //     //   );
  //     //   // character.updateMatrixWorld();
  //     //   camera.updateMatrixWorld();
  //     //   // controls.enableZoom = false;
  //     //   // controls.enablePan = false;
  //     //   controls.update();
  //   }
  // });

  // const helper = new THREE.CameraHelper(camera);
  // scene.add(helper);

  return (
    <>
      <Suspense>
        <CamView />
        <KeyboardControls map={co}>
          <Physics debug gravity={[0, -9.988, 0]}>
            <Player position={[0, 1, 0]} ref={characterRef} />

            <City />
          </Physics>
        </KeyboardControls>

        <directionalLight
          intensity={0.4}
          position={[0, 20, 0]}
          rotation={[0, Math.PI, 0]}
          castShadow
          scale={4}
        />
      </Suspense>
    </>
  );
};

export default World;
