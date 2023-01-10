import { COLORS } from "shared-style/color";
import { ColorType } from "./type";

export const colorConverter = (color: ColorType) => {
  let fontColor;
  let backGroundColor;

  if (color === "lightGray") {
    fontColor = COLORS.GRAY30;
    backGroundColor = COLORS.GRAY100;
    return { fontColor, backGroundColor };
  }
  if (color === "gray") {
    fontColor = COLORS.GRAY30;
    backGroundColor = COLORS.GRAY90;
    return { fontColor, backGroundColor };
  }
  if (color === "lightBlue") {
    fontColor = COLORS.BLUE_NEON30;
    backGroundColor = COLORS.BLUE_SECOND90;
    return { fontColor, backGroundColor };
  }
  fontColor = COLORS.GRAY100;
  backGroundColor = COLORS.BLUE_NEON30;
  return { fontColor, backGroundColor };
};
