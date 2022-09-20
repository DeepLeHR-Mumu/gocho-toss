import { Dispatch, SetStateAction } from "react";
import { QueryObserverResult } from "@tanstack/react-query";

export interface HeaderPartProps {
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
    positionArr: {
      id: number;
      requiredExp: {
        type: "신입" | "경력" | "무관";
      };
      hireCount: number;
      rotationArr: string[];
      contractType: {
        type: "정규직" | "계약직" | "계약>정규" | "연수생" | "인턴";
      };
      placeArr: string[];
      possibleEdu: {
        summary: string;
      };
      task: {
        mainTask: string;
        subTaskArr: string[] | null;
      };
    }[];
  };
  setCurrentPositionId: Dispatch<SetStateAction<number | null>>;
  currentPositionId: number | null;
  isBookmarked: boolean;
  userId: number | undefined;
  refetchUserBookmark: () => Promise<QueryObserverResult>;
  isSkeleton?: never;
}

export interface HeaderPartSkeleton {
  isSkeleton: boolean;
  setCurrentPositionId?: never;
  currentPositionId?: never;
  jobDetailData?: never;
  isBookmarked?: never;
  userId?: never;
  refetchUserBookmark?: never;
}
