import {
  Box,
  Instance,
  Instances,
  Ring,
  Sphere,
  Text3D,
  useAnimations,
} from "@react-three/drei";
import Ground from "../Ground";
import Skills from "../Resume/Skills";
import Involvement from "../Resume/Involvement";
import { RigidBody } from "@react-three/rapier";
import Projects2 from "../Projects2/Projects2";

import * as THREE from "three";
import GltfInstances from "../GltfInstances";
import { Suspense, useEffect, useRef, useState } from "react";
import GltfRigidBodyInstances from "../GltfRigidBodyInstances";
import GltfInstances2, { GLtfInstancesType } from "../GltfInstances2";
import { useFrame, useThree } from "@react-three/fiber";
import OrbLight from "../OrbLight";
import Domino from "../Interractivity/Dominos";

export default function City() {
  let box = new THREE.BoxGeometry(1, 1, 1);
  let mat = new THREE.MeshBasicMaterial({ color: 0x00ff22 });

  let testRef = useRef(null);

  if (testRef.current) {
    let mesh = testRef.current as GLtfInstancesType;

    console.log(mesh.instaceMesh?.children);
    mesh.instaceMesh?.children.map((mesh, index) => {
      mesh.position.set((Math.random() + 1) * 2, 0, Math.random() * 4);

      console.log(mesh.position);
    });
  }

  let [ready, setReady] = useState(false);

  let { clock } = useThree();
  let delta = 0;

  return (
    <>
      <Suspense>
        <RigidBody>
          <Box castShadow>
            <meshBasicMaterial color={"red"} />
          </Box>
        </RigidBody>

        <group name="city_energy_lights">
          <OrbLight
            position={[50, 7, -15]}
            scale={4}
            intensity={60}
            shapeColor="orange"
          />
          <OrbLight
            position={[-42, 9, -13]}
            scale={4.3}
            intensity={90}
            shapeColor="green"
          />
          <OrbLight
            position={[0, 9, 47]}
            scale={4.3}
            intensity={90}
            shapeColor="blue"
          />
          <OrbLight
            position={[0, 4, 0]}
            scale={1}
            intensity={30}
            shapeColor="yellow"
          />
        </group>
        {/* <GltfInstances
          position={[1, 0, 4]}
          file={{
            path: "public/3Dassets/Environment/plants/alien_plant.glb",
            useDraco: true,
          }}
        /> */}
        {/* <GltfInstances2
          file={{ path: "/3Dassets/Environment/plants/falling_leaves2.glb" }}
          ref={testRef}
        /> */}
      </Suspense>

      {/* <GltfRigidBodyInstances
        file={{ path: "public/3Dassets/Environment/plants/alien_plant.glb" }}
        position={[2, 0, 4]}
        scale={0.25}
        count={2}
        startOffset={{ x: -2, y: 0, z: -3 }}
      /> */}
      {/* 
      <Domino spacing={2} />
      <Domino spacing={2} scale={2} position={[-20, 0, 10]} />
      <Domino
        spacing={2}
        scale={1.25}
        position={[-20, 0, -10]}
        rotation={[0.0, 0.3, 0.0]}
      /> */}

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

      <Involvement position={[25, 0, -45]} />
      <Projects2 />
      <Skills />

      <RigidBody
        position={[-60, 0, -3]}
        rotation={[0, Math.PI / 2, 0]}
        scale={3}
        type="fixed"
      >
        <Text3D font={"/fonts/Tele-Marines_Regular.json"}>
          Projects
          <meshNormalMaterial />
        </Text3D>
      </RigidBody>
      <RigidBody
        position={[25, 0, -30]}
        rotation={[0, -Math.PI / 3.7, 0]}
        scale={3}
        type="fixed"
      >
        <Text3D font={"/fonts/Tele-Marines_Regular.json"}>
          Involvement
          <meshNormalMaterial />
        </Text3D>
      </RigidBody>

      <RigidBody
        position={[10, 0, 50]}
        rotation={[0, -Math.PI / 1, 0]}
        scale={3}
        type="fixed"
      >
        <Text3D font={"/fonts/Tele-Marines_Regular.json"}>
          Skills
          <meshNormalMaterial />
        </Text3D>
      </RigidBody>
      {/*}
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
    </mesh>*/}
      <Ground />
    </>
  );
}
