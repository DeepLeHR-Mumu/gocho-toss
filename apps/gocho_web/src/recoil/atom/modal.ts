import { atom } from "recoil";

export interface postingObjDef {
  id: number;
  userID: number;
  type: "진로" | "자유" | "기업" | "자격증";
  title: string;
  description: string;
  nickname: string;
  createdTime: number;
  like: number;
  view: number;
  commentCount: number;
  image: "default" | "default_work" | "jobi" | "jobi_safety" | "jobi_chat" | "jobi_play" | "jobi_teach";
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
}

export interface changePostingObjDef {
  id: number;
  title: string;
  description: string;
  type: number;
}

export interface factoryObjDef {
  id: number;
  place1: string;
  place2: string;
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
  factoryName: string;
}

export interface loginObjDef {
  button: "home" | "close";
}

export interface pageBlockModalDef {
  url: string;
  text: string;
  afterAction?(): void;
}

export interface WritePostingModalDef {
  title: string;
  description: string;
}

export type contentModalDef =
  | pageBlockModalDef
  | postingObjDef
  | tipObjDef
  | changePostingObjDef
  | factoryObjDef
  | loginObjDef
  | WritePostingModalDef;

export type contentModalNameDef =
  | "postingModal"
  | "tipModal"
  | "changePostingModal"
  | "factoryModal"
  | "loginModal"
  | "pageBlockModal"
  | "writePostingModal";

export type modalNameDef =
  | "logoutModal"
  | "signUpModal"
  | "accountSettingModal"
  | "writeKakaoInfoModal"
  | "findPasswordModal";

export interface modalAtomDef {
  activatedModal: modalNameDef | contentModalNameDef;
  modalContentObj?: contentModalDef | never;
}

export const modalAtom = atom<modalAtomDef | null>({
  key: "modal",
  default: null,
});
