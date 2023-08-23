export interface JdCardProps {
  jd: {
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
  };
}
