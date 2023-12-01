import { useAtom } from "jotai";
import { showHelpPopUp } from "../state";
import Key from "./Keys";
import DesktopHelp from "./DesktopHelpView";
import MobileHelp from "./MobileHelpView";

export default function HelpView() {
  let [showHelp, setShowHelp] = useAtom(showHelpPopUp);
  return (
    <div className="absolute top-0  w-full bg-slate-400 h-full  flex flex-col justify-center content-center text-center opacity-90">
      <p className=" p-4 text-2xl ">Help</p>
      {/* <DesktopHelp /> */}
      <MobileHelp />

      <div className="">
        <button
          className="p-2 text-slate-100 bg-blue-500 w-36 mb-6 rounded-md"
          onClick={() => {
            setShowHelp(false);
          }}
        >
          CLOSE
        </button>
      </div>
    </div>
  );
}

// <a href="https://www.freepik.com/free-vector/illustration-touch-screen-hand-gesture_2606128.htm#query=drag%20cursor&position=33&from_view=keyword&track=ais&uuid=7a42e6d7-cc1a-43ad-8959-18c800d3d11a#position=33&query=drag%20cursor">Image by rawpixel.com</a> on Freepik
