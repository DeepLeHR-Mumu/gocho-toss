export interface getJobTitleCreatorDef {
  (positionObj: {
    task: {
      mainTask: string;
    };
    contractType: {
      type: string;
    };
    hireCount: number;
  }): string;
}
