export type JobDef = {
  id: number;
  companyName: string;
  companyId: number;
  title: string;
  cut: boolean;
  startTime: number;
  endTime: number;
  taskArr: string[];
  eduArr: string[];
  placeArr: string[];
  rotationArr: string[];
  contractArr: string[];
};
