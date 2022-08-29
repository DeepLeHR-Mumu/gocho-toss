import { Dispatch, SetStateAction } from "react";

import { ImageType } from "@type/ui/imageType";
import { TaskType } from "@api/spec/type/common";

export interface BestUserArrProps {
  setActiveUserID: Dispatch<SetStateAction<number>>;
  activeUserID: number;
  bestUserDataArr: {
    id: number;
    profileImg: ImageType;
    nickname: string;
    score: number | null;
    desiredTask: TaskType | null;
  }[];
}
