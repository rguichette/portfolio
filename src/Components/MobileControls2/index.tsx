import { useEffect, useState } from "react";

import { Object3D } from "three";

import JoystickController from "joystick-controller";
import { useThree } from "@react-three/fiber";
import isMobile from "is-mobile";
import { ConstNode } from "three/examples/jsm/nodes/Nodes.js";
import { Html } from "@react-three/drei";

interface jsOptions {
  x?: number;
  y?: number;
  leveledX?: number;
  leveledY?: number;
  angle?: number;
  distance?: number;
}

export type duelJsUserDataType = {
  left?: jsOptions;
  right?: jsOptions;
};

let duelJswithData = new Object3D();
duelJswithData.name = "Joystick_data";

let joystickData: duelJsUserDataType = {
  left: {},
  right: {},
};

export default function MobileControl2() {
  let [ismobile, setIsMobile] = useState(isMobile());

  useEffect(() => {
    window.onresize = () => {
      // console.log("RESIZE state change -- mobile!: ");
      setIsMobile(isMobile());
    };

    let ctnr = document.getElementsByClassName("joystick-container");
    // console.log(ctnr);
    if (ctnr && !ismobile) {
      // console.log("FOUND!");
      for (let i = 0; i < ctnr.length; i++) {
        // console.log(ctnr[i]);

        (ctnr[i] as HTMLElement).style.display = "none";
      }
    }
  }, [ismobile]);

  // console.log("RESIZE state change -- mobile!: ", ismobile);

  return <>{ismobile && <Controller />}</>;
}

export function Controller() {
  let { scene } = useThree();

  // let [ismobile, setIsMobile] = useState(isMobile());

  // useEffect(() => {
  //   window.onresize = () => {
  //     console.log("RESIZE!");
  //   };
  // }, [ismobile]);

  useEffect(() => {
    // window.onresize = () => {
    //   console.log("RESIZE!");
    //   setIsMobile(isMobile());
    // };

    // if (!ismobile) {
    //   console.log("No JS")
    //   return;
    // }

    scene.add(duelJswithData);

    new JoystickController(
      {
        maxRange: 70,
        level: 10,
        radius: 50,
        joystickRadius: 25,
        opacity: 0.5,
        leftToRight: false,
        bottomToUp: true,
        containerClass: "joystick-container",
        controllerClass: "joystick-controller",
        joystickClass: "joystick",
        distortion: true,
        x: "15%",
        y: "25%",
        mouseClickButton: "ALL",
        hideContextMenu: false,
      },
      (data: any) => {
        joystickData.right = data;
        duelJswithData.userData = joystickData;
        // joystickData.right = data;
        // duelJswithData.userData = joystickData;
      }
    );

    new JoystickController(
      {
        maxRange: 70,
        level: 10,
        radius: 50,
        joystickRadius: 25,
        opacity: 0.5,
        leftToRight: true,
        bottomToUp: true,
        containerClass: "joystick-container",
        controllerClass: "joystick-controller",
        joystickClass: "joystick",
        distortion: true,
        x: "15%",
        y: "25%",
        mouseClickButton: "ALL",
        hideContextMenu: false,
      },
      (data: any) => {
        joystickData.left = data;
        duelJswithData.userData = joystickData;
      }
    );

    // document.querySelectorAll("joystick-container").forEach((ctrl) => {
    //   console.log("ctrl", ctrl);
    // });
  }, []);

  return <></>;
}
