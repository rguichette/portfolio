import { Box, Plane, Text } from "@react-three/drei";

import { infoCardAtom } from "../state";
import { useAtom } from "jotai";

import { useEffect, useMemo, useState } from "react";
import { CanvasTexture, DoubleSide, ImageLoader } from "three";

const createTextureFromImage = (imageUrl: string) => {
  const canvas = document.createElement("canvas");
  const texture = new CanvasTexture(canvas);

  new ImageLoader().load(
    imageUrl,
    (image: { width: number; height: number }) => {
      const ctx = canvas.getContext("2d") as any;

      canvas.width = image.width;
      canvas.height = image.height;
      ctx.clearRect(0.0, 0.0, canvas.width, canvas.height);

      ctx.drawImage(image, 0.0, 0.0, image.width, image.height);
    }
  );

  texture.needsUpdate = true;
  return texture;
};

export default function PlayGound() {
  let [infoAtom, setInfo] = useAtom(infoCardAtom);
  let [sec, setSec] = useState(0);

  return (
    <mesh>
      <Plane scale={[3, 4, 1]}>
        <meshBasicMaterial
          map={createTextureFromImage("/phonebg.jpeg")}
          side={DoubleSide}
        />
      </Plane>
    </mesh>
  );
}
