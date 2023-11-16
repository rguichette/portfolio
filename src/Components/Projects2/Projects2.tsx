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
      <mesh>
        <Plane position={[-40, 1, -10]} args={[1.6, 0.9, 1]}>
          <meshBasicMaterial map={breathTexture} side={DoubleSide} />
        </Plane>
      </mesh>

      <mesh position={[-55, 1, -20]} rotation={[0, 0.5, 0]} scale={2}>
        <Plane args={[0.9, 1.9, 1]}>
          <meshBasicMaterial map={ridAccountTexture} side={DoubleSide} />
        </Plane>
      </mesh>
      <mesh position={[-80, 1, 13]} scale={4}>
        <Plane args={[1.6, 0.9, 1]}>
          <meshStandardMaterial map={dashboardTexture} side={DoubleSide} />
        </Plane>
      </mesh>
      <mesh position={[-60, 1, -55]} scale={4}>
        <Plane args={[1.6, 0.9, 1]}>
          <meshStandardMaterial map={kelTexture} side={DoubleSide} />
        </Plane>
      </mesh>
      <mesh position={[-80, 1, -30]} scale={2} rotation={[0, 0.5, 0]}>
        <Plane args={[1, 1.9, 1]}>
          <meshStandardMaterial map={listingsTexture} side={DoubleSide} />
        </Plane>
      </mesh>
      <mesh position={[-40, 1, -40]} scale={2}>
        <Plane args={[1, 1.9, 1]}>
          <meshStandardMaterial map={ridPhotosTexture} side={DoubleSide} />
        </Plane>
      </mesh>
      <mesh position={[-55, 1, 10]} scale={2} rotation={[0, 1, 0]}>
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
