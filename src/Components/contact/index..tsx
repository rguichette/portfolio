import {
  Box,
  Instance,
  InstanceProps,
  Instances,
  Merged,
  Plane,
  RoundedBox,
  Sphere,
  useGLTF,
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
  DoubleSide,
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
import { RoundedBoxGeometry } from "three-stdlib";

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

  let rt = new RoundedBoxGeometry();

  let { nodes: fb } = useGLTF("/phoneBez.glb");
  let { nodes: sb } = useGLTF("/phoneScreenBack.glb");

  console.log(rt);

  useEffect(() => {
    let { Screen } = sb;

    if (sb) {
      (sb.Screen as Mesh).material = new MeshPhysicalMaterial({
        color: "red",
        // map: txt,
      });
    }

    console.log(c.getContext);

    // plane.material.color.set("green");
  }, []);

  return (
    <>
      <Merged meshes={{ ...fb, ...sb }}>
        {({ Screen, ...items }) => {
          let { count, instances } = props;

          return instances.map((instProps, k) => {
            return Object.entries(items).map(([name, Part]) => {
              // console.log("PART:", Part);

              return (
                <RigidBody {...instProps} key={name}>
                  <Screen scale={1.09} key={"rigidInst" + name} />

                  <Part key={name} />
                  <CuboidCollider args={[0.5, 1, 0.5]} />
                </RigidBody>
              );
            });
          });

          console.log("Items: ", items);
        }}
      </Merged>
    </>
  );
}
