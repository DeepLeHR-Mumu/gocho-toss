export const getFieldArrayValue = (arrData: { value: string }[]) => arrData.map((item) => item.value);

export const getFieldArrayValueWithNull = (arrData: { value: string }[]) => {
  if (arrData.length === 0) {
    return null;
  }
  return arrData.map((item) => item.value);
};
