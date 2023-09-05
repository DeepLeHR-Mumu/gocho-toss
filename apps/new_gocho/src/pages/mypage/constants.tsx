import { ReactNode } from "react";

import { LinkItem, PageItem } from "./type";
import { Account } from "./part/Account";

export const myPageMenu: PageItem[] = [
  {
    key: 100,
    text: "계정 관리",
    isNewTab: false,
    type: undefined,
    element: <Account />,
  },
  {
    key: 101,
    text: "계정 관리",
    isNewTab: false,
    type: "account",
    element: <Account />,
  },
  {
    key: 102,
    text: "북마크",
    isNewTab: false,
    type: "bookmark",
    element: <Account />,
  },
  {
    key: 103,
    text: "알림 설정",
    isNewTab: false,
    type: "alarm",
    element: <Account />,
  },
];

export const sideNavMenu: (LinkItem | PageItem)[] = [
  {
    key: 104,
    text: "공지사항",
    isNewTab: true,
    link: "https://deeplehr.notion.site/f11891e2019044f89a3705d94b82862d",
  },
  {
    key: 105,
    text: "FAQ",
    isNewTab: true,
    link: "https://deeplehr.notion.site/f11891e2019044f89a3705d94b82862d",
  },
  {
    key: 106,
    text: "고객센터",
    isNewTab: true,
    link: "https://pf.kakao.com/_xgEFxms",
  },
  {
    key: 107,
    text: "이용약관",
    isNewTab: false,
    type: "termsUse",
    element: <Account />,
  },
  {
    key: 108,
    text: "개인정보처리방침",
    isNewTab: false,
    type: "privacyPolicy",
    element: <Account />,
  },
  {
    key: 109,
    text: "오픈 소스 라이센스",
    isNewTab: false,
    type: "opnsrLcns",
    element: <Account />,
  },
];

export const partElementArray = sideNavMenu.concat(myPageMenu).reduce((acc, cur) => {
  if (!cur.isNewTab) {
    acc.push({
      key: cur.key,
      title: cur.text,
      type: cur.type,
      element: cur.element,
    });
  }
  return acc;
}, [] as Array<{ key: number; type: string | undefined; title: string; element: ReactNode }>);
