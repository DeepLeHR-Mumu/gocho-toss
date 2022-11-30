export interface ResultInfoPartProps {
  resultData: {
    isMine: boolean;
    evalCount: number;
    score: number | null;
    scoreCount: number;
    evals: {
      strongPointArr: [string, number][];
      weakPointArr: [string, number][];
      feedbackArr: string[] | null;
    } | null;
  };
}
