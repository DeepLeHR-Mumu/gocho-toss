import { HasFieldsInIncludesDef } from "./type";

export const getCertiValue = (arrData: { value: string }[]) => {
  if (arrData.length === 0) {
    return null;
  }
  const result = arrData.map((item) => {
    return item.value;
  });

  return result;
};

// 선택된 자격증 리스트 boolean 값 체크
export const hasFieldsInIncludes: HasFieldsInIncludesDef = (arr, keyword) => {
  const result = arr.some((field) => {
    return field.value === keyword;
  });
  return result;
};
