import { BookmarkPage } from "./type";

import { CompanyBookmarkPart, JdBookmarkPart, HistoryPart } from "./part";

export const bookmarkPart: BookmarkPage[] = [
  {
    title: "팔로잉 기업",
    element: <CompanyBookmarkPart />,
  },
  {
    title: "찜한 공고",
    element: <JdBookmarkPart />,
  },
  {
    title: "최근 본 내역",
    element: <HistoryPart />,
  },
];
