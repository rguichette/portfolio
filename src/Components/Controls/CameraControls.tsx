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
    camera.current.position.set(0, 2.7, -3.95);

    camera.current.filmOffset = 0;

    // camera.current.rotation.set(Math.PI / 180, 0, 0);
    camera.current.rotateY(Math.PI);
    // camera.current.rotateX((-1 * Math.PI) / 180);
  }, []);

  let obj = new Vector3();

  let { scene } = useThree();

  let house = scene.children.filter((item) => {
    return item.name == "homeMesh";
  })[0];

  // console.log(house);
  let walls = [];

  useFrame(({ camera, scene }) => {
    let dist: number;
    // for detecting if a wall in between character and cam
    raycaster.setFromCamera(new THREE.Vector2(), camera);

    character?.current?.getWorldPosition(obj);

    if (character?.current) {
      let intersects = raycaster.intersectObject(house);

      dist = camera.position.distanceTo(character?.current?.position);
      // console.log("DIST", dist);
      //camera see-through
      if (intersects.length > 0) {
        intersects[0].object.material.transparent = true;

        //BAD CODE
        if (intersects[0].distance < dist) {
          //make invisible
          intersects[0].object.material.opacity = 0;
        } else {
          intersects[0].object.material.opacity = 1;
        }

        //remove walls and bring them back
        // console.log(intersects);
        //
      }
    }

    //dont ERASE -- EVER
    if (character?.current) {
      obj.y = 1;

      camera.lookAt(obj);
    }
  });

  return (
    <group>
      <PerspectiveCamera
        ref={camera}
        fov={75}
        near={0.01}
        far={1000}
        name="characterCam"
        makeDefault
      />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={1.4}
        maxPolarAngle={1.5}
      />
    </group>
  );
});

export default CameraControls;

//saved files
