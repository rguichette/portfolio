import { useAtom, useAtomValue } from "jotai";
import React from "react";
import { showDetailsPopUp, showEngageButton, showHelpPopUp } from "../../state";
import DetailPopUp from "../DetailPopUp";
import HelpView from "../../HelpView";
import "./style.css";

export default function HtmlInteractivity() {
  let engBtn = useAtomValue(showEngageButton);
  let [showDet, setShowDet] = useAtom(showDetailsPopUp);
  let [showHelp, setShowHelp] = useAtom(showHelpPopUp);

  return (
    <>
      <div
        className="absolute top-0 right-0  p-1 animate-and-hide "
        onClick={() => {
          setShowHelp(true);
        }}
      >
        <p>click or tap this area at any time for help </p>
      </div>

      {!showDet && engBtn && (
        <span
          className="absolute bg-blue-300  bottom-1/4 w-28 left-[calc(50%-56px)] text-center rounded-lg p-2"
          onClick={() => {
            setShowDet(true);
          }}
        >
          Hello
          <span className="animate-ping absolute top-0 left-0 inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        </span>
      )}

      {showDet && <DetailPopUp />}
      {showHelp && <HelpView />}
    </>
  );
}
