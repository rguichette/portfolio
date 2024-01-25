import { useAnimations, useGLTF, useKeyboardControls } from "@react-three/drei";
import { MeshProps, useFrame } from "@react-three/fiber";
import {
  CapsuleCollider,
  RapierRigidBody,
  RigidBody,
} from "@react-three/rapier";
import { useAtomValue } from "jotai";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import {
  AnimationAction,
  AnimationClip,
  Mesh,
  Quaternion,
  Vector3,
} from "three";
// import {
//   showDetailsPopUp,

//   // ,showHelpPopUp
// } from "../../state";
import { duelJsUserDataType } from "../MobileControls2";
import isMobile from "is-mobile";
import { enterWorld, showSkillsSummary } from "../../state";

enum Controls {
  forward = "forward",
  back = "back",
  left = "left",
  right = "right",
  jump = "jump",
  run = "run",
}

const Player = forwardRef<Mesh, MeshProps>(function Player(props, ref) {
  // let detailsWindow = useAtomValue(showDetailsPopUp);
  // let helpWindow = useAtomValue(showHelpPopUp);

  let [_, get] = useKeyboardControls<Controls>();
  let showSkills = useAtomValue(showSkillsSummary);
  let enteredWorld = useAtomValue(enterWorld);

  //  rgidBodyRef
  let rbRef = useRef<RapierRigidBody>(null!);

  let charRef = useRef<Mesh>(null);

  //direction to set the position based on changes to this vector
  let direction = new Vector3(0, 0, 0);
  let rotation = new Quaternion();

  let angle = 0;
  let turnSpeed = 0.02;

  let { scene: character, animations } = useGLTF("public/PlayerMain.glb");

  const { actions, mixer } = useAnimations(animations, character);
  console.log("ANIMATIONS: ", animations);

  let idleAnimation = animations.find(
    (clip) => clip.name == "Breathing_idle"
  ) as AnimationClip;

  let IdleHappy = animations.find(
    (clip) => clip.name == "Idle_Happy"
  ) as AnimationClip;

  let run = animations.find((clip) => clip.name == "run") as AnimationClip;

  let walkingAnimation = animations.find(
    (clip) => clip.name == "Walk"
  ) as AnimationClip;

  let speed = 3;
  let runningSpeed = 5.5;

  // let [ismobile, setIsMobile] = useState(isMobile());

  // useEffect(() => {
  //   console.log("EFFECT RAN:");
  // }, [ismobile]);

  let runninng = false;

  useFrame(({ clock, scene }) => {
    if (!enteredWorld) {
      console.log("World NOT entered");
      return;
    }
    // Joystick: -- handles mobile input
    let joystick = scene.getObjectByName("Joystick_data")
      ?.userData as duelJsUserDataType;
    let joystickBF = 0;
    let joystickLR = 0;
    if (rbRef.current) {
      // Check if the "left" key is pressed
      if (
        !showSkills
        // !detailsWindow

        // && !helpWindow
      ) {
        //joystick back and forth

        //handle mobile
        if (joystick) {
          if (joystick?.left?.y) {
            console.log("detected Joystick");
            if (joystick?.left?.y) {
              // direction.multiplyScalar(speed);
              // rbRef.current.setLinvel(direction, true);
              joystickBF = joystick.left.y;
            }
          }

          if (joystick.right?.x) {
            joystickLR = joystick.right.x;
          }
        }

        if (get().left || joystickLR < 0) {
          angle += turnSpeed;
          // Rotate based on user input
          direction.set(0, 1, 0);
          rotation.setFromAxisAngle(direction, angle);
          rbRef.current.setRotation(rotation, true);
        }

        if (get().right || joystickLR > 0) {
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
          //bf- back/forward
          (get().forward && !showSkills) ||
          (joystickBF > 0 && !showSkills)
          // !helpWindow &&
          // !detailsWindow
        ) {
          //handle mobile speed

          // console.log("Dist: ", joystick.left?.leveledY);
          if (joystick.left?.leveledY && isMobile()) {
            if (joystick.left.leveledY > 0)
              speed = (joystick.left.leveledY / 10) * 5.5;
          } else {
            speed = 3;
          }
          // console.log("speed: ", speed);

          // if (!isMobile()) {
          //   if (runninng) {
          //     // console.log("RUNNING!");
          //     //for computer input

          //     speed = 3;
          //     //runningSpeed;
          //   } else {
          //     speed = 3;
          //   }
          // }

          console.log("SPEED: ", speed);
          direction.multiplyScalar(speed);
          rbRef.current.setLinvel(direction, true);
        } else if (get().back || joystickBF < 0) {
          direction.multiplyScalar(-speed);
          rbRef.current.setLinvel(direction, true);
        }
      }
    }
    scene.updateMatrixWorld();
    charRef.current?.updateMatrixWorld();

    //Character animations:
    let currentAnim: AnimationAction;

    if (
      (get().forward && !showSkills) ||
      joystickBF > 0
      // //  && !helpWindow

      // !detailsWindow
    ) {
      if (get().run || speed > 3.5) {
        // console.log("RUNNING");
        runninng = true;

        mixer.clipAction(run).play();
        mixer.clipAction(idleAnimation).stop();
        mixer.clipAction(walkingAnimation).stop();
      } else {
        mixer.clipAction(walkingAnimation).play();
        mixer.clipAction(walkingAnimation).timeScale = 1;
        mixer.clipAction(idleAnimation).stop();
        mixer.clipAction(run).stop();
        runninng = false;
      }
    } else if (
      (get().back && !showSkills) ||
      joystickBF < 0
      // !helpWindow &&
      // !detailsWindow
    ) {
      mixer.clipAction(walkingAnimation).timeScale = -1;
      mixer.clipAction(walkingAnimation).play();
    } else if (get().left) {
      // mixer.clipAction(turnRight).timeScale = -0.9;
      // mixer.clipAction(turnRight).play();
    } else if (get().right) {
      // let _anim = mixer.clipAction(turnRightAnimation).setLoop(LoopOnce, 8);
      // _anim.clampWhenFinished = false;
      // _anim.play();
    } else {
      //play Idle animations
      let randInt = Math.floor(Math.random() * 100);
      // console.log(randInt);
      if (randInt % 2 == 0 && randInt % 3 == 0) {
        // mixer.clipAction(IdleHappy).play();
      } else {
        mixer.clipAction(idleAnimation).play();
        mixer.clipAction(walkingAnimation).stop();
        mixer.clipAction(run).stop();
      }

      // mixer.clipAction(turnRightAnimation).stop();
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
          <mesh scale={1.2} position={[0, -1.1, 0]} ref={charRef} castShadow>
            <primitive object={character} />
          </mesh>
        </group>
        <CapsuleCollider args={[0.69, 0.43]} />
      </mesh>
    </RigidBody>
  );
});

export default Player;
