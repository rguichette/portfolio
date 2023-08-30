import { Box, Plane, useHelper, useTexture } from "@react-three/drei";
import { useRef } from "react";
import { BoxHelper, DoubleSide } from "three";

import wl from "../../world_ItemLocations";

export default function City() {
  let txt = useTexture("/city01.png");
  // let txt2 = useTexture("/wing5.png");
  let txt3 = useTexture("/wing2.png");
  let txt4 = useTexture("/wing4.png");
  let mesh = useRef(null!);

  // useHelper(mesh, BoxHelper, "red");

  console.log(txt);

  return (
    <>
      <Plane
        scale={[500, 300, 1]}
        position={wl.positions.city.z_back_position}
        ref={mesh}
      >
        <meshStandardMaterial
          map={txt}
          color={"rgb(29, 119, 150)"}
          transparent={true}
        />
      </Plane>

      {/* <Plane
        scale={[500, 300, 1]}
        position={wl.positions.city.z_front_position}
        ref={mesh}
      >
        <meshStandardMaterial
          side={DoubleSide}
          // map={txt2}
          color={"rgb(37, 150, 190)"}
          transparent={true}
        />
      </Plane> */}

      {/* right */}
      <Plane
        scale={[500, 300, 1]}
        position={wl.positions.city.x_right_position}
        rotation={[0, Math.PI / 2, 0]}
        ref={mesh}
      >
        <meshStandardMaterial
          side={DoubleSide}
          map={txt3}
          color={"rgb(37, 150, 190)"}
          transparent={true}
        />
      </Plane>

      {/* Left */}
      <Plane
        scale={[500, 300, 1]}
        position={wl.positions.city.x_left_position}
        rotation={[0, Math.PI / 2, 0]}
        ref={mesh}
      >
        <meshStandardMaterial
          side={DoubleSide}
          map={txt4}
          color={"rgb(29, 119, 150)"}
          transparent={true}
        />
      </Plane>

      {/* <mesh scale={4}>
        <Box />
        <meshBasicMaterial color={"green"} />
      </mesh> */}
    </>
  );
}
