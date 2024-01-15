import { useAtom, useAtomValue } from "jotai";
import React, { useEffect, useState } from "react";
import { infoCardAtom, showInfoWindow } from "../../state";

import { PowerGlitch } from "powerglitch";

export default function InfoCard() {
  let { title, summary, learnMore } = useAtomValue(infoCardAtom);

  let [showing, setShowing] = useAtom(showInfoWindow);
  // #002020

  //#04FFFF
  //#0ACCF0

  useEffect(() => {
    PowerGlitch.glitch(".glitch");
  }, [showing]);

  return (
    showing && (
      <div className="absolute z-10 m-4">
        <div className="  flex flex-col justify-center content-center p-4 rounded-xl bg-[#002020] text-[#04FFFF] drop-shadow-2xl opacity-90 h-60">
          <div
            className=" h-7 w-7 -top-3 -right-3   border-solid border-white border-2 absolute rounded-full bg-[#325257] cursor-pointer"
            onClick={() => {
              setShowing(false);
            }}
          >
            <img src="/close.png" className=" invert p-1" />
          </div>

          <div className=" glitch absolute -z-20 top-0 left-0 rounded-xl bg-yellow-200 h-full w-full opacity-10 bg-[#002020]" />
          <h2 className="flex content-center justify-center p-4 font-semibold">
            {title}
          </h2>
          <p className=" m-2 p-4 w-60 overflow-scroll max-h-44  flex-1 border-gray-50 border-solid border-2">
            {summary}
            {summary}
            {summary}
          </p>

          {learnMore && <button className="m-4">learn more</button>}
        </div>
      </div>
    )
  );
}
