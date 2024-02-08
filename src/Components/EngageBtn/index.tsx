import { useAtom } from "jotai";
import React from "react";
import { showEngageButton, showSkillsSummary } from "../../state";

export default function EngageBtn() {
  //   let [showEngagebtn, setShowEngagebtn] = useAtom(showEngageButton);
  let [showSkillsDetail, setShowDetails] = useAtom(showSkillsSummary);

  // className="border-2 inline-block w-40 h-10 rounded-md text-center bg-cyan-500 text-cyan-100 pointer"

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md text-center bg-cyan-500 text-cyan-100 pointer p-2 border-2 h-10 flex justify-center items-center ">
      <button
        onClick={() => {
          setShowDetails(true);
        }}
      >
        View Summary
      </button>
    </div>
  );
}
