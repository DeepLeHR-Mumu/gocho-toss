export interface Spec2lastEducationProps {
  moveNextCard(percent: number): void;
  movePrevCard(): void;
}

export interface PostSubmitValues {
  lastEducation: "고졸" | "초대졸" | null;
}
