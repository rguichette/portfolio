import { useAtom, useAtomValue } from "jotai";
import { enterWorld, showEngageButton, showSkillsSummary } from "../../state";
// import DetailPopUp from "../DetailPopUp";
// import HelpView from "../../HelpView";
import "./style.css";
import LoadingPage from "../LoadingScreen";
import InfoCard from "../InfoCard";
import SkillsDetails from "../SkillsDetails";
import isMobile from "is-mobile";
import { useEffect, useState } from "react";

export default function HtmlInteractivity() {
  let showSkills = useAtomValue(showSkillsSummary);
  let worldEdtered = useAtomValue(enterWorld);

  return (
    <div>
      <InfoCard />

      {showSkills && <SkillsDetails />}

      {!worldEdtered && <LoadingPage />}
    </div>
  );
}
