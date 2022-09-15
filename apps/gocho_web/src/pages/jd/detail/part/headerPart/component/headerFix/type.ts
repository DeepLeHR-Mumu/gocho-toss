import { QueryObserverResult } from "@tanstack/react-query";

export interface HeaderFixProps {
  jobDetailData: {
    id: number;
    endTime: number;
    applyUrl: string;
    title: string;
    bookmarkCount: number;
    company: {
      name: string;
    };
  };
  isBookmarked: boolean;
  userId: number | undefined;
  refetchUserBookmark: () => Promise<QueryObserverResult>;
}
