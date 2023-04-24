export interface HeaderProps {
  isDdayEnd: boolean;
  jobDetailData: {
    id: number;
    company: {
      id: number;
      name: string;
      logoUrl: string;
      youtubeUrl: string;
      commentCount: number;
    };
    title: string;
    cut: boolean;
    startTime: string;
    endTime: string;
    applyUrl: string;
    bookmark: number;
    isBookmark: boolean;
    view: number;
    click: number;
  };
}
