import { Box, Gltf, useGLTF } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";
import { MeshPhysicalMaterial } from "three";

export default function BenchStatue(props: MeshProps) {
  let baseMaterial = new MeshPhysicalMaterial({ color: "green" });

  let { scene: bench } = useGLTF("/poses/MeshBench.glb");

  // scale={1.6} position={[8, 0.7, -40]}
  return (
    <mesh {...props}>
      {/* <Gltf src="/poses/MeshBench.glb" scale={0.05} position={[0, -0.95, 0]} /> */}

      <mesh scale={0.05} position={[0, -0.95, 0]}>
        <primitive object={bench} />
      </mesh>

      <mesh position={[0, -1.2, 0]}>
        <Box scale={[1.8, 0.2, 3.8]} material={baseMaterial} />
        <Box
          scale={[1.8, 0.2, 3.4]}
          position={[0, 0.2, 0]}
          material={baseMaterial}
        />
      </mesh>
    </mesh>
  );
}
