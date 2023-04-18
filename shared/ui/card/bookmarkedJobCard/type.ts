export interface BookmarkedJobCardProps {
  jobData: {
    id: number;
    endTime: string;
    title: string;
    cut: boolean;
    companyLogo: string;
    companyName: string;
  };
  isMobile: boolean;
  isBookmarked: boolean;
  isSkeleton?: never;
}

export interface BookmarkedJobCardSkeleton {
  jobData?: never;
  isMobile?: never;
  isBookmarked?: never;
  isSkeleton: boolean;
}
