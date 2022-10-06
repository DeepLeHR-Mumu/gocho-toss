export type MainJobCardProps = {
  jobData: {
    id: number;
    companyName: string;
    companyLogo: string;
    title: string;
    endTime: number;
    cut: boolean;
    high: boolean;
    college: boolean;
    placeArr: string[];
    rotationArr: string[];
  };
  isMobile: boolean;
  isBookmarked: boolean;
  userId: number | undefined;
  isSkeleton?: never;
  loginOpener: () => void;
};

export type MainJobCardSkeleton = {
  jobData?: never;
  isMobile?: never;
  isBookmarked?: never;
  userId?: never;
  isSkeleton: boolean;
  loginOpener?: never;
};
