import { ImageType } from "@type/ui/imageType";
import { TaskType } from "@api/spec/type/common";

export interface BestUserInfoProps {
  bestUserData: {
    profileImg: ImageType;
    nickname: string;
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
