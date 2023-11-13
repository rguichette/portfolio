import { OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useAtom, useAtomValue } from "jotai";
import React, { useEffect, useRef } from "react";
import THREE, { Quaternion, Vector3 } from "three";

import { OrbitControls as OcType } from "three-stdlib";
import { isCharacterMoving, isPanning } from "../../state";

export default function CamView2() {
  let [panning, setPanning] = useAtom(isPanning);
  let charMoving = useAtomValue(isCharacterMoving);

  let orbitControlsRef = useRef<OcType>(null);
  let { scene } = useThree();
  useEffect(() => {
    onmousedown = () => {
      setPanning(true);
      console.log("panning");
    };

    onmouseup = () => {
      setPanning(false);
    };
  });

  useFrame(({ scene, camera, clock }) => {
    let character = scene.getObjectByName("charRigidBody");
    if (character)
      if (character && orbitControlsRef.current) {
        let offset = new Vector3(0, 1.7, -2);

        let charPos = character.position;

        let idealLookAt = new Vector3(0, 1.25, 0).add(charPos);
        offset.applyQuaternion(character.quaternion);

        let idealCamPos = offset.add(charPos);

        orbitControlsRef.current.object.position.lerp(idealCamPos, 0.01);
        orbitControlsRef.current.target = idealLookAt;
        orbitControlsRef.current.update();
      }
  });

  return (
    <>
      <OrbitControls ref={orbitControlsRef} />
    </>
  );
}
