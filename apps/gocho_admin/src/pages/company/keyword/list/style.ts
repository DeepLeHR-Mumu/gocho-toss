import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";

import { subPageTitle } from "@/style";

export const cssObj = {
  title: css`
    ${subPageTitle};
  `,
  thead: css`
    display: grid;
    grid-template-columns: 10% 80% 10%;
    justify-content: space-between;
    text-align: center;
    padding: 1rem 0;
    background-color: ${COLOR.GRAY50};

    > li {
      border-right: 1px solid ${COLOR.GRAY300};
      white-space: nowrap;
      font-size: 1rem;
      font-weight: 400;
      color: ${COLOR.GRAY600};
    }
  `,
  tbody: css`
    display: flex;
    flex-direction: column;
    background-color: ${COLOR.WHITE};
  `,
};
