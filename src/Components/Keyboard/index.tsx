import { Box, useTexture } from "@react-three/drei";
import { MeshProps, useFrame } from "@react-three/fiber";
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
    return (
      <>
        <mesh ref={ref} {...props}>
          <Box args={[0.95, 0.4, 0.015]} position={[0, 0, -0.01]} />
          <mesh>
            <planeGeometry args={[1, 1, 1]} />
            <meshBasicMaterial
              map={keyboardTexture}
              transparent
              color={"red"}
              ref={keyboardRef}
            />
          </mesh>
        </mesh>
      </>
    );
  }
);

export default Keyboard;
