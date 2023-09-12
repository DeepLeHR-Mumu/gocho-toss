import { ReactNode } from "react";

import { AccountPart, ProfilePart, AlarmPart, PrivacyPart, TOSPart, BookmarkPart } from "./part";

import { LinkItem, PageItem } from "./type";

export const myPageMenu: PageItem[] = [
  {
    text: "프로필 관리",
    isNewTab: false,
    type: undefined,
    element: <ProfilePart />,
  },
  {
    text: "프로필 관리",
    isNewTab: false,
    type: "profile",
    element: <ProfilePart />,
  },
  {
    text: "계정 관리",
    isNewTab: false,
    type: "account",
    element: <AccountPart />,
  },
  {
    text: "북마크",
    isNewTab: false,
    type: "bookmark",
    element: <BookmarkPart />,
  },
  {
    text: "알림 설정",
    isNewTab: false,
    type: "alarm",
    element: <AlarmPart />,
  },
];

export const sideNavMenu: (LinkItem | PageItem)[] = [
  {
    text: "공지사항",
    isNewTab: true,
    link: "https://deeplehr.notion.site/f11891e2019044f89a3705d94b82862d",
  },
  {
    text: "FAQ",
    isNewTab: true,
    link: "https://deeplehr.notion.site/f11891e2019044f89a3705d94b82862d",
  },
  {
    text: "고객센터",
    isNewTab: true,
    link: "https://pf.kakao.com/_xgEFxms",
  },
  {
    text: "이용약관",
    isNewTab: false,
    type: "terms-of-service",
    element: <TOSPart />,
  },
  {
    text: "개인정보처리방침",
    isNewTab: false,
    type: "privacy",
    element: <PrivacyPart />,
  },
];

export const partElementArray = sideNavMenu.concat(myPageMenu).reduce((acc, cur) => {
  if (!cur.isNewTab) {
    acc.push({
      key: cur.type ?? "mypage",
      title: cur.text,
      type: cur.type,
      element: cur.element,
    });
  }
  return acc;
}, [] as Array<{ key: string; type: string | undefined; title: string; element: ReactNode }>);
