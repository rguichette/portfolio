import { Box, useGLTF } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";
import { MeshStandardMaterial } from "three";

export default function DynamicStatue(props: MeshProps) {
  let { scene: dynamic } = useGLTF("/poses/dynamic.glb");

  return (
    <>
      <mesh {...props} material={new MeshStandardMaterial({ color: "green" })}>
        <primitive object={dynamic} />
        <Box scale={[1, 0.1, 1]} position={[0, 0.2, 0]} />
      </mesh>
    </>
  );
}
