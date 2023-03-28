export interface loginObjDef {
  button: "home" | "close";
}

export type contentModalNameDef = "loginModal";

export type modalNameDef =
  | "logoutModal"
  | "signUpModal"
  | "accountSettingModal"
  | "pageBlockModal"
  | "findPasswordModal"
  | "noticeModal"
  | null;

export type contentModalDef = loginObjDef;

export interface setCurrentModalDef {
  (modal: contentModalNameDef, contentObj: contentModalDef): void;
  (modal: modalNameDef, contentObj?: never): void;
}
export interface SetModalDef {
  (modal: contentModalNameDef | modalNameDef, contentObj?: never | contentModalDef): void;
}

export interface UseModalProps {
  modal: modalNameDef | contentModalNameDef;
  contentObj?: contentModalDef | never;
  setModal: SetModalDef;
}
