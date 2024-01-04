import {
  Box,
  Cylinder,
  Gltf,
  Instance,
  Instances,
  Plane,
  Ring,
  Sphere,
  Text,
  useAnimations,
  useGLTF,
  useVideoTexture,
} from "@react-three/drei";
import React, { Suspense, useEffect, useRef } from "react";
import WorkStation from "../../Workstation";
import {
  AnimationClip,
  BoxGeometry,
  BufferAttribute,
  BufferGeometry,
  CylinderGeometry,
  DoubleSide,
  Float32BufferAttribute,
  MeshBasicMaterial,
  Vector3,
} from "three";
import { GroupProps, MeshProps, useFrame } from "@react-three/fiber";
import CustomShaderMaterial from "three-custom-shader-material";
import data from "../../../shaders/data/data.vert";
import Contact from "../../contact/index.";

type CylinderRingProps = MeshProps & {
  /**
   * the higher, the more inner thickness spreads
   */
  thickness?: number;
  children?: React.ReactNode;
};

interface CylinderRingProps {
  thickness: number;
  children: React.ReactNode;
}

const CylinderRing = (props: CylinderRingProps) => {
  const { thickness, children } = props;

  // Create a default material
  const defaultMaterial = new MeshBasicMaterial({ color: "red" });
  defaultMaterial.side = DoubleSide;

  console.log(children);

  // Use the provided material or the default material
  const material =
    React.Children.count(children) > 0 ? (
      React.Children.only(children) // Allow only one material as a child
    ) : (
      <meshBasicMaterial color={"red"} side={DoubleSide} />
    );

  return (
    <mesh {...props}>
      <Ring
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0.5, 0]}
        args={[thickness]}
      >
        {material}
      </Ring>
      <Ring
        rotation={[-Math.PI / 2, 0, 0]}
        // material={material}
        position={[0, -0.5, 0]}
        args={[thickness]}
      >
        {material}
      </Ring>
      <mesh>
        <primitive
          object={new CylinderGeometry(1, 1, 1, 20, 1, true, 0, 6.29)}
        />
        {material}
      </mesh>
    </mesh>
  );
};

function Data(props: MeshProps) {
  // let { scene: ring, animations } = useGLTF("/assets/skills/Ring.glb");
  // const { actions, mixer } = useAnimations(animations, ring);
  let uniforms = {
    uTime: { value: 0 },
  };
  useEffect(() => {}, []);

  useFrame(({ clock }) => {
    uniforms.uTime.value = clock.elapsedTime;
  });

  return (
    <mesh {...props}>
      <mesh position={[0, 0.1, 0]}>
        <Plane
          args={[3.5, 3.5, 36, 36]}
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, -0.7, 0]}
        >
          <CustomShaderMaterial
            baseMaterial={MeshBasicMaterial}
            wireframe
            color={"blue"}
            // side={DoubleSide}
            vertexShader={data}
            uniforms={uniforms}
          />
        </Plane>

        <group scale={[0.6, 0.7, 0.6]} position={[0, 0.6, 0]}>
          <CylinderRing
            thickness={0.85}
            scale={[2, 0.1, 2]}
            position={[0, -0.5, 0]}
          >
            <meshStandardMaterial
              color={"gold"}
              side={DoubleSide}
              opacity={0.8}
            />
          </CylinderRing>
          <CylinderRing
            thickness={0.85}
            scale={[2, 0.1, 2]}
            position={[0, 0.1, 0]}
          >
            <meshStandardMaterial
              color={"gold"}
              side={DoubleSide}
              opacity={0.8}
            />
          </CylinderRing>
          <CylinderRing
            thickness={0.85}
            scale={[2, 0.1, 2]}
            position={[0, 0.8, 0]}
          >
            <meshStandardMaterial
              color={"gold"}
              side={DoubleSide}
              transparent
              opacity={0.8}
            />
          </CylinderRing>
        </group>
      </mesh>
    </mesh>
  );
}

export default function Skills(props: GroupProps) {
  let AiData = useVideoTexture("public/AiScreen.mp4");

  return (
    <group {...props}>
      <mesh scale={8}>
        <Plane args={[1, 0.6, 1]} position={[1.4, 0.4, -1]}>
          <meshBasicMaterial map={AiData} side={DoubleSide} />
        </Plane>
      </mesh>
      <WorkStation position={[-4, 0.5, -6]} rotation={[0, -0.5, 0]} />
      <Data position={[3, 0, -20]} />
      <Gltf
        src="/assets/skills/gopher.glb"
        position={[13, -1.5, -15]}
        rotation={[0, -0.4, 0]}
      />
      <Gltf
        src="/assets/skills/python.glb"
        position={[3, 0, -25]}
        scale={0.1}
      />

      <Suspense fallback={<Text>Loading...</Text>}>
        <group scale={0.1} position={[0, -1.4, 0]}>
          {/* <Gltf src="/assets/skills/python.glb" position={[0, 0, -40]} />
          <Gltf src="/assets/skills/mongo.glb" position={[0, 0, 0]} />
          <Gltf src="/assets/skills/Node.glb" position={[0, 0, 0]} /> */}
        </group>
      </Suspense>
      <Contact />
    </group>
  );
}
