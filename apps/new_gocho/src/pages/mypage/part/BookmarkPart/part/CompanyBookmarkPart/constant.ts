import { BookmarkFilterType } from "./type";

interface filterOptionDef {
  content: string;
  filter: BookmarkFilterType;
}
export const filterOption: filterOptionDef[] = [
  {
    content: "팔로우한 순",
    filter: "recent",
  },
  {
    content: "팔로워 많은 순",
    filter: "popular",
  },
  {
    content: "이름 순",
    filter: "name",
  },
  {
    content: "평균 연봉 순",
    filter: "pay",
  },
];
