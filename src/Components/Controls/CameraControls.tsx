import {
  Box,
  FlyControls,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
  useHelper,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, {
  forwardRef,
  MutableRefObject,
  Ref,
  useEffect,
  useRef,
} from "react";
import * as THREE from "three";
import { CameraHelper, Object3D, Vector3 } from "three";

//TODO: replace ANY

const currentPosition = new THREE.Vector3();
const currentLookAt = new THREE.Vector3();

let CameraControls = forwardRef(function (
  { character }: { character?: React.MutableRefObject<undefined> },
  ref?: any
) {
  let offset = new THREE.Vector3(0, 0.5, 4);

  let camera =
    useRef() as unknown as React.MutableRefObject<THREE.PerspectiveCamera>;

  useHelper(
    camera as unknown as MutableRefObject<Object3D<Event>>,
    CameraHelper
  );

  const objectPosition = new THREE.Vector3();
  let char: THREE.Mesh;
  let cameraOrigin = new Vector3(0, 0, 10);

  useEffect(() => {
    char = character?.current as unknown as THREE.Mesh;
    if (char) {
      char.add(camera.current);

      camera.current.position.set(0, 1, 10);
    }
  }, []);

  useFrame((state, delta) => {
    // if (camera.current && char)
    // camera.current.lookAt(char.position.clone().add(cameraOrigin));
    // if (camera.current) camera.current.lookAt(char.position);
  });

  return <PerspectiveCamera ref={camera} makeDefault />;
});

export default CameraControls;
