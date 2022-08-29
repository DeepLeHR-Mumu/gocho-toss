export interface Spec1BasicProps {
  moveNextCard(percent: number): void;
}
export interface PostSubmitValues {
  age: number;
  gender: "남" | "여";
  military: "군필" | "미필" | "면제-해당없음";
  desiredTask:
    | "생산"
    | "공무"
    | "설비"
    | "환경안전"
    | "물류"
    | "품질"
    | "건설/공사/프로젝트"
    | "설계/CAD/CAM"
    | "시설관리"
    | "기타";
  desiredIndustry:
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
    | "화장품/헬스케어";
  secret: boolean;
}
