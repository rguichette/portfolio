import { Box, Gltf, Plane, useHelper, useTexture } from "@react-three/drei";
import { useEffect, useRef } from "react";
import {
  BoxHelper,
  Camera,
  DoubleSide,
  MeshPhongMaterial,
  Vector3,
} from "three";

import wl from "../../world_ItemLocations";
import Skills from "../Resume/Skills";
import WorkStation from "../Workstation";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import world_ItemLocations from "../../world_ItemLocations";
import { useFrame, useThree } from "@react-three/fiber";

export default function City() {
  // let txt = useTexture("/city01.png");
  // let txt2 = useTexture("/wing5.png");
  // let txt3 = useTexture("/wing2.png");
  // let txt4 = useTexture("/wing4.png");

  let mesh = useRef(null!);

  let floorSize = 1000;

  return (
    <>
      <RigidBody type="fixed" colliders={false}>
        {/* multiply by 2 in order to adjust for RB scaling */}
        <Plane
          rotation={[-Math.PI / 2, 0, 0]}
          args={[floorSize * 2, floorSize * 2, floorSize * 2]}
          position={[0, -1.3, 0]}
        >
          <meshBasicMaterial
            // wireframe
            color={"#D95030"}
            side={DoubleSide}
          />
        </Plane>
        <CuboidCollider
          args={[floorSize, 0.01, floorSize]}
          position={[0, -1.3, 0]}
        />
      </RigidBody>
      <RigidBody
        mass={1}
        type="fixed"
        position={[1, 0, 0]}
        // colliders={false}
        // gravityScale={0.1}
        // angularDamping={0.3}
        onCollisionEnter={() => {
          console.log("collision");
        }}
      >
        <Box />
        <CuboidCollider args={[0.5, 0.5, 0.5]} mass={1} />
      </RigidBody>
    </>
  );
}
