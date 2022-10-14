import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const wrapper = css`
  padding: 5rem 0;
  background-color: ${COLORS.GRAY90};
`;

export const tosTitle = css`
  font-size: 1.25rem;
  font-weight: 700;
  display: block;
  color: ${COLORS.GRAY10};
  margin-bottom: 3rem;
`;

export const container = css`
  margin-bottom: 2.5rem;
`;

export const subTitle = css`
  font-size: 1rem;
  color: ${COLORS.GRAY30};
  font-weight: 700;
  margin-bottom: 1.25rem;
  word-break: keep-all;
`;

export const listTitle = css`
  font-size: 0.75rem;
  line-height: 1.8;
  display: block;
  color: ${COLORS.GRAY30};
  font-weight: 400;
  word-break: keep-all;
  margin-bottom: 1rem;
`;

export const listArr = css`
  padding: 0 0 1rem 1rem;
  display: flex;
  flex-direction: column;
`;

export const desc = css`
  line-height: 1.8;
  font-size: 0.75rem;
  color: ${COLORS.GRAY30};
  font-weight: 400;
`;

export const executionDescCSS = css`
  line-height: 1.8;
  font-size: 0.75rem;
  color: ${COLORS.GRAY30};
  font-weight: 400;

  > span {
    display: block;
    font-size: 1.25rem;
    font-weight: 700;
    color: ${COLORS.GRAY10};
    margin-bottom: 1rem;
  }
`;
