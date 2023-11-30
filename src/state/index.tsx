import { atom } from "jotai";
import { focusAtom } from "jotai-optics";

export let infoAtom = atom(true);
export let showEngageButton = atom(false);
export let showDetailsPopUp = atom(false);
export let showHelpPopUp = atom(false);
export let isPanning = atom(false);
export let isCharacterMoving = atom(false);
export let enterWorld = atom(false);

//mobile controls
export let duelJoyStickAtom = atom(0);
// export let leftJsAtom = focusAtom(duelJoyStickAtom, (optic) =>
//   optic.prop("left")
// );
// export let rightJsAtom = focusAtom(duelJoyStickAtom, (optic) =>
//   optic.prop("right")
// );
