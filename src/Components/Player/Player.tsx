import { Box, Cone, useGLTF, useKeyboardControls } from "@react-three/drei";
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
  let [sub, get] = useKeyboardControls<Controls>();

  //  rgidBodyRef
  let rbRef = useRef<RapierRigidBody>(null!);
  //soon to be characterRef
  let charRef = useRef<Group>(null);

  //move player

  let originalDir: Vector3, quaternion: Quaternion;

  useEffect(() => {
    if (rbRef.current) {
      // quaternion = new Quaternion(0, 0, 0);
    }
    // charRef.current?.position.applyEuler(new Euler(0, 0, 0, "XYZ"));
  }, []);

  quaternion = new Quaternion(0, 0, 0);

  originalDir = new Vector3(0, 0, 0);

  let characterPosition = new Vector3(0, 0, 0);
  let angle = 0;

  const moveSpeed = 0.02;

  useFrame(({ clock }) => {
    let forwardDir = new Vector3(0, 0, 1);
    //MOVEMENTS
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
      if (originalDir) {
        originalDir.applyAxisAngle(originalDir, angle);
        quaternion.setFromAxisAngle(originalDir, angle);
        rbRef.current.setRotation(quaternion, true);
      }
    }

    if (get().forward) {
      // Create a forward direction vector (e.g., along the negative Z-axis)

      // Apply the rotation to the forward direction vector
      forwardDir.applyQuaternion(quaternion);

      // Define your movement speed

      // Multiply the rotated forward direction by the move speed to get the new movement vector
      const movementVector = forwardDir.clone().multiplyScalar(moveSpeed);

      // Update the character's position based on the movement vector
      characterPosition.add(movementVector);

      // Set the character's kinematic translation to the updated position
      rbRef.current.setNextKinematicTranslation(characterPosition);
    }
    if (get().back) {
      // Create a forward direction vector (e.g., along the negative Z-axis)
      // const forwardDir = new Vector3(0, 0, -1);
      if (forwardDir) {
        forwardDir.set(0, 0, -1);
        // Apply the rotation to the forward direction vector
        forwardDir.applyQuaternion(quaternion);
      }

      // Define your movement speed

      // Multiply the rotated forward direction by the move speed to get the new movement vector
      const movementVector = forwardDir.clone().multiplyScalar(moveSpeed);

      // Update the character's position based on the movement vector
      characterPosition.add(movementVector);

      // Set the character's kinematic translation to the updated position
      rbRef.current.setNextKinematicTranslation(characterPosition);
    }
    charRef.current?.updateMatrixWorld();
  });

  let { scene: character, animations } = useGLTF(
    "/3Dassets/character/charAnim.glb"
  );

  return (
    <mesh {...props} ref={ref}>
      <RigidBody
        type="kinematicPosition"
        ref={rbRef}
        colliders={false}
        // canSleep={false}
        onIntersectionEnter={() => {
          console.log("SOMETHING!");
        }}
        onCollisionEnter={() => {
          console.log("Hello");
        }}
        name="charRigidBody"
        // lockTranslations
        // lockRotations
      >
        <group ref={charRef}>
          <mesh position={[0, -0.51, 0]} scale={0.3}>
            <primitive object={character} />
          </mesh>
          <CapsuleCollider args={[0.13, 0.15]} position={[0, -0.25, 0]} />
          {/* <Cone rotation={[-Math.PI / 2, 0, 0]}>
          <meshBasicMaterial />
        </Cone> */}
        </group>
      </RigidBody>
    </mesh>
  );
});

// //handles  everything needing to do with player
// export default function Player() {
//   let [sub, get] = useKeyboardControls<Controls>();

//   //  rgidBodyRef
//   let rbRef = useRef<RapierRigidBody>(null!);
//   //soon to be characterRef
//   let charRef = useRef<Group>(null);

//   //move player

//   let originalDir: Vector3, quaternion: Quaternion;

//   useEffect(() => {
//     if (rbRef.current) {
//       originalDir = new Vector3(0, 0, 0);
//       quaternion = new Quaternion(0, 0, 0);
//     }
//     // charRef.current?.position.applyEuler(new Euler(0, 0, 0, "XYZ"));
//   }, []);

//   let characterPosition = new Vector3(0, 0, 0);
//   let angle = 0;

//   const moveSpeed = 0.02;
//   useFrame(({ clock }) => {
//     //MOVEMENTS
//     if (get().left) {
//       angle += 0.025;
//       originalDir.set(0, 1, 0);
//       originalDir.applyAxisAngle(originalDir, angle);
//       quaternion.setFromAxisAngle(originalDir, angle);
//       rbRef.current.setRotation(quaternion, true);
//     }
//     if (get().right) {
//       angle -= 0.025;
//       originalDir.set(0, 1, 0);
//       originalDir.applyAxisAngle(originalDir, angle);
//       quaternion.setFromAxisAngle(originalDir, angle);
//       rbRef.current.setRotation(quaternion, true);
//     }

//     if (get().forward) {
//       // Create a forward direction vector (e.g., along the negative Z-axis)
//       const forwardDir = new Vector3(0, 0, 1);

//       // Apply the rotation to the forward direction vector
//       forwardDir.applyQuaternion(quaternion);

//       // Define your movement speed

//       // Multiply the rotated forward direction by the move speed to get the new movement vector
//       const movementVector = forwardDir.clone().multiplyScalar(moveSpeed);

//       // Update the character's position based on the movement vector
//       characterPosition.add(movementVector);

//       // Set the character's kinematic translation to the updated position
//       rbRef.current.setNextKinematicTranslation(characterPosition);
//     }
//     if (get().back) {
//       // Create a forward direction vector (e.g., along the negative Z-axis)
//       const forwardDir = new Vector3(0, 0, -1);

//       // Apply the rotation to the forward direction vector
//       forwardDir.applyQuaternion(quaternion);

//       // Define your movement speed

//       // Multiply the rotated forward direction by the move speed to get the new movement vector
//       const movementVector = forwardDir.clone().multiplyScalar(moveSpeed);

//       // Update the character's position based on the movement vector
//       characterPosition.add(movementVector);

//       // Set the character's kinematic translation to the updated position
//       rbRef.current.setNextKinematicTranslation(characterPosition);
//     }
//   });

//   let { scene: character, animations } = useGLTF(
//     "/3Dassets/character/charAnim.glb"
//   );

//   return (
//     <RigidBody
//       type="kinematicPosition"
//       // colliders={"hull"}
//       ref={rbRef}
//       onCollisionEnter={() => {
//         console.log("Hello");
//       }}

//       // lockTranslations
//       // lockRotations
//     >
//       <group ref={charRef}>
//         <mesh position={[0, -0.51, 0]} scale={0.3}>
//           <primitive object={character} />
//         </mesh>
//         <CuboidCollider args={[0.01, 0.01, 0.01]} />
//         {/* <Cone rotation={[-Math.PI / 2, 0, 0]}>
//           <meshBasicMaterial />
//         </Cone> */}
//       </group>
//     </RigidBody>
//   );
// }

export default Player;
