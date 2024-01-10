import { Box, Plane, useGLTF, useVideoTexture } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";
import { DoubleSide } from "three";

export default function SuccessStatue(props: MeshProps) {
  let { scene: sucessGroup } = useGLTF("/poses/mf_Accomplished.glb");
  let sgTexture = useVideoTexture("public/textures/video/Code.mp4");

  return (
    <>
      <mesh {...props}>
        <primitive object={sucessGroup} />

        <Plane scale={[2, 1.1, 1]} position={[0, 1.2, 0.5]}>
          <meshBasicMaterial
            side={DoubleSide}
            map={sgTexture}
            transparent
            opacity={0.5}
          />
        </Plane>
        <Box scale={[2, 0.1, 2]} position={[0, -0.2, 0]} />
      </mesh>
    </>
  );
}
