import { Box, Torus, useGLTF, useTexture } from "@react-three/drei";
import React from "react";
import Monitor from "./Monitor";

export default function TvStand() {
  let gltf = useGLTF("/models/donna_tv_stand/scene.gltf");

  let texture = useTexture({
    map: "/textures/Metal/Metal_006_basecolor.jpg",
    normalMap: "/textures/Metal/Metal_006_normal.jpg",
    aoMap: "/textures/Metal/Metal_006_ambientOcclusion.jpg",
    metalnessMap: "/textures/Metal/Metal_006_metallic.jpg",
    rounessMap: "/textures/Metal/Metal_006_roughness.jpg",
    bumpMap: "/textures/Metal/Metal_006_height.png",
  });
  console.log(gltf);

  return (
    <mesh>
      <mesh scale={1.5}>
        <primitive object={gltf.scene}>
          <meshPhongMaterial color="red" shininess={100} />
        </primitive>
      </mesh>

      <group position={[0, 0.21, 0]}>
        <Monitor position={[0, 0.93, 0]} />
        <mesh
          position={[0, 0.44, 0.17]}
          rotation={[-(90 * Math.PI) / 180, 0, (23 * Math.PI) / 180]}
        >
          <Torus args={[0.4, 0.0095, 6, 113, 2.3]}>
            <meshStandardMaterial {...texture} metalness={0.24} />
          </Torus>
        </mesh>
      </group>
    </mesh>
  );
}
