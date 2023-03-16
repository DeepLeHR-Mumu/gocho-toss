import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

const linkButtonCSS = css`
  display: block;
  font-size: 1.125rem;
  line-height: 2;
`;

export const cssObj = {
  wrapper: css`
    flex-shrink: 0;
    width: 17.5rem;
    background-color: ${COLORS.GRAY90};
    padding: 1rem;
  `,
  listBox: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-items: flex-start;
    > li {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-bottom: 1.25rem;
      padding-bottom: 1.25rem;
      border-bottom: 1px solid ${COLORS.GRAY70};

      :last-of-type {
        border-bottom: 0;
      }
    }
  `,
  title: css`
    display: block;
    font-size: 1.25rem;
    font-weight: 500;
    color: ${COLORS.GRAY10};
    padding-bottom: 0.5rem;
  `,
  linkButton: css`
    ${linkButtonCSS};
    color: ${COLORS.GRAY20};
  `,
  activeButton: css`
    ${linkButtonCSS};
    color: ${COLORS.BLUE_FIRST40};
    font-weight: 600;
  `,
};
