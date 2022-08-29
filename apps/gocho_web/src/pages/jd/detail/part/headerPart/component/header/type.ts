export interface HeaderProps {
  jobDetailData: {
    startTime: number;
    endTime: number;
    applyUrl: string;
    title: string;
    bookmarkCount: number;
    viewCount: number;
    company: {
      companyId: number;
      name: string;
      logoUrl: string;
      youtubeUrl: string | null;
    };
  };
}
