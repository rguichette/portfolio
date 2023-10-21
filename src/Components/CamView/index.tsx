import { Box, Cone, OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useAtom } from "jotai";
import React, { useEffect, useRef, useState } from "react";
import { Mesh, Object3D, Quaternion, Vector3 } from "three";
import { OrbitControls as OcType } from "three-stdlib";
import { infoAtom } from "../../state";

export default function CamView() {
  let { camera, scene } = useThree();

  let orbitControlsRef = useRef<OcType>(null);

  console.log("CAMERA: ", camera);

  let [popUP, _] = useAtom(infoAtom);

  useEffect(() => {
    if (popUP) {
      // orbitControlsRef.current.enableRotate = false;
    } else {
      // orbitControlsRef.current.enableRotate = true;
    }
    console.log("SCENE: ", scene);
    if (scene) {
      let character = scene.getObjectByName("charRigidBody");
      console.log("CHARACTER", character);
      if (character) {
        // character.add(camera);
        // camera && camera.position.set(0, 1.25, -2);
      }

      // orbitControlsRef.current?.position.set(0, 0, -150);
    }
  }, [camera, scene, scene.children]);

  // Create a third person camera offset
  const cameraOffset = new Vector3(-5, 2, 5);

  let t = new Vector3();
  useFrame(({ controls }) => {
    let character = scene.getObjectByName("charRigidBody");

    if (character) {
      character.getWorldPosition(t);
      // console.log(controls);

      orbitControlsRef.current?.object.updateProjectionMatrix();
      orbitControlsRef.current?.update();
    }
  });

  return (
    <>
      {/* <Cone rotation={[Math.PI / 2, 0, 0]} ref={camPHRef} /> */}

      <OrbitControls ref={orbitControlsRef} />
    </>
  );
}
