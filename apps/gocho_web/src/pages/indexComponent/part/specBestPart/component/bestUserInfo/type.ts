import { ImageType } from "shared-type/ui/imageType";
import { TaskType } from "shared-api/spec/type/common";

export interface BestUserInfoProps {
  isSkeleton?: never;
  bestUserData: {
    profileImg: ImageType;
    user: {
      nickname: string;
      image: "default" | "default_work" | "jobi" | "jobi_safety" | "jobi_chat" | "jobi_play" | "jobi_teach";
      badge: "default" | "early_bird" | "admin";
    };
    score: number | null;
    scoreCount: number;
    desiredTask: TaskType | null;
    age: number;
    lastEducation: "고졸" | "초대졸";
    college: { department: string } | null;
    highschool: { type: string };
    certificate: {
      level1: number;
      level2: number;
      level3: number;
    } | null;
    id: number;
  };
}

export interface skeletonProps {
  isSkeleton: boolean;
  bestUserData?: never;
}
