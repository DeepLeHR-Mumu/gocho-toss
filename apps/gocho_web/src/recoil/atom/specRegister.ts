import { atom } from "recoil";

export interface SpecRegisterAtomDef {
  secret: boolean;
  gender: "남" | "여";
  age: number;
  military: "군필" | "미필" | "면제-해당없음";
  desiredTask: (
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
  desiredIndustry: (
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
  lastEducation: "고졸" | "초대졸";
  highschool: {
    type:
      | "일반고"
      | "공업고"
      | "마이스터고"
      | "농업고"
      | "상업고"
      | "검정고시"
      | "기타";
    naesin: number;
    absent: number;
    tardy: number;
    leaveEarly: number;
    classMiss: number;
  };
  college: {
    department: string;
    grade: number;
    maxGrade: 4.5 | 4.3;
    uturn: boolean;
  } | null;
  certificate: string[] | null;
  language?: {
    language: "영어" | "중국어" | "일본어" | "스페인어" | "프랑스어";
    test: string;
    score: string;
  }[];
  award?: string;
  career?: string;
  etc?: string;
}

export const specRegisterAtom = atom<SpecRegisterAtomDef | object>({
  key: "specRegisterAtom",
  default: {},
});
