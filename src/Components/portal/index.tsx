import {
  Box,
  MeshDistortMaterial,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import { ColorProps, MeshProps, useFrame } from "@react-three/fiber";
import { forwardRef, useEffect } from "react";
import { Mesh } from "three";
import * as THREE from "three";

import frag from "./shaders/fragment.glsl";
import vert from "./shaders/vertex.glsl";

type PortalProps = MeshProps & {
  lightColor: THREE.Color;
};

//TODO:  finish this with portal

let Portal: React.FC<PortalProps> = forwardRef<Mesh, PortalProps>(
  (props, ref) => {
    let uniforms = {
      uTime: { value: 0 },
    };

    let { scene: bird, animations } = useGLTF("/3Dassets/bird.glb");
    let birdAnimation = useAnimations(animations, bird);

    useEffect(() => {
      birdAnimation.clips.forEach(function (clip) {
        birdAnimation.mixer.clipAction(clip).timeScale = 0.66;
        birdAnimation.mixer.clipAction(clip).play();
      });

      //   console.log(birdAnimation.clips[0].tracks[0]);
    });

    useFrame(({ clock }) => {
      uniforms.uTime.value = clock.elapsedTime;
    });

    return (
      <>
        <mesh ref={ref} scale={10}>
          <cylinderGeometry attach="geometry" args={[1, 1, 5, 20, 1]} />
          <shaderMaterial
            fragmentShader={frag}
            vertexShader={vert}
            uniforms={uniforms}
            transparent
            opacity={0.3}
          />
          <mesh position={[0, 3, 0]} rotation={[0.2, 0, 0]}>
            <primitive object={bird} />
          </mesh>
        </mesh>
        {/* <Box>
        </Box> */}
      </>
    );
  }
);

export default Portal;
