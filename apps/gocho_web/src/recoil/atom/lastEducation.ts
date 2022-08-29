import { atom } from "recoil";

export const lastEducationAtom = atom<"고졸" | "초대졸" | null>({
  key: "lastEducationAtom",
  default: null,
});
