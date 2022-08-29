export interface Spec8AwardCareerEtcProps {
  moveNextCard(percent: number): void;
  movePrevCard(): void;
}

export interface PostSubmitValues {
  award: string;
  career: string;
  etc: string;
}
