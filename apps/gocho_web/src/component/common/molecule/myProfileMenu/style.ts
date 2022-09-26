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
    z-index: ${active ? 30 : -10};
    transform-origin: 0 0;
    animation: ${active ? "myProfileOn .5s ease forwards" : "myProfileOff .5s ease forwards"};

    @keyframes myProfileOn {
      0% {
        opacity: 0;
        transform: scale(0) translate(-50%, 0);
        top: 2.5rem;
      }
      100% {
        opacity: 1;
        transform: scale(1) translate(-50%, 0);
        top: 3.5rem;
      }
    }

    @keyframes myProfileOff {
      0% {
        opacity: 1;
        transform: scale(1) translate(-50%, 0);
        top: 3.5rem;
      }
      100% {
        opacity: 0;
        transform: scale(0) translate(-50%, 0);
        top: 2.5rem;
      }
    }
  `;
};

export const myProfileTitle = css`
  font-size: 0.75rem;
  color: ${COLORS.GRAY30};
  border-bottom: 1px solid ${COLORS.GRAY70};
  padding-bottom: 1rem;
  margin-bottom: 1rem;
`;

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
