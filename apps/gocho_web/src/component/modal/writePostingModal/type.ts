export const setPostingTypeButtonArr: {
  text: string;
}[] = [
  {
    text: "자유",
  },

  {
    text: "기업",
  },
  {
    text: "진로",
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

export interface WritePostingBoxProps {
  title: string;
  description: string;
}

export interface PostingDataObjDef {
  title: string;
  description: string;
}
