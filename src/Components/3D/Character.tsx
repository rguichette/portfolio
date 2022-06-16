import React, { MutableRefObject, useEffect, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Box, PerspectiveCamera, useHelper } from "@react-three/drei";

import * as THREE from "three";
import { Object3D, CameraHelper } from "three";

let moveFoward = false;
let moveBack = false;
let turnLeft = false;
let turnRight = false;

export default function Character({ cam }: { cam?: THREE.PerspectiveCamera }) {
  let character = useRef<THREE.Mesh>();
  let offset = new THREE.Vector3(0, 0, 5);
  let camera =
    cam as unknown as React.MutableRefObject<THREE.PerspectiveCamera>;

  const objectPosition = new THREE.Vector3();
  useEffect(() => {
    character.current?.add(camera.current);
    character.current?.getWorldPosition(objectPosition);
  });

  if (character.current) {
    if (camera) {
      console.log("Cam: ", camera.current);
    }
  }

  useHelper(
    camera as unknown as MutableRefObject<Object3D<Event>>,
    CameraHelper
  );

  //init

  useFrame((state, delta) => {
    let _r = character.current as unknown as THREE.Mesh;
    if (character.current) {
      if (moveFoward) {
        _r.translateZ(0.1);
        console.log("hi");
      } else if (moveBack) {
        _r.translateZ(-0.1);
      }
      if (turnRight) {
        _r.rotation.y -= 0.0872665;
      } else if (turnLeft) {
        _r.rotation.y += 0.0872665;
      }

      //camera
      camera.current.position.copy(objectPosition).add(offset);
    }

    // let idealOffset = calculateIdealLookat();
    // let idealLookat = calculateIdealOffset();

    if (camera) {
      // console.log("camera", camera);
    }
  });

  // /////////////////// cam ////////////////////////// cam ///////////////////////////// cam

  const calculateIdealOffset = () => {
    const idealOffset = new THREE.Vector3(0, 20, -30);
    if (character.current) {
      idealOffset.applyQuaternion(character.current.quaternion);
      idealOffset.add(character.current.position);
    }
    return idealOffset;
  };

  const calculateIdealLookat = () => {
    const idealLookat = new THREE.Vector3(0, 100, 50);
    if (character.current) {
      idealLookat.applyQuaternion(character.current.quaternion);
      idealLookat.add(character.current.position);
    }
    return idealLookat;
  };

  return (
    <mesh>
      <Box ref={character} position={[0, 0, 3]} />
    </mesh>
  );
}

let keys: any = {};

let move = () => {
  if (keys["w"] || keys["ArrowUp"]) {
    moveFoward = true;
    console.log("FOWARD: ", moveFoward);
  } else if (keys["s"] || keys["ArrowDown"]) {
    moveBack = true;
    console.log("BACK");
  }
  if (keys["a"] || keys["ArrowLeft"]) {
    console.log("LEFT");
    turnLeft = true;
  } else if (keys["d"] || keys["ArrowRight"]) {
    turnRight = true;
    console.log("RIGHT");
  }
};

document.onkeydown = (e) => {
  if (!keys[e.key]) {
    keys[e.key] = true;
  }

  setInterval(move, 500);
};

document.onkeyup = (e) => {
  keys[e.key] = false;

  moveFoward = false;
  moveBack = false;
  turnLeft = false;
  turnRight = false;
};
