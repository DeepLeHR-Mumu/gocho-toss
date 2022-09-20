import { Dispatch, SetStateAction } from "react";

export interface Spec2lastEducationProps {
  userLastEdu: "고졸" | "초대졸" | null;
  setUserLastEdu: Dispatch<SetStateAction<"고졸" | "초대졸" | null>>;
  moveNextCard(percent: number): void;
  movePrevCard(): void;
}

export interface PostSubmitValues {
  lastEducation: "고졸" | "초대졸" | null;
}
