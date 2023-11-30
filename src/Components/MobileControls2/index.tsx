import React, { useCallback, useEffect, useMemo, useState } from "react";
import { countAtom } from "../MobileControls/testAnything";
import { useAtom, useAtomValue } from "jotai";
import { duelJoyStickAtom } from "../../state";
import { useFrame, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { Object3D } from "three";

import JoystickController from "joystick-controller";

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

  useEffect(() => {
    scene.add(duelJswithData);

    const rightJoystick = new JoystickController(
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

    const leftJoystick = new JoystickController(
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
  }, []);

  useFrame(({ scene }) => {
    // console.log(scene.getObjectByName("Joystick_data")?.userData);
  });

  return (
    <Html>
      <div className={"joystick-area absolute z-10 bg-slate-400"}>
        MobileControl2
        {/* <div>{_timer}</div> */}
      </div>
    </Html>
  );
}
