export interface Spec7LangProps {
  moveNextCard(hash: string): void;
  movePrevCard(hash: string): void;
}

export interface PostSubmitValues {
  language: {
    language: "영어" | "중국어" | "일본어" | "기타" | undefined;
    test: string | undefined;
    score: string | undefined;
  }[];
}
