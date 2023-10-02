import { Box, KeyboardControls, Plane, Sphere } from "@react-three/drei";
import {
  CuboidCollider,
  Physics,
  RapierRigidBody,
  RigidBody,
} from "@react-three/rapier";
import React, { useEffect, useRef } from "react";
import Player2 from "../Components/Player/Player2";
import { co } from "../Components/CharacterController";
import { AmbientLight, Vector3 } from "three";
import { useFrame } from "@react-three/fiber";
import PlayerF from "../Components/Player/PlayerF";

export default function PlayGound() {
  useFrame(({ scene, camera }) => {
    const charB = scene.getObjectByName("charRigidBody");

    if (charB && camera) {
      charB.add(camera);
      camera.lookAt(charB.position);
    }
  });

  let r_Ref = useRef<RapierRigidBody>(null);

  useEffect(() => {
    if (r_Ref.current) {
      let t = r_Ref.current;
    }
  });

  const fixedRigidBodyRef = React.useRef<RapierRigidBody>(null);

  useFrame(() => {
    // Update the position of the fixed RigidBody if needed
    if (fixedRigidBodyRef.current) {
      //   fixedRigidBodyRef.current.setTranslation(new Vector3(0, 0, 0), true);
      //   console.log("Sleeping", fixedRigidBodyRef.current.isSleeping());
    }
  });

  return (
    <>
      <ambientLight />
      <Physics debug>
        <KeyboardControls map={co}>
          <Player2 />
        </KeyboardControls>

        <RigidBody type="dynamic" colliders={false}>
          <Box position={[3, 0, -1]}>
            <meshBasicMaterial color={"purple"} />
            <CuboidCollider args={[1, 1, 1]} name="TEST" />
          </Box>
        </RigidBody>

        <RigidBody
          type="kinematicPosition"
          position={[0, 0, 2]}
          ccd={true}
          //   enabledTranslations={[false, false, false]}
        >
          {/* Add the Box geometry and material here */}
          <Box>
            <meshBasicMaterial color={"red"} />
          </Box>

          {/* Attach a CuboidCollider to the red box */}
          <CuboidCollider args={[1, 1, 1]} mass={10000} />
        </RigidBody>

        <RigidBody type="fixed">
          <Box
            // rotation={[-Math.PI / 2, 0, 0]}
            scale={[100, 1, 100]}
            position={[0, -2, 0]}
          >
            <CuboidCollider args={[100, 1, 100]} position={[0, -2, 0]} />

            {/* <meshBasicMaterial color={"#cb416b"} wireframe /> */}
          </Box>
        </RigidBody>
      </Physics>
    </>
  );
}
