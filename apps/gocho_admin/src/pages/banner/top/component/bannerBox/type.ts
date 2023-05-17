export interface BannerBoxProps {
  banner: {
    id: number;
    color: string;
    startTime: string;
    endTime: string;
    jd: {
      company: {
        id: number;
        logoUrl: string;
        name: string;
      };
      id: number;
      title: string;
      startTime: string;
      endTime: string;
    };
  };
}
