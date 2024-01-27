import { useAtom } from "jotai";
import React from "react";
import { showEngageButton, showSkillsSummary } from "../../state";

export default function EngageBtn() {
  //   let [showEngagebtn, setShowEngagebtn] = useAtom(showEngageButton);
  let [showSkillsDetail, setShowDetails] = useAtom(showSkillsSummary);

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500">
      <button
        onClick={() => {
          setShowDetails(true);
        }}
      >
        EngageBtn
      </button>
    </div>
  );
}
