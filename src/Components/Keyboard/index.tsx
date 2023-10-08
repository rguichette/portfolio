import { Box, useTexture } from "@react-three/drei";
import { MeshProps, useFrame } from "@react-three/fiber";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import React, { Ref, forwardRef, useEffect, useRef } from "react";
import { Group, Mesh, MeshBasicMaterial } from "three";

let Keyboard: React.FC<MeshProps> = forwardRef<Mesh, MeshProps>(
  (props, ref) => {
    let keyboardRef = useRef<MeshBasicMaterial>(null!);

    useEffect(() => {
      if (keyboardRef.current) {
        keyboardRef.current.color.setRGB(0.2, 0.8, 0.9);
      }
    });

    useFrame(({ clock }) => {
      if (keyboardRef.current) {
        keyboardRef.current.color.setRGB(
          0.2 + Math.sin(clock.elapsedTime) / 2,
          0.8 + Math.sin(clock.elapsedTime) / 2,
          0.9 + Math.sin(clock.elapsedTime)
        );
      }
    });

    let keyboardTexture = useTexture("/keyboardApple.png");
    keyboardTexture.repeat.set(1, 0.5);
    keyboardTexture.offset.set(0.01, 0.25);
    let mScale = props.scale;
    return (
      <>
        <mesh ref={ref} {...props}>
          <RigidBody type="fixed">
            {/* <RigidBody type="fixed" colliders={"hull"}> */}
            <Box args={[0.95, 0.35, 0.015]} position={[0, 0, -0.01]}></Box>
            {/* </RigidBody> */}
            <mesh>
              <planeGeometry args={[1, 0.4, 1]} />
              <meshBasicMaterial
                map={keyboardTexture}
                transparent
                color={"red"}
                ref={keyboardRef}
              />
            </mesh>
          </RigidBody>
        </mesh>
      </>
    );
  }
);

export default Keyboard;
