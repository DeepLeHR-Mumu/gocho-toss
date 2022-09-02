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
  };
  isSkeleton?: never;
};
