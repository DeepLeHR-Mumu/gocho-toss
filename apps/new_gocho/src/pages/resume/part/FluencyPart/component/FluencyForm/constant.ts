export const languageArr = [
  {
    content: "영어",
  },
  {
    content: "중국어",
  },
  {
    content: "일본어",
  },
];

export const testArr = (language: string) => {
  if (language === "영어") {
    return [
      {
        content: "TOEIC",
      },
      {
        content: "OPIC",
      },
      {
        content: "TOEFL(IBT)",
      },
      {
        content: "G-TELP",
      },
      {
        content: "I-ELTS",
      },
    ];
  }

  if (language === "중국어") {
    return [
      {
        content: "HSK",
      },
      {
        content: "(신)HSK",
      },
      {
        content: "TSC",
      },
    ];
  }

  if (language === "일본어") {
    return [
      {
        content: "JLPT",
      },
    ];
  }

  return [];
};
