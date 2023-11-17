import {
  Box,
  Gltf,
  Instance,
  Instances,
  Plane,
  Ring,
  Sphere,
  useHelper,
  useTexture,
} from "@react-three/drei";
import { useEffect, useRef } from "react";
import {
  BoxGeometry,
  BoxHelper,
  Camera,
  DoubleSide,
  MeshPhongMaterial,
  Vector3,
} from "three";
import LL from "../BuildingComponents/LL";
import Ground from "../Ground";
import Factory from "../BuildingComponents/Factory";
import Monitor from "../Monitor";
import Library from "../BuildingComponents/Library";
import Skills from "../Resume/Skills";
import Experience from "../Experience";
import Involvement from "../Resume/Involvement";
import Player from "../Player/Player";
import WorkStation from "../Workstation";
import Projects from "../Resume/Projects";
import {
  BallCollider,
  CuboidCollider,
  InstancedRigidBodies,
  RigidBody,
} from "@react-three/rapier";
import RBox from "../RBox/RBox";
import { useAtomValue } from "jotai";
import Projects2 from "../Projects2/Projects2";
import { showDetailsPopUp } from "../../state";
import StreetSign from "../StreetSign";
import Domino from "../Interractivity/Dominos";
import * as THREE from "three";

export default function City() {
  // let txt = useTexture("/city01.png");
  // let txt2 = useTexture("/wing5.png");
  // let txt3 = useTexture("/wing2.png");
  // let txt4 = useTexture("/wing4.png");

  let box = new THREE.BoxGeometry(1, 1, 1);
  let mat = new THREE.MeshBasicMaterial({ color: 0x00ff22 });
  return (
    <>
      {/* <mesh rotation={[0, 2, 0]}>
        <Monitor
          position={[0, 7, -35]}
          scale={0.6}
          rotation={[0.4, 0, 0]}
          // vidSrc="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
          vidOptions={{ muted: true, loop: true }}
        />
      </mesh> */}

      {/* <mesh rotation={[0, -1.5, 0]} position={[60, 6, 60]}>
        <Monitor
          scale={1.5}
          rotation={[0, 0, 0]}
          // vidSrc="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
          vidOptions={{ muted: true, loop: true }}
        />
      </mesh> */}

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

      <Skills position={[1, 0, 65]} scale={1} />
      <Involvement position={[30, -0.7, -45]} />

      <Projects2 />

      <Domino />
      {/* instances */}
      {/* 
      <InstancedRigidBodies
        instances={[
          {
            key: "instance_" + Math.random() * 2,
            position: [Math.random() * 3, 0, Math.random() * 3],
          },
          {
            key: "instance_" + Math.random() * 4,
            position: [Math.random() * 3, 0, Math.random() * 3],
          },
        ]}
      >
        <instancedMesh
          // position={[1, 0, 1]}
          args={[box, mat, 2]}
          count={2}
        />
      </InstancedRigidBodies> */}

      <Ring
        scale={2}
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
        <Box scale={4} args={[2, 1, 12]}>
          <meshBasicMaterial color={"yellow"} />
        </Box>

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
        <Box scale={4} args={[12, 1, 2]}>
          <meshBasicMaterial color={"blue"} />
        </Box>
        <Ring
          scale={7}
          position={[1, 0, 1]}
          rotation={[-Math.PI / 2, 0, 0]}
          args={[5.394, 6]}
        />
      </mesh>
      <mesh position={[80, -1.2, -26]} name="InvolvementArea">
        <Box scale={4} args={[12, 1, 2]} rotation={[0, 0.4, 0]}>
          <meshBasicMaterial color={"brown"} />
        </Box>
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
