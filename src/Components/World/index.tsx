import {
  Box,
  Environment,
  Html,
  OrbitControls,
  Plane,
  useFBX,
} from "@react-three/drei";
import InfoCard from "../InfoCard";
import { useState } from "react";

let World = () => {
  let character = useFBX("/PBR.fbx");
  console.log(character);

  return (
    <>
      <ambientLight intensity={1} position={[0, 100, 0]} />
      <Plane scale={500} rotation={[-Math.PI / 2, 0, 0]} position={[0, -10, 0]}>
        <meshPhongMaterial reflectivity={0.5} />

        <OrbitControls />
        {/* <Environment files={"/night-sky.hdr"} /> */}
      </Plane>
      <Box>
        <meshPhongMaterial color={"aqua"} />
      </Box>
      <Html fullscreen className="">
        <InfoCard />
        {/* <div
          className="bg-red-600 m-8
      
        animate-in fade-in zoom-in-90 duration-1000 fill-mode-forwards
        "
        >
          <p>hello</p>
        </div> */}
      </Html>
    </>
  );
};

export default World;
