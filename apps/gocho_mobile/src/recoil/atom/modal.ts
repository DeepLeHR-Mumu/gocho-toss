import { atom } from "recoil";

export type modalNameDef =
  | "loginModal"
  | "logoutModal"
  | "signUpModal"
  | "writePostingModal"
  | "accountSettingModal"
  | "pageBlockModal";

export interface modalAtomDef {
  activatedModal: modalNameDef;
}

export const modalAtom = atom<modalAtomDef | null>({
  key: "modal",
  default: null,
});
