import React from "react";
import {} from "/webAssets/touch.svg";

export default function MobileHelp() {
  return (
    <div className=" flex bg-slate-200-- flex-1 justify-center items-center  ">
      <div className="bg-black-- w-[570px] h-[300px] rounded-lg border-solid  border-black bg-slate-800 border-4 flex flex-col text-white drop-shadow-md ">
        <div className="bg-green-200-- h-8 pt-2 mt-2">
          <p>Controls</p>
        </div>
        <div className="bg-red-200-- h-6  flex flex-1 flex-col items-center pt-10 ">
          <img className={"w-20 invert"} src={"/webAssets/touch.svg"} />
          <p className="-mt-4">Pan Around</p>
        </div>
        <div className="bg-blue-200-- h-20 flex  items-center pl-4 pr-4 justify-between mb-3 mr-3 ml-3">
          <div className="w-16 h-16 bg-black-- border-slate-300 border-2 justify-center items-center rounded-full  flex text-2xl text-white  pb-1">
            ↕
          </div>
          <div className="w-16 h-16 bg-black-- border-slate-300 border-2 justify-center items-center rounded-full  flex text-2xl text-white pb-2  ">
            ⟷
          </div>
        </div>
      </div>
    </div>
  );
}
