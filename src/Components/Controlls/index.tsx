import { Html, RoundedBox, useTexture } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import {
  CanvasTexture,
  ClampToEdgeWrapping,
  ImageLoader,
  ImageUtils,
  Texture,
} from "three";

import cI from "/desktopControls.png";
let ci2 =
  "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
export function DesktopInstructions(props: MeshProps) {
  const createTextureFromImage = (imageUrl: string) => {
    const canvas = document.createElement("canvas");
    const texture = new CanvasTexture(canvas);

    new ImageLoader().load(imageUrl, (image) => {
      const ctx = canvas.getContext("2d");

      canvas.width = image.width;
      canvas.height = image.height;
      if (ctx) {
        ctx.clearRect(0.0, 0.0, canvas.width, canvas.height);

        ctx.drawImage(image, 0.0, 0.0, image.width, image.height);
      }
    });

    return texture;
  };

  return (
    <>
      <Suspense>
        <RoundedBox args={[1, 1, 1]} position={[0, 1, 0]}>
          <meshBasicMaterial attach="material">
            <canvasTexture image={createTextureFromImage(ci2)} />
          </meshBasicMaterial>
        </RoundedBox>
      </Suspense>

      {/* <Html center fullscreen>
        <img
          width={"100%"}
          
          src={
            "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          }
        />
      </Html> */}
    </>
  );
}
