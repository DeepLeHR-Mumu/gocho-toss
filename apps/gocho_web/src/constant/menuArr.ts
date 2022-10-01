import {
  defaultPageNumber,
  JOBS_LIST_URL,
  JOBS_EXPLIST_URL,
  MYPAGE_URL,
  COMMUNITY_POSTINGS_LIST_URL,
  COMMUNITY_TIPS_LIST_URL,
  SPEC_URL,
  INTERVIEW_REVIEW,
  DATALAB_DETAIL,
} from "shared-constant/internalURL";

export const menuArr = [
  {
    menuTitle: "채용공고",
    menuLink: `${JOBS_LIST_URL}${defaultPageNumber}`,
    subMenuArr: [
      {
        menuTitle: "최신채용공고",
        menuLink: `${JOBS_LIST_URL}${defaultPageNumber}`,
      },
      {
        menuTitle: "만료채용공고",
        menuLink: `${JOBS_EXPLIST_URL}${defaultPageNumber}`,
      },
    ],
  },
  {
    menuTitle: "커뮤니티",
    menuLink: `${COMMUNITY_POSTINGS_LIST_URL}`,
    subMenuArr: [
      {
        menuTitle: "자유게시판",
        menuLink: `${COMMUNITY_POSTINGS_LIST_URL}`,
      },
      {
        menuTitle: "고수들의 취업꿀팁",
        menuLink: `${COMMUNITY_TIPS_LIST_URL}`,
      },
    ],
  },
  {
    menuTitle: "면접리뷰",
    disabled: true,
    menuLink: `${INTERVIEW_REVIEW}`,
  },
  {
    menuTitle: "dataLab",
    menuLink: `${SPEC_URL}`,
    subMenuArr: [
      {
        menuTitle: "스펙평가",
        menuLink: `${SPEC_URL}`,
      },
      {
        menuTitle: "합격데이터",
        disabled: true,
        menuLink: `${DATALAB_DETAIL}`,
      },
    ],
  },
];

export const profileMenuArr = [
  {
    title: "마이페이지",
    link: `${MYPAGE_URL}`,
  },
];
