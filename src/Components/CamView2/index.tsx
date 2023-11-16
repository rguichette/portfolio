import { Box, OrbitControls, useKeyboardControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useAtom, useAtomValue } from "jotai";
import React, { useEffect, useRef } from "react";
import THREE, { Mesh, Quaternion, Vector3 } from "three";

import { OrbitControls as OcType } from "three-stdlib";
import { isCharacterMoving, isPanning } from "../../state";
import * as TWEEN from "three/examples/jsm/libs/tween.module.js";

export default function CamView2() {
  let characterMoving = false;

  let spectating = false;

  let orbitControlsRef = useRef<OcType>(null);
  let boxRef = useRef<Mesh>(null);

  let { scene, camera } = useThree();

  useEffect(() => {
    if (orbitControlsRef.current) {
      let c = orbitControlsRef.current;

      c.enableZoom = false;
      c.enableDamping = false;

      //init setup
      c.object.position.set(0, 1.7, -2);
    }
    onkeydown = (e) => {
      if (e.code == "ArrowDown" || "ArrowUp" || "KeyW" || "KeyS") {
        characterMoving = true;
        spectating = false;
      }
      // console.log(e.code);
    };
    onkeyup = (e) => {
      if (e.code == "ArrowDown" || "ArrowUp" || "KeyW" || "KeyS") {
        characterMoving = false;
      }
      // console.log(e.code);
    };

    onmousedown = () => {
      spectating = true;
      console.log("panning");
    };

    // onmouseup = () => {
    //   spectating = false;
    // };

    if (boxRef.current) {
      let b = boxRef.current;

      let character = scene.getObjectByName("charRigidBody");

      // new TWEEN.Tween(camera.position)
      //   .to({ x: character?.position.x, z: character?.position.z }, 1000)
      //   .onUpdate(function () {
      //     console.log(100, character?.position);
      //   });

      // .repeat(Infinity)
      // .start();
    }
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
          orbitControlsRef.current.object.position.lerp(idealCamPos, 0.1);
        } else {
          if (!spectating)
            orbitControlsRef.current.object.position.lerp(idealCamPos, 0.05);
        }

        // orbitControlsRef.current.object.position.x = idealCamPos.x;
        // orbitControlsRef.current.object.position.z = idealCamPos.z;

        orbitControlsRef.current.target = idealLookAt;
        orbitControlsRef.current.update();
      }

    TWEEN.update();
  });

  return (
    <>
      <OrbitControls ref={orbitControlsRef} />
      <Box ref={boxRef} />
    </>
  );
}
