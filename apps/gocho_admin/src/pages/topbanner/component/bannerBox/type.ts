export interface BannerBoxProps {
  banner: {
    id: number;
    color: string;
    startTime: string;
    endTime: string;
    company: {
      id: number;
      logoUrl: string;
      name: string;
    };
    jd: {
      id: number;
      title: string;
      startTime: string;
      endTime: string;
    };
  };
}
