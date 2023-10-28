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
  let fakeCamRef = useRef<Mesh>(null);

  console.log("CAMERA: ", camera);

  //init
  let offset = new Vector3(0, 3, -2);
  let idealLookAt = new Vector3(0, 0, 0);
  let idealPos = new Vector3(0, 0, 0);

  useEffect(() => {
    let character = scene.getObjectByName("charRigidBody");
  }, [scene, scene.children]);

  useFrame(({ scene }) => {
    let character = scene.getObjectByName("charRigidBody");

    scene.updateMatrix();
    if (character && orbitControlsRef.current) {
      character.getWorldPosition(idealPos);

      // idealPos.setZ(character.position.z);
      fakeCamRef.current?.position.lerp(idealPos.add(offset), 0.01);

      fakeCamRef.current?.lookAt(character.position);
    }
  });

  return (
    <>
      {/* <Cone rotation={[Math.PI / 2, 0, 0]} ref={camPHRef} /> */}
      <PivotControls>
        <Box ref={fakeCamRef} />
      </PivotControls>
      <OrbitControls ref={orbitControlsRef} />
    </>
  );
}
