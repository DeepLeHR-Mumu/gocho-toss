export const getFieldArrayValue = (arrData: { value: string }[]) => arrData.map((item) => item.value);

export const getFieldArrayValueWithNull = (arrData: { value: string }[]) => {
  const returnArr = arrData.map((item) => item.value);
  if (returnArr.every((element) => element === "")) return null;
  return returnArr;
};

export const setFieldArray = (arrData: string[]) => arrData.map((item) => ({ value: item || "" }));
