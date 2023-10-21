import "./styles.css";

import {
  Box,
  Gltf,
  Html,
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
import { useAtom } from "jotai";
import { infoAtom } from "../../state/index.tsx";
import DetailCard from "../Cards/detailCard.tsx";

CameraControls.install({ THREE: THREE });

let World = () => {
  let characterRef = useRef<Mesh>(null!);
  let [popUP, setPopUP] = useAtom(infoAtom);

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

        {popUP && (
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
            {/* <img src="" */}
          </Html>
        )}
      </Suspense>
    </>
  );
};

export default World;
