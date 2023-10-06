import { ImageType } from "shared-type/ui/imageType";
import { EvalDef, IndustryType, LanguageType, TaskType } from "./common";

export interface SpecDetailObjDef {
  id: number;
  image: ImageType;
  uploader: {
    nickname: string;
    image: "default" | "default_work" | "jdi" | "jdi_safety" | "jdi_chat" | "jdi_play" | "jdi_teach";
    badge: "default" | "early_bird" | "admin";
  };
  secret: boolean;
  gender: "남" | "여";
  age: number;
  military: "군필" | "미필" | "면제-해당없음";
  desired_task: TaskType | null;
  desired_industry: IndustryType | null;
  last_education: "고졸" | "초대졸";
  score: number | null;
  score_count: number;
  created_time: number;
  highSchool: {
    type: string;
    naesin: number;
    absent: number;
    tardy: number;
    leave_early: number;
    class_miss: number;
  };
  // NOTMYFAULT undefined 수정하기 - null로 와야함
  college:
    | {
        department: string;
        grade: number;
        max_grade: 4.5 | 4.3;
        uturn: boolean;
      }
    | null
    | undefined;
  // NOTMYFAULT undefined 수정하기 - null로 와야함
  certificate: {
    data: string[] | null;
    level1: number | null;
    level2: number | null;
    level3: number | null;
  };
  language: LanguageType | null;
  award: string[] | null;
  career: string[] | null;
  etc: string[] | null;
  is_mine: boolean;
  evals: EvalDef;
  did_eval: boolean;
  eval_count: number;
}
