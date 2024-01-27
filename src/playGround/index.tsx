import { Box } from "@react-three/drei";
import InfoCard from "../Components/InfoCard";
import {
  RapierRigidBody,
  RigidBody,
  RigidBodyProps,
} from "@react-three/rapier";
import { focusAtom } from "jotai-optics";
import { infoCardAtom } from "../state";
import { useAtom } from "jotai";
import summeries from "../statements";
import Bowling from "../Components/bowling";
import { useEffect, useMemo } from "react";
import Dominos from "../Components/Domino";
import Bookcase from "../Components/Bookcase";
import { MeshPhysicalMaterial } from "three";

export default function PlayGound() {
  let [infoAtom, setInfo] = useAtom(infoCardAtom);

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

  // useEffect(() => {
  //   setInfo({
  //     display: true,
  //     contact: true,
  //     summary: contactInfo,
  //   });
  // });

  return (
    <>
      {/* <InfoCard /> */}
      {/* <Bookcase
        scale={[1.23, 1.5, 1.23]}
        material={
          new MeshPhysicalMaterial({
            color: "#ecfff7",
            roughness: 0.373,
            reflectivity: 0.75,
          })
        }
      /> */}
    </>
  );
}
