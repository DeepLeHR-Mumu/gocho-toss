import { Dispatch, SetStateAction } from "react";

export interface HeaderPartProps {
  isSkeleton?: never;
  setCurrentPositionId: Dispatch<SetStateAction<number | null>>;
  currentPositionId: number | null;
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
}

export interface HeaderPartSkeleton {
  isSkeleton: boolean;
  setCurrentPositionId?: never;
  currentPositionId?: never;
  jobDetailData?: never;
}
