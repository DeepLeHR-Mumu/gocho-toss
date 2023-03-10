import { PC_HOVER } from "./mediaQuery";
import { COLORS } from "./color";

interface shortenDef {
  (line?: number): string;
}

export const shorten: shortenDef = (line = 1) => {
  return `
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    white-space: ${line >= 2 ? "normal" : "nowrap"};
    ${
      line >= 2 &&
      `
  display: -webkit-box;
  -webkit-line-clamp: ${line};
  -webkit-box-orient: vertical;    
  `
    }
  `;
};

interface skeletonCreatorCSS {
  (minWidth?: string): string;
}

export const skeletonCreatorCSS: skeletonCreatorCSS = (minWidth = "100%") => {
  return `
    background-color: ${COLORS.GRAY90};
    border-radius: 3px;
    text-indent: -9999px;
    min-width: ${minWidth};
    display: inline-block;
    white-space: nowrap;
  `;
};

export const hoverShadow = `
  ${PC_HOVER} {
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 2px 2px 0 #00000040;
    }
  }
`;
