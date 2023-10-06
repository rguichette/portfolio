import {
  Box,
  Cone,
  OrbitControls,
  useGLTF,
  useKeyboardControls,
} from "@react-three/drei";
import { MeshProps, useFrame } from "@react-three/fiber";
import {
  CapsuleCollider,
  CuboidCollider,
  MeshCollider,
  RapierRigidBody,
  RigidBody,
  euler,
  quat,
  vec3,
} from "@react-three/rapier";
import React, { forwardRef, useEffect, useRef } from "react";
import { Euler, Group, MathUtils, Mesh, Quaternion, Vector3 } from "three";
import { color, rotateUV, sin } from "three/examples/jsm/nodes/Nodes.js";

enum Controls {
  forward = "forward",
  back = "back",
  left = "left",
  right = "right",
  jump = "jump",
}

let Player: React.FC<MeshProps> = forwardRef<Mesh, MeshProps>((props, ref) => {
  let [_, get] = useKeyboardControls<Controls>();

  //  rgidBodyRef
  let rbRef = useRef<RapierRigidBody>(null!);

  let charRef = useRef<Mesh>(null);

  //direction to set the position based on changes to this vector
  let direction = new Vector3(0, 0, 0);
  let rotation = new Quaternion();

  let angle = 0;
  let turnSpeed = 0.02;
  // let speed = 0;

  useFrame(({ clock, scene }) => {
    if (rbRef.current) {
      // Check if the "left" key is pressed
      if (get().left) {
        angle += turnSpeed;
        // Rotate based on user input
        direction.set(0, 1, 0);
        rotation.setFromAxisAngle(direction, angle);
        rbRef.current.setRotation(rotation, true);
      }
      if (get().right) {
        angle -= turnSpeed;
        // Rotate based on user input
        direction.set(0, 1, 0);
        rotation.setFromAxisAngle(direction, angle);
        rbRef.current.setRotation(rotation, true);
      }

      // Calculate the forward direction based on the current rotation
      direction.set(0, 0, 1);
      direction.applyQuaternion(rotation);

      // Set the linear velocity in the forward direction
      if (get().forward) {
        direction.multiplyScalar(1);
        rbRef.current.setLinvel(direction, true);
      } else if (get().back) {
        direction.multiplyScalar(-1);
        rbRef.current.setLinvel(direction, true);
      }
    }
    scene.updateMatrixWorld();
    charRef.current?.updateMatrixWorld();
  });

  let { scene: character, animations } = useGLTF(
    "/3Dassets/character/charAnim.glb"
  );

  return (
    <RigidBody
      type="dynamic"
      ref={rbRef}
      colliders={false}
      enabledRotations={[false, false, false]}
      name="charRigidBody"
      mass={66}
    >
      <mesh {...props} ref={ref} name="Player">
        <group>
          <mesh position={[0, -0.86, 0]} ref={charRef}>
            <primitive object={character} />
          </mesh>
        </group>
        <CapsuleCollider args={[0.69, 0.25]} />
      </mesh>
    </RigidBody>
  );
});

export default Player;
