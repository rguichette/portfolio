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

import { BoxBufferGeometry, CameraHelper, Object3D, Raycaster, Vector2, Vector3 } from "three";
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib'





let CameraControls = forwardRef(function (
  { character }: { character?: React.MutableRefObject<THREE.Mesh | undefined> },
  ref?: any
) {
  //helpers and references
  let camera =
    useRef() as unknown as React.MutableRefObject<THREE.PerspectiveCamera>;

let control = useRef<OrbitControlsImpl>(null)

  useHelper(
    camera as unknown as MutableRefObject<Object3D<Event>>,
    CameraHelper
  );

  useEffect(() => {
 
    //offset cam
    if (character?.current) character.current.add(camera.current);
    camera.current.setFocalLength(24);
    camera.current.lookAt(scene.position);
    camera.current.position.set(0, 2, -3.95);
    
    camera.current.filmOffset = 0;
    
   
    
    // camera.current.rotation.set(Math.PI / 180, 0, 0);
    camera.current.rotateY(Math.PI);
    // raycaster = new THREE.Raycaster(camera.current.getWorldPosition(rayObj));
 
    // camera.current.rotateX((-1 * Math.PI) / 180);
  }, []);

   let obj = new Vector3();
  let raycaster = new THREE.Raycaster();
  //listen for cam rotation and movement
   let rayObj = new Vector3()
  // window.onkeydown = () =>{
  //   //fire ray
  //   camera.current.getWorldPosition(rayObj)
  //   //copying before creating ray
  //   character?.current?.getWorldPosition(obj);
  //   console.log("RAYOBJ",rayObj);


  //   raycaster.set(rayObj,obj)



  //   let ray =new THREE.ArrowHelper(raycaster.ray.direction, raycaster.ray.origin, 100, 2 * 0xffffff)
  //   scene.add(ray)
  // }
  


  
 


   
 

  let { scene } = useThree();


  let house = scene.children.filter((item) => {
    return item.name == "homeMesh";
  })[0];

  // console.log(house);
  let walls: THREE.Intersection<THREE.Object3D<THREE.Event>>[] = [];
 

//   })
let camPos = new Vector3
let ray; 
  useFrame(() => {

raycaster.setFromCamera({x:0.1, y:0}, camera.current)
     ray = new THREE.ArrowHelper(raycaster.ray.direction, raycaster.ray.origin, 100, 2 * 0xffffff)


  // if(ray)
  // scene.add(ray)



    character?.current?.getWorldPosition(obj);
    

    //dont ERASE -- EVER
    if (character?.current) {
      obj.y = 1;
// 
      camera.current.lookAt(obj);
    }
  });


  return (
    <group>
      <PerspectiveCamera
      name="inside_home"
      />
      <PerspectiveCamera
        ref={camera}
        fov={75}
        near={0.01}
        far={1000}
        name="characterCam"
        // makeDefault
      />

      <OrbitControls
        // enablePan={false}
        // enableZoom={false}
        minPolarAngle={1.4}
        maxPolarAngle={1.5}
        ref={control}
        
      />
    </group>
  );
});

export default CameraControls;

//saved files
