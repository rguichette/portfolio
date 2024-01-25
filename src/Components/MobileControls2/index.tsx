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
  let { scene } = useThree();
  let [ismobile, setIsMobile] = useState(false);
  // window.onresize = () => {
  //   console.log("RESIZE!");
  //   setIsMobile(isMobile());
  // };

  // if (!ismobile) {
  //   console.log("No JS")
  //   return;
  // }
  let rightJs;
  let leftJs: unknown;

  if (ismobile) {
    rightJs = new JoystickController(
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
    leftJs = new JoystickController(
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
  }

  scene.add(duelJswithData);

  useEffect(() => {
    window.onresize = () => {
      console.log("RESIZE!");
      setIsMobile(isMobile());
    };

    if (!ismobile) {
      document
        .querySelectorAll(".joystick-container")
        .forEach((el) => el.remove());

      return;
    }
  }, [ismobile]);

  return <></>;
}
