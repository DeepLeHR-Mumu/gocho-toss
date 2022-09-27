import { css, SerializedStyles } from "@emotion/react";

interface shortenDef {
  (line?: number): SerializedStyles;
}

export const shorten: shortenDef = (line = 1) => {
  return css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: ${line >= 2 ? "normal" : "nowrap"};
    ${line >= 2 &&
    `
  display: -webkit-box;
  -webkit-line-clamp: ${line};
  -webkit-box-orient: vertical;    
  `}
  `;
};
