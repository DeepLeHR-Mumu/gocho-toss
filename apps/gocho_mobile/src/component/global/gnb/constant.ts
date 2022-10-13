import { JOBS_LIST_URL, JOBS_EXPLIST_URL, MYPAGE_URL } from "shared-constant/internalURL";

export const menuArr = [
  {
    menuTitle: "채용공고",
    menuLink: `${JOBS_LIST_URL}`,
    subMenuArr: [
      {
        menuTitle: "최신 채용공고",
        menuLink: `${JOBS_LIST_URL}`,
      },
      {
        menuTitle: "만료 채용공고",
        menuLink: `${JOBS_EXPLIST_URL}`,
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
