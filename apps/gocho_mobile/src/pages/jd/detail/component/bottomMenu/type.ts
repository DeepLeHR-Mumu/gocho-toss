import { Dispatch, SetStateAction } from "react";

export interface BottomMenuProps {
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
    processArr: string[];
    applyRouteArr: string[];
    applyUrl: string;
    etcArr: string[];
    bookmark: number;
    isBookmark: boolean;
    view: number;
    click: number;
  };
  setOpenComment: Dispatch<SetStateAction<boolean>>;
}
