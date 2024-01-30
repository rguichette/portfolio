import { Merged, Text, useGLTF } from "@react-three/drei";
import { MeshProps, useFrame } from "@react-three/fiber";
import { CuboidCollider, RigidBody, RigidBodyProps } from "@react-three/rapier";
import {
  BoxGeometry,
  CanvasTexture,
  DoubleSide,
  EdgesGeometry,
  ImageLoader,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshPhongMaterial,
  RepeatWrapping,
} from "three";
import { GLTF } from "three-stdlib";

import * as BufferGeometryUtils from "three/addons/utils/BufferGeometryUtils.js";
import { infoCardAtom } from "../../state";
import { useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";
import phoneIcon from "/assets/icons/phoneIcon.svg";
import emailIcon from "/assets/icons/email.svg";
import linkedInIcon from "/assets/icons/linkedin.svg";

interface ContactInstanceMesh extends MeshProps {
  instances: RigidBodyProps[];
}

export default function Contact(props: ContactInstanceMesh) {
  const boxGeometry = new BoxGeometry(1, 1, 1, 8, 8, 8);
  const boxEdges = new EdgesGeometry(boxGeometry);

  BufferGeometryUtils.mergeVertices(boxEdges);

  // ----------- FRONT CANVAS------------------------

  const canvas = document.createElement("canvas");
  const texture = new CanvasTexture(canvas);
  const ctx = canvas.getContext("2d", { willReadFrequently: true });

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

    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
    texture.repeat.set(1, 1);
    texture.offset.set(0, 0);
    texture.needsUpdate = true;

    new ImageLoader().load(imageUrl, (image) => {
      ctx?.rotate(-Math.PI);

      canvas.width = image.width;
      canvas.height = image.height;
      ctx?.clearRect(0.0, 0.0, canvas.width, canvas.height);

      ctx?.drawImage(image, 0.0, 0.0, image.width, image.height);

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
      if (ctx) {
        ctx.font = "600px Comic Sans MS";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText(timeL1.toString(), canvas.width / 2, canvas.height / 3.5);

        ctx.font = "400px Comic Sans MS";
        ctx.fillText(timeL2.toString(), canvas.width / 2, canvas.height / 2.7);
      }
      // ctx.fillText("My TEXT!", canvas.width, canvas.height);
    });

    return texture;
  };

  let txt2 = phoneAnimatedTexture();

  //  TODO: get the time correct without the perfomranc hit.
  useFrame(() => {
    // txt2 = phoneAnimatedTexture();
    // txt2.needsUpdate = true;
  });

  //------------------------ end canvas -------------

  let { nodes: fb } = useGLTF("/phoneBez.glb") as any;
  let { nodes: sb } = useGLTF("/phoneScreenBack.glb") as any;

  let [info, setInfo] = useAtom(infoCardAtom);

  let { nodes: cb } = useGLTF("/cubeTest.glb") as GLTF & {
    nodes: any;
  };

  let { instances } = props;
  (cb.Screen as Mesh).material = new MeshPhongMaterial({
    side: DoubleSide,
    emissive: "#0a0a0a",
    map: txt2,
    specular: "#ffffff",
    shininess: 69.5,
  });

  let [minuteChanged, setMinuteChanged] = useState(0);

  // useEffect(() => {
  //   let min = new Date().getMinutes();

  //   let minChange = setInterval(() => {
  //     console.log("minute", min);
  //   }, 10000);
  //   setMinuteChanged(min);

  //   setTimeout(function () {
  //     clearInterval(minChange);
  //   }, 11000);

  //   txt2.needsUpdate = true;
  //   //change property from cb before it reaches Merged
  //   (cb.Screen as Mesh).material = new MeshPhongMaterial({
  //     side: DoubleSide,
  //     emissive: "#0a0a0a",
  //     map: txt2,
  //     specular: "#ffffff",
  //     shininess: 69.5,
  //   });
  // }, [fb, fb.length, txt2, minuteChanged]);

  let prevMin = 0;
  // useFrame(() => {
  //   let min = new Date().getMinutes();

  //   if (min > prevMin) {
  //     prevMin = min;

  //     console.log("minute: ", prevMin);
  //     txt2.needsUpdate = true;
  //     txt2 = phoneAnimatedTexture();
  //   }
  // });

  let contactInfo = (
    <div className="flex flex-col bg-slate-100-- h-full items-center content-center justify-center">
      <div className="flex  w-full -justify-center justify-between items-center  ">
        <img className="flex w-6 mr-auto invert  " src={phoneIcon} alt="" />
        <a href="tel:617-230-3689">617-309-3609</a>
      </div>

      <div className="flex  w-full -justify-center justify-between items-center  ">
        <img className="flex w-6 invert mt-2 mb-2 " src={emailIcon} alt="" />
        <a className="flex  text-sm" href="mailto:ralphIsidore@gmail.com">
          RalphIsidore@gmail.com
        </a>
      </div>
      <div className="flex  w-full -justify-center justify-between items-center   ">
        <img className="flex w-6 invert " src={linkedInIcon} alt="" />
        <a href="https://www.linkedin.com/in/ralphguichette" target="_blank">
          LinkedIn
        </a>
      </div>
    </div>
  );

  return (
    <>
      <mesh {...props}>
        <Merged meshes={{ ...fb, ...cb }} frustumCulled={false}>
          {({ Screen, ...items }: { Screen: any }) => {
            console.log(items);

            return instances.map((instProps, k) => {
              return (
                <RigidBody {...instProps} key={k} type={"fixed"}>
                  {Object.entries(items).map(([name, Part]: [string, any]) => (
                    <mesh key={"rigidInstMesh" + name}>
                      <Screen scale={1.0} rotation={[0, -Math.PI, Math.PI]} />
                      <Screen
                        scale={1.0}
                        position={[0, 0, -0.02]}
                        rotation={[0, 0, Math.PI]}
                      />

                      <Part />
                    </mesh>
                  ))}

                  <CuboidCollider
                    args={[0.5, 1, 0.14]}
                    key={"cuboid_" + k}
                    sensor
                    onIntersectionEnter={() => {
                      console.log("CONTACT..");
                      setInfo({
                        display: true,
                        title: "Contact",
                        summary: contactInfo as unknown as string,
                        learnMore: false,
                      });
                    }}
                    onIntersectionExit={() => {
                      setInfo({
                        display: false,
                      });
                    }}
                  />
                </RigidBody>
              );
            });
          }}
        </Merged>
      </mesh>
    </>
  );
}
