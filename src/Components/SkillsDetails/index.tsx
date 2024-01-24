import { Box, Html } from "@react-three/drei";
import React, { Children, ReactNode, ReactPropTypes } from "react";
import "./style.css";
import "./particle.css";
import Nav from "./Tabs";
import { useAtom } from "jotai";
import { showSkillsSummary } from "../../state";

export default function SkillsDetails() {
  let [showSkills, setShowSkills] = useAtom(showSkillsSummary);

  //sm:h-[500px] md:h-screen
  // [radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#23486F] via-[#192532] to-[#10131C]
  return (
    <div
      className="background absolute z-10 w-screen  top-0 left-0
    "
    >
      <Particles />
      <div className="--bg-yellow-200 sm:w-[600px] sm:h-screen md:w-[850px] lg:w-[900px] m-auto ">
        <p className=" text-cyan-300 font-medium m-2 p-2 text-lg">Isidore</p>
        <div className="w-5/6 h-1 bg-cyan-400 m-4" />
        <h2 className=" text-slate-200 font-extrabold text-center">Summary</h2>

        <div className="glass w-90  sm:h-[400px] lg:h-[600px] m-4 overflow-none pb-2 clipped flex-1 overflow-scroll ">
          <div className="flex bg-[#08a4a7] justify-evenly pl-2 pr-2 pt-2 text-slate-800">
            <Nav />
          </div>
        </div>
        <div
          className="ok_btn h-10 w-20  bottom-0 right-0 mb-4 mr-10  flex  justify-center items-center text-slate-700 ml-auto cursor-pointer"
          onClick={() => {
            setShowSkills(false);
          }}
        >
          OK
        </div>
      </div>
    </div>
  );
}

function Particles() {
  return (
    <div className="particle-container">
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
    </div>
  );
}
