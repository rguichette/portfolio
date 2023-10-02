import "./styles.css";

import {
  Box,
  Gltf,
  KeyboardControls,
  OrbitControls,
  PerspectiveCamera,
  Plane,
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
import { CuboidCollider, Physics, RigidBody } from "@react-three/rapier";
import Player from "../Player/Player.tsx";
import Player2 from "../Player/Player2.tsx";
import PlayerF from "../Player/PlayerF.tsx";

let World = () => {
  // let { scene } = useThree();

  let ccr = useRef(null!);

  // scene.background = new THREE.Color("rgba(63,74,205,1)");
  // {"x":0}, {"y":-10}, {"z":0}
  // console.log(wl.)

  const lightRef = useRef<THREE.DirectionalLight>(null!);

  let camRef = useRef<THREE.PerspectiveCamera>(null!);

  const orbitControlsRef = useRef();

  useHelper(camRef, THREE.CameraHelper);

  let v = new THREE.Vector3();
  let q = new THREE.Quaternion();

  const [followCharacter, setFollowCharacter] = useState(true); // Flag to toggle camera behavior

  const cameraOffset = new THREE.Vector3(0, 1, 1);
  useFrame(({ scene, camera }) => {
    const charB = scene.getObjectByName("charRigidBody");

    if (charB && camera) {
      // charB.add(camera);
      // camera.lookAt(charB.position);
    }
  });

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

        <KeyboardControls map={co}>
          <Physics debug gravity={[0, -30, 0]}>
            <PlayerF />

            <RigidBody friction={1.5} type="kinematicPosition" ccd>
              <Box position={[0, 0.3, -3]}>
                <meshBasicMaterial color={"red"} />
              </Box>
            </RigidBody>

            <RigidBody type={"fixed"}>
              <Box position={[2, -0.5, -3]}>
                <meshBasicMaterial color={"pink"} />
              </Box>
              <CuboidCollider args={[1, 1, 1]} />
            </RigidBody>

            <RigidBody type="fixed" colliders={"cuboid"}>
              <Plane
                name="ground"
                scale={[1000, 1000, 1000]}
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, 0, 0]}
              />
              {/* <CuboidCollider args={[1000, 1, 1000]} position={[0, 0, 0]}  /> */}
            </RigidBody>
          </Physics>
          {/* <CharacterController obj={charRef} /> */}
        </KeyboardControls>

        <OrbitControls
          minPolarAngle={0.1}
          maxPolarAngle={1.6}
          // enableZoom={false}
        />

        <PerspectiveCamera
          ref={camRef}
          position={[0, -0.5, -1]}
          // near={0.2}
          // zoom={0.5}
          makeDefault
        />
      </Suspense>
    </>
  );
};

export default World;
