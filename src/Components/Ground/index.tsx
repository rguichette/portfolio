import { MeshReflectorMaterial } from "@react-three/drei";

import { CuboidCollider, RigidBody } from "@react-three/rapier";

let floorSize = 1000;

export default function Ground() {
  return (
    <>
      <RigidBody type="fixed" colliders={false}>
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1.3, 0]}
          receiveShadow
        >
          {/* multiply by 2 in order to adjust for RB scaling */}
          <planeGeometry args={[floorSize * 2, floorSize * 2]} />
          <MeshReflectorMaterial
            color={"#b7bbf5"}
            mirror={0}
            depthScale={5}
            mixStrength={0.1}
          />
        </mesh>

        <CuboidCollider
          args={[floorSize, 0.01, floorSize]}
          position={[0, -1.3, 0]}
        />
      </RigidBody>
    </>
  );
}
