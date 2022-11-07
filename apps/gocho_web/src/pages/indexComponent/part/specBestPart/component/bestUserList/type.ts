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
    user: {
      nickname: string;
      image: "default" | "default_work" | "jobi" | "jobi_safety" | "jobi_chat" | "jobi_play" | "jobi_teach";
      badge: "default" | "early_bird" | "admin";
    };
    score: number | null;
    scoreCount: number;
    desiredTask: TaskType | null;
  }[];
}

export interface SkeletonProps {
  isSkeleton: boolean;
  setActiveUserID?: never;
  activeUserID?: never;
  bestUserDataArr?: never;
}
