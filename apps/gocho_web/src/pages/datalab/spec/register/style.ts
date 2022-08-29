import { css } from "@emotion/react";

import { COLORS } from "@style/constant";

export const wrapper = css`
  background-color: ${COLORS.GRAY90};
  padding-bottom: 7.8125rem;
`;

export const title = css`
  font-size: 1.75rem;
  color: ${COLORS.GRAY10};
  font-weight: 500;
  padding: 3.625rem 0 4rem;

  > span {
    color: ${COLORS.BLUE_FIRST40};
  }
`;
