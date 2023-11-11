import { useAtom, useAtomValue } from "jotai";
import React from "react";
import { showHelpPopUp } from "../state";

export default function HelpView() {
  let [showHelp, setShowHelp] = useAtom(showHelpPopUp);
  return (
    <div className="absolute top-0  w-full bg-slate-400 h-full  flex justify-center content-center text-center">
      <p>Help</p>

      <button
        onClick={() => {
          setShowHelp(false);
        }}
      >
        close
      </button>
    </div>
  );
}
