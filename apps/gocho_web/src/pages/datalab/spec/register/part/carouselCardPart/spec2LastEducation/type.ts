import { Dispatch, SetStateAction } from "react";

export interface Spec2lastEducationProps {
  setUserLastEdu: Dispatch<SetStateAction<"고졸" | "초대졸" | null>>;
  moveNextCard(hash: string): void;
  movePrevCard(hash: string): void;
}

export interface PostSubmitValues {
  lastEducation: "고졸" | "초대졸" | null;
}
