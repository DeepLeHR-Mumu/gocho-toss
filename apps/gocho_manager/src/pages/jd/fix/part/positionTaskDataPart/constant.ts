export const contractTypeArr = ["정규직", "계약직", "계약>정규", "연수생", "인턴"];
export const taskArr = [
  {
    mainTask: "생산",
    subTaskArr: [
      "없음",
      "오퍼레이터",
      "제조",
      "메인트",
      "조업",
      "포장",
      "조립",
      "설비엔지니어",
      "제조기술",
      "배양",
      "정제",
      "충전",
      "용접",
      "API",
      "고형제",
      "액제",
      "가공",
      "발전운영",
    ],
  },
  { mainTask: "공무", subTaskArr: ["없음", "생산설비", "배관/용접", "기계보전", "전기보전"] },
  { mainTask: "설비", subTaskArr: ["없음", "동력", "에너지", "공조냉동", "가스설비", "전력설비", "기계설비"] },
  { mainTask: "환경안전", subTaskArr: ["없음", "대기배출", "수처리", "소방", "안전관리"] },
  { mainTask: "물류", subTaskArr: ["없음", "출하", "소분", "칭량", "자재", "운송", "스페어파트"] },
  { mainTask: "품질", subTaskArr: ["없음", "실험", "검사", "연구실", "QA"] },
  { mainTask: "건설/공사/프로젝트", subTaskArr: ["없음", "건축/설계", "환경/플랜트", "시공/현장", "토목"] },
  { mainTask: "설계/CAD/CAM", subTaskArr: ["없음"] },
  { mainTask: "시설관리", subTaskArr: ["전기시설", "기계시설", "영선"] },
  { mainTask: "기타", subTaskArr: ["없음"] },
];

export const rotationArr = [
  { data: "주간", name: "주간" },
  { data: "야간", name: "야간" },
  { data: "교대", name: "교대" },
  { data: "주간2교대", name: "주간 2교대" },
  { data: "2교대", name: "2교대" },
  { data: "3교대", name: "3교대" },
  { data: "2;1", name: "2조 1교대" },
  { data: "2;2", name: "2조 2교대" },
  { data: "3;1", name: "3조 1교대" },
  { data: "3;2", name: "3조 2교대" },
  { data: "3;3", name: "3조 3교대" },
  { data: "4;2", name: "4조 2교대" },
  { data: "4:3", name: "4조 3교대" },
  { data: "4:4", name: "4조 4교대" },
  { data: "5:3", name: "5조 3교대" },
  { data: "5:4", name: "5조 4교대" },
];

export const placeTypeArr = ["일반", "전국", "해외", "기타"];

export const placeArr = [
  "서울특별시",
  "부산광역시",
  "대구광역시",
  "인천광역시",
  "광주광역시",
  "대전광역시",
  "울산광역시",
  "세종특별자치시",
  "경기도",
  "강원도",
  "충청북도",
  "충청남도",
  "전라북도",
  "전라남도",
  "경상북도",
  "경상남도",
  "제주특별자치도",
];
