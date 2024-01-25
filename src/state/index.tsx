import { atom } from "jotai";
import { focusAtom } from "jotai-optics";

export let infoAtom = atom(true); //rename later
export let showEngageButton = atom(false);
// export let showDetailsPopUp = atom(false);
export let showSkillsSummary = atom(false);
// export let showHelpPopUp = atom(false);
export let isCharacterMoving = atom(false);

export type InfoCardArgs = {
  display: boolean;
  title: string;
  summary: string;
  learnMore: boolean;
};

//handle info card
export let infoCardAtom = atom({
  display: false,
  title: "Tiltle from state",
  summary:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae eaque beatae dolores atque nostrum. Saepe necessitatibus rem numquam culpa eum repellendus libero rerum aperiam tenetur. ",
  learnMore: false,
});
// export let showInfoWindow = atom(false);
//TODO: SWITCH BACK TO FALSE

//detect if the world has been entered from the loading screen
export let enterWorld = atom(false);

// export let isMobileAtom = atom(true);
