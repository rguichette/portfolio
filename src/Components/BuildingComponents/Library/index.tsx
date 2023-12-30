import {
  Box,
  Gltf,
  Instance,
  Instances,
  MeshReflectorMaterial,
  Plane,
  RoundedBox,
  Sphere,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { GroupProps, MeshProps, useFrame } from "@react-three/fiber";

import { forwardRef, useEffect, useRef } from "react";
import { Mesh, Quaternion, Vector3 } from "three";
import Seat from "../../Seats/Index";
import Seats from "../../Seats/Index";

let Library: React.FC<GroupProps> = forwardRef<any, GroupProps>(
  (props: GroupProps, ref) => {
    let { scene: tblStand } = useGLTF("/assets/involvement/tableStand.glb");

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
              radius={0.02} // Radius of the rounded corners. Default is 0.05
              smoothness={8} // The number of curve segments. Default is 4
              bevelSegments={8} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
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
          <Gltf
            src="/assets/involvement/bookcase.glb"
            position={[0, -1.3, 8]}
            rotation={[0, -Math.PI, 0]}
          />
          <Gltf
            src="/assets/involvement/bookcase.glb"
            position={[0, -1.3, -8]}
          />

          <Seats />
        </group>
      </>
    );
  }
);

export default Library;

// "Antique wooden bookcase - Game model" (https://skfb.ly/orwXu) by Lorenzo Drago is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
