import { MeshProps, useFrame } from "@react-three/fiber";
import { forwardRef, useEffect, useRef } from "react";
import { Group, Mesh } from "three";
import * as THREE from "three";
import CharacterController, { co } from "../CharacterController";
import {
  KeyboardControls,
  useAnimations,
  useFBX,
  useGLTF,
  useKeyboardControls,
} from "@react-three/drei";
import { mix } from "three/examples/jsm/nodes/Nodes.js";

enum Controls {
  forward = "forward",
  back = "back",
  left = "left",
  right = "right",
  jump = "jump",
}

// import character from '../../3Dassets'
let Character: React.FC<MeshProps> = forwardRef<Mesh, MeshProps>(
  (props, ref) => {
    let charRef = useRef<Group>(null!);

    let { scene: ch, animations } = useGLTF("/3Dassets/character/charAnim.glb");
    const { actions, mixer } = useAnimations(animations, ch);

    let [sub, get] = useKeyboardControls<Controls>();

    //animation list

    let idle = animations.find(
      (clip) => clip.name == "idle"
    ) as THREE.AnimationClip;

    let turnRight = animations.find(
      (clip) => clip.name == "turnRight"
    ) as THREE.AnimationClip;
    let typing = animations.find(
      (clip) => clip.name == "typing"
    ) as THREE.AnimationClip;
    let walking = animations.find(
      (clip) => clip.name == "walking"
    ) as THREE.AnimationClip;

    useFrame(() => {
      if (get().forward) {
        mixer.clipAction(idle).fadeOut;
        mixer.clipAction(walking).play();

        console.log("hello");
      } else if (get().back) {
        mixer.clipAction(walking).timeScale = -1;

        mixer.clipAction(walking).play();
      } else {
        mixer.clipAction(walking).stop();

        // mixer.clipAction(idle).play();
      }
    });
    return (
      <>
        <group ref={charRef}>
          <mesh ref={ref} {...props}>
            {/* <boxGeometry attach={"geometry"} />
            <meshBasicMaterial color={"yellow"} /> */}
            <mesh rotation={[0, Math.PI, 0]} scale={1} position={[0, -0.5, 2]}>
              <primitive object={ch} />
            </mesh>
          </mesh>
        </group>

        {/* <CharacterController obj={charRef} /> */}
      </>
    );
  }
);

export default Character;
