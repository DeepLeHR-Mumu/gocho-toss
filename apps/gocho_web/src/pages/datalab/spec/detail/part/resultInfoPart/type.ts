export interface ResultInfoPartProps {
  resultData: {
    isMine: boolean;
    evalCount: number;
    score: number | null;
    scoreCount: number;
    evals: {
      strongPointArr: {
        [key: string]: number;
        NONE: number;
        ATTENDANCE: number;
        AGE: number;
        EDUCATION_SCORE: number;
        RELATED_CERT: number;
        MANY_CERT: number;
        LANGUAGE_SCORE: number;
        AWARDS: number;
        DEPARTMENT: number;
        RELATED_CAREER: number;
        LONG_CAREER: number;
      };
      weakPointArr: {
        [key: string]: number;

        NONE: number;
        ATTENDANCE: number;
        AGE: number;
        EDUCATION_SCORE: number;
        UNRELATED_CERT: number;
        LESS_CERT: number;
        LANGUAGE_SCORE: number;
        AWARDS: number;
        DEPARTMENT: number;
        UNRELATED_CAREER: number;
        SHORT_CAREER: number;
      };
      feedbackArr: string[] | null;
    };
  };
}
