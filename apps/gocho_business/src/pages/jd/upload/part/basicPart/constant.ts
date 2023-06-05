export const CONTRACT_TYPE_ARR = ["정규직", "계약>정규", "계약직", "인턴", "연수생"] as const;

export const TASK_ARR = [
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
  { mainTask: "시설관리", subTaskArr: ["없음", "전기시설", "기계시설", "영선"] },
  { mainTask: "기타", subTaskArr: ["없음"] },
] as const;

export const REQUIRED_EXP_ARR = ["경력 무관", "신입", "경력", "신입/경력"] as const;
