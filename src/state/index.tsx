import { atom } from "jotai";
import { focusAtom } from "jotai-optics";

export let infoAtom = atom(true);
export let showEngageButton = atom(false);
export let showDetailsPopUp = atom(false);
export let showHelpPopUp = atom(false);
export let isCharacterMoving = atom(false);
export let enterWorld = atom(false);

export let isMobileAtom = atom(false);
