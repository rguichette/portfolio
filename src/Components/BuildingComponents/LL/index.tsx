import { Box, useGLTF } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import React, { forwardRef } from "react";
import { Mesh } from "three";

type CustomBuildingProps = MeshProps & {
  offset?: number;
};

let LL: React.FC<CustomBuildingProps> = forwardRef<Mesh, CustomBuildingProps>(
  (props, ref) => {
    let ll = useGLTF("3Dassets/s_LL.glb");

    return (
      <mesh {...props}>
        <mesh position={[0, 0, 0]} scale={1}>
          <RigidBody
            type={"fixed"}
            enabledRotations={[false, false, false]}
            mass={66}
            scale={props.scale}
            position={props.position}
            rotation={props.rotation}
          >
            <primitive object={ll.scene} />
          </RigidBody>
          {/* <CuboidCollider args={[2, 1, 1]} position={[-5, 0, 6.8]} /> */}
        </mesh>
      </mesh>
    );
  }
);

export default LL;
