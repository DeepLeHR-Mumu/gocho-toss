import { IndustryType, TaskType } from "shared-api/spec/type/common";
import { ImageType } from "shared-type/ui/imageType";

export interface BasicInfoPartProps {
  basicData: {
    profileImg: ImageType;
    uploader: {
      nickname: string;
      image: "default" | "default_work" | "jobi" | "jobi_safety" | "jobi_chat" | "jobi_play" | "jobi_teach";
      badge: "default" | "early_bird" | "admin";
    };
    gender: "남" | "여";
    age: number;
    military: "군필" | "미필" | "면제-해당없음";
    desiredTask: TaskType | null;
    desiredIndustry: IndustryType | null;
    lastEducation: "고졸" | "초대졸";
    highschool: {
      type: string;
      naesin: number;
      absent: number;
      tardy: number;
      leaveEarly: number;
      classMiss: number;
    };
    certificate: {
      data: string[] | null;
      level1: number;
      level2: number;
      level3: number;
    } | null;
    college: {
      department: string;
      grade: number;
      maxGrade: 4.5 | 4.3;
      isUturn: boolean;
    } | null;
  };
}
