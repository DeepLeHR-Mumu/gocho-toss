export interface BannerBoxProps {
  banner: {
    id: number;
    color?: string;
    startTime: number;
    endTime: number;
    jdStartTime: number;
    jdEndTime: number;
    jdId?: number;
    imageUrl?: string;
    companyName?: string;
    title?: string;
  };
}
