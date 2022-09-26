import { FilterDef, HashtagDef } from "./type";

export const setPostingFilterButtonArr: {
  text: string;
  filter?: FilterDef;
}[] = [
  {
    text: "전체",
  },
  {
    text: "자유",
    filter: "free",
  },
  {
    text: "진로",
    filter: "career",
  },
  {
    text: "기업",
    filter: "com",
  },
  {
    text: "자격증",
    filter: "certi",
  },
];

export const setPostingHashtagButtonArr: {
  text: string;
  hashtag: HashtagDef;
}[] = [
  {
    text: "조회수급상승",
    hashtag: "popular",
  },
  {
    text: "추천폭발",
    hashtag: "view",
  },
];
