import React, {
  HTMLAttributes,
  MouseEventHandler,
  ReactElement,
  ReactNode,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import Data from "../DataPage";
import Mobile from "../Mobile";
import BackEnd from "../BackEnd";
import FrontEnd from "../FrontEndPage";

export default function Nav() {
  let selected = useState("tab1");
  return <Tabs />;
}

function Tabs() {
  let pRef = useRef<HTMLDivElement>(null);
  let tabNames: string[] = [];
  let [selected, setActive] = useState("Frontend");

  useEffect(() => {
    let arrEl = pRef.current?.children;
    console.log("PREF", arrEl?.length);

    if (arrEl) {
      for (let item of arrEl) {
        let titleVal = (item.firstChild as HTMLParagraphElement).innerHTML;
        // console.dir((item.firstChild as HTMLParagraphElement).innerHTML);
        tabNames.push(titleVal);
      }
    }
  }, [selected]);

  let handleActive = (e: SyntheticEvent) => {
    let elText = (e.target as HTMLParagraphElement).innerText;
    let clickedInd = tabNames.indexOf(elText);
    if (clickedInd >= 0) {
      console.log("EL : ", elText);

      console.log("El", e);
      setActive(elText);

      console.log("El ind", pRef.current?.children[clickedInd]);
    }
  };

  return (
    <div ref={pRef} className="  flex flex-row w-screen justify-evenly ">
      <Tab
        Tabtitle="Frontend"
        displayEl={<FrontEnd />}
        active={selected === "Frontend"}
        onClick={handleActive}
        className=" flex-1"
      />
      <Tab
        Tabtitle="BackEnd"
        active={selected === "BackEnd"}
        onClick={handleActive}
        displayEl={<BackEnd />}
        className=" flex-1"
      />
      <Tab
        Tabtitle="Mobile"
        active={selected === "Mobile"}
        onClick={handleActive}
        displayEl={<Mobile />}
        className=" flex-1"
      />
      <Tab
        Tabtitle="Data"
        active={selected === "Data"}
        onClick={handleActive}
        displayEl={<Data />}
        className=" flex-1"
      />
    </div>
  );
}

interface TabProps extends HTMLAttributes<HTMLDivElement> {
  Tabtitle?: string;
  displayEl?: ReactElement;
  active: boolean;
}
function Tab({ Tabtitle, displayEl, active, ...props }: TabProps) {
  return (
    <>
      <div {...props}>
        <p
          className={`button justify-center align-middle flex flex-1 m-1 ${
            active && " bg-teal-400 drop-shadow-lg"
          }`}
        >
          {Tabtitle}
        </p>

        {/* <div>Test data</div> */}
        <div>
          <div className="absolute left-0 w-screen text-slate-50">
            {active && displayEl}
          </div>
        </div>
      </div>
    </>
  );
}
