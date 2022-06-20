import React, {
  forwardRef,
  MutableRefObject,
  Ref,
  useEffect,
  useRef,
} from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Box, PerspectiveCamera, useGLTF, useHelper } from "@react-three/drei";

import * as THREE from "three";
import { Object3D, CameraHelper, BufferGeometry, Mesh } from "three";
import CameraControls from "../Controls/CameraControls";

let moveFoward = false;
let moveBack = false;
let turnLeft = false;
let turnRight = false;

let Character = forwardRef(
  ({ cam }: { cam?: THREE.PerspectiveCamera }, ref?) => {
    let character = useRef<THREE.Mesh>();
    let camera =
      cam as unknown as React.MutableRefObject<THREE.PerspectiveCamera>;

    const objectPosition = new THREE.Vector3();

    //init
    useEffect(() => {
      if (character.current) {
        character.current.rotation.set(0, Math.PI, 0);
      }
    });

    useFrame((state, delta) => {
      let _r = character.current as unknown as THREE.Mesh;
      if (character.current) {
        if (moveFoward) {
          _r.translateZ(0.03);
          console.log("hi");
        } else if (moveBack) {
          _r.translateZ(-0.03);
        }
        if (turnRight) {
          _r.rotateY(-0.0872665);
          // _r.rotation.y -=
        } else if (turnLeft) {
          _r.rotateY(0.0872665);

          // _r.rotation.y += 0.0872665;
        }

        //camera
        // camera.current.position.copy(objectPosition).add(offset);
      }
    });

    //load Character
    const gltf = useGLTF("/models/male.glb");
    console.log(gltf);

    return (
      <mesh
        scale={0.5}
        ref={character as unknown as Ref<Mesh<BufferGeometry>>}
        rotation={[0, -Math.PI, 0]}
      >
        {/* <Box
          ref={ref}
          // position={[0, 0, 5]}
          rotation={[0, (180 * Math.PI) / 180, 0]}
        /> */}
        <primitive ref={ref} object={gltf.scene} />
      </mesh>
    );
  }
);

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

export default Character;
