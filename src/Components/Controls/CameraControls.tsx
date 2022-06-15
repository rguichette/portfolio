import {
  Box,
  FlyControls,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
  useHelper,
} from "@react-three/drei";
import React, { forwardRef, Ref, useRef } from "react";
import { CameraHelper } from "three";

//TODO: replace ANY

let CameraControls = forwardRef((ref?: any) => {
  let pCam = useRef();

  useHelper(pCam, CameraHelper);

  return (
    <mesh>
      {/* <Box  /> */}
      {/* <OrthographicCamera makeDefault /> */}

      <OrbitControls />
    </mesh>
  );
});

export default CameraControls;
