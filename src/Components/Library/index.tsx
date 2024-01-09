import { Box, Gltf, Plane, RoundedBox } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";

import { forwardRef, useMemo } from "react";

import Seats from "../Seats";
import { RigidBodyProps } from "@react-three/rapier";

let Library: React.FC<GroupProps> = forwardRef<any, GroupProps>(
  (props: GroupProps, ref) => {
    let instances = useMemo(() => {
      let chairInstance: RigidBodyProps[] = [
        { position: [3.4, 0, 0], rotation: [0, 0.1, 0] },

        {
          position: [0.9, 0, 1.8],
          rotation: [0, -0.8, 0],
        },
        {
          position: [-1, 0, 2.2],
          rotation: [0, 0, 0],
        },

        {
          position: [1, 0, -1.6],
          rotation: [0, 0.3, 0],
        },

        {
          position: [-1, 0, -2],
        },
      ];

      return chairInstance;
    }, []);

    return (
      <>
        <group {...props}>
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

          <mesh name="table" scale={1.3}>
            <RoundedBox
              args={[4, 0.05, 1.75]}
              radius={0.02}
              smoothness={8}
              bevelSegments={8}
              creaseAngle={0.4}
            >
              <meshPhysicalMaterial
                clearcoat={1}
                roughness={0.1}
                reflectivity={0.82}
                color={"#454545"}
                emissive={"#2b2b2b"}
                transparent
                opacity={0.6}
              />
            </RoundedBox>

            <Gltf
              src="/assets/involvement/tableStand.glb"
              rotation={[0, Math.PI / 2, 0]}
              scale={0.7}
              position={[0, -0.35, 0]}
            />
          </mesh>

          {/* <RigidBody position={[0, -1.3, 8]} type="kinematicPosition">
            <Gltf
              src="/assets/involvement/bookcase.glb"
              rotation={[0, -Math.PI, 0]}
            />
          </RigidBody>
          <RigidBody position={[0, -1.3, -8]} type="kinematicPosition">
            <Gltf src="/assets/involvement/bookcase.glb" />
          </RigidBody>

          <RigidBody position={[9, -1.3, 5]} type="kinematicPosition">
          <Gltf src="/assets/involvement/bookcaseCube.glb" scale={1.4} />
          </RigidBody>*/}

          <Seats instances={instances} frustumCulled={false} />
        </group>
      </>
    );
  }
);

export default Library;

// "Antique wooden bookcase - Game model" (https://skfb.ly/orwXu) by Lorenzo Drago is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).

//cubes case:
//"Bookcase" (https://skfb.ly/oBUOJ) by 3D_for_everyone is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
