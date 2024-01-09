import { Plane, useTexture } from "@react-three/drei";

export default function Projects() {
  let [breathe, dashboard, kel, listings, account, photos, post] = useTexture([
    "public/assets/portfolio/breath-min.png",
    "public/assets/portfolio/dashboard-min.png",
    "public/assets/portfolio/Kel-min.png",
    "public/assets/portfolio/Listings-min.png",
    "public/assets/portfolio/RidAccount-min.png",
    "public/assets/portfolio/RidPhotos-min.png",
    "public/assets/portfolio/RidPost-min.png",
  ]);

  return (
    <>
      <group position={[0, 0.5, 3.5]}>
        <Plane
          scale={[6, 3.2, 1]}
          rotation={[0, -Math.PI, 0]}
          position={[-5, 1, 30]}
        >
          <meshBasicMaterial map={breathe} />
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
          <meshStandardMaterial map={kel} />
          <Plane rotation={[0, -Math.PI, 0]} />
        </Plane>
        <Plane
          scale={[2, 4.2, 1]}
          rotation={[0, -Math.PI, 0]}
          position={[10, 1, 50]}
        >
          <meshStandardMaterial map={listings} />
          <Plane rotation={[0, -Math.PI, 0]} />
        </Plane>
        <Plane
          scale={[2, 4.2, 1]}
          rotation={[0, -Math.PI, 0]}
          position={[18, 1, 40]}
        >
          <meshStandardMaterial map={account} />
          <Plane rotation={[0, -Math.PI, 0]} />
        </Plane>
        <Plane
          scale={[2, 4.2, 1]}
          rotation={[0, -Math.PI, 0]}
          position={[17, 1, 55]}
        >
          <meshStandardMaterial map={photos} />
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
