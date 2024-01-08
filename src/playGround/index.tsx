// import p from "/smallPlant.glb";

import { Box, Instance, Instances, OrbitControls } from "@react-three/drei";
import {
  BoxGeometry,
  CanvasTexture,
  ClampToEdgeWrapping,
  Mesh,
  MeshBasicMaterial,
  SphereGeometry,
} from "three";
import Contact from "../Components/contact/index.";

export default function PlayGound() {
  return (
    <>
      <Instances frustumCulled={false}>
        <boxGeometry />
        <meshBasicMaterial />

        <Instance />
        <Instance position={[1, 1, 1]} frustumCulled={false} />
      </Instances>
    </>
  );
}
