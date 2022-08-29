import { atom } from "recoil";

export const progressPercentAtom = atom<number>({
  key: "progressPercent",
  default: 0,
});
