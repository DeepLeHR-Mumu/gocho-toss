import {
  JD_UPLOAD_URL,
  JD_LIST_URL,
  MAIN_BANNER_URL,
  JD_TOP_BANNER_URL,
  ASIDE_BANNER_URL,
  COMPANY_UPLOAD_URL,
  COMPANY_LIST_URL,
  FACTORY_UPLOAD_URL,
  VIRAL_URL,
} from "@constant/internalURL";

export const menuArr = [
  {
    menuTitle: "공고 업로드",
    menuLink: JD_UPLOAD_URL,
  },
  {
    menuTitle: "공고 목록",
    menuLink: JD_LIST_URL,
  },
  {
    menuTitle: "메인 배너 업로드/목록",
    menuLink: MAIN_BANNER_URL,
  },
  {
    menuTitle: "공고 상단 배너 업로드/목록",
    menuLink: JD_TOP_BANNER_URL,
  },
  {
    menuTitle: "사이드 배너 업로드/목록",
    menuLink: ASIDE_BANNER_URL,
  },
  {
    menuTitle: "기업 등록",
    menuLink: COMPANY_UPLOAD_URL,
  },
  {
    menuTitle: "기업 목록",
    menuLink: COMPANY_LIST_URL,
  },
  {
    menuTitle: "공장 등록",
    menuLink: FACTORY_UPLOAD_URL,
  },
  {
    menuTitle: "바이럴 마케팅",
    menuLink: VIRAL_URL,
  },
];
