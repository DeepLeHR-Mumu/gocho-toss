import { INTERNAL_URL } from "@/constants";

export const ETC_SIDENAV_LINK_ARR = [
  { name: "공지사항", url: INTERNAL_URL.NOTICE },
  { name: "알림", url: INTERNAL_URL.ALARM_LIST },
  { name: "고객센터", url: INTERNAL_URL.HELP },
] as const;
