import { css } from "@emotion/react";

import { COLOR } from "shared-style/color";

const linkButtonCSS = css`
  display: block;
  font-size: 1.125rem;
  line-height: 2;
`;

export const cssObj = {
  wrapper: css`
    position: relative;
    flex-shrink: 0;
    width: 17.5rem;
    background-color: ${COLOR.GRAY50};
    padding: 1rem;
  `,
  listBox: css`
    position: sticky;
    top: 6rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    > li {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-bottom: 1.25rem;
      padding-bottom: 1.25rem;
      border-bottom: 1px solid ${COLOR.GRAY300};

      :last-of-type {
        border-bottom: 0;
      }
    }
  `,
  title: css`
    display: block;
    font-size: 1.25rem;
    font-weight: 500;
    color: ${COLOR.GRAY900};
    padding-bottom: 0.5rem;
  `,
  linkButton: css`
    ${linkButtonCSS};
    color: ${COLOR.GRAY700};
  `,
  activeButton: css`
    ${linkButtonCSS};
    color: ${COLOR.BLUE300};
    font-weight: 600;
  `,
};
