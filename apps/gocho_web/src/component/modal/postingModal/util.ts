export const changeTypeIndex = (type: string) => {
  if (type === "자유") return 0;
  if (type === "진로") return 1;
  if (type === "기업") return 2;
  if (type === "자격증") return 3;
  return 4;
};
