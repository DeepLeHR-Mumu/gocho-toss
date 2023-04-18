import { css, SerializedStyles } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const invisibleRadioButton = css`
  opacity: 0;
  width: 0;
  height: 0;
  overflow: hidden;
`;

interface ImageWrapperDef {
  (isImageWrapper: boolean): SerializedStyles;
}

export const imageWrapper: ImageWrapperDef = (isImageWrapper) => {
  return css`
    cursor: pointer;
    border-radius: 50%;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    position: relative;
    border: 2px solid ${isImageWrapper ? COLORS.BLUE_FIRST40 : "transparent"};
  `;
};

export const checkPoint = css`
  position: absolute;
  top: 0;
  right: 0;
  width: 1.25rem;
  height: 1.25rem;
  background-color: ${COLORS.GRAY100};
  color: ${COLORS.BLUE_FIRST40};
  font-size: 1rem;
  border-radius: 50%;
`;

interface sizeCreatorDef {
  (size: "S" | "M" | "L" | "XL"): string;
}
export const sizeCreator: sizeCreatorDef = (size) => {
  if (size === "S") return "2.25rem";
  if (size === "M") return "3.25rem";
  if (size === "L") return "6rem";
  return "10rem";
};

interface WrapperDef {
  (size: "S" | "M" | "L" | "XL"): SerializedStyles;
}
export const wrapper: WrapperDef = (size) => {
  return css`
    border-radius: 50%;
    overflow: hidden;
    width: ${sizeCreator(size)};
    height: ${sizeCreator(size)};
    position: relative;
    > img {
      object-fit: contain;
    }
  `;
};
