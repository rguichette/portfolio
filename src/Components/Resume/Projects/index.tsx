import { Plane, useHelper, useTexture } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { useRef } from "react";
import { Color, PointLightHelper } from "three";

export default function Projects(props: GroupProps) {
  let pLightRef = useRef(null);
  let pLightRef2 = useRef(null);
  // useHelper(pLightRef.current && pLightRef, PointLightHelper);
  // useHelper(pLightRef2.current && pLightRef2, PointLightHelper);

  let [breathe, dashboard, kel, listings, account, photos, post] = useTexture([
    "public/assets/portfolio/breath-min.png",
    "public/assets/portfolio/dashboard-min.png",
    "public/assets/portfolio/Kel-min.png",
    "public/assets/portfolio/Listings-min.png",
    "public/assets/portfolio/RidAccount-min.png",
    "public/assets/portfolio/RidPhotos-min.png",
    "public/assets/portfolio/RidPost-min.png",
  ]);

  let c = new Color(10, 10, 10);

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
      </group>
    </>
  );
}
