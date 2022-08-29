import { atom } from "recoil";

export const isSpecRegisterBlockingAtom = atom<boolean>({
  key: "isSpecRegisterBlockingAtom",
  default: false,
});
