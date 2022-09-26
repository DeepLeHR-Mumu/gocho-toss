export type JobSmallCardSkeleton = {
  jobData?: never;
  isSkeleton: boolean;
};
export type JobSmallCardProps = {
  jobData: {
    id: number;
    companyName: string;
    companyLogo: string;
    title: string;
    endTime: number;
    high: boolean;
    college: boolean;
    placeArr: string[];
    rotationArr: string[];
  };
  isSkeleton?: never;
};
