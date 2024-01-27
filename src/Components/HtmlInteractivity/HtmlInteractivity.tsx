import { useAtom, useAtomValue } from "jotai";
import {
  enterWorld,
  showDownload,
  showEngageButton,
  showSkillsSummary,
} from "../../state";
// import DetailPopUp from "../DetailPopUp";
// import HelpView from "../../HelpView";
import "./style.css";
import LoadingPage from "../LoadingScreen";
import InfoCard from "../InfoCard";
import SkillsDetails from "../SkillsDetails";
import isMobile from "is-mobile";
import { useEffect, useState } from "react";
import EngageBtn from "../EngageBtn";
import Download from "../DownloadBtn";

export default function HtmlInteractivity() {
  let showSkills = useAtomValue(showSkillsSummary);
  let worldEntered = useAtomValue(enterWorld);
  let showEngBtn = useAtomValue(showEngageButton);
  let showDownloadBtn = useAtomValue(showDownload);

  console.log("showDownloadBtn: ", showDownloadBtn);

  return (
    <div>
      <InfoCard />

      {showSkills && <SkillsDetails />}

      {!worldEntered && <LoadingPage />}
      {showEngBtn && <EngageBtn />}
      {showDownloadBtn && <Download />}
    </div>
  );
}
