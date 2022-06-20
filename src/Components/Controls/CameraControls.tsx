import {
  Box,
  FlyControls,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
  useHelper,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, {
  forwardRef,
  MutableRefObject,
  Ref,
  useEffect,
  useRef,
} from "react";
import * as THREE from "three";
import { CameraHelper, Object3D, Vector3 } from "three";

//TODO: make cam more fluid

let CameraControls = forwardRef(function (
  { character }: { character?: React.MutableRefObject<THREE.Mesh | undefined> },
  ref?: any
) {
  //helpers and references
  let camera =
    useRef() as unknown as React.MutableRefObject<THREE.PerspectiveCamera>;
  useHelper(
    camera as unknown as MutableRefObject<Object3D<Event>>,
    CameraHelper
  );

  ////////////start here///////
  //TODO: make camera more fluid

  useEffect(() => {
    //offset cam
    if (character?.current) character.current.add(camera.current);
    camera.current.position.set(0, 2.0, -3.9);
    // camera.current.rotation.set(Math.PI / 180, 0, 0);
    camera.current.rotateY(Math.PI);
  }, []);

  let obj = new Vector3();
  useFrame(() => {
    character?.current?.getWorldPosition(obj);
    /////////////////////////start below

    // var relativeCameraOffset = new THREE.Vector3(0, 2.0, -2);

    //dont ERASE -- EVER
    if (character?.current) {
      // camera.current.lookAt(obj);
    }
  });

  return <PerspectiveCamera ref={camera} fov={75} makeDefault />;
});

export default CameraControls;

//saved files
