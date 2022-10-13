import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const wrapper = css`
  background-color: ${COLORS.GRAY90};
`;

export const headerCSS = css`
  position: sticky;
  left: 0;
  top: 3.25rem;
  background-color: ${COLORS.GRAY100};
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
`;

export const backButton = css`
  font-size: 1.5rem;
  color: ${COLORS.GRAY30};
  margin-right: 0.5rem;
`;

export const tosTitle = css`
  color: ${COLORS.GRAY10};
  font-size: 1rem;
  font-weight: 700;
`;

export const sectionBox = css`
  padding: 2.5rem 0;
`;

export const descCSS = css`
  font-size: 0.75rem;
  line-height: 1.8;
  color: ${COLORS.GRAY30};
  font-weight: 400;
`;

export const subTitle = css`
  font-size: 0.875rem;
  color: ${COLORS.GRAY30};
  font-weight: 700;
  padding: 2.5rem 0 1rem;
`;

export const listCSS = css`
  padding: 1rem 0;

  > li {
    font-size: 0.75rem;
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
    font-size: 0.75rem;
    color: ${COLORS.GRAY40};
    line-height: 1.8;
  }
`;

export const executionDescCSS = css`
  color: ${COLORS.GRAY30};
  font-size: 0.75rem;
  font-weight: 400;
  margin-top: 2rem;

  > span {
    font-size: 0.875rem;
    font-weight: 700;
    color: ${COLORS.GRAY30};
    display: block;
    margin-bottom: 1rem;
  }
`;
