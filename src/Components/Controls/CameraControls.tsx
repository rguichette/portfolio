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
import { CameraHelper, Object3D, Raycaster, Vector3 } from "three";

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
  const raycaster = new THREE.Raycaster();

  useEffect(() => {
    //offset cam
    if (character?.current) character.current.add(camera.current);
    camera.current.setFocalLength(24);
    camera.current.lookAt(scene.position);
    camera.current.position.set(0, 1.0, -5.5);

    camera.current.filmOffset = 0;

    // camera.current.rotation.set(Math.PI / 180, 0, 0);
    camera.current.rotateY(Math.PI);
    camera.current.rotateX((-1 * Math.PI) / 180);
  }, []);

  let obj = new Vector3();

  let { scene } = useThree();

  let house = scene.children.filter((item) => {
    return item.name == "homeMesh";
  })[0];

  console.log("house", house);
  // console.log(house);

  useFrame(({ camera, scene }) => {
    // for detecting if a wall in between character and cam
    raycaster.setFromCamera(new THREE.Vector2(), camera);
    character?.current?.getWorldPosition(obj);
    /////////////////////////start below
    let intersect = raycaster.intersectObject(house);

    //we know this when we set the cam's position "distance" from character |-3.9| --> 3.9
    let distFromCam = 3.9;
    console.log(intersect);

    // var relativeCameraOffset = new THREE.Vector3(0, 2.0, -2);
    // console.log(scene);

    //dont ERASE -- EVER
    if (character?.current) {
      obj.y = 0.5;

      camera.lookAt(obj);
    }
  });

  return (
    <group>
      <PerspectiveCamera
        ref={camera}
        fov={85}
        near={0.01}
        far={1000}
        name="characterCam"
        makeDefault
      />

      <OrbitControls enablePan={false} />
    </group>
  );
});

export default CameraControls;

//saved files
