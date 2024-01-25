import { OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useAtomValue } from "jotai";

import { useEffect, useRef } from "react";
import { Vector3 } from "three";

import { OrbitControls as OcType } from "three-stdlib";
import * as TWEEN from "three/examples/jsm/libs/tween.module.js";
import { enterWorld } from "../../state";
import isMobile from "is-mobile";

export default function CamView() {
  let characterMoving = false;

  let spectating = false;

  let orbitControlsRef = useRef<OcType>(null);

  let enteredWorld = useAtomValue(enterWorld);

  let { scene } = useThree();

  //handle clean touch events to prevant false panning state
  useEffect(() => {
    if (orbitControlsRef.current) {
      let c = orbitControlsRef.current;

      c.enableZoom = false;
      c.enableDamping = false;

      //init setup
      c.object.position.set(0, 1.7, -2);
    }
    if (enteredWorld) {
      window.onkeydown = (e) => {
        if (e.code == "ArrowDown" || "ArrowUp" || "KeyW" || "KeyS") {
          characterMoving = true;
          spectating = false;
        }
        // console.log(e.code);
      };
      window.onkeyup = (e) => {
        if (e.code == "ArrowDown" || "ArrowUp" || "KeyW" || "KeyS") {
          characterMoving = false;
        }
        // console.log(e.code);
      };

      window.onmousedown = (e) => {
        if ((e.target as HTMLElement).className.split("-")[0] != "joystick") {
          spectating = true;
          console.log("panning");
        }
      };

      window.ontouchstart = (e) => {
        if ((e.target as HTMLElement).className.split("-")[0] != "joystick") {
          spectating = true;
          console.log("panning");
        } else {
          spectating = false;
        }
      };
    }
    let character = scene.getObjectByName("charRigidBody");
  });

  var position = { x: 0, y: 300 };
  var target = { x: 4, y: 1.5 };

  useFrame(({ scene, camera, clock }) => {
    let character = scene.getObjectByName("charRigidBody");
    if (character && enteredWorld)
      if (character && orbitControlsRef.current) {
        let offset = new Vector3(0, 1.7, -2);

        let charPos = character.position;
        let charSpeed =
          scene.getObjectByName("charInfo")?.userData.characterSpeed;

        let joystickData = scene.getObjectByName("Joystick_data")?.userData;
        //handle joystick input data
        if (joystickData && isMobile()) {
          // console.log("JOYSTICK: ", joystickData.right);
          //
          if (joystickData.right.x != 0 || joystickData.left?.y != 0) {
            characterMoving = true;
          } else {
            characterMoving = false;
          }
        }

        let idealLookAt = new Vector3(0, 1.25, 0).add(charPos);
        offset.applyQuaternion(character.quaternion);
        //handle offset off camera
        let idealCamPos = offset.add(charPos);
        if (characterMoving) {
          if (isMobile()) {
            // console.log("JOYSTICK ", joystickData);
            //detect if character is moving forward
            if (joystickData?.left.y || joystickData?.right.x > 0) {
              // camera.zoom = 2.2;
              orbitControlsRef.current.object.position.lerp(idealCamPos, 0.8);
            } else if (joystickData?.left.y < 0 || joystickData?.right.x < 0) {
              orbitControlsRef.current.object.position.lerp(idealCamPos, 0.9);
              //else x is moving for mobile
            }
            // orbitControlsRef.current.object.position.lerp(idealCamPos, 0.7);
          } else {
            if (characterMoving && !spectating)
              orbitControlsRef.current.object.position.lerp(idealCamPos, 0.5);
            // if (!spectating)
            //   orbitControlsRef.current.object.position.lerp(idealCamPos, 0.05);
          }
          //character not moving
        } else {
          orbitControlsRef.current.object.position.lerp(idealCamPos, 0.5);
        }

        // else {
        //   if (!spectating)
        //     orbitControlsRef.current.object.position.lerp(idealCamPos, 0.05);
        // }

        orbitControlsRef.current.target = idealLookAt;
        orbitControlsRef.current.update();
        console.log("SPEED!:::cam ", charSpeed);
      }
    TWEEN.update();
  });

  return <>{enteredWorld && <OrbitControls ref={orbitControlsRef} />}</>;
}
