// import p from "/smallPlant.glb";

import { Box, OrbitControls } from "@react-three/drei";
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
  let c = document.createElement("canvas");
  c.width = 10;

  let ctx = c.getContext("2d");
  let txt = new CanvasTexture(c);

  txt.center.set(0.5, 0.5);
  // txt.repeat.set(0.5, 50);
  txt.wrapS = ClampToEdgeWrapping;
  txt.wrapT = ClampToEdgeWrapping;

  if (ctx) {
    const grd = ctx.createLinearGradient(0, 0, 200, 0);
    grd.addColorStop(0, "yellow");
    grd.addColorStop(1, "white");

    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 300, 200);
  }

  let geo = new SphereGeometry(75, 16, 8, 0, 2, 1, 1.2);
  let m = new MeshBasicMaterial();

  let myMesh = new Mesh(geo, m);

  let box = new BoxGeometry();

  return (
    <>
      {/* <Box scale={[3, 1, 1]}>
        <meshBasicMaterial map={txt} />
      </Box> */}
      {/* <mesh geometry={myMesh.geometry} material={m} /> */}
      <Contact instances={[{ rotation: [0, Math.PI, 0] }]} />
    </>
  );
}
