import { Box, Cone, useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import {
  RapierRigidBody,
  RigidBody,
  euler,
  quat,
  vec3,
} from "@react-three/rapier";
import React, { useEffect, useRef } from "react";
import { Euler, Group, MathUtils, Mesh, Quaternion, Vector3 } from "three";
import { color, rotateUV, sin } from "three/examples/jsm/nodes/Nodes.js";

enum Controls {
  forward = "forward",
  back = "back",
  left = "left",
  right = "right",
  jump = "jump",
}

//handles  everything needing to do with player
export default function Player() {
  let [sub, get] = useKeyboardControls<Controls>();

  //  rgidBodyRef
  let rbRef = useRef<RapierRigidBody>(null!);
  //soon to be characterRef
  let charRef = useRef<Group>(null);

  //move player

  let originalDir: Vector3, quaternion: Quaternion;

  useEffect(() => {
    if (rbRef.current) {
      originalDir = new Vector3(0, 0, 0);
      quaternion = new Quaternion(0, 0, 0);
    }
    // charRef.current?.position.applyEuler(new Euler(0, 0, 0, "XYZ"));
  }, []);

  let moveSpeed = 0.1;
  let characterPosition = new Vector3(0, 0, 0);
  let angle = 0;

  useFrame(({ clock }) => {
    if (get().left) {
      angle += 0.025;
      originalDir.set(0, 1, 0);
      originalDir.applyAxisAngle(originalDir, angle);
      quaternion.setFromAxisAngle(originalDir, angle);
      rbRef.current.setRotation(quaternion, true);
    }
    if (get().right) {
      angle -= 0.025;
      originalDir.set(0, 1, 0);
      originalDir.applyAxisAngle(originalDir, angle);
      quaternion.setFromAxisAngle(originalDir, angle);
      rbRef.current.setRotation(quaternion, true);
    }

    if (get().forward) {
      // Create a forward direction vector (e.g., along the negative Z-axis)
      const forwardDir = new Vector3(0, 0, -1);

      // Apply the rotation to the forward direction vector
      forwardDir.applyQuaternion(quaternion);

      // Define your movement speed
      const moveSpeed = 0.1;

      // Multiply the rotated forward direction by the move speed to get the new movement vector
      const movementVector = forwardDir.clone().multiplyScalar(moveSpeed);

      // Update the character's position based on the movement vector
      characterPosition.add(movementVector);

      // Set the character's kinematic translation to the updated position
      rbRef.current.setNextKinematicTranslation(characterPosition);
    }
    if (get().back) {
      // Create a forward direction vector (e.g., along the negative Z-axis)
      const forwardDir = new Vector3(0, 0, 1);

      // Apply the rotation to the forward direction vector
      forwardDir.applyQuaternion(quaternion);

      // Define your movement speed
      const moveSpeed = 0.1;

      // Multiply the rotated forward direction by the move speed to get the new movement vector
      const movementVector = forwardDir.clone().multiplyScalar(moveSpeed);

      // Update the character's position based on the movement vector
      characterPosition.add(movementVector);

      // Set the character's kinematic translation to the updated position
      rbRef.current.setNextKinematicTranslation(characterPosition);
    }
  });

  return (
    <group ref={charRef}>
      <RigidBody
        type="kinematicPosition"
        colliders={"ball"}
        ref={rbRef}

        // lockTranslations
        // lockRotations
      >
        <Cone rotation={[-Math.PI / 2, 0, 0]}>
          <meshBasicMaterial wireframe />
        </Cone>
      </RigidBody>
    </group>
  );
}
