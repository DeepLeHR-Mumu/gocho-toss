export const getFieldArrayValueWithNull = (arrData: string[] | null) => {
  if (arrData === null) return null;

  const allBlank = arrData.every((elem) => elem === null || elem.trim() === "");
  return allBlank ? null : arrData.filter((elem) => elem !== null && elem.trim() !== "");
};

export const stringArrayOrEmptyArray = (arrData: string[] | null) => {
  const result = getFieldArrayValueWithNull(arrData);
  return result !== null ? result : [];
};
