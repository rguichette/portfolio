import { useAtomValue } from "jotai";
import React, { useEffect } from "react";
import { duelJoyStickAtom } from "../../state";

//pretend this is player and we need to get drag info, angle, and everything...read only
export default function TestAnything() {
  let dj = useAtomValue(duelJoyStickAtom);

  useEffect(() => {
    console.log("hello from test", dj);
  }, [dj]);
  return <></>;
}
