import { Box, useGLTF } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { MeshStandardMaterial } from "three";

export default function DynamicStatue(props: MeshProps) {
  let { scene: dynamic } = useGLTF("/poses/dynamic.glb");

  return (
    <>
      <mesh {...props} material={new MeshStandardMaterial({ color: "green" })}>
        <RigidBody type="fixed" colliders={false}>
          <primitive object={dynamic} />
          <Box scale={[1, 0.1, 1]} position={[0, 0.2, 0]} />
          <CuboidCollider args={[0.5, 1, 0.5]} />
        </RigidBody>
      </mesh>
    </>
  );
}
