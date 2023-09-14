import { JdBookmarkFilterType } from "./type";

interface filterOptionDef {
  content: string;
  filter: JdBookmarkFilterType;
}
export const filterOption: filterOptionDef[] = [
  {
    content: "최근 찜한 순",
    filter: "recent",
  },
  {
    content: "찜 많은 순",
    filter: "popular",
  },
  {
    content: "공고 게시 순",
    filter: "upload",
  },
  {
    content: "마감일 임박 순",
    filter: "end",
  },
  {
    content: "조회수 순",
    filter: "view",
  },
];
