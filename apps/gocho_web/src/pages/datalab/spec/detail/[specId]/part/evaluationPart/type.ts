export interface EvaluationValues {
  score: number;
  strength: string[];
  weakness: string[];
  feedback?: string;
}

export interface EvaluationPartProps {
  isMine: boolean;
  didEval: boolean;
  evalCount: number;
}

export interface DeleteSelectedBoxDef {
  (
    formValue: "weakness" | "strength",
    pointName: string,
    targetArr: string[]
  ): void;
}
