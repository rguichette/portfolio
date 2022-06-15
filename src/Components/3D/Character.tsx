import React, { useEffect, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Box, PerspectiveCamera } from "@react-three/drei";

import * as THREE from "three";

let moveFoward = false;
let moveBack = false;
let turnLeft = false;
let turnRight = false;

export default function Character({ cam }: { cam?: THREE.PerspectiveCamera }) {
  console.log("CHAracter");

  let ref = useRef();
  useEffect(() => {
    console.log("CAM: ", cam);
  }, []);

  useFrame(() => {
    let _r = ref.current as unknown as THREE.Mesh;
    if (ref.current) {
      if (moveFoward) {
        _r.position.z -= 0.1;
      } else if (moveBack) {
        _r.position.z += 0.1;
      }
      if (turnRight) {
      } else if (turnLeft) {
      }
    }
  });

  return (
    <mesh>
      <Box ref={ref} position={[0, 0, 3]} />
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
  } else if (keys["d"] || keys["ArrowRight"]) {
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
