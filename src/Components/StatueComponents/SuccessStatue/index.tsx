import { Box, Plane, useGLTF, useVideoTexture } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { DoubleSide } from "three";
import { infoCardAtom } from "../../../state";
import { useAtom } from "jotai";
import summaries from "../../../statements";

export default function SuccessStatue(props: MeshProps) {
  let { scene: sucessGroup } = useGLTF("/poses/mf_Accomplished.glb");
  let sgTexture = useVideoTexture("/textures/video/Code.mp4");
  let [sp, setsp] = useAtom(infoCardAtom);

  return (
    <>
      <mesh {...props}>
        <primitive object={sucessGroup} />
        <RigidBody type="fixed" colliders={false}>
          <Plane scale={[2, 1.1, 1]} position={[0, 1.2, 0.5]}>
            <meshBasicMaterial
              side={DoubleSide}
              map={sgTexture}
              transparent
              opacity={0.5}
            />
          </Plane>
          <Box scale={[2, 0.1, 2]} position={[0, -0.2, 0]} />
          <CuboidCollider
            args={[1, 1, 1]}
            onCollisionEnter={() => {
              setsp(() => summaries.projects.overview);
            }}
            onCollisionExit={() => {
              setsp((i) => ({ ...i, display: false }));
            }}
          />
        </RigidBody>
      </mesh>
    </>
  );
}
