import { css, SerializedStyles } from "@emotion/react";

import { PC_HOVER } from "shared-style/mediaQuery";
import { COLORS } from "shared-style/color";

interface profileMenuWrapperDef {
  (active: boolean): SerializedStyles;
}

export const myProfileMenuWrapper: profileMenuWrapperDef = (active) => {
  return css`
    position: absolute;
    border: 1px solid ${COLORS.GRAY70};
    padding: 1.25rem;
    background-color: ${COLORS.GRAY100};
    left: 50%;
    width: fit-content;
    z-index: 10;
    top: 3.5rem;
    display: ${active ? "block" : "none"};
    transform-origin: 0 0;
    transform: translate(-50%, 0);
  `;
};

export const myProfileMenuCSS = css`
  > li {
    line-height: 2;
    font-size: 0.875rem;
    color: ${COLORS.GRAY10};
    white-space: nowrap;

    :last-of-type {
      margin-top: 1rem;
    }

    > a {
      ${PC_HOVER} {
        :hover {
          color: ${COLORS.BLUE_FIRST40};
        }
      }
    }
  }
`;

export const logoutCSS = css`
  margin-top: 1rem;
  ${PC_HOVER} {
    :hover {
      color: ${COLORS.BLUE_FIRST40};
    }
  }
`;
