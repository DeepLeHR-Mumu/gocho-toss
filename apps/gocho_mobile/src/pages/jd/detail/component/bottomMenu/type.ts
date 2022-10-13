import { Dispatch, SetStateAction } from "react";

export interface BottomMenuProps {
  jobDetailData: {
    id: number;
    endTime: number;
    applyUrl: string;
    title: string;
    cut: boolean;
    company: {
      name: string;
      logoUrl: string;
    };
  };
  isBookmarked: boolean;
  userId: number | undefined;
  setOpenComment: Dispatch<SetStateAction<boolean>>;
}
