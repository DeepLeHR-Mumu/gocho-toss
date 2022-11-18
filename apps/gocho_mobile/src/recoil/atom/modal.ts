import { atom } from "recoil";

export interface loginObjDef {
  button: "home" | "close";
}

export type contentModalNameDef = "loginModal";

export type modalNameDef =
  | "logoutModal"
  | "signUpModal"
  | "accountSettingModal"
  | "pageBlockModal"
  | "writeKakaoInfoModal"
  | "findPasswordModal"
  | "noticeModal";

export type contentModalDef = loginObjDef;

export interface modalAtomDef {
  activatedModal: modalNameDef | contentModalNameDef;
  modalContentObj?: contentModalDef | never;
}

export const modalAtom = atom<modalAtomDef | null>({
  key: "modal",
  default: null,
});
