import { Box, Plane, useTexture } from "@react-three/drei";
import React from "react";
import { DoubleSide } from "three";

export default function Projects2() {
  const breathTexture = useTexture("/webAssets/breath.png");
  const dashboardTexture = useTexture("/webAssets/dashboard.png");
  const ridAccountTexture = useTexture("/webAssets/RidAccount.png");
  const ridPhotosTexture = useTexture("public/webAssets/RidPhotos.png");
  const ridPostTexture = useTexture("public/webAssets/RidPost.png");
  const kelTexture = useTexture("/webAssets/Kel.png");
  const listingsTexture = useTexture("/webAssets/Listings.png");

  return (
    <>
      {/* <mesh>
        <Plane args={[1.6, 0.9, 1]}>
          <meshBasicMaterial map={breathTexture} side={DoubleSide} />
        </Plane>
      </mesh> */}

      {/* <mesh position={[0, 1, 1]} scale={2}>
        <Plane args={[0.9, 1.9, 1]}>
          <meshBasicMaterial map={ridAccountTexture} side={DoubleSide} />
        </Plane>
      </mesh> */}
      {/* <mesh position={[0, 1, 1]} scale={4}>
        <Plane args={[1.6, 0.9, 1]}>
          <meshStandardMaterial map={dashboardTexture} side={DoubleSide} />
        </Plane>
      </mesh> */}
      {/* <mesh position={[0, 1, 1]} scale={4}>
        <Plane args={[1.6, 0.9, 1]}>
          <meshStandardMaterial map={kelTexture} side={DoubleSide} />
        </Plane>
      </mesh> */}
      {/* <mesh position={[0, 1, 1]} scale={2}>
        <Plane args={[1, 1.9, 1]}>
          <meshStandardMaterial map={listingsTexture} side={DoubleSide} />
        </Plane>
      </mesh> */}
      {/* <mesh position={[0, 1, 1]} scale={2}>
        <Plane args={[1, 1.9, 1]}>
          <meshStandardMaterial map={ridPhotosTexture} side={DoubleSide} />
        </Plane>
      </mesh> */}
      <mesh position={[0, 1, 1]} scale={2}>
        <Plane args={[1, 1.9, 1]}>
          <meshStandardMaterial
            map={ridPostTexture}
            emissive={"dff6fb"}
            metalness={0.1}
            side={DoubleSide}
          />
        </Plane>
      </mesh>
    </>
  );
}
