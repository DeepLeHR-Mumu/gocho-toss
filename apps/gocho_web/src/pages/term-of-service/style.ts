import { css } from "@emotion/react";

import { COLORS } from "@style/constant";

export const tosTitle = css`
  font-size: 1.625rem;
  font-weight: 600;
  color: ${COLORS.GRAY20};
  padding: 5rem 0 2rem 0;
`;

export const descCSS = css`
  font-size: 1rem;
  line-height: 1.8;
  color: #212121;
  padding: 1rem 0;
  font-weight: 400;
`;

export const subTitle = css`
  font-size: 1.25rem;
  color: ${COLORS.GRAY20};
  font-weight: 600;
  padding: 2rem 0 0.5rem;
`;

export const listCSS = css`
  padding: 1rem 0;

  > li {
    font-size: 1rem;
    color: ${COLORS.GRAY20};
    line-height: 1.8;

    margin-bottom: 1rem;

    :last-of-type {
      margin-bottom: 0;
    }
  }
`;

export const subListCSS = css`
  padding: 1rem 0 1rem 2rem;
  > li {
    font-size: 0.875rem;
    color: ${COLORS.GRAY20};
    line-height: 1.8;
  }
`;

export const executionDescCSS = css`
  color: ${COLORS.BLUE_FIRST40};
  font-size: 1.125rem;
  font-weight: 600;
  margin-top: 2rem;
`;
