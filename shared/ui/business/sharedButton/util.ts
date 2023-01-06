import { SizeType } from "./type";

export const sizeConverter = (size: SizeType) => {
  let labelFontSize;
  let labelFontWeight;
  let heightPadding;

  if (size === "small") {
    labelFontSize = 0.75;
    labelFontWeight = 400;
    heightPadding = 0.4375;
    return { labelFontSize, labelFontWeight, heightPadding };
  }
  if (size === "medium") {
    labelFontSize = 0.875;
    labelFontWeight = 400;
    heightPadding = 0.6875;
    return { labelFontSize, labelFontWeight, heightPadding };
  }
  if (size === "large") {
    labelFontSize = 0.875;
    labelFontWeight = 400;
    heightPadding = 0.875;
    return { labelFontSize, labelFontWeight, heightPadding };
  }
  labelFontSize = 1;
  labelFontWeight = 700;
  heightPadding = 1;
  return { labelFontSize, labelFontWeight, heightPadding };
};
