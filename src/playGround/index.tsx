import { Box } from "@react-three/drei";
import InfoCard from "../Components/InfoCard";
import { RapierRigidBody, RigidBody } from "@react-three/rapier";
import { focusAtom } from "jotai-optics";
import { infoCardAtom, showInfoWindow } from "../state";
import { useAtom } from "jotai";
import summeries from "../statements";

export default function PlayGound() {
  let [infoAtom, setInfo] = useAtom(infoCardAtom);

  // setInfo({title:"dream", summary:"it all happens", learnMore: false})
  let [InfoWindow, setshowInfoWindow] = useAtom(showInfoWindow);

  return (
    <>
      <RigidBody
        position={[1, 0, 3]}
        args={[1, 1, 1]}
        onCollisionEnter={() => {
          setInfo({ ...summeries.skills });
          setshowInfoWindow(true);
        }}
      >
        <Box />
      </RigidBody>
    </>
  );
}
