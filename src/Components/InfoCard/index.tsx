import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect/dist/core";

//TODO: set params
//delay: speed for typing
//delayDisplay: speed for opening window
//txt: text to type.

function ChangeWord(word: string, el: HTMLElement) {
  console.log("word", word);
  console.log("element", el);
}

export default function InfoCard() {
  // fake globle state
  //TODO: move to state control
  let [activateInfo, setActivateInfo] = useState(false);

  let fadedWindow = `${
    activateInfo
      ? " animate-in fade-in zoom-in-50 duration-500 fill-mode-forwards "
      : "animate-out fade-out zoom-out-50 delay-300 duration-150 fill-mode-forwards"
  }`;

  let txt =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit consequatur dignissimos temporibus veritatis, voluptatibus placeat necessitatibus quo quia veniam ullam eaque unde dolorum rerum eveniet ex quidem sapiente? Ipsa, tempore!";

  useEffect(() => {
    var i = 0;
    var speed = 50;

    let textContent = document.getElementById("textContent");

    let tw = new Typewriter(textContent, {
      autoStart: true,
      delay: 45,
    });
    if (activateInfo) {
      tw.typeString(txt);
      tw.start();

      // adding styles to specific words
    }

    if (!activateInfo) {
      if (textContent) {
        tw.stop();
        textContent.innerText = "shutting down...";
      }
    }
    // console.log(textContent);
  });

  return (
    <>
      <button
        onClick={() => {
          setActivateInfo(!activateInfo);
        }}
      >
        {" "}
        trigger info
      </button>
      <div
        className={`bg-sky-700 ${fadedWindow} opacity-50 w-[300px] h-[350px] rounded-lg m-8 shadow-2xl shadow-sky-500   `}
      >
        <p
          id={"textContent"}
          className=" text-slate-100 tracking-wider leading-7 drop-shadow-lg  p-4"
        ></p>
      </div>{" "}
    </>
  );
}
