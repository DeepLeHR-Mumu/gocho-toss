export type JobSmallCardSkeleton = {
  isWeb?: never;
  jobData?: never;
  isSkeleton: boolean;
};
export type JobSmallCardProps = {
  isWeb?: boolean;
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
