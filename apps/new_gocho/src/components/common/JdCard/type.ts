export interface JdCardProps {
  jd?: {
    id: number;
    company: {
      name: string;
      logoUrl: string;
    };
    startTime: string;
    endTime: string;
    high: boolean;
    college: boolean;
    title: string;
    placeArr: string[];
    isBookmark: boolean;
  };
  ad?: boolean;
  blockClick?: boolean;
}
