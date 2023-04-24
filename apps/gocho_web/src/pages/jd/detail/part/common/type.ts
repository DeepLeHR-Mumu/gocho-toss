export interface getJobTitleCreatorDef {
  (positionObj: {
    task: {
      mainTask: string;
    };
    contractType: {
      type: "정규직" | "계약직" | "계약>정규" | "연수생" | "인턴";
    };
    hireNumber: string;
  }): string;
}
