import { css, SerializedStyles } from "@emotion/react";

import { COLORS } from "shared-style/color";
import { shorten } from "shared-style/shorten";

export const container = css``;

interface descDef {
  (endDate: number): SerializedStyles;
}

const defaultDescCSS = css`
  font-size: 0.75rem;
  padding: 5px 5px 5px 14px;
  box-sizing: border-box;
  border-radius: 1rem;
  word-break: keep-all;
  line-height: 1.8;
  text-align: left;
  max-height: 45px;
  position: relative;
  margin-bottom: 0.5rem;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: space-around;

  :last-of-type {
    margin-bottom: 0;
  }

  ::before {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translate(0, -50%);
    content: "";
  }

  > span {
    :first-of-type {
      ${shorten()};
    }
  }
`;

export const desc: descDef = (endDate) => {
  if (endDate <= -1) {
    return css`
      color: ${COLORS.GRAY40};
      background-color: ${COLORS.GRAY90};
      ${defaultDescCSS};

      ::before {
        background-color: ${COLORS.GRAY40};
      }
    `;
  }

  if (endDate <= 6) {
    return css`
      color: ${COLORS.ERROR_RED30};
      background-color: ${COLORS.STATE_ERROR};
      ${defaultDescCSS};

      ::before {
        background-color: ${COLORS.ERROR_RED30};
      }
    `;
  }

  return css`
    color: ${COLORS.BLUE_FIRST40};
    background-color: ${COLORS.GRAY90};
    ${defaultDescCSS};

    ::before {
      background-color: ${COLORS.BLUE_FIRST40};
    }
  `;
};
