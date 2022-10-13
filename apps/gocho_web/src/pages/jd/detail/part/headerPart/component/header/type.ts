export interface HeaderProps {
  isDdayEnd: boolean;
  jobDetailData: {
    id: number;
    startTime: number;
    endTime: number;
    applyUrl: string;
    title: string;
    cut: boolean;
    bookmarkCount: number;
    viewCount: number;
    company: {
      companyId: number;
      name: string;
      logoUrl: string;
      youtubeUrl: string | null;
    };
  };
  userId: number | undefined;
}
