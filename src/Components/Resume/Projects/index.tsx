import { Plane, useHelper, useTexture } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import { Color, PointLightHelper } from "three";
import summaries from "../../../statements";
import { infoCardAtom } from "../../../state";
import { useAtom } from "jotai";

export default function Projects(props: GroupProps) {
  let pLightRef = useRef(null);
  let pLightRef2 = useRef(null);
  // useHelper(pLightRef.current && pLightRef, PointLightHelper);
  // useHelper(pLightRef2.current && pLightRef2, PointLightHelper);

  let [breathe, dashboard, kel, listings, account, photos, post] = useTexture([
    "/assets/portfolio/breath-min.png",
    "/assets/portfolio/dashboard-min.png",
    "/assets/portfolio/Kel-min.png",
    "/assets/portfolio/Listings-min.png",
    "/assets/portfolio/RidAccount-min.png",
    "/assets/portfolio/RidPhotos-min.png",
    "/assets/portfolio/RidPost-min.png",
  ]);

  let c = new Color(10, 10, 10);
  let [sp, setsp] = useAtom(infoCardAtom);

  return (
    <>
      <group {...props}>
        <pointLight
          intensity={1.2}
          color={"#C5FCEF"}
          ref={pLightRef}
          position={[10, 2, 35]}
          decay={0.2}
        />
        <pointLight
          intensity={1.2}
          color={"#C5FCEF"}
          ref={pLightRef2}
          position={[-10, 2, 30]}
          decay={0.2}
        />

        <Plane
          scale={[6, 3.2, 1]}
          rotation={[0, -Math.PI, 0]}
          position={[-5, 1, 30]}
        >
          <meshPhongMaterial
            map={breathe}
            color={c}
            reflectivity={0.4}
            shininess={0.4}

            // roughness={0.2}
          />

          <Plane rotation={[0, -Math.PI, 0]} />
        </Plane>

        <Plane
          scale={[6, 3.2, 1]}
          rotation={[0, -Math.PI, 0]}
          position={[0, 1, 43]}
        >
          <meshStandardMaterial map={dashboard} />
          <Plane rotation={[0, -Math.PI, 0]} />
        </Plane>
        <Plane
          scale={[6, 3.2, 1]}
          rotation={[0, -Math.PI, 0]}
          position={[-10, 1, 50]}
        >
          <meshStandardMaterial map={kel} color={new Color(1.25, 1.25, 1.25)} />
          <Plane rotation={[0, -Math.PI, 0]} />
        </Plane>
        <Plane
          scale={[2, 4.2, 1]}
          rotation={[0, -Math.PI, 0]}
          position={[10, 1, 50]}
        >
          <meshStandardMaterial
            map={listings}
            color={new Color(1.25, 1.25, 1.25)}
          />
          <Plane rotation={[0, -Math.PI, 0]} />
        </Plane>
        <Plane
          scale={[2, 4.2, 1]}
          rotation={[0, -Math.PI, 0]}
          position={[18, 1, 40]}
        >
          <meshStandardMaterial
            map={account}
            color={new Color(1.25, 1.25, 1.25)}
          />
          <Plane rotation={[0, -Math.PI, 0]} />
        </Plane>
        <Plane
          scale={[2, 4.2, 1]}
          rotation={[0, -Math.PI, 0]}
          position={[17, 1, 55]}
        >
          <meshStandardMaterial
            map={photos}
            color={new Color(1.25, 1.25, 1.25)}
          />
          <Plane rotation={[0, -Math.PI, 0]} />
        </Plane>

        <Plane
          scale={[2, 4.2, 1]}
          rotation={[0, -Math.PI, 0]}
          position={[-15, 1, 35]}
        >
          <meshStandardMaterial map={post} />
          <Plane rotation={[0, -Math.PI, 0]} />
        </Plane>
        {/* 

breathe, dashboard, kel, listings, account, photos, post

*/}

        <CuboidCollider
          args={[3, 1, 0.1]}
          position={[-5, 1, 29]}
          name="breathe"
          sensor
          onIntersectionEnter={() => {
            // console.log("Intercepted 2");
          }}
          onIntersectionExit={() => {
            setsp((i) => ({ ...i, display: false }));
          }}
        />

        <CuboidCollider
          args={[3, 1, 0.1]}
          position={[0, 1, 42]}
          name="dashboard"
          sensor
          onIntersectionEnter={() => {
            setsp(summaries.projects.dashboard);
            // console.log("Intercepted 2");
          }}
          onIntersectionExit={() => {
            setsp((i) => ({ ...i, display: false }));
          }}
        />

        <CuboidCollider
          args={[3, 1, 0.1]}
          position={[-10, 1, 49]}
          name="kel"
          sensor
          onIntersectionEnter={() => {
            setsp(summaries.projects.kelescope);
          }}
          onIntersectionExit={() => {
            setsp((i) => ({ ...i, display: false }));
          }}
        />

        <CuboidCollider
          args={[0.8, 1, 0.1]}
          position={[10, 1, 49]}
          name="listings"
          sensor
          onIntersectionEnter={() => {
            // console.log("Intercepted 2");
          }}
          onIntersectionExit={() => {
            setsp((i) => ({ ...i, display: false }));
          }}
        />

        <CuboidCollider
          args={[1, 1, 0.1]}
          position={[18, 1, 39]}
          name="account"
          sensor
          onIntersectionEnter={() => {
            setsp(summaries.projects.ridAccount);

            // console.log("Intercepted 2");
          }}
          onIntersectionExit={() => {
            setsp((i) => ({ ...i, display: false }));
          }}
        />

        <CuboidCollider
          args={[1, 1, 0.1]}
          position={[17, 1, 54]}
          name="photos"
          sensor
          onIntersectionEnter={() => {
            // console.log("Intercepted 2");
          }}
          onIntersectionExit={() => {
            setsp((i) => ({ ...i, display: false }));
          }}
        />

        <CuboidCollider
          args={[1, 1, 0.1]}
          position={[-15, 1, 34]}
          name="post"
          sensor
          onIntersectionEnter={() => {
            setsp(summaries.projects.ridPost);

            // console.log("Intercepted 2");
          }}
          onIntersectionExit={() => {
            setsp((i) => ({ ...i, display: false }));
          }}
        />
      </group>
    </>
  );
}
