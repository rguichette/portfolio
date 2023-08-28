import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect/dist/core";

import "./textFocus.css";

//TODO: set params
//delay: speed for typing
//delayDisplay: speed for opening window
//txt: text to type.

//tagName: tag want to select
//el: parant element containing paragraph
function changeWord(tagName: string, el: HTMLElement) {
  console.log("word", tagName);
  let parent = el;
  let els: Element[] = []; //responsible for holding elements of specific tag
  let prev = 0; //holds element size length;

  kp = setInterval(() => {
    // console.log(el.children[0].children);
    if (el.children[0].children.length > prev) {
      els.push(el.children[0].children[prev - 1]);
      prev = el.children[0].children.length;
      //select element and add style
      console.log(
        (el.children[0].children[prev - 1] as HTMLElement).classList.add(
          "focus_bounce"
        )
      );

      el.children[0].children[prev - 1];
    }
  }, 1000);
}

let kp: number | undefined;

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
    "<strong class='test'>Lorem</strong> ipsum dolor sit amet consectetur adipisicing elit. Impedit consequatur dignissimos temporibus veritatis, voluptatibus placeat necessitatibus quo <strong class='test'>quia</strong> veniam ullam eaque unde dolorum rerum eveniet ex quidem sapiente? Ipsa, tempore!";

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
      tw.start().callFunction(() => {
        console.log("string all set! -- dont forget to clear interval");
        clearInterval(kp);
      });

      // adding styles to specific words
      if (textContent) changeWord("strong", textContent);
    }

    if (!activateInfo) {
      if (textContent) {
        tw.stop();
        textContent.innerText = "shutting down...";
      }

      clearInterval(kp);
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
