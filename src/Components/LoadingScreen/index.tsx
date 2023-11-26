import { useFrame } from "@react-three/fiber";
import { GlitchableElement, PowerGlitch } from "powerglitch";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";
// import { useGlitch, GlitchHandle } from "react-powerglitch";

import { isMobile } from "react-device-detect";

import "./animation.css";
import { Html, useProgress } from "@react-three/drei";
import { DefaultLoadingManager, LoadingManager } from "three";
import { useAtom } from "jotai";

import ProgressBar from "@ramonak/react-progress-bar";
import { enterWorld } from "../../state";
let isH = false;

let LoadingPage = () => {
  let [progress, setProgress] = useState(100);
  let [submit, setSubmit] = useAtom(enterWorld);
  useEffect(() => {
    DefaultLoadingManager.onStart = function (url, itemsLoaded, itemsTotal) {
      console.log(
        "Started loading file: " +
          url +
          ".\nLoaded " +
          itemsLoaded +
          " of " +
          itemsTotal +
          " files."
      );
      // DefaultLoadingManager.onStart = t;
      // setTimeout(() => setProgress((itemsLoaded / itemsTotal) * 100), 0);
      // setProgress((itemsLoaded / itemsTotal) * 100);
      //   // let p = (itemsLoaded / itemsTotal) * 100;
    };

    DefaultLoadingManager.onLoad = () => {
      console.log("LOADED");
    };

    //handle progress
    DefaultLoadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
      console.log("loading...", itemsLoaded / itemsTotal);
      setProgress((itemsLoaded / itemsTotal) * 100);
    };

    //handle finish loading
  }, []);

  //   const glitch: GlitchHandle = useGlitch({});
  let pro = 0;
  let [horizontal, setHorizontal] = useState(false);

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
      if (portrait.matches && !submit) {
        setHorizontal(false);
        console.log("portrait");
      } else {
        if (!submit) {
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
  }, [submit, horizontal]);

  // {
  //   console.log(progress);
  // }

  console.log(submit);
  return (
    <Suspense>
      <Html center className={`${submit && "fade_away"} `}>
        <div
          id="glitch"
          className=" z-20  bg-slate-900 w-screen h-screen flex flex-col justify-center items-center uppercas "
        >
          {/* {!horizontal && !inside && (
            <div className=" bg-black absolute h-full w-full z-10 flex justify-center items-center">
              <img src="/rotate.gif" />
            </div>
          )} */}

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
            // onClick={() => {
            //   console.log("Im in");
            //   setInside(true);
            // }}
          >
            {progress != 100 && (
              <div className="sm:mb-2 md:mb-16 w-60 ">
                <ProgressBar
                  completed={progress}
                  isLabelVisible={false}
                  height="7px"
                />
              </div>
            )}
            {/* <h1>{Math.floor(progress)}</h1> */}

            {progress == 100 && (
              <button
                className="animate-pulse delay-75 "
                onClick={() => setSubmit(true)}
              >
                CONTINUE
              </button>
            )}
            {/* {isMobile ? "Tap to continue" : "Click to continue"} */}
          </div>
        </div>
      </Html>
    </Suspense>
  );
};

export default LoadingPage;
