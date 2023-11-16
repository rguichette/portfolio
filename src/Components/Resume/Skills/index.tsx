import {
  Box,
  Gltf,
  Html,
  Plane,
  Polyhedron,
  Shape,
  useGLTF,
} from "@react-three/drei";
import React, { Ref, forwardRef, useEffect, useRef } from "react";
import WorkStation from "../../Workstation";
import world_ItemLocations from "../../../world_ItemLocations";
import { Group, Material, Mesh, MeshStandardMaterial } from "three";
import Monitor from "../../Monitor";
import { MeshProps } from "@react-three/fiber";
import Portal from "../../portal";

import * as THREE from "three";
import {
  MeshCollider,
  RapierCollider,
  RigidBody,
  CuboidCollider,
  CapsuleCollider,
  ConeCollider,
  ConvexHullCollider,
  RapierRigidBody,
  useRapier,
  AnyCollider,
} from "@react-three/rapier";
import { useAtom } from "jotai";
import DetailCard from "../../Cards/detailCard";
import { showEngageButton } from "../../../state";

let Skills: React.FC<MeshProps> = forwardRef((props, ref) => {
  let [showEnBtn, setShowEnBtn] = useAtom(showEngageButton);

  let turbRef = useRef<Group>(null);

  //public/3Dassets/technologies/gopher.glb
  ///Users/ralphguichette/Development/porttfolio/public/3Dassets/technologies/gopher.glb
  //public/3Dassets/technologies/mongo.glb
  //public/3Dassets/technologies/Node.glb
  //public/3Dassets/technologies/python.glb
  //public/3Dassets/technologies/React.glb
  //public/3Dassets/technologies/React.glb

  // let { scene: turb, animations } = useGLTF("/3Dassets/Ventilator.glb");
  let { scene: gopher } = useGLTF("/3Dassets/technologies/gopher.glb");
  // let { scene: golang } = useGLTF("/3Dassets/technologies/golang.glb");
  let { scene: redux } = useGLTF("/3Dassets/technologies/redux.glb");
  let { scene: react } = useGLTF("/3Dassets/technologies/React.glb");
  let { scene: python } = useGLTF("/3Dassets/technologies/python.glb");
  let { scene: node } = useGLTF("/3Dassets/technologies/Node.glb");
  let { scene: mongo } = useGLTF("/3Dassets/technologies/mongo.glb");

  let gearRef = useRef<Mesh>(null);
  let rbMill = useRef<RapierRigidBody>(null);
  useEffect(() => {
    if (gearRef.current) {
      console.log("REF", gearRef.current);
    }

    if (turbRef.current) {
      let turbG = turbRef.current.children[1] as Mesh;
      let tubM = turbG.material as MeshStandardMaterial;
      tubM.color.set("a0c1da");
      tubM.metalness = 0.8;
      tubM.roughness = 0.33;
      tubM.emissive.set("a3a3a3");

      console.log(tubM);
    }

    if (rbMill) {
      // rbMill.current?
    }
  });

  return (
    <>
      <RigidBody position={[40, 0, 80]} rotation={[0, 1.5, 0]} type="fixed">
        <mesh>
          <primitive object={gopher} />
        </mesh>
      </RigidBody>
      <RigidBody
        position={[50, 0, 90]}
        rotation={[0, -2.7, 0]}
        scale={0.5}
        type="fixed"
      >
        <mesh>
          <primitive object={python} />
        </mesh>
      </RigidBody>
      <RigidBody
        position={[40, 0, 45]}
        rotation={[0, -2.2, 0]}
        scale={0.2}
        type="fixed"
      >
        <mesh>
          <primitive object={node} />
        </mesh>
      </RigidBody>

      <RigidBody
        position={[-25, 0, 80]}
        rotation={[0, 2.8, 0]}
        scale={1}
        type="fixed"
      >
        <mesh>
          <primitive object={mongo} />
        </mesh>
      </RigidBody>

      {/* frontennd  */}
      <RigidBody
        position={[-40, 0, 40]}
        rotation={[0, 2.4, 0]}
        scale={0.3}
        type="fixed"
      >
        <mesh>
          <primitive object={react} />
        </mesh>
      </RigidBody>

      <mesh position={[-25, 50, 60]} rotation={[0, 2.4, 0]} scale={7}>
        <primitive object={redux} />
      </mesh>

      <mesh {...props}>
        <group rotation={[0, 1.35, 0]}>
          <CuboidCollider
            args={[1.2, 1, 0.9]}
            position={[-9.5, 0.2, 0]}
            rotation={[0, 0.2, 0]}
            sensor
            onIntersectionEnter={(e) => {
              console.log("interaction...", e);
              setShowEnBtn(true);
            }}
            onIntersectionExit={() => {
              setShowEnBtn(false);
            }}
          />
          <WorkStation
            rotation={[0, Math.PI / 1.8, 0]}
            position={[-10, 0.2, 0]}
          />
        </group>
      </mesh>

      {/* dettails window after engage btn is clicked*/}
    </>
  );
});

export default Skills;
