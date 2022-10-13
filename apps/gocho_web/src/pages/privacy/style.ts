import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const wrapper = css`
  padding-bottom: 6.25rem;
`;

export const tosTitle = css`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${COLORS.GRAY10};
  padding: 5rem 0 2rem 0;
`;

export const descCSS = css`
  font-size: 0.875rem;
  line-height: 1.8;
  color: #212121;
  padding: 1rem 0;
  font-weight: 400;
`;

export const subTitle = css`
  font-size: 1rem;
  color: ${COLORS.GRAY30};
  font-weight: 500;
  padding: 2rem 0 0.5rem;
`;

export const listCSS = css`
  padding: 1rem 0;

  > li {
    font-size: 0.875rem;
    color: ${COLORS.GRAY30};
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
  color: ${COLORS.GRAY10};
  font-size: 1rem;
  font-weight: 500;
  margin-top: 2rem;
`;
