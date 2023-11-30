import { useAnimations, useGLTF, useKeyboardControls } from "@react-three/drei";
import { MeshProps, useFrame } from "@react-three/fiber";
import {
  CapsuleCollider,
  RapierRigidBody,
  RigidBody,
} from "@react-three/rapier";
import { useAtom, useAtomValue } from "jotai";
import React, { forwardRef, useEffect, useRef } from "react";
import { AnimationAction, Mesh, Quaternion, Scene, Vector3 } from "three";
import { showDetailsPopUp, showHelpPopUp } from "../../state";
import { duelJsUserDataType } from "../MobileControls2";

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

  let idleAnimation = animations.find(
    (clip) => clip.name == "idle"
  ) as THREE.AnimationClip;

  let turnRightAnimation = animations.find(
    (clip) => clip.name == "turnRight"
  ) as THREE.AnimationClip;

  let typing = animations.find(
    (clip) => clip.name == "typing"
  ) as THREE.AnimationClip;
  let walkingAnimation = animations.find(
    (clip) => clip.name == "walking"
  ) as THREE.AnimationClip;

  useFrame(({ clock, scene }) => {
    // Joystick: -- handles mobile input
    let joystick = scene.getObjectByName("Joystick_data")
      ?.userData as duelJsUserDataType;

    if (rbRef.current) {
      // Check if the "left" key is pressed
      if (!detailsWindow && !helpWindow) {
        if (get().left || joystick?.right?.x < 0) {
          angle += turnSpeed;
          // Rotate based on user input
          direction.set(0, 1, 0);
          rotation.setFromAxisAngle(direction, angle);
          rbRef.current.setRotation(rotation, true);
        }

        if (get().right || joystick?.right?.x > 0) {
          angle -= turnSpeed;
          // Rotate based on user input
          direction.set(0, 1, 0);
          rotation.setFromAxisAngle(direction, angle);
          rbRef.current.setRotation(rotation, true);
        }

        // Calculate the forward direction based on the current rotation
        direction.set(0, 0, 1);
        direction.applyQuaternion(rotation);
        //handl mobile

        if (
          (get().forward || joystick?.left?.y > 0) &&
          !helpWindow &&
          !detailsWindow
        ) {
          direction.multiplyScalar(speed);
          rbRef.current.setLinvel(direction, true);
        } else if (get().back || joystick?.left?.y < 0) {
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
      mixer.clipAction(walkingAnimation).play();
      mixer.clipAction(walkingAnimation).timeScale = 1;
      mixer.clipAction(idleAnimation).stop();
    } else if (get().back && !helpWindow && !detailsWindow) {
      mixer.clipAction(walkingAnimation).timeScale = -1;
      mixer.clipAction(walkingAnimation).play();
    } else if (get().left) {
      // mixer.clipAction(turnRight).timeScale = -0.9;
      // mixer.clipAction(turnRight).play();
    } else if (get().right) {
      // mixer.clipAction(turnRight).play();
    } else {
      mixer.clipAction(idleAnimation).play();
      mixer.clipAction(walkingAnimation).stop();
      mixer.clipAction(turnRightAnimation).stop();
    }
  });

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
          <mesh position={[0, -1.1, 0]} ref={charRef} castShadow>
            <primitive object={character} />
          </mesh>
        </group>
        <CapsuleCollider args={[0.69, 0.43]} />
      </mesh>
    </RigidBody>
  );
});

export default Player;
