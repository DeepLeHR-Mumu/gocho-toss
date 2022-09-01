export interface JobCardProps {
  jobData: {
    id: number;
    companyName: string;
    companyLogo: string;
    startTime: number;
    endTime: number;
    title: string;
    high: boolean;
    college: boolean;
    placeArr: string[];
    rotationArr: string[];
    taskArr: string[];
    bookmark: number;
    view: number;
  };
  isSkeleton?: never;
}

export interface JobCardSkeleton {
  jobData?: never;
  isSkeleton: boolean;
}
