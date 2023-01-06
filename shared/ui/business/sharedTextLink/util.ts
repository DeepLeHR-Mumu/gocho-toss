import { COLORS } from "shared-style/color";
import { ColorType } from "./type";

export const colorConverter = (color: ColorType) => {
  let convertedFontColor;

  if (color === "lightGray") {
    convertedFontColor = COLORS.GRAY100;
    return { convertedFontColor };
  }
  if (color === "gray") {
    convertedFontColor = COLORS.GRAY30;
    return { convertedFontColor };
  }
  convertedFontColor = COLORS.BLUE_NEON30;
  return { convertedFontColor };
};
