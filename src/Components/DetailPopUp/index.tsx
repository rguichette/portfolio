import { useAtom } from "jotai";
import React from "react";

import InfoCard from "../InfoCard";
import DetailCard from "../Cards/detailCard";
import { showDetailsPopUp } from "../../state";

export default function DetailPopUp() {
  let [showDet, setshowDet] = useAtom(showDetailsPopUp);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      //if esc key was not pressed in combination with ctrl or alt or shift
      const isNotCombinedKey = !(
        event.ctrlKey ||
        event.altKey ||
        event.shiftKey
      );
      if (isNotCombinedKey) {
        if (showDet) {
          setshowDet(false);
        }
      }
    }
  });

  return (
    <div className="absolute top-0 right-0 bottom-0 left-0 bg-black opacity-60 w-full h-full flex content-center justify-center items-center flex-col ">
      {/* <p>DetailPopUp</p> */}
      <div className="flex flex-row ">
        <DetailCard />
        <DetailCard />
      </div>

      <button
        className="bg-slate-100"
        onClick={() => {
          setshowDet(false);
        }}
      >
        Close
      </button>
    </div>
  );
}
