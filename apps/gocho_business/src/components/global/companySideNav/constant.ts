import { INTERNAL_URL } from "@/constants";

export const COMPANY_SIDENAV_LINK_ARR = [
  { name: "기업정보", url: INTERNAL_URL.COMPANY_EDIT },
  { name: "등록된 계정 목록", url: INTERNAL_URL.MANAGER_LIST },
  { name: "기업 회원 인증", url: INTERNAL_URL.HELP },
] as const;
