import { Box, OrbitControls, useKeyboardControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useAtom, useAtomValue } from "jotai";
import React, { useEffect, useRef } from "react";
import THREE, { Mesh, Quaternion, Vector3 } from "three";

import { OrbitControls as OcType } from "three-stdlib";
import { isCharacterMoving, isPanning } from "../../state";
import * as TWEEN from "three/examples/jsm/libs/tween.module.js";

export default function CamView() {
  let characterMoving = false;

  let spectating = false;

  let orbitControlsRef = useRef<OcType>(null);

  let { scene, camera } = useThree();

  useEffect(() => {
    if (orbitControlsRef.current) {
      let c = orbitControlsRef.current;

      c.enableZoom = false;
      c.enableDamping = false;

      //init setup
      c.object.position.set(0, 1.7, -2);
    }
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

    let character = scene.getObjectByName("charRigidBody");
  });

  var position = { x: 0, y: 300 };
  var target = { x: 4, y: 1.5 };

  useFrame(({ scene, camera, clock }) => {
    let character = scene.getObjectByName("charRigidBody");
    if (character)
      if (character && orbitControlsRef.current) {
        let offset = new Vector3(0, 1.7, -2);

        let charPos = character.position;

        let idealLookAt = new Vector3(0, 1.25, 0).add(charPos);
        offset.applyQuaternion(character.quaternion);

        let idealCamPos = offset.add(charPos);
        if (characterMoving) {
          orbitControlsRef.current.object.position.lerp(idealCamPos, 0.5);
        } else {
          if (!spectating)
            orbitControlsRef.current.object.position.lerp(idealCamPos, 0.05);
        }

        orbitControlsRef.current.target = idealLookAt;
        orbitControlsRef.current.update();
      }

    TWEEN.update();
  });

  return (
    <>
      <OrbitControls ref={orbitControlsRef} />
    </>
  );
}
