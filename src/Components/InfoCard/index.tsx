import { useAtom, useAtomValue } from "jotai";
import React, { useEffect, useState } from "react";

import { PowerGlitch } from "powerglitch";
import { infoCardAtom } from "../../state";

export default function InfoCard() {
  let [InfoCard, setInfoCard] = useAtom(infoCardAtom);

  // #002020

  //#04FFFF
  //#0ACCF0
  let { display, summary, learnMore, title } = InfoCard;

  useEffect(() => {
    PowerGlitch.glitch(".glitch");
  }, [InfoCard, display]);

  return (
    display && (
      <div className="absolute z-10 m-4 top-0">
        <div className="  flex flex-col justify-center content-center p-4 rounded-xl bg-[#002020] text-[#04FFFF] drop-shadow-2xl opacity-90 h-60">
          <div
            className=" h-7 w-7 -top-3 -right-3   border-solid border-white border-2 absolute rounded-full bg-[#325257] cursor-pointer"
            onClick={() => {
              setInfoCard((i) => {
                // console.log("I is: ", i);

                return { ...i, display: false };
              });
            }}
          >
            <img src="/close.png" className=" invert p-1" />
          </div>

          <div className=" glitch absolute -z-20 top-0 left-0 rounded-xl -bg-yellow-200 h-full w-full opacity-10 bg-[#002020]" />
          <h2 className="flex content-center justify-center p-4 font-semibold">
            {title}
          </h2>

          <div className=" m-2 p-4 w-60 overflow-scroll max-h-44  flex-1 border-gray-50 border-solid border-2">
            {summary}
          </div>

          {learnMore && <button className="m-4">learn more</button>}
        </div>
      </div>
    )
  );
}
