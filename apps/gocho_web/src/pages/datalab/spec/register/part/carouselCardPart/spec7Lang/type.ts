export interface Spec7LangProps {
  moveNextCard(percent: number): void;
  movePrevCard(): void;
}

export interface PostSubmitValues {
  language: {
    language: "영어" | "중국어" | "일본어" | "기타" | undefined;
    test: string | undefined;
    score: string | undefined;
  }[];
}
