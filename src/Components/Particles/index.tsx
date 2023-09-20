import {
  Box,
  Html,
  Instance,
  Instances,
  Merged,
  MeshWobbleMaterial,
  Plane,
  Text3D,
  useGLTF,
} from "@react-three/drei";
import { MeshProps, useFrame } from "@react-three/fiber";
import { forwardRef, useEffect, useRef } from "react";
import { Mesh, ShaderMaterial } from "three";
import Portal from "../portal";

import vert from "./shaders/vertex.glsl";
import frag from "./shaders/fragment.glsl";
import * as THREE from "three";

// import entrance from "../../3Dassets/entrance.glb";

type MProps = MeshProps & { Mcolor?: string };

let Particles: React.FC<MProps> = forwardRef((props, ref) => {
  return (
    <Instances limit={1000} range={1000}>
      <mesh attach="plane">
        <meshBasicMaterial />
      </mesh>
    </Instances>
  );
});

export default Particles;
