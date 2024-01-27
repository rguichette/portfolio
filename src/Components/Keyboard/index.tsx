import { Box, useTexture } from "@react-three/drei";
import { MeshProps, useFrame } from "@react-three/fiber";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { useAtom } from "jotai";
import React, { Ref, forwardRef, useEffect, useRef } from "react";
import { Group, Mesh, MeshBasicMaterial, MeshStandardMaterial } from "three";
import { showEngageButton } from "../../state";

let Keyboard: React.FC<MeshProps> = forwardRef<Mesh, MeshProps>(
  (props, ref) => {
    let keyboardRef = useRef<MeshStandardMaterial>(null!);
    let [showEngagebtn, setshowEngagebtn] = useAtom(showEngageButton);

    useEffect(() => {
      if (keyboardRef.current) {
        // keyboardRef.current.color.setRGB(0.2, 0.8, 0.9);
      }
    });

    useFrame(({ clock }) => {
      if (keyboardRef.current) {
        keyboardRef.current.color.setRGB(
          Math.abs(Math.sin(clock.elapsedTime) + 0.5) * 4,
          Math.abs(Math.sin(clock.elapsedTime) + 0.8) * 4,
          (Math.sin(clock.elapsedTime) + 0.7) * 4
        );
      }
    });

    let keyboardTexture = useTexture("/keyboardApple.png");
    keyboardTexture.repeat.set(1, 0.5);
    keyboardTexture.offset.set(0.01, 0.25);
    // let mScale = props.scale;
    return (
      <>
        <mesh ref={ref} {...props}>
          <RigidBody type="fixed">
            {/* <RigidBody type="fixed" colliders={"hull"}> */}

            {/* </RigidBody> */}
            <mesh>
              <Box args={[1, 0.4, 0.02]} position={[0, 0, -0.01]}>
                <meshStandardMaterial
                  map={keyboardTexture}
                  transparent
                  opacity={8}
                  color={"red"}
                  ref={keyboardRef}
                />
              </Box>

              {/* <planeGeometry args={[1, 0.4, 1]} /> */}
            </mesh>
          </RigidBody>
        </mesh>
      </>
    );
  }
);

export default Keyboard;
