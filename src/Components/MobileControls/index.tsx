import React, { useEffect, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import JoystickController from "joystick-controller";

export default function MobileControls() {
  const rightjs = new JoystickController(
    {
      containerClass: "rightjs-container",
      leftToRight: false,
      bottomToUp: true,
      x: "10%",
      y: "25%",
      radius: 40,
      joystickRadius: 20,
      maxRange: 50,
    },
    (data: any) => console.log(data.angle)
  );
  const leftjs = new JoystickController(
    {
      containerClass: "leftjs-container",
      leftToRight: false,
      bottomToUp: true,
      x: "90%",
      y: "25%",
      radius: 40,
      joystickRadius: 20,
      maxRange: 50,
    },
    (data: any) => console.log(data.angle)
  );

  return (
    <>
      <div className=" h-20 w-screen absolute   bottom-5 ">
        <div className="relative m-4 bg-green-400 ">
          <div className={"rightjs-container absolute"}></div>
          <div className={"leftjs-container absolute"}></div>
        </div>
      </div>
    </>
  );
}
