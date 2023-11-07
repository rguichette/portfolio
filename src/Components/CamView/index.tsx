import {
  Box,
  Cone,
  OrbitControls,
  PivotControls,
  TransformControls,
  useHelper,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useAtom } from "jotai";
import React, { useEffect, useRef, useState } from "react";
import {
  BoxGeometry,
  BoxHelper,
  Mesh,
  MeshBasicMaterial,
  Object3D,
  Quaternion,
  Vector3,
} from "three";
import { OrbitControls as OcType } from "three-stdlib";
import { infoAtom } from "../../state";

export default function CamView() {
  let { camera, scene } = useThree();

  let orbitControlsRef = useRef<OcType>(null);

  console.log("CAMERA: ", camera);

  useEffect(() => {
    let character = scene.getObjectByName("charRigidBody");

    if (character && orbitControlsRef.current) {
      orbitControlsRef.current.enableZoom = false;
      orbitControlsRef.current.minDistance = 1;
      orbitControlsRef.current.maxDistance = 2;
    }
  }, [scene, scene.children]);

  useFrame(({ scene }) => {
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
      {/* <Cone rotation={[Math.PI / 2, 0, 0]} ref={camPHRef} />
      <Box ref={t2Ref} /> */}

      <OrbitControls ref={orbitControlsRef} />
    </>
  );
}
