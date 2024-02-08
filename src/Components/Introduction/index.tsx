import { Box, Html, Sphere, Text3D, useTexture } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { useAtom } from "jotai";
import React, { useState } from "react";
import { showIntroInfo } from "../../state";
import IntroPage from "./IntroPage";
import { GroupProps } from "@react-three/fiber";

export default function Introducion(props: GroupProps) {
  let t = useTexture("/assets/icons/Info2.png");
  let [showintoInfo, setShowIntroInfo] = useAtom(showIntroInfo);
  let [showBtn, setShowBtn] = useState(false);
  //   t.repeat.set(1.3, 1);
  //   t.center.set(0.25, 0.25);
  return (
    <group {...props}>
      <mesh>
        {showBtn && (
          <Html center>
            <button
              className="border-2 inline-block w-32 h-10 rounded-md text-center bg-cyan-500 text-cyan-100"
              onClick={() => {
                setShowIntroInfo(true);
                setShowBtn(false);
              }}
            >
              View Message
            </button>
          </Html>
        )}
        <Box>
          <meshBasicMaterial map={t} transparent opacity={0.9} />
        </Box>
        <Box>
          <meshBasicMaterial transparent opacity={0.4} />
        </Box>
        <CuboidCollider
          sensor
          args={[0.5, 0.5, 0.5]}
          onIntersectionEnter={() => {
            setShowBtn(true);
          }}
          onIntersectionExit={() => {
            setShowBtn(false);
          }}
        />
      </mesh>
    </group>
  );
}
