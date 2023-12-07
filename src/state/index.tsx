import { atom } from "jotai";
import { focusAtom } from "jotai-optics";

export let infoAtom = atom(true);
export let showEngageButton = atom(false);
export let showDetailsPopUp = atom(false);
export let showHelpPopUp = atom(false);
export let isCharacterMoving = atom(false);
//TODO: SWITCH BACK TO FALSE
export let enterWorld = atom(true);

export let isMobileAtom = atom(false);
