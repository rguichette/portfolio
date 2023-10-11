import { Box, OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { Quaternion, Vector3 } from "three";
import { OrbitControls as OcType } from "three-stdlib";

export default function CamView() {
  let { camera, scene } = useThree();

  let orbitControlsRef = useRef<OcType>(null);

  console.log("CAMERA: ", camera);

  let controls: OcType | null = null;
  useEffect(() => {
    if (orbitControlsRef.current) {
      controls = orbitControlsRef.current;
      // controls.enableZoom = false;
    }
    camera && camera.position.set(0, 1, -2);
    console.log("SCENE: ", scene);
    if (scene) {
      let character = scene.getObjectByName("charRigidBody");
      console.log("CHARACTER", character);
      if (character) {
        character.add(camera);
      }
    }
  }, [camera, scene, scene.children]);

  let charPos = new Vector3();
  const charQuaternion = new Quaternion();

  useFrame(({}) => {
    let character = scene.getObjectByName("charRigidBody");
    character?.getWorldPosition(charPos);

    if (character) {
      character.getWorldQuaternion(charQuaternion);
      character.updateWorldMatrix(true, true);
      //   console.log("CAM POS: ", camera.position)
      character.updateMatrixWorld();
    }

    camera.updateProjectionMatrix();
    camera.updateWorldMatrix(true, true);

    if (controls) {
      //   controls.target.copy(charPos);

      controls.object.updateMatrixWorld();
      controls.target = charPos.add(new Vector3(0, 1, 0));

      controls.update();
    }
  });

  return (
    <>
      <OrbitControls ref={orbitControlsRef} />
    </>
  );
}
