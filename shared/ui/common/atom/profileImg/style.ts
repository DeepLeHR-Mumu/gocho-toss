import { css, SerializedStyles } from "@emotion/react";

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
export const wrapper: WrapperDef = (size) => css`
  border-radius: 50%;
  overflow: hidden;
  width: ${sizeCreator(size)};
  height: ${sizeCreator(size)};
  position: relative;
  > img {
    object-fit: contain;
  }
`;
