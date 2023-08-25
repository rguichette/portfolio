import { useFrame } from "@react-three/fiber";
import { GlitchableElement, PowerGlitch } from "powerglitch";
import { useCallback, useEffect, useRef, useState } from "react";
// import { useGlitch, GlitchHandle } from "react-powerglitch";

import { isMobile } from "react-device-detect";

import "./animation.css";
import { Html } from "@react-three/drei";

let isH = false;

let LoadingPage = () => {
  //   const glitch: GlitchHandle = useGlitch({});

  let [horizontal, setHorizontal] = useState(false);
  let [inside, setInside] = useState(false);

  useEffect(() => {
    let container = document.getElementById("glitch") as GlitchableElement;
    // console.log(container);
    let glitchOptions = {
      shake: {
        velocity: 3,
        amplitudeX: 0,
        amplitudeY: -0,
      },
    };
    if (horizontal) {
      PowerGlitch.glitch(container, glitchOptions);
    }
    function detectOri(e: Event) {
      if (portrait.matches && !inside) {
        setHorizontal(false);
        console.log("portrait");
      } else {
        if (!inside) {
          setHorizontal(true);
          console.log("LandScape");
        }
      }
    }

    let portrait = window.matchMedia("(orientation: portrait)");

    portrait.addEventListener("change", detectOri);

    if (!portrait.matches) {
      setHorizontal(true);
    }

    //listen to device orientation

    // window.addEventListener("loadstart", detectOri);
    // window.addEventListener("orientationchange", detectOri);

    return function cleanupListener() {
      //   window.removeEventListener("orientationchange", detectOri);
    };
  }, [inside, horizontal]);

  return (
    <Html center>
      <div
        id="glitch"
        className=" bg-slate-900 w-screen h-screen flex flex-col justify-center items-center uppercas "
      >
        {!horizontal && !inside && (
          <div className=" bg-black absolute h-full w-full z-10 flex justify-center items-center">
            <img src="/rotate.gif" />
          </div>
        )}

        <div className="arc absolute flex flex-col justify-center items-center rounded-full">
          <span
            id="top"
            className="w-[370px] h-[380px] sm:h-[260px] sm:w-[260px]"
          />
          <span
            id="bottom"
            className="w-[330px] h-[330px] sm:h-[230px] sm:w-[230px]"
          />
          {/* <span />
        <span /> */}
        </div>

        <div
          id="circle"
          className="p-4 flex flex-col rounded-full w-[300px] h-[300px] items-center justify-center border-4  border-purple-700 text-slate-200 uppercase sm:h-[200px] sm:w-[200px] "
        >
          {/* <h1 className="text-2xl  bg-slate-200" /> */}
          <p className="bg-green-400 text-xl mr-auto ml-4 sm:ml-2 sm:text-lg ">
            Full
          </p>

          <p id="glitch" className="text-6xl sm:text-4xl font-extrabold ">
            stack
          </p>

          <p className="bg-red-300 inline text-xl ml-auto mr-2 sm:mr-0 sm:text-lg">
            developer
          </p>
        </div>

        {/*TODO:  pnce loaded - replace with btn */}
        {/* <div className="block bg-slate-100 mt-8">Loading</div> */}

        <div
          className="m-4 sm:m-6 absolute bottom-0 mb-8 text-slate-200"
          onClick={() => {
            console.log("Im in");
            setInside(true);
          }}
        >
          {isMobile ? "Tap to continue" : "Click to continue"}
        </div>
      </div>
    </Html>
  );
};

export default LoadingPage;
