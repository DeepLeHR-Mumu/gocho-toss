export type LanguageType = {
  language: string;
  test: string;
  score: string;
}[];

export type IndustryType = (
  | "제약"
  | "바이오"
  | "반도체"
  | "전자재료"
  | "산업가스/특수가스"
  | "디스플레이"
  | "식품/식품원료"
  | "음료/주류"
  | "싸이로/사료"
  | "탱크터미널"
  | "정유석화"
  | "철강"
  | "비철/금속"
  | "완성차"
  | "자동차부품"
  | "시설관리전문"
  | "화학"
  | "섬유"
  | "발전소"
  | "도시가스"
  | "산업기계"
  | "방산"
  | "LPG"
  | "제지"
  | "2차전지"
  | "조선"
  | "화장품/헬스케어"
)[];

export type TaskType = (
  | "생산"
  | "공무"
  | "설비"
  | "환경안전"
  | "물류"
  | "품질"
  | "건설/공사/프로젝트"
  | "설계/CAD/CAM"
  | "시설관리"
  | "기타"
)[];

export interface specArrDef {
  age: number;
  award: string[] | null;
  career: string[] | null;
  etc: string[] | null;
  certificate: {
    data: string[] | null;
    level1: number;
    level2: number;
    level3: number;
  } | null;
  college:
    | {
        department: string;
        grade: number;
        max_grade: 4.5 | 4.3;
        uturn: boolean;
      }
    | null
    | undefined;
  created_time: number;
  desired_industry: IndustryType | null;
  desired_task: TaskType | null;
  gender: "남" | "여";
  highschool: {
    type: string;
    naesin: number;
    absent: number;
    tardy: number;
    leave_early: number;
    class_miss: number;
  };
  id: number;
  image: "default" | "default_work" | "jdi" | "jdi_safety" | "jdi_chat" | "jdi_play" | "jdi_teach";
  language: LanguageType | null;
  last_education: "고졸" | "초대졸";
  military: "군필" | "미필" | "면제-해당없음";
  nickname: string;
  score: number | null;
  score_count: number;
  secret: boolean;
}

export interface getMySpecHistoryDef {
  eval_count: number;
  spec_arr: specArrDef[];
}
