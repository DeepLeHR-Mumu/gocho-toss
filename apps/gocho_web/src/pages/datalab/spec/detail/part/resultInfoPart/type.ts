export interface ResultInfoPartProps {
  resultData: {
    isMine: boolean;
    evalCount: number;
    score: number | null;
    scoreCount: number;
    evals: {
      strongPointArr: { [key: string]: number };
      weakPointArr: { [key: string]: number };
      feedbackArr: string[] | null;
    } | null;
  };
}
