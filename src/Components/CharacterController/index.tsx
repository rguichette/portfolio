//needs a mesh ref in order to controll

import { KeyboardControlsEntry } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { MutableRefObject, RefObject, useEffect, useMemo } from "react";
import { BufferGeometry, Mesh } from "three";

enum Controls {
  forward = "forward",
  back = "back",
  left = "left",
  right = "right",
  jump = "jump",
}

type controllerProps = {
  obj: MutableRefObject<Mesh>;
};

let CharacterController: React.FC<controllerProps> = (
  props: controllerProps
) => {
  useFrame(() => {
    // props.obj.current.position.x += 0.1;
  });

  return <>{console.log("Character: ", props.obj.current)}</>;
};

export default CharacterController;
