import { FilterType } from "./type";

interface filterArrDef {
  content: string;
  filter: FilterType;
}

export const filterOption: filterArrDef[] = [
  {
    content: "이름 순",
    filter: "name",
  },
  {
    content: "팔로워 많은 순",
    filter: "popular",
  },
  {
    content: "리뷰 많은 순",
    filter: "comment",
  },
];
