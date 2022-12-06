export interface JobCardProps {
  job: {
    id: number;
    applyUrl: string;
    companyName: string;
    companyId: number;
    title: string;
    view: number;
    startTime: number;
    endTime: number;
    taskArr: string[];
    eduArr: string[];
    placeArr: string[];
    rotationArr: string[];
    contractArr: string[];
    requiredExpArr: string[];
  };
}
