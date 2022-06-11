import { Box } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import Monitor from "./Monitor";

export default function WorkMonitors(props: MeshProps) {
  let rightMon = useRef();

  useEffect(() => {
    if (rightMon.current) {
      let rm = rightMon.current as THREE.Mesh;
      console.log("RMSS", rm);
      //   rm.rotateY(2);
    }
  }, []);

  return (
    <mesh {...props}>
      <Monitor position={[3, 1, 0]} rotation={[0, 0, 0]} />
      <Monitor position={[4, 0, 0]} rotation={[0, 0, 0]} />
      <Monitor position={[2, 0, 0]} />

      <Monitor
        position={[0.6, 0, -0.3]}
        rotation={[0, -(40 * Math.PI) / 180, (90 * Math.PI) / 180]}
      />
    </mesh>
  );
}
