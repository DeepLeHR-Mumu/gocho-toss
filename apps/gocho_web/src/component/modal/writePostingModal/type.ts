export const setPostingTypeButtonArr: {
  text: string;
}[] = [
  {
    text: "자유",
  },
  {
    text: "진로",
  },
  {
    text: "기업",
  },
  {
    text: "자격증",
  },
];

export interface PostingFormValues {
  title: string;
  description: string;
  type: number;
}
