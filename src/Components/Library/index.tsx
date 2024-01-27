import { Box, Gltf, Plane, RoundedBox, useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";

import { forwardRef, useMemo } from "react";

import { RigidBody, RigidBodyProps } from "@react-three/rapier";
import Table from "../Table";
import Seats from "../Seats";
import Bookcase from "../Bookcase";

let Library: React.FC<GroupProps> = forwardRef<any, GroupProps>(
  (props: GroupProps, ref) => {
    let instances = useMemo(() => {
      let chairInstance: RigidBodyProps[] = [
        { position: [3.4, 0, 0], rotation: [0, 0.1, 0] },

        {
          position: [1.2, 0, 3],
          rotation: [0, 0.4, 0],
        },
        {
          position: [-1, 0, 2.2],
          rotation: [0, 0.4, 0],
        },

        {
          position: [1, 0, -1.6],
          rotation: [0, 0.4, 0],
        },

        {
          position: [-1, 0.4, -2.2],
        },
      ];

      return chairInstance;
    }, []);

    return (
      <>
        <group {...props}>
          <RigidBody type={"fixed"}>
            <mesh
              name="whiteBoard"
              rotation={[0, Math.PI / 2, 0]}
              position={[-6, 1, 0]}
            >
              <Box args={[3.5, 2, 0.05]}>
                <meshPhysicalMaterial
                  metalness={0.6}
                  emissive={"#808080"}
                  reflectivity={0.4}
                  roughness={0.7}
                />
              </Box>

              <Plane args={[3.35, 1.85, 1]} position={[0, 0, 0.04]}>
                <meshPhysicalMaterial
                  metalness={0.1}
                  reflectivity={0.8}
                  emissive={"#ffffff"}
                  roughness={0.1}
                  ior={1.7}
                />
              </Plane>
            </mesh>
          </RigidBody>

          <Table position={[0, -1.3, 1]} />
          <Seats instances={instances} frustumCulled={false} />

          <Bookcase position={[3, 0.2, -8]} scale={1.5} />
        </group>
      </>
    );
  }
);

export default Library;

// "Antique wooden bookcase - Game model" (https://skfb.ly/orwXu) by Lorenzo Drago is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).

//cubes case:
//"Bookcase" (https://skfb.ly/oBUOJ) by 3D_for_everyone is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
