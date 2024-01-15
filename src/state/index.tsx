import { atom } from "jotai";
import { focusAtom } from "jotai-optics";

export let infoAtom = atom(true);
export let showEngageButton = atom(false);
export let showDetailsPopUp = atom(false);
export let showHelpPopUp = atom(false);
export let isCharacterMoving = atom(false);

export type InfoCardArgs = {
  title: string;
  summary: string;
  learnMore: boolean;
};

//handle info card
export let infoCardAtom = atom({
  title: "Tiltle from state",
  summary:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae eaque beatae dolores atque nostrum. Saepe necessitatibus rem numquam culpa eum repellendus libero rerum aperiam tenetur. ",
  learnMore: true,
});
export let showInfoWindow = atom(false);
//TODO: SWITCH BACK TO FALSE
export let enterWorld = atom(true);

export let isMobileAtom = atom(false);
