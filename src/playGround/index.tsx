import { Box, Plane, Text } from "@react-three/drei";

import { infoCardAtom } from "../state";
import { useAtom } from "jotai";

import { useEffect, useMemo, useState } from "react";
import { CanvasTexture, DoubleSide, ImageLoader } from "three";
import Arrow from "../Components/Arrow";

export default function PlayGound() {
  return (
    <>
      <Arrow />
    </>
  );
}
