import { Box, Html } from "@react-three/drei";
import React, { Children, ReactNode, ReactPropTypes } from "react";
import "./style.css";
import Nav from "./Tabs";

export default function SkillsDetails(props: ReactPropTypes) {
  //sm:h-[500px] md:h-screen
  return (
    <div className="absolute z-10 w-screen bg-slate-950 h-screen flex flex-col overflow-scroll ">
      <div className="--bg-yellow-200 sm:w-[600px] sm:h-screen md:w-[850px] lg:w-[900px] m-auto ">
        <p className=" text-cyan-300 font-medium m-2 p-2 text-lg">Isidore</p>
        <div className="w-5/6 h-1 bg-cyan-400 m-4" />
        <div className="glass w-90  sm:h-[400px] lg:h-[600px] m-4 overflow-none pb-2 clipped flex-1 overflow-scroll ">
          <div className="flex bg-[#08a4a7] justify-evenly pl-2 pr-2 pt-2 text-slate-800">
            <Nav />
          </div>
        </div>
        <div className="ok_btn h-10 w-20  bottom-0 right-0 mb-4 mr-10  flex  justify-center items-center text-slate-700 ml-auto">
          OK
        </div>
      </div>
    </div>
  );

  /*
    <div className="absolute z-10 w-screen bg-slate-950 h-screen flex flex-col overflow-scroll ">
  
  
  <div className="--bg-yellow-200 sm:w-[600px] sm:h-screen md:w-[850px] lg:w-[900px] m-auto ">
        <p className=" text-cyan-300 font-medium m-2 p-2 text-lg">Isidore</p>
        <div className="w-5/6 h-1 bg-cyan-400 m-4" />
        <h2 className=" text-slate-400 flex justify-center font-semibold">
          Summary
        </h2>
        <div className="glass w-90  sm:h-[400px] lg:h-[600px] m-4 overflow-none pb-2 clipped flex-1  ">
          <div className="flex bg-[#08a4a7] justify-evenly pl-2 pr-2 pt-2 text-slate-800">
            <button className="button justify-center align-middle  flex flex-1 m-1">
              Frontend
            </button>
            <button className="button justify-center align-middle flex flex-1 m-1 ">
              BackEnd
            </button>
            <button className="button justify-center align-middle flex flex-1 m-1">
              Mobile
            </button>
            <button className="button justify-center align-middle flex flex-1 max-w-md m-1">
              Data
            </button>
          </div>
          <div className="info_contiainer h-5/6 w-5/6 m-4 ml-auto mr-auto rounded-xl overflow-scroll border-slate-400 border-2"></div>
        </div>
        <div className="ok_btn h-10 w-20  bottom-0 right-0 mb-10 mr-10 flex  justify-center items-center text-slate-700 ml-auto">
          OK
        </div>
</div>
    </div>

*/
}
