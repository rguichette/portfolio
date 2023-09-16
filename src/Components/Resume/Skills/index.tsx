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

let Skills: React.FC<MeshProps> = forwardRef((props, ref) => {
  let turbRef = useRef<Group>(null);

  let turb = useGLTF("/3Dassets/Ventilator.glb");
  let pRef = useRef(null);
  let gearRef = useRef<Mesh>(null);

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
  });

  return (
    <>
      {/* <Html ref={pRef} transform scale={0.1}>
        <img src={"https://media.tenor.com/2gfRHLv6GZ8AAAAd/code-coding.gif"} />
      </Html> */}

      <mesh {...props}>
        {/* <directionalLight /> */}
        <mesh position={[0, 0, 0]} scale={7}>
          <Gltf
            src="/3Dassets/Ventilator.glb"
            ref={turbRef}
            scale={0.25}
            position={[0, 0.1, -0.25]}
          />
        </mesh>

        <WorkStation scale={3} position={[2, 0, -21]} rotation={[0, 2.5, 0]} />
      </mesh>

      <Portal lightColor={new THREE.Color("blue")} />
      <mesh
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
        position={[3, 0, 4]}
        scale={3}
        ref={gearRef}
      >
        <Gltf
          src="/3Dassets/Cogs.glb"
          scale={0.05}
          position={[0.1, -0.04, 0.25]}
          rotation={[0, 0, 0]}
        />
      </mesh>

      <Box>
        <meshBasicMaterial wireframe color={"red"} />
      </Box>
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
