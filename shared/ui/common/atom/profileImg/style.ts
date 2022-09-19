import { css, SerializedStyles } from "@emotion/react";

interface sizeCreatorDef {
  (size: "S" | "M" | "L"): string;
}
export const sizeCreator: sizeCreatorDef = (size) => {
  if (size === "S") return "2.25rem";
  if (size === "M") return "3.25rem";
  return "6rem";
};

interface WrapperDef {
  (size: "S" | "M" | "L"): SerializedStyles;
}
export const wrapper: WrapperDef = (size) => {
  return css`
    border-radius: 50%;
    overflow: hidden;
    width: ${sizeCreator(size)};
    height: ${sizeCreator(size)};
  `;
};
