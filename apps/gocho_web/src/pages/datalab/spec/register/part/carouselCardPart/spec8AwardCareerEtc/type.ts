export interface Spec8AwardCareerEtcProps {
  moveNextCard(hash: string): void;
  movePrevCard(hash: string): void;
}

export interface PostSubmitValues {
  award: string;
  career: string;
  etc: string;
}
