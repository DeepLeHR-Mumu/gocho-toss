export const PROCESS_GUIDE_ARR = [
  ["서류전형"],
  ["면접전형", "1차면접", "인적성검사", "인성검사"],
  ["2차면접", "채용검진", "면접전형", "최종합격"],
  ["채용검진", "최종합격", "2차면접", "임원면접"],
  ["최종합격", "채용검진"],
  ["최종합격"],
  ["최종합격"],
  ["최종합격"],
  ["최종합격"],
] as const;

export const APPLY_ROUTE_GUIDE_ARR = [
  "이력서 제출",
  "자기소개서 제출",
  "온라인 지원서 제출",
  "자사양식 이력서 제출",
  "자사 홈페이지 지원",
  "사람인 지원",
  "잡코리아 지원",
  "졸업증명서",
  "생활기록부 제출",
  "주민등록등본 제출",
];

export const APPLY_EXTERNAL_LINK_ARR = [
  { text: "잡코리아", url: "https://www.jobkorea.co.kr/Corp/Index" },
  { text: "사람인", url: "https://www.saramin.co.kr/zf_user/auth?ut=c" },
  {
    text: "워크넷",
    url: "https://www.work.go.kr/member/bodyLogin.do?redirectEncodeYn=Y&redirectUrl=L2NvTWVtYmVyU3J2L3dhbnRlZEluZm9BZG1pbi93YW50ZWRBZG1pbi5kbz9wYWdlSW5kZXg9MQ==",
  },
];
