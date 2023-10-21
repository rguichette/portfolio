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
import { engage } from "../../../state";

let Skills: React.FC<MeshProps> = forwardRef((props, ref) => {
  let [engaged, setEngaged] = useAtom(engage);
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
  let { scene: golang } = useGLTF("/3Dassets/technologies/golang.glb");
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
      <mesh {...props}>
        <Box />
        <RigidBody
          type="fixed"
          colliders={"cuboid"}
          position={[-14, -1.7, -15]}
          scale={0.8}
        >
          <mesh>
            <primitive object={gopher} />
          </mesh>
        </RigidBody>

        <RigidBody
          type="fixed"
          colliders={"cuboid"}
          position={[0, 0, 6]}
          scale={5}
        >
          <mesh>
            <primitive object={golang} />
          </mesh>
        </RigidBody>
        <RigidBody
          type="fixed"
          colliders={"cuboid"}
          position={[-4, -1.3, 18]}
          rotation={[0, 1.6, 0]}
          scale={2}
        >
          <mesh>
            <primitive object={node} scale={0.05} />
          </mesh>
        </RigidBody>
        <RigidBody
          type="fixed"
          colliders={"cuboid"}
          position={[2, -0.2, 2]}
          rotation={[0, -1.5, 0]}
          scale={5}
        >
          <mesh>
            <primitive object={python} scale={0.01} />
          </mesh>
        </RigidBody>

        <mesh>
          <RigidBody
            type="fixed"
            colliders={"cuboid"}
            position={[12, -0.2, -5.8]}
            scale={0.1}
          >
            <primitive object={react} />
          </RigidBody>
        </mesh>

        <RigidBody
          type="fixed"
          colliders={"cuboid"}
          position={[-15, -0.5, -8]}
          rotation={[0, 1.2, 0]}
          scale={5}
        >
          <mesh>
            <primitive object={mongo} scale={0.03} />
          </mesh>
        </RigidBody>

        {/* <Html
          scale={0.1}
          // as="div"
          // center
          occlude="blending"
          transform
          sprite
          // rotation={[0, -Math.PI / 2 + 0.7, 0]}
          // position={[-4, 2.4, -4]}
        >
          <img
            src={"https://media.tenor.com/2gfRHLv6GZ8AAAAd/code-coding.gif"}
          />
          HELLO
        </Html> */}
        <CuboidCollider
          args={[0.1, 1, 0.7]}
          position={[-9.5, 0.2, 0]}
          rotation={[0, 0.2, 0]}
          sensor
          onIntersectionEnter={(e) => {
            console.log("interaction...", e);
            setEngaged(true);
          }}
        />
        <CuboidCollider args={[1, 1, 1]} />
        <WorkStation
          rotation={[0, Math.PI / 1.8, 0]}
          position={[-10, 0.2, 0]}
        />
      </mesh>

      {/* <Html center fullscreen>
        <button>Engage</button>
      </Html> */}
    </>
  );
});

// export default function Skills() {
//   let turbRef = useRef<Group>(null);

//   let turb = useGLTF("/3Dassets/Ventilator.glb");
//   let pRef = useRef(null);
//   let gearRef = useRef<Mesh>(null);

//   useEffect(() => {
//     if (gearRef.current) {
//       console.log("REF", gearRef.current);
//     }

//     if (turbRef.current) {
//       let turbG = turbRef.current.children[1] as Mesh;
//       let tubM = turbG.material as MeshStandardMaterial;
//       tubM.color.set("a0c1da");
//       tubM.metalness = 0.8;
//       tubM.roughness = 0.33;
//       tubM.emissive.set("a3a3a3");

//       console.log(tubM);
//     }
//   });

//   return (
//     <>
//       {/* <Html ref={pRef} transform scale={0.1}>
//         <img src={"https://media.tenor.com/2gfRHLv6GZ8AAAAd/code-coding.gif"} />
//       </Html> */}

//       <mesh>
//         {/* <directionalLight /> */}
//         <mesh position={[0, 0, 0]} scale={7}>
//           <Gltf
//             src="/3Dassets/Ventilator.glb"
//             ref={turbRef}
//             scale={0.25}
//             position={[0, -0.25, -0.25]}
//           ></Gltf>
//         </mesh>

//         <WorkStation scale={2} />
//       </mesh>

//       <mesh
//         rotation={[Math.PI / 2, Math.PI / 2, 0]}
//         position={[3, 0, 4]}
//         scale={3}
//         ref={gearRef}
//       >
//         <Gltf
//           src="/3Dassets/Cogs.glb"
//           scale={0.05}
//           position={[0.1, -0.04, 0.25]}
//           rotation={[0, 0, 0]}
//         />
//       </mesh>

//       <Box>
//         <meshBasicMaterial wireframe color={"red"} />
//       </Box>
//     </>
//   );
// }

export default Skills;
