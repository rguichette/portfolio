import { Box, Plane, RoundedBox, Text, useHelper } from "@react-three/drei";
import { GroupProps, useFrame } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { BackSide, FrontSide, SpotLight, SpotLightHelper } from "three";
import Glitch from "../../materials/Glitch";
import Hologram from "../../materials/Hologram";

export default function Sign(props: GroupProps) {
  let [word, setWord] = useState("");

  let spotLightRef = useRef<SpotLight>(null);

  useHelper(spotLightRef.current && (spotLightRef as any), SpotLightHelper);
  useEffect(() => {
    let targetWord = "Welcome".split("");
    let pWord = "";

    console.log(targetWord);

    for (let i = 0; i < targetWord.length; i++) {
      console.log(targetWord[i]);

      let typeTimeout = setTimeout(() => {
        pWord += targetWord[i];
      }, 500);
      setWord(pWord);

      clearTimeout(typeTimeout);
    }
  }, []);

  //   useFrame(({ clock, scene }) => {
  //     // let lights = scene.getObjectByName("signLight")?.children;
  //     // lights?.forEach((light) => {
  //     //   (light as SpotLight).intensity = Math.sin(clock.elapsedTime * 4) * 3 + 4;
  //     // });
  //   });

  return (
    <>
      {/* <Text material={holographicMaterial as any}>Welcome</Text> */}
      {/* <Box material={holographicMaterial as any}></Box> */}
      <RoundedBox args={[1.7, 3, 0.1]} position={[2, 1, 2]}></RoundedBox>
    </>
  );
}

{
  // <RoundedBox args={[1.7, 3, 0.1]} position={[2, 0.5, 2]}>
  //   <Holograph />
  // </RoundedBox>;
}
