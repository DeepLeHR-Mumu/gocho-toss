export const getFieldArrayValue = (arrData: { value: string }[]) =>
  arrData.filter((item) => item.value.trim() !== "").map((item) => item.value);
