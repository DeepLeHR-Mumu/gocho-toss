export interface DetailSupportPartProps {
  freshPosition: {
    requiredExp: {
      type: "신입" | "경력" | "무관" | "신입/경력";
      maxYear: number;
      minYear: number;
    };
    requiredEtcArr: string[] | null;
    contractType: {
      type: "정규직" | "계약직" | "계약>정규" | "연수생" | "인턴";
    };
    hireCount: number;
    possibleEdu: {
      middle: boolean;
      high: boolean;
      college: boolean;
      four: boolean;
    };
    task: {
      mainTask: string;
    };
  };
}

export interface GetPossibleEduArr {
  (possibleEdu: { middle: boolean; high: boolean; college: boolean; four: boolean }): {
    desc: string;
    isPossible: boolean;
  }[];
}
