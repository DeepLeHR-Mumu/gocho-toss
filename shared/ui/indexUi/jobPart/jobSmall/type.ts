export type JobSmallCardSkeleton = {
  jobData?: never;
  isBookmarked?: never;
  userId?: never;
  isSkeleton: boolean;
};
export type JobSmallCardProps = {
  userId: number | undefined;
  isBookmarked: boolean;
  jobData: {
    id: number;
    companyName: string;
    companyLogo: string;
    title: string;
    endTime: number;
    high: boolean;
    college: boolean;
    cut: boolean;
    placeArr: string[];
    rotationArr: string[];
  };
  isSkeleton?: never;
};
