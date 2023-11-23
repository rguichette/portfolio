import { Ring, Sphere } from "@react-three/drei";
import Ground from "../Ground";
import Skills from "../Resume/Skills";
import Involvement from "../Resume/Involvement";
import { RigidBody } from "@react-three/rapier";
import Projects2 from "../Projects2/Projects2";

import * as THREE from "three";

export default function City() {
  let box = new THREE.BoxGeometry(1, 1, 1);
  let mat = new THREE.MeshBasicMaterial({ color: 0x00ff22 });

  return (
    <>
      <RigidBody
        position={[3, 1, 6]}
        colliders="ball"
        scale={0.3}
        friction={1.1}
        angularDamping={0.4}
        restitution={1.6}
      >
        <Sphere />
      </RigidBody>

      <Ring
        scale={2}
        position={[0, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        args={[5.394, 6]}
      />

      <Ring
        scale={1}
        position={[1, 0, 1]}
        rotation={[-Math.PI / 2, 0, 0]}
        args={[5.394, 6]}
      />
      <Ring
        scale={10}
        position={[1, 0, 1]}
        rotation={[-Math.PI / 2, 0, 0]}
        args={[5.394, 6]}
      />
      <Ring
        scale={15}
        position={[1, 0, 1]}
        rotation={[-Math.PI / 2, 0, 0]}
        args={[5.394, 6]}
      />
      <Ring
        scale={20}
        position={[1, 0, 1]}
        rotation={[-Math.PI / 2, 0, 0]}
        args={[5.394, 6]}
      />
      <mesh position={[-2, -1.2, 82]} name="skillsArea">
        <Ring
          scale={7}
          position={[1, 0, 1]}
          rotation={[-Math.PI / 2, 0, 0]}
          args={[5.394, 6]}
        />
      </mesh>
      <mesh
        position={[-78, -1.2, -26]}
        name="projectsArea"
        rotation={[0, -0.4, 0]}
      >
        <Ring
          scale={7}
          position={[1, 0, 1]}
          rotation={[-Math.PI / 2, 0, 0]}
          args={[5.394, 6]}
        />
      </mesh>
      <mesh position={[80, -1.2, -26]} name="InvolvementArea">
        <Ring
          scale={7}
          position={[1, 0, 1]}
          rotation={[-Math.PI / 2, 0, 0]}
          args={[5.394, 6]}
        />
      </mesh>
      <Ground />
    </>
  );
}
