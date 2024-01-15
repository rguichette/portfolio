import { RoundedBox, useVideoTexture } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";
import { Suspense } from "react";
import { isMobile } from "is-mobile";

export function Instructions(props: MeshProps) {
  let cc = useVideoTexture("/desktopControls.mp4");
  cc.repeat.set(0.47, 0.7);
  cc.offset.set(0.06, 0.3);

  let touch = useVideoTexture("/touchDirections.mp4");
  touch.repeat.set(0.49, 0.8);
  touch.offset.set(0.05, 0.14);

  return (
    <>
      <Suspense>
        <mesh {...props}>
          {isMobile() ? (
            <RoundedBox
              args={[2, 0.1, 1.2]}
              position={[0, 0, 0]}
              rotation={[Math.PI / 2, 0, Math.PI]}
            >
              <meshBasicMaterial
                map={touch}
                transparent
                opacity={0.58}
                color={"#f6a2e8"}
              ></meshBasicMaterial>
            </RoundedBox>
          ) : (
            <RoundedBox
              args={[2, 0.1, 1.5]}
              position={[0, 0, 0]}
              rotation={[Math.PI / 2, 0, Math.PI]}
            >
              <meshBasicMaterial
                map={cc}
                transparent
                opacity={0.58}
                color={"#f6a2e8"}
              ></meshBasicMaterial>
            </RoundedBox>
          )}
        </mesh>
      </Suspense>
    </>
  );
}
