export interface BookmarkedJobCardProps {
  jobData: {
    id: number;
    endTime: number;
    title: string;
    cut: boolean;
    companyLogo: string;
    companyName: string;
  };
  isMobile: boolean;
  isBookmarked: boolean;
  userId: number | undefined;
  isSkeleton?: never;
}

export interface BookmarkedJobCardSkeleton {
  jobData?: never;
  isMobile?: never;
  isBookmarked?: never;
  userId?: never;
  isSkeleton: boolean;
}
