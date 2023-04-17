import { filterMenuListDef } from "@pages/jd/list/component/filter/type";

export const eduArr: filterMenuListDef = {
  name: "학력" as const,
  query: "possibleEdu" as const,
  categoryArr: ["전체", "중졸", "고졸", "초대졸", "4년제"],
};

export const placeArr: filterMenuListDef = {
  name: "근무지" as const,
  query: "place" as const,
  categoryArr: [
    "전체",
    "서울",
    "부산",
    "대구",
    "인천",
    "광주",
    "대전",
    "울산",
    "세종특별자치시",
    "경기",
    "강원",
    "충남",
    "충북",
    "전남",
    "전북",
    "경남",
    "경북",
    "제주특별자치도",
    "전국",
  ],
};

export const expArr: filterMenuListDef = {
  name: "경력" as const,
  query: "requiredExp" as const,
  categoryArr: ["전체", "신입", "경력", "무관"],
};

export const contractArr: filterMenuListDef = {
  name: "계약형태" as const,
  query: "contractType" as const,
  categoryArr: ["전체", "정규직", "계약직", "계약>정규", "인턴"],
};

export const rotationArr: filterMenuListDef = {
  name: "교대형태" as const,
  query: "rotation" as const,
  categoryArr: [
    "전체",
    "주간",
    "야간",
    "교대",
    "주간 2교대",
    "2교대",
    "3교대",
    "2조 1교대",
    "2조 2교대",
    "3조 1교대",
    "3조 2교대",
    "3조 3교대",
    "4조 2교대",
    "4조 3교대",
    "4조 4교대",
    "5조 3교대",
    "5조 4교대",
  ],
};

export const taskArr: filterMenuListDef = {
  name: "업종" as const,
  query: "industry" as const,
  categoryArr: [
    "전체",
    "제약",
    "바이오",
    "반도체",
    "전자재료",
    "산업가스/특수가스",
    "디스플레이",
    "식품/식품원료",
    "음료/주류",
    "싸이로/사료",
    "탱크터미널",
    "정유석화",
    "철강",
    "비철/금속",
    "완성차",
    "자동차부품",
    "시설관리전문",
    "화학",
    "섬유",
    "발전소",
    "도시가스",
    "산업기계",
    "방산",
    "LPG",
    "제지",
    "2차전지",
    "조선",
    "화장품/헬스케어",
    "건설/토목",
    "무역",
    "물류",
    "전자제품",
    "기타",
  ],
};

export const positionArr: filterMenuListDef = {
  name: "직무" as const,
  query: "task" as const,
  categoryArr: [
    "전체",
    "생산",
    "공무",
    "설비",
    "환경안전",
    "물류",
    "품질",
    "건설/공사/프로젝트",
    "설계/CAD/CAM",
    "시설관리",
    "기타",
  ],
};

export const filterMenuListArr = [eduArr, placeArr, expArr, contractArr, rotationArr, taskArr, positionArr];
