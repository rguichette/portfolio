import "./styles.css";

import {
  Box,
  Environment,
  GizmoHelper,
  GizmoViewport,
  Grid,
  Html,
  Lightformer,
  OrbitControls,
  Plane,
  useFBX,
  useHelper,
} from "@react-three/drei";
import InfoCard from "../InfoCard";
import { useRef, useState } from "react";
import City from "../City";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";

import wl from "../../world_ItemLocations.ts";

let World = () => {
  // let { scene } = useThree();

  // scene.background = new THREE.Color("rgba(63,74,205,1)");
  // {"x":0}, {"y":-10}, {"z":0}
  // console.log(wl.)

  let test = [0, -10, 0];

  console.log(wl);

  return (
    <>
      <ambientLight
        intensity={0.9}
        position={[0, 100, 0]}
        // color={"rgb(37, 150, 190)"}
      />

      <Plane
        scale={500}
        rotation={[-Math.PI / 2, 0, 0]}
        position={wl.positions.city.floor_position}
      ></Plane>
      <Box>
        <meshStandardMaterial color={"aqua"} roughness={0} />
      </Box>

      {/* <Environment preset="warehouse" /> */}

      <OrbitControls />

      <City />

      <GizmoHelper
        alignment="bottom-right" // widget alignment within scene
        margin={[80, 80]} // widget margins (X, Y)
      >
        <GizmoViewport
          axisColors={["red", "green", "blue"]}
          labelColor="black"
        />
        {/* alternative: <GizmoViewcube /> */}
      </GizmoHelper>
    </>
  );
};

export default World;
