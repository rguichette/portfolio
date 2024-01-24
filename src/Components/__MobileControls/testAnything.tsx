import { useCallback, useState } from "react";
import { atomWithListeners } from "../MobileControls2/mobileState";
import { useAtom } from "jotai";
import { optic } from "optics-ts";
import { focusAtom } from "jotai-optics";

//pretend this is player and we need to get drag info, angle, and everything...read only
export const [countAtom, useCountListener] = atomWithListeners(0);

export default function TestAnything() {
  return (
    <>
      <div className="absolute bg-purple-400 z-20 top-40"> test</div>
    </>
  );
}
