// NOTE "" 는 '전체' 입니다.

export const JOB_FILTER_KEY = "task";
export const JOB_FILTER_ARR = [
  "",
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
];

export const INDUSTRY_FILTER_KEY = "industry";
export const INDUSTRY_FILTER_ARR = [
  "",
  "제약",
  "바이오",
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
];

export const EDUCATION_FILTER_KEY = "possibleEdu";
export const EDUCATION_FILTER_ARR = ["", "중졸", "고졸", "초대졸", "4년제"];

export const PLACE_FILTER_KEY = "place";
export const PLACE_FILTER_ARR = [
  "",
  "전국",
  "서울",
  "부산",
  "광주",
  "대구",
  "인천",
  "대전",
  "울산",
  "세종",
  "경기",
  "강원",
  "경북",
  "경남",
  "충북",
  "충남",
  "전북",
  "전남",
  "제주",
];

export const REQUIRED_EXP_FILTER_KEY = "requiredExp";
export const REQUIRED_EXP_FILTER_ARR = ["", "신입", "경력", "무관"];

export const CONTRACT_FILTER_KEY = "contractType";
export const CONTRACT_FILTER_ARR = ["", "계약직", "정규직", "계약직>정규직", "인턴"];

export const ROTATION_FILTER_KEY = "rotation";
export const ROTATION_FILTER_ARR = [
  "",
  "주간",
  "야간",
  "교대",
  "주간2교대",
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
];

export const keyTextMapper = {
  [JOB_FILTER_KEY]: "직무",
  [INDUSTRY_FILTER_KEY]: "업종",
  [EDUCATION_FILTER_KEY]: "학력",
  [PLACE_FILTER_KEY]: "근무지",
  [REQUIRED_EXP_FILTER_KEY]: "경력",
  [CONTRACT_FILTER_KEY]: "계약형태",
  [ROTATION_FILTER_KEY]: "교대형태",
};

// NOTE "" 는 '전체' 입니다.
