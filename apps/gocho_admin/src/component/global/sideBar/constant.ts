import {
  JD_UPLOAD_URL,
  JD_LIST_URL,
  MAIN_BANNER_URL,
  JD_TOP_BANNER_URL,
  ASIDE_BANNER_URL,
  COMPANY_UPLOAD_URL,
  COMPANY_LIST_URL,
  VIRAL_BLOG_URL,
  VIRAL_INSTA_URL,
  BUSINESS_JD_LIST_URL,
  BUSINESS_COMPANY_LIST_URL,
  BUSINESS_FACTORY_LIST_URL,
} from "@constant/internalURL";

export const menuArr = [
  {
    menuTitle: "공고",
    subMenuArr: [
      {
        menuTitle: "공고 업로드",
        menuLink: JD_UPLOAD_URL,
      },
      {
        menuTitle: "공고 목록",
        menuLink: `${JD_LIST_URL}?page=1`,
      },
    ],
  },
  {
    menuTitle: "배너 등록",
    subMenuArr: [
      {
        menuTitle: "메인 배너",
        menuLink: MAIN_BANNER_URL,
      },
      {
        menuTitle: "공고 상단 배너",
        menuLink: JD_TOP_BANNER_URL,
      },
      {
        menuTitle: "사이드 배너",
        menuLink: ASIDE_BANNER_URL,
      },
    ],
  },
  {
    menuTitle: "기업",
    subMenuArr: [
      {
        menuTitle: "기업 등록",
        menuLink: COMPANY_UPLOAD_URL,
      },
      {
        menuTitle: "기업 목록",
        menuLink: `${COMPANY_LIST_URL}?page=1`,
      },
    ],
  },

  {
    menuTitle: "바이럴 마케팅",
    subMenuArr: [
      {
        menuTitle: "오늘의공고/블로그",
        menuLink: VIRAL_BLOG_URL,
      },
      {
        menuTitle: "인스타그램/카카오뷰",
        menuLink: VIRAL_INSTA_URL,
      },
    ],
  },

  {
    menuTitle: "기업 서비스",
    subMenuArr: [
      {
        menuTitle: "공고 검수 리스트",
        menuLink: `${BUSINESS_JD_LIST_URL}?page=1`,
      },
      {
        menuTitle: "기업 검수 리스트",
        menuLink: `${BUSINESS_COMPANY_LIST_URL}?page=1`,
      },
      {
        menuTitle: "공장 검수 리스트",
        menuLink: `${BUSINESS_FACTORY_LIST_URL}?page=1`,
      },
    ],
  },
];
