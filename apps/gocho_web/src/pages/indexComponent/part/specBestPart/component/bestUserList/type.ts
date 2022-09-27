import { Dispatch, SetStateAction } from "react";

import { ImageType } from "shared-type/ui/imageType";
import { TaskType } from "shared-api/spec/type/common";

export interface BestUserArrProps {
  isSkeleton?: never;
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

export interface SkeletonProps {
  isSkeleton: boolean;
  setActiveUserID?: never;
  activeUserID?: never;
  bestUserDataArr?: never;
}
