//needs a mesh ref in order to controll

import {
  KeyboardControls,
  KeyboardControlsEntry,
  useKeyboardControls,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { ColliderProps } from "@react-three/rapier";
import { MutableRefObject, RefObject, useEffect, useMemo } from "react";
import { BufferGeometry, Group, Mesh } from "three";

enum Controls {
  forward = "forward",
  back = "back",
  left = "left",
  right = "right",
  jump = "jump",
}

export let co = [
  { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
  { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
  { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
  { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
  { name: Controls.jump, keys: ["Space"] },
];

type controllerProps = {
  obj: MutableRefObject<ColliderProps | Group>;
};

let CharacterController: React.FC<controllerProps> = (
  props: controllerProps
) => {
  const [_, get] = useKeyboardControls<Controls>();

  let moveSpeed = 0.05;
  let rotationSpeed = 0.03;
  useFrame(() => {
    if (get().forward) {
      // props.obj.current.translateZ(-moveSpeed);
    }
    if (get().back) {
      // props.obj.current.translateZ(moveSpeed);
    }
    if (get().left) {
      // props.obj.current.rotation.y += rotationSpeed;
    }
    if (get().right) {
      // props.obj.current.rotation.y -= rotationSpeed;
    }
    // props.obj.current.getWorldDirection;
  });
  //collision
  //characher
  //c- animation
  // positioning

  return <>{/* {console.log("Character: ", props.obj)} */}</>;
};

export default CharacterController;
