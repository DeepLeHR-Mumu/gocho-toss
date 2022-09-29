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
  isMobile: boolean;
  isSkeleton?: never;
};

export type JobSmallCardSkeleton = {
  jobData?: never;
  isMobile?: never;
  isSkeleton: boolean;
};
