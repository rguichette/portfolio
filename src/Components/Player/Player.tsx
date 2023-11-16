import {
  Box,
  Cone,
  OrbitControls,
  useAnimations,
  useGLTF,
  useKeyboardControls,
} from "@react-three/drei";
import { MeshProps, useFrame } from "@react-three/fiber";
import {
  CapsuleCollider,
  CuboidCollider,
  MeshCollider,
  RapierRigidBody,
  RigidBody,
  euler,
  quat,
  vec3,
} from "@react-three/rapier";
import { useAtom, useAtomValue } from "jotai";
import React, { forwardRef, useEffect, useRef } from "react";
import {
  AnimationAction,
  AnimationClip,
  Euler,
  Group,
  LoopOnce,
  LoopRepeat,
  MathUtils,
  Mesh,
  Quaternion,
  Vector3,
} from "three";
import { color, mix, rotateUV, sin } from "three/examples/jsm/nodes/Nodes.js";
import {
  isCharacterMoving,
  showDetailsPopUp,
  showHelpPopUp,
} from "../../state";

enum Controls {
  forward = "forward",
  back = "back",
  left = "left",
  right = "right",
  jump = "jump",
}

let Player: React.FC<MeshProps> = forwardRef<Mesh, MeshProps>((props, ref) => {
  let detailsWindow = useAtomValue(showDetailsPopUp);
  let helpWindow = useAtomValue(showHelpPopUp);

  let [_, get] = useKeyboardControls<Controls>();

  let [charMoving, setCharMoving] = useAtom(isCharacterMoving);

  //  rgidBodyRef
  let rbRef = useRef<RapierRigidBody>(null!);

  let charRef = useRef<Mesh>(null);

  //direction to set the position based on changes to this vector
  let direction = new Vector3(0, 0, 0);
  let rotation = new Quaternion();

  let angle = 0;
  let turnSpeed = 0.02;
  let speed = 3;

  let { scene: character, animations } = useGLTF(
    "/3Dassets/character/charAnim.glb"
  );

  const { actions, mixer } = useAnimations(animations, character);

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

  //listen for key presses in to send "character moving message"
  // onkeydown = () => {
  //   if (get().forward || get().back) {
  //     console.log("setting true");
  //     setCharMoving(true);
  //   } else {
  //     setCharMoving(false);
  //     console.log("setting false");
  //   }
  // };

  useFrame(({ clock, scene }) => {
    if (get().forward || get().back) {
      console.log("setting true");
      // setCharMoving(true);
    } else {
      // setCharMoving(false);
      // console.log("setting false");
    }

    if (rbRef.current) {
      // Check if the "left" key is pressed
      if (!detailsWindow && !helpWindow) {
        if (get().left) {
          angle += turnSpeed;
          // Rotate based on user input
          direction.set(0, 1, 0);
          rotation.setFromAxisAngle(direction, angle);
          rbRef.current.setRotation(rotation, true);
        }
        if (get().right) {
          angle -= turnSpeed;
          // Rotate based on user input
          direction.set(0, 1, 0);
          rotation.setFromAxisAngle(direction, angle);
          rbRef.current.setRotation(rotation, true);
        }

        // Calculate the forward direction based on the current rotation
        direction.set(0, 0, 1);
        direction.applyQuaternion(rotation);

        // Set the linear velocity in the forward direction
        if (get().forward && !helpWindow && !detailsWindow) {
          direction.multiplyScalar(speed);
          rbRef.current.setLinvel(direction, true);
        } else if (get().back) {
          direction.multiplyScalar(-speed);
          rbRef.current.setLinvel(direction, true);
        }
      }
    }
    scene.updateMatrixWorld();
    charRef.current?.updateMatrixWorld();

    //Character animations:
    let currentAnim: AnimationAction;

    if (get().forward && !helpWindow && !detailsWindow) {
      mixer.clipAction(walking).play();
      mixer.clipAction(walking).timeScale = 1;
      mixer.clipAction(idle).stop();
    } else if (get().back && !helpWindow && !detailsWindow) {
      mixer.clipAction(walking).timeScale = -1;
      mixer.clipAction(walking).play();
    } else if (get().left) {
      // mixer.clipAction(turnRight).timeScale = -0.9;
      // mixer.clipAction(turnRight).play();
    } else if (get().right) {
      // mixer.clipAction(turnRight).play();
    } else {
      mixer.clipAction(idle).play();
      mixer.clipAction(walking).stop();
      mixer.clipAction(turnRight).stop();
    }
  });

  console.log("PLAYER ANIM: ", animations);

  return (
    <RigidBody
      type="dynamic"
      ref={rbRef}
      colliders={false}
      enabledRotations={[false, false, false]}
      name="charRigidBody"
      mass={66}
    >
      <mesh {...props} ref={ref} name="Player">
        <group>
          <mesh position={[0, -1.1, 0]} ref={charRef}>
            <primitive object={character} />
          </mesh>
        </group>
        <CapsuleCollider args={[0.69, 0.43]} />
      </mesh>
    </RigidBody>
  );
});

export default Player;
