import { Box, RoundedBox, useGLTF } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import React, { forwardRef } from "react";
import { Mesh } from "three";

type CustomBuildingProps = MeshProps & {
  offset?: number;
};

let Factory: React.FC<CustomBuildingProps> = forwardRef<
  Mesh,
  CustomBuildingProps
>((props, ref) => {
  let ll = useGLTF("3Dassets/s_buidlings_factory2.glb");

  return (
    <mesh {...props}>
      <mesh scale={1}>
        <RigidBody
          type="fixed"
          enabledRotations={[false, false, false]}
          mass={66}
          scale={0.5}
          position={[0, -0.9, 0]}
          colliders={"hull"}
        >
          <RoundedBox args={[1.2, 1, 1]} position={[0, -0.3, 0]}>
            <meshBasicMaterial color={"#36454f"} />
          </RoundedBox>
          <RoundedBox args={[1, 0.5, 1]} position={[0, -0.49, 1.2]}>
            <meshBasicMaterial color={"#36454f"} />
          </RoundedBox>
          <RoundedBox args={[1, 0.5, 1]} position={[1.4, -0.49, 1.6]} />
          <RoundedBox args={[1, 0.5, 1]} position={[1.9, -0.49, 2]} />
          <RoundedBox args={[1, 2.5, 1]} position={[1.9, 0.56, -2]} />
          <RoundedBox args={[3, 0.5, 1.3]} position={[4.9, -0.49, -0.5]}>
            <meshBasicMaterial color={"#36454f"} />
          </RoundedBox>

          {/* <primitive object={ll.scene} /> */}

          {/* <CuboidCollider args={[2, 1, 1]} position={[-5, 0, 6.8]} /> */}
        </RigidBody>
      </mesh>
    </mesh>
  );
});

export default Factory;
