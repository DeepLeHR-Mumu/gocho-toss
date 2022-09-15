import { QueryObserverResult } from "@tanstack/react-query";

export interface HeaderProps {
  jobDetailData: {
    id: number;
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
  isBookmarked: boolean;
  userId: number | undefined;
  refetchUserBookmark: () => Promise<QueryObserverResult>;
}
