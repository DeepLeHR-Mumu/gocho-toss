import { Dispatch, SetStateAction } from "react";

export interface BottomMenuProps {
  jobDetailData: {
    id: number;
    endTime: string;
    applyUrl: string;
    isBookmark: boolean;
  };
  setOpenComment: Dispatch<SetStateAction<boolean>>;
}
