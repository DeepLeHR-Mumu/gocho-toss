export interface SlideCardProps {
  jobData: {
    id: number;
    endTime: number;
    companyLogo: string;
    companyName: string;
    title: string;
  };
  bgColor: string;
  isSkeleton?: never;
}

export interface SlideCardSkeleton {
  jobData?: never;
  bgColor?: never;
  isSkeleton: boolean;
}
