import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const wrapper = css`
  margin-top: 4.5rem;
  background-color: ${COLORS.GRAY90};
  padding-bottom: 7.8125rem;
`;

export const title = css`
  font-size: 1.75rem;
  color: ${COLORS.GRAY10};
  font-weight: 500;
  padding: 3.625rem 0 4rem;
  display: block;

  > span {
    color: ${COLORS.BLUE_FIRST40};
  }
`;
