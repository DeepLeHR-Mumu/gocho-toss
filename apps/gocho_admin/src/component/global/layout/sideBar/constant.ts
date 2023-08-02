import { INTERNAL_URL } from "@/constant";

export const menuArr = [
  {
    menuTitle: "공고",
    subMenuArr: [
      {
        menuTitle: "공고 업로드",
        menuLink: INTERNAL_URL.JD_UPLOAD_URL,
      },
      {
        menuTitle: "공고 목록",
        menuLink: `${INTERNAL_URL.JD_LIST_URL}?page=1`,
      },
    ],
  },
  {
    menuTitle: "배너 등록",
    subMenuArr: [
      {
        menuTitle: "메인 배너",
        menuLink: `${INTERNAL_URL.MAIN_AD_URL}?page=1`,
      },
      {
        menuTitle: "공고 상단 배너",
        menuLink: `${INTERNAL_URL.TOP_AD_URL}?page=1`,
      },
      {
        menuTitle: "앱 공고 배너",
        menuLink: `${INTERNAL_URL.APP_JD_AD_URL}?page=1`,
      },
    ],
  },
  {
    menuTitle: "기업",
    subMenuArr: [
      {
        menuTitle: "기업 등록",
        menuLink: INTERNAL_URL.COMPANY_UPLOAD_URL,
      },
      {
        menuTitle: "기업 목록",
        menuLink: `${INTERNAL_URL.COMPANY_LIST_URL}?page=1`,
      },
      {
        menuTitle: "기업 키워드 목록",
        menuLink: `${INTERNAL_URL.COMPANY_KEYWORD_URL}`,
      },
      {
        menuTitle: "기업 키워드 업로드",
        menuLink: `${INTERNAL_URL.COMPANY_KEYWORD_UPLOAD_URL}`,
      },
    ],
  },
  {
    menuTitle: "바이럴 마케팅",
    subMenuArr: [
      {
        menuTitle: "오늘의공고/블로그",
        menuLink: INTERNAL_URL.VIRAL_BLOG_URL,
      },
      {
        menuTitle: "인스타그램/카카오뷰",
        menuLink: INTERNAL_URL.VIRAL_INSTA_URL,
      },
    ],
  },
  {
    menuTitle: "기업 서비스",
    subMenuArr: [
      {
        menuTitle: "공고 등록 요청",
        menuLink: `${INTERNAL_URL.BUSINESS_JD_LIST_URL}?type=register&page=1`,
      },
      {
        menuTitle: "공고 수정 요청",
        menuLink: `${INTERNAL_URL.BUSINESS_JD_LIST_URL}?type=edit&page=1`,
      },
      {
        menuTitle: "기업 수정 요청",
        menuLink: `${INTERNAL_URL.BUSINESS_COMPANY_LIST_URL}?page=1`,
      },
      {
        menuTitle: "회원 등록",
        menuLink: `${INTERNAL_URL.BUSINESS_USER_REGISTER_URL}`,
      },
      {
        menuTitle: "회원 인증 요청",
        menuLink: `${INTERNAL_URL.BUSINESS_USER_AUTH_LIST_URL}?page=1`,
      },
      {
        menuTitle: "공지사항 리스트",
        menuLink: INTERNAL_URL.BUSINESS_NOTICE_LIST,
      },
      {
        menuTitle: "공지사항 등록",
        menuLink: INTERNAL_URL.BUSINESS_NOTICE_REGISTER,
      },
    ],
  },
  {
    menuTitle: "앱 관련",
    subMenuArr: [
      {
        menuTitle: "푸쉬 알림 발송",
        menuLink: INTERNAL_URL.FCM_PUSH,
      },
      {
        menuTitle: "추천 검색 키워드 목록",
        menuLink: INTERNAL_URL.SEARCH_KEYWORD_URL,
      },
      {
        menuTitle: "추천 검색 키워드 추가",
        menuLink: INTERNAL_URL.SEARCH_KEYWORD_UPLOAD_URL,
      },
    ],
  },
];
