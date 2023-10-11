import { useGLTF, useKeyboardControls } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";
import {
  CuboidCollider,
  RapierRigidBody,
  RigidBody,
} from "@react-three/rapier";
import { forwardRef, useRef } from "react";
import { Mesh, Quaternion, Vector3 } from "three";

let Library: React.FC<MeshProps> = forwardRef<Mesh, MeshProps>((props, ref) => {
  //  rgidBodyRef
  let rbRef = useRef<RapierRigidBody>(null!);

  let library = useGLTF("/3Dassets/entrance2.glb");

  return (
    <mesh scale={1.3} position={[0, 0.3, 0]}>
      <RigidBody
        type="fixed"
        ref={rbRef}
        enabledRotations={[false, false, false]}
        colliders={false}
        mass={66}
        position={[10, -1.2, 4]}
      >
        <mesh scale={4}>
          <primitive object={library.scene} />
        </mesh>
        <CuboidCollider args={[4, 2, 1]} position={[0, 0, -4.5]} />
        <CuboidCollider
          args={[1, 2, 2]}
          position={[-4.5, 0, -2.4]}
          rotation={[0, -0.4, 0]}
        />
        <CuboidCollider
          args={[1, 2, 2]}
          position={[4.5, 0, -2.4]}
          rotation={[0, 0.4, 0]}
          name="front_right"
        />

        <CuboidCollider
          args={[1.3, 0.1, 2]}
          position={[-4, 0, -2]}
          rotation={[0, -0.1, 0]}
        />
        <CuboidCollider
          args={[2.7, 0.1, 1]}
          position={[0, 0, -3]}
          rotation={[0, -0.1, 0]}
        />
        <CuboidCollider
          args={[1.3, 0.1, 2]}
          position={[4, 0, -2]}
          rotation={[0, -0.1, 0]}
        />
      </RigidBody>
    </mesh>
  );
});

export default Library;
