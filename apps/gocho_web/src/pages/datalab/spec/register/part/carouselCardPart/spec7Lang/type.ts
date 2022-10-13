export interface Spec7LangProps {
  moveNextCard(percent: number): void;
  movePrevCard(): void;
}

export interface PostSubmitValues {
  language: {
    language: "영어" | "중국어" | "일본어" | "프랑스어" | "스페인어" | undefined;
    test: string | undefined;
    score: string | undefined;
  }[];
}
