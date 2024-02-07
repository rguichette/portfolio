import { useAtom, useAtomValue } from "jotai";
import {
  enterWorld,
  showDownload,
  showEngageButton,
  showIntroInfo,
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
import IntroPage from "../Introduction/IntroPage";

export default function HtmlInteractivity() {
  let showSkills = useAtomValue(showSkillsSummary);
  let worldEntered = useAtomValue(enterWorld);
  let showEngBtn = useAtomValue(showEngageButton);
  let showDownloadBtn = useAtomValue(showDownload);
  let showInfoIntro = useAtomValue(showIntroInfo);

  let [acceptedWarning, setAcceptedWarning] = useState(false);

  console.log("showDownloadBtn: ", showDownloadBtn);

  return (
    <div>
      {!acceptedWarning && (
        <div className="bg-slate-950 w-screen h-screen  flex justify-center items-center absolute top-0 flex-col  ">
          <h1 className="font-bold">WARNING</h1>
          <div className="bg-[url('public/assets/warning/2045.jpg')] w-96 h-52 bg-cover flex justify-center p-4 mt-2">
            <div className=" bg-slate-800 w-full h-full flex flex-col justify-center items-center text-center capitalize font-thin">
              <p>
                The Following page may Potentially trigger seizures for some
                people.
              </p>
              <p className="mt-6">View Discretion is advised.</p>
            </div>
          </div>
          <button
            className="mt-4 font-semibold"
            onClick={() => {
              setAcceptedWarning(true);
            }}
          >
            OK
          </button>
        </div>
      )}
      <InfoCard />

      {showSkills && <SkillsDetails />}

      {!worldEntered && <LoadingPage />}
      {showEngBtn && <EngageBtn />}
      {showDownloadBtn && <Download />}
      {showInfoIntro && <IntroPage />}
    </div>
  );
}
