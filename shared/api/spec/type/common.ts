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

export type LanguageType = {
  language: string;
  test: string;
  score: string;
}[];

export interface EvalDef {
  strength_count_arr: [string, number][];
  weakness_count_arr: [string, number][];
  feedback_arr: string[] | null;
}
