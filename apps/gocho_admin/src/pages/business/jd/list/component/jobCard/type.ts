export interface JobCardProps {
  job: {
    id: number;
    applyUrl: string;
    companyName: string;
    companyId: number;
    title: string;
    view: number;
    startTime: string;
    endTime: string;
    task: string;
    edu: string;
    placeArr: string[];
    rotationArr: string[];
    contract: string;
    requiredExp: string;
  };
  filter: string;
}
