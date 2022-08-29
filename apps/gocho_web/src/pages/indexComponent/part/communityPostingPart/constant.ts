export const setPostingOrderButtonArr: {
  text: string;
  filter?: "free" | "com" | "career" | "certi";
}[] = [
  {
    text: "전체",
  },
  {
    text: "진로",
    filter: "career",
  },
  {
    text: "자유",
    filter: "free",
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
