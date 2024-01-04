import {
  Box,
  Instance,
  Instances,
  Merged,
  RoundedBox,
} from "@react-three/drei";
import React, { useRef } from "react";
import { BoxGeometry, MeshBasicMaterial } from "three";

const MyMesh = (props) => {
  const meshRef = useRef();

  return (
    <mesh ref={meshRef} {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial color="green" />
    </mesh>
  );
};

export default function Contact(props) {
  return <></>;
}
