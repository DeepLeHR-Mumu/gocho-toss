export interface JobCardProps {
  job: {
    id: number;
    applyUrl: string;
    status: {
      name: string;
      reason: string | null;
    };
    companyName: string;
    companyId: number;
    title: string;
    view: number;
    startTime: string;
    endTime: string;
    task: string;
    eduArr: string[];
    placeArr: string[];
    rotationArr: string[];
    contractArr: string[];
    requiredExpArr: string[];
  };
}
