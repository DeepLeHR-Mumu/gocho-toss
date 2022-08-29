import { css } from "@emotion/react";

import { COLORS } from "@style/constant";

export const wrapper = css`
  margin-top: 2.5rem;

  > li {
    width: 100%;
    margin-bottom: 1.625rem;
    height: 6.75rem;
    background-color: ${COLORS.GRAY60};
    display: flex;
    align-items: center;
    justify-content: center;

    :last-of-type {
      margin-bottom: 0;
    }
  }
`;
