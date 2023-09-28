import { Box, Gltf, Plane, useHelper, useTexture } from "@react-three/drei";
import { useRef } from "react";
import { BoxHelper, DoubleSide, MeshPhongMaterial } from "three";

import wl from "../../world_ItemLocations";
import Skills from "../Resume/Skills";
import WorkStation from "../Workstation";

export default function City() {
  let txt = useTexture("/city01.png");
  // let txt2 = useTexture("/wing5.png");
  let txt3 = useTexture("/wing2.png");
  let txt4 = useTexture("/wing4.png");

  let mesh = useRef(null!);

  console.log(txt);

  return (
    <>
      {/* floor */}
      <Plane
        scale={wl.scales.city.floor_scale}
        rotation={wl.rotations.city.floor_rotation}
        position={wl.positions.city.floor_position}
        receiveShadow
      >
        <meshStandardMaterial side={DoubleSide} />
      </Plane>
      {/* front wall */}
      <Plane
        scale={wl.scales.city.city_view_walls}
        position={wl.positions.city.z_back_position}
        rotation={wl.rotations.city.z_back_rotation}
        ref={mesh}
      >
        <meshStandardMaterial
          map={txt}
          color={"rgb(29, 119, 150)"}
          transparent
        />
      </Plane>

      {/* right */}
      <Plane
        scale={wl.scales.city.city_view_walls}
        position={wl.positions.city.x_right_position}
        rotation={wl.rotations.city.x_right_rotation}
        ref={mesh}
      >
        <meshStandardMaterial
          side={DoubleSide}
          map={txt3}
          color={"rgb(37, 150, 190)"}
          transparent
        />
      </Plane>

      {/* Left */}
      <Plane
        scale={wl.scales.city.city_view_walls}
        position={wl.positions.city.x_left_position}
        rotation={wl.rotations.city.x_left_rotation}
        ref={mesh}
      >
        <meshStandardMaterial
          side={DoubleSide}
          map={txt4}
          color={"rgb(29, 119, 150)"}
          transparent
        />
      </Plane>
      {/* city props */}

      {/* <Gltf src="/3Dassets/s_buidlings_factory2.glb" position={[10, 0, 15]} />
      <Gltf src="/3Dassets/s_buidlings_factory2.glb" position={[50, 0, 5]} />
      <Gltf src="/3Dassets/s_buidlings_factory2.glb" />

      <Gltf src="/3Dassets/s_L.glb" />
      <Gltf src="/3Dassets/s_LL.glb" />
      <Gltf src="/3Dassets/s_LLll.glb" /> */}
    </>
  );
}
