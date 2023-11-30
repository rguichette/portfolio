import React, { useEffect, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import JoystickController from "joystick-controller";
import { atom, useAtom, useAtomValue } from "jotai";
import { duelJoyStickAtom, leftJsAtom, rightJsAtom } from "../../state";
import { focusAtom } from "jotai-optics";
import { Html } from "@react-three/drei";
import "./style.css";
// import { useJs, useTest } from "./mobileState";

let dueljs = {
  left: {},
  right: {},
};

let leftJSdata = {};
let rightJSdata = {};

const _rightjs = new JoystickController(
  {
    containerClass: "rightjs-container duel_js_controller",
    leftToRight: false,
    bottomToUp: true,
    x: "10%",
    y: "25%",
    radius: 40,
    joystickRadius: 20,
    maxRange: 50,
    joystickClass: "right_joystick",
  },
  (data: any) => {
    // console.log(data);
    // rightJSdata = data;
    // dueljs.right = rightJSdata;
    dueljs.right = { ...data };
  }
);
const _leftjs = new JoystickController(
  {
    containerClass: "duel_js_controller",

    leftToRight: false,
    bottomToUp: true,
    x: "90%",
    y: "25%",
    radius: 40,
    joystickRadius: 20,
    maxRange: 50,
    joystickClass: "left_joystick",
  },
  (data: any) => {
    // leftJSdata = data;
    dueljs.left = { ...data };
  }
);

export default function MobileControls() {
  //TODO: state would be controlled in here

  //   console.log("MOBILE...");

  let [dueljsAtom, setDuelAtom] = useAtom(duelJoyStickAtom);
  let [leftJs, setLeftjs] = useAtom(leftJsAtom);
  let [rightJs, setRightjs] = useAtom(rightJsAtom);

  useEffect(() => {
    window.ontouchmove = (e) => {
      if (isRightJoystick(e)) {
        // setRightjs((_) => {
        //   return { ...leftJs, right: dueljs.right };
        // });
        setDuelAtom({ ...dueljsAtom, right: dueljs.right });
        // console.log("right:: ", rightJs);
      }
      if (isLeftJoystick(e)) {
        // setLeftjs((_) => dueljs.left);
        // console.log("left::", leftJs);
        setDuelAtom({ ...dueljsAtom, left: dueljs.left });
      }
    };

    window.ontouchend = (e) => {
      if (isLeftJoystick(e)) {
        setLeftjs((_) => dueljs.left);
      }
      if (isRightJoystick(e)) {
        setRightjs((_) => dueljs.right);
      }
    };
    // console.log("overall: ", j);
  }, [dueljs, leftJSdata, leftJs, rightJs]);

  return (
    <>
      {/* <div className="joystick-parent-wrapper h-40 w-screen absolute z-10 bg-blue-600  bottom-5 opacity-25 "> */}
      {/* <div
        className={"joystick-wrapper rightjs-container bg-yellow-300 relative "}
      /> */}
      {/* <div className={"joystick_wrapper leftjs-container bg-yellow-800 h-32"} /> */}
      {/* </div> */}
    </>
  );
}

let isLeftJoystick = (e: TouchEvent) => {
  return (e.target as HTMLElement).classList[1] == "left_joystick";
};
let isRightJoystick = (e: TouchEvent) => {
  return (e.target as HTMLElement).classList[1] == "right_joystick";
};
