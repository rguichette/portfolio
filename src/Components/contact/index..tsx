import {
  Box,
  Html,
  Instance,
  InstanceProps,
  Instances,
  Merged,
  Plane,
  RoundedBox,
  Sphere,
  Tube,
  useGLTF,
} from "@react-three/drei";
import { MeshProps, useFrame } from "@react-three/fiber";
import {
  CuboidCollider,
  InstancedRigidBodies,
  InstancedRigidBodyProps,
  RapierRigidBody,
  RigidBody,
  RigidBodyProps,
} from "@react-three/rapier";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  BoxGeometry,
  CanvasTexture,
  ClampToEdgeWrapping,
  Color,
  ConeGeometry,
  DoubleSide,
  EdgesGeometry,
  ImageLoader,
  InstancedMesh,
  LineBasicMaterial,
  LineSegments,
  Material,
  Mesh,
  MeshBasicMaterial,
  MeshPhongMaterial,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  Object3D,
  PlaneGeometry,
  RepeatWrapping,
} from "three";
import { RoundedBoxGeometry } from "three-stdlib";

import * as BufferGeometryUtils from "three/addons/utils/BufferGeometryUtils.js";
import { cubeTexture } from "three/examples/jsm/nodes/Nodes.js";

interface ContactInstanceMesh extends MeshProps {
  instances: RigidBodyProps[];
}

export default function Contact(props: ContactInstanceMesh) {
  const boxGeometry = new BoxGeometry(1, 1, 1, 8, 8, 8);
  const boxEdges = new EdgesGeometry(boxGeometry);
  const roundedBoxEdges = new LineSegments(
    boxEdges,
    new LineBasicMaterial({ color: 0xffffff })
  );

  BufferGeometryUtils.mergeVertices(boxEdges);

  // ----------- FRONT CANVAS------------------------

  const canvas = document.createElement("canvas");
  const texture = new CanvasTexture(canvas);
  texture.needsUpdate = true;
  var days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const phoneAnimatedTexture = () => {
    let imageUrl = "phonebg.jpeg";

    const ctx = canvas.getContext("2d");

    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
    texture.repeat.set(1, 1);
    texture.offset.set(0, 0);

    new ImageLoader().load(imageUrl, (image) => {
      ctx?.rotate(-Math.PI);

      canvas.width = image.width;
      canvas.height = image.height;
      ctx.clearRect(0.0, 0.0, canvas.width, canvas.height);

      ctx.drawImage(image, 0.0, 0.0, image.width, image.height);

      // text --- where date information is stored

      let dayInfo = new Date();
      let n = dayInfo
        .toLocaleTimeString(navigator.language, {
          hour: "2-digit",
          minute: "2-digit",
        })
        .replace("AM", "")
        .replace("PM", "");

      let timeL1 = `${n}`;
      let timeL2 = `${days[dayInfo.getDay()]} ${
        months[dayInfo.getMonth()]
      } ${dayInfo.getDate()}`;

      //dayInfo.getSeconds()

      ctx.font = "600px Comic Sans MS";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText(timeL1.toString(), canvas.width / 2, canvas.height / 3.5);

      ctx.font = "400px Comic Sans MS";
      ctx.fillText(timeL2.toString(), canvas.width / 2, canvas.height / 2.7);

      // ctx.fillText("My TEXT!", canvas.width, canvas.height);
    });

    return texture;
  };

  let txt2 = phoneAnimatedTexture();
  useFrame(() => {
    txt2 = phoneAnimatedTexture();
    txt2.needsUpdate = true;
  });

  //------------------------ end canvas -------------

  let { nodes: fb } = useGLTF("/phoneBez.glb") as any;
  let { nodes: sb } = useGLTF("/phoneScreenBack.glb") as any;

  let { nodes: cb } = useGLTF("/cubeTest.glb");

  let { instances } = props;

  //change property from cb before it reaches Merged
  let mtl = ((cb.Screen as Mesh).material = new MeshPhongMaterial({
    side: DoubleSide,
    emissive: "#0a0a0a",
    map: txt2,
    specular: "#ffffff",
    shininess: 69.5,
  }));

  return (
    <>
      <mesh {...props}>
        <Merged meshes={{ ...fb, ...cb }}>
          {({ Screen, ...items }) => {
            console.log(items);

            return instances.map((instProps, k) => {
              return (
                <RigidBody {...instProps} key={k} type={"fixed"}>
                  {Object.entries(items).map(([name, Part]: [string, any]) => (
                    <mesh key={"rigidInstMesh" + name}>
                      <Screen scale={1.0} rotation={[0, 0, Math.PI]} />

                      <Part />
                    </mesh>
                  ))}

                  <CuboidCollider args={[0.5, 1, 0.08]} key={"cuboid_" + k} />
                </RigidBody>
              );
            });
          }}
        </Merged>
      </mesh>

      {/* <mesh geometry={Screen.geometry} material={plnM} position={[2, 0, 0]} /> */}
    </>
  );
}
