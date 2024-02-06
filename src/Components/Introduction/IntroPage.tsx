import React, { useEffect } from "react";
import { showIntroInfo } from "../../state";
import { useAtom } from "jotai";

export default function IntroPage() {
  let [infoInto, setinfoIntro] = useAtom(showIntroInfo);
  return (
    <div
      id="infoPage "
      className="absolute top-0 bottom-0 h-screen bg-slate-500 w-screen z-20"
    >
      <div className=" bg-sky-500 w-full h-full flex flex-col p-4">
        <h2 className="flex justify-center items-center">WELCOME</h2>
        <div className="h-[300px] bg-black w-9/12 ml-auto mr-auto"></div>
        <button
          className="mt-4"
          onClick={() => {
            setinfoIntro(false);
          }}
        >
          Got it!
        </button>
      </div>
    </div>
  );
}
