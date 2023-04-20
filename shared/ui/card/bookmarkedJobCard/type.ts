export interface BookmarkedJobCardProps {
  jobData: {
    id: number;
    company: {
      id: number;
      name: string;
      logoUrl: string;
    };
    title: string;
    cut: boolean;
    endTime: string;
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
