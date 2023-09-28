import { MeshProps, useFrame, useThree } from "@react-three/fiber";
import { Suspense, forwardRef, useEffect, useRef } from "react";
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
import {
  CapsuleCollider,
  CapsuleColliderProps,
  ColliderProps,
  MeshCollider,
  RapierRigidBody,
  RigidBody,
  euler,
  interactionGroups,
  quat,
} from "@react-three/rapier";

enum Controls {
  forward = "forward",
  back = "back",
  left = "left",
  right = "right",
  jump = "jump",
}

// import character from '../../3Dassets'
let Character: React.FC<ColliderProps> = forwardRef<Mesh, ColliderProps>(
  (props, ref) => {
    let charRef = useRef<Group>(null!);

    let rbRef = useRef<RapierRigidBody>(null!);

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
    let scene = useThree();

    let mPos = new THREE.Vector3();

    useFrame(({ scene }) => {
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

      /**************************************** */

      //handle rbRef and char
    });

    return (
      <>
        <group ref={charRef}>
          <RigidBody>
            {/* <Suspense> */}
            <mesh ref={ref} {...props}>
              {/* <boxGeometry attach={"geometry"} />
            <meshBasicMaterial color={"yellow"} /> */}

              <mesh
                rotation={[0, Math.PI, 0]}
                scale={1}
                position={[0, -0.5, 2]}
              >
                <primitive object={ch} />
              </mesh>
            </mesh>
            {/* </Suspense> */}
            <CapsuleCollider
              args={[0.2, 0.2]}
              collisionGroups={interactionGroups([0, 5], 7)}
            />
          </RigidBody>
        </group>

        {/* <CharacterController obj={charRef} /> */}
      </>
    );
  }
);

export default Character;
