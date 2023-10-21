import { Box } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import React, { forwardRef } from "react";
import { Mesh } from "three";

let RBox: React.FC<MeshProps> = forwardRef<Mesh, MeshProps>((props, ref) => {
  return (
    <mesh {...props}>
      <RigidBody
        position={[0, 0, 0]}
        gravityScale={0.3}
        mass={0.6}
        angularDamping={0.6}
        friction={1}
        restitution={0.6}
      >
        <Box />
      </RigidBody>
    </mesh>
  );
});

export default RBox;
