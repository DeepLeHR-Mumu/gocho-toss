import { JOBS_LIST_URL, JOBS_EXPLIST_URL, MYPAGE_URL, SPEC_LIST_URL, DATALAB_DETAIL } from "shared-constant";

export const menuArr = [
  {
    menuTitle: "채용공고",
    mainUrl: "jd",
    menuLink: JOBS_LIST_URL,
    subMenuArr: [
      {
        pageOrder: "recent",
        menuTitle: "최신채용공고",
        menuLink: JOBS_LIST_URL,
      },
      {
        pageOrder: "recent",
        menuTitle: "만료채용공고",
        menuLink: JOBS_EXPLIST_URL,
      },
    ],
  },
  {
    menuTitle: "dataLab",
    mainUrl: "datalab",
    menuLink: SPEC_LIST_URL,
    subMenuArr: [
      {
        menuTitle: "스펙평가",
        menuLink: SPEC_LIST_URL,
      },
      {
        menuTitle: "합격데이터",
        menuLink: DATALAB_DETAIL,
      },
    ],
  },
];

export const profileMenuArr = [
  {
    title: "마이페이지",
    link: MYPAGE_URL,
  },
];

export const blogUrl = "https://blog.gochodaejol.com";
