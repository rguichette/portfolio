import { Box, useGLTF } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { useAtom } from "jotai";
import { MeshStandardMaterial } from "three";
import { infoCardAtom } from "../../../state";
import summaries from "../../../statements";

export default function DynamicStatue(props: MeshProps) {
  let { scene: dynamic } = useGLTF("/poses/dynamic.glb");

  let [_, setsum] = useAtom(infoCardAtom);

  return (
    <>
      <mesh {...props} material={new MeshStandardMaterial({ color: "green" })}>
        <RigidBody type="fixed" colliders={false}>
          <primitive object={dynamic} />
          <Box scale={[1, 0.1, 1]} position={[0, 0.2, 0]} />
          <CuboidCollider
            args={[0.5, 1, 0.5]}
            onCollisionEnter={() => {
              setsum(() => summaries.skills.overview);
            }}
            onCollisionExit={() => {
              setsum((i) => ({ ...i, display: false }));
            }}
          />
        </RigidBody>
      </mesh>
    </>
  );
}
