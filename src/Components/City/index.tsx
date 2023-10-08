import {
  Box,
  Gltf,
  Plane,
  Sphere,
  useHelper,
  useTexture,
} from "@react-three/drei";
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
import { BallCollider, CuboidCollider, RigidBody } from "@react-three/rapier";
import world_ItemLocations from "../../world_ItemLocations";
import { useFrame, useThree } from "@react-three/fiber";
import Ground from "../Ground";
import Library from "../BuildingComponents/Library";
import LL from "../BuildingComponents/LL";
import Monitor from "../Monitor";
import Keyboard from "../Keyboard";

export default function City() {
  // let txt = useTexture("/city01.png");
  // let txt2 = useTexture("/wing5.png");
  // let txt3 = useTexture("/wing2.png");
  // let txt4 = useTexture("/wing4.png");

  let mesh = useRef(null!);

  return (
    <>
      {/* <Keyboard /> */}
      <WorkStation />
      <Ground />
      <RigidBody
        scale={0.6}
        type="dynamic"
        colliders={false}
        friction={0.1}
        // angularDamping={1.1}
        position={[3, 3, 5]}
        restitution={1.75}
      >
        <Sphere />
        <BallCollider args={[1.2]} />
      </RigidBody>

      {/* <Library /> */}
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
        {/* <Box />
        <CuboidCollider args={[0.5, 0.5, 0.5]} mass={1} /> */}
      </RigidBody>
    </>
  );
}
