import { Box } from "@react-three/drei";
import InfoCard from "../Components/InfoCard";
import {
  RapierRigidBody,
  RigidBody,
  RigidBodyProps,
} from "@react-three/rapier";
import { focusAtom } from "jotai-optics";
import { infoCardAtom } from "../state";
import { useAtom } from "jotai";
import summeries from "../statements";
import Bowling from "../Components/bowling";
import { useMemo } from "react";
import Dominos from "../Components/Domino";

export default function PlayGound() {
  let [infoAtom, setInfo] = useAtom(infoCardAtom);

  return (
    <>
      <Dominos />
    </>
  );
}
