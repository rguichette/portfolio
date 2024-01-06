import {
  Box,
  Instance,
  InstanceProps,
  Instances,
  Merged,
  Plane,
  RoundedBox,
  Sphere,
} from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";
import {
  CuboidCollider,
  InstancedRigidBodies,
  InstancedRigidBodyProps,
  RapierRigidBody,
  RigidBody,
  RigidBodyProps,
} from "@react-three/rapier";
import { useEffect, useMemo, useRef } from "react";
import {
  BoxGeometry,
  CanvasTexture,
  Color,
  ConeGeometry,
  EdgesGeometry,
  InstancedMesh,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshBasicMaterial,
  MeshPhongMaterial,
  MeshPhysicalMaterial,
  Object3D,
  PlaneGeometry,
} from "three";

import * as BufferGeometryUtils from "three/addons/utils/BufferGeometryUtils.js";

interface ContactInstanceMesh extends MeshProps {
  count: number;
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

  const box = new Mesh(boxGeometry, new MeshBasicMaterial());

  let plane = new Mesh(
    new PlaneGeometry(),
    new MeshPhysicalMaterial({
      color: "#aebac1",
      emissive: "#303030",
      roughness: 0,
      reflectivity: 1,
      ior: 2,
      metalness: 0.1,
      sheen: 1,
      sheenRoughness: 0.1,
      sheenColor: new Color("#ffffff"),
      clearcoat: 1,
    })
  );

  let c = document.createElement("canvas");
  let txt = new CanvasTexture(c);

  useEffect(() => {
    let context = c.getContext("2d");

    let base_image = new Image();
    base_image.src =
      "https://user-images.githubusercontent.com/52092726/104081001-8b133180-5234-11eb-9d8e-7e1b66557a3d.png";
    base_image.onload = function () {
      if (c) {
        c.getContext("2d")?.drawImage(base_image, 0, 0);
      }
    };

    console.log(c.getContext);

    plane.material.map = txt;
  }, [c, txt]);

  return (
    <>
      <Merged meshes={[plane, box]}>
        {(Plane_: any, Box_: any) => {
          let { count, instances } = props;

          return (
            <>
              {instances.map((instProps, k) => {
                return (
                  <RigidBody key={k} {...instProps}>
                    <mesh>
                      <Box_ position={[0, 0, 0]} scale={[1, 1.8, 0.2]} />
                      <Plane_ position={[0, 0, 0.12]} scale={[1, 1.8, 0.2]} />
                    </mesh>
                    <CuboidCollider args={[0.5, 1, 0.2]} />
                  </RigidBody>
                );
              })}
            </>
          );
        }}
      </Merged>
    </>
  );
}
