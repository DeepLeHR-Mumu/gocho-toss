export interface factoryObjDef {
  id: number;
  name: string;
  address: string;
  maleNumber: number;
  femaleNumber: number;
  product: string;
  bus: {
    exists: boolean;
    desc: string | null;
  };
  dormitory: {
    exists: boolean;
    desc: string | null;
  };
}

export interface tipObjDef {
  id: number;
  title: string;
  description: string;
  tagArr: string[];
  createdTime: number;
  likeCount: number;
  viewCount: number;
  thumbnailSrc: string;
  imgPageCount: number;
  uploaderName: string;
}

export interface loginObjDef {
  button: "home" | "close";
}

export interface pageBlockModalDef {
  url: string;
  text: string;
  afterAction?(): void;
}

export interface dialogModalDef {
  agreeDesc: string;
  title: string;
  desc: string;
  doActive(): void;
}

export type contentModalDef = pageBlockModalDef | factoryObjDef | loginObjDef | dialogModalDef | tipObjDef;

export type modalNameDef =
  | "logoutModal"
  | "signUpModal"
  | "accountSettingModal"
  | "findPasswordModal"
  | "noticeModal"
  | null;

export type contentModalNameDef = "factoryModal" | "loginModal" | "pageBlockModal" | "dialogModal";

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
