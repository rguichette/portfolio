import React from "react";
import Key from "../Keys";

export default function DesktopHelp() {
  return (
    <div className=" flex bg-slate-200 flex-1 justify-center items-center ">
      <div className="flex flex-1  justify-center content-center flex-col h-72">
        <h2 className="text-3xl font-medium ">MOVE</h2>
        <div className="flex  w-72  justify-center mt-auto mb-10 ml-auto mr-auto ">
          <div className="flex flex-col content-center justify-center items-center w-40 h-20 ">
            <Key letter={"w"} />
            <div className="flex ">
              <Key letter={"a"} />
              <Key letter={"s"} />
              <Key letter={"d"} />
            </div>
          </div>
          <p className=" text-2xl font-medium  pb-4 text-black w-10 flex flex-col  items-center content-center justify-center h-full">
            ⟷
          </p>

          <div className="flex  flex-col content-center justify-center items-center w-40 h-20 ">
            <Key letter={"↑"} />
            <div className="flex">
              <Key letter={"←"} />
              <Key letter={"↓"} />
              <Key letter={"→"} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1  justify-center flex-col ">
        <h2 className=" mb-32 text-3xl font-medium  ">Look around</h2>
        <div className="h-full flex justify-center content-center  ">
          <img className=" w-32" src="/webAssets/swiping_desktop.png" />
        </div>
      </div>
    </div>
  );
}
