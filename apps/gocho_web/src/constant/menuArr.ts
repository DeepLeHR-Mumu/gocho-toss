import {
  JOBS_LIST_URL,
  JOBS_EXPLIST_URL,
  MYPAGE_URL,
  COMMUNITY_POSTINGS_LIST_URL,
  COMMUNITY_TIPS_LIST_URL,
  SPEC_LIST_URL,
  INTERVIEW_REVIEW,
  DATALAB_DETAIL,
} from "shared-constant/internalURL";

export const menuArr = [
  {
    menuTitle: "채용공고",
    mainUrl: "jd",
    menuLink: JOBS_LIST_URL,
    pageQuery: true,
    subMenuArr: [
      {
        pageQuery: true,
        pageOrder: "recent",
        menuTitle: "최신채용공고",
        menuLink: JOBS_LIST_URL,
      },
      {
        pageQuery: true,
        pageOrder: "recent",
        menuTitle: "만료채용공고",
        menuLink: JOBS_EXPLIST_URL,
      },
    ],
  },
  {
    menuTitle: "커뮤니티",
    mainUrl: "community",
    menuLink: COMMUNITY_POSTINGS_LIST_URL,
    subMenuArr: [
      {
        pageQuery: false,
        menuTitle: "자유게시판",
        menuLink: COMMUNITY_POSTINGS_LIST_URL,
      },
      {
        pageQuery: false,
        menuTitle: "고수들의 취업꿀팁",
        menuLink: COMMUNITY_TIPS_LIST_URL,
      },
    ],
  },
  {
    menuTitle: "면접리뷰",
    mainUrl: "review",
    menuLink: INTERVIEW_REVIEW,
  },
  {
    menuTitle: "dataLab",
    mainUrl: "datalab",
    menuLink: SPEC_LIST_URL,
    subMenuArr: [
      {
        pageQuery: false,
        menuTitle: "스펙평가",
        menuLink: SPEC_LIST_URL,
      },
      {
        pageQuery: false,
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
