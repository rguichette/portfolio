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
    if (character?.current) character.current.add(camera.current);

    //offset cam
    camera.current.position.set(0, 2.2, -2);
    camera.current.rotateY(Math.PI);
    character?.current?.getWorldPosition(obj);
  }, []);

  let obj = new Vector3();
  useFrame(() => {
    /////////////////////////start below

    var relativeCameraOffset = new THREE.Vector3(0, 2.2, -2);

    //dont ERASE -- EVER
    if (character?.current) {
      // camera.current.lookAt(obj);
    }
  });

  return <PerspectiveCamera ref={camera} fov={75} />;
});

export default CameraControls;

//saved files
