import React, { useEffect } from "react";
import { showIntroInfo } from "../../state";
import { useAtom } from "jotai";

export default function IntroPage() {
  let [infoInto, setinfoIntro] = useAtom(showIntroInfo);
  return (
    <div
      id="infoPage "
      className="absolute  top-0 bottom-0 h-screen  w-screen z-20 text-cyan-200 flex justify-center content-center items-center"
    >
      <div className="bg-slate-900 w-full h-full flex flex-col p-4 justify-center">
        <h2 className="flex justify-center items-center font-semibold text-lg mb-2">
          WELCOME
        </h2>
        <div className="h-[300px] bg-cyan-950 rounded-md w-9/12 ml-auto mr-auto text-center pt-2 p-4 text-cyan-100  ">
          <h2 className="font-mono mb-10 capitalize">
            {" "}
            Thank you for being here.
          </h2>

          <p className="font-extralight">
            I am currently still working on this in order to provide the best
            experience possible. Right now, just remember, if there's any
            problem with the character movement, simply turning will currect it.
            You're able to interact with just about anything that you see, so
            feel free to walk into whatever your heart desires.
          </p>

          <p className="mt-4 font-light ">
            For any other problems, feel free to contact me!
          </p>

          <p className="mt-2">Thank you again</p>
        </div>
        <button
          className="mt-4  border-2 w-20 ml-auto mr-auto rounded-lg p-2 border-cyan-200 font-light"
          onClick={() => {
            setinfoIntro(false);
          }}
        >
          Got it!
        </button>
      </div>
    </div>
  );
}
