import { INTERNAL_URL } from "@/constants";

export const JD_LINK_ARR = [
  { name: "홈", url: INTERNAL_URL.HOME },
  { name: "공고등록", url: INTERNAL_URL.JD_UPLOAD },
  { name: "공고관리", url: `${INTERNAL_URL.JD_LIST}?page=1&order=recent` },
] as const;

export const COMPANY_LINK_ARR = [
  { name: "기업정보 관리", url: INTERNAL_URL.COMPANY_EDIT },
  { name: "등록된 계정 관리", url: INTERNAL_URL.RECRUITER_LIST },
] as const;

export const USER_LINK_ARR = [
  { name: "회원정보", url: INTERNAL_URL.MY_PAGE },
  { name: "고객센터", url: INTERNAL_URL.HELP },
] as const;
