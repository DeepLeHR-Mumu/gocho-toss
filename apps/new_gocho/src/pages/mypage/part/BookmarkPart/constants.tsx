import { BookmarkPage } from "./type";

import { FallowPart, JdBookmarkPart, HistoryPart } from "./part";

export const bookmarkPart: BookmarkPage[] = [
  {
    key: 1,
    title: "팔로잉 기업",
    element: <FallowPart />,
  },
  {
    key: 2,
    title: "찜한 공고",
    element: <JdBookmarkPart />,
  },
  {
    key: 3,
    title: "최근 본 내역",
    element: <HistoryPart />,
  },
];
