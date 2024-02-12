import { Sphere, useGLTF, useHelper, useTexture } from "@react-three/drei";
import { forwardRef, useRef } from "react";
import Library from "../../Library";
import { Mesh, PointLightHelper } from "three";
import { GroupProps, useFrame } from "@react-three/fiber";
import { RectAreaLightHelper } from "three-stdlib";
import { BallCollider } from "@react-three/rapier";
import { infoCardAtom } from "../../../state";
import { useAtom } from "jotai";
import summaries from "../../../statements";

let Involvement: React.FC<GroupProps> = forwardRef((props, _) => {
  let earthRef = useRef(null);
  let rectLightRef = useRef(null);
  let pLightRef = useRef(null);

  useHelper(rectLightRef.current && rectLightRef, RectAreaLightHelper);
  useHelper(pLightRef.current && pLightRef, PointLightHelper);

  let texture = useTexture("/assets/involvement/earthTexture.jpeg");

  useFrame(({ clock }) => {
    if (earthRef.current) {
      (earthRef.current as unknown as Mesh).rotation.y =
        clock.elapsedTime * 0.4;
    }
  });

  let [ic, setic] = useAtom(infoCardAtom);

  return (
    <>
      <group {...props}>
        {/* <rectAreaLight
          color={"yellow"}
          ref={rectLightRef}
          position={[9, 4, 0]}
          rotation={[0, Math.PI / 1.3, 0]}
          intensity={1}
        /> */}

        <pointLight
          color={"red"}
          ref={pLightRef}
          intensity={4}
          position={[1, 3, 1]}
          decay={0.3}
        />

        <Library />

        <Sphere position={[-7, 1, -6]} ref={earthRef} scale={1.5}>
          <meshBasicMaterial map={texture} transparent opacity={0.7} />
        </Sphere>
        <BallCollider
          sensor
          args={[1.5]}
          position={[-7, 1, -6]}
          onIntersectionEnter={() => {
            setic(summaries.involvement.globe);
          }}
          onIntersectionExit={() => {
            setic((i) => ({ ...i, display: false }));
          }}
        />
      </group>
    </>
  );
});

export default Involvement;
