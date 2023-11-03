export interface JdCardProps {
  jd?: {
    id: number;
    company: {
      name: string;
      logoUrl: string;
    };
    startTime: string;
    endTime: string;
    highschool: boolean;
    college: boolean;
    title: string;
    place: string[];
    isBookmark: boolean;
  };
  ad?: boolean;
  blockClick?: boolean;
}
