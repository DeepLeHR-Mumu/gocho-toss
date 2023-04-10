import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

import { subPageTitle } from "@/style/commonStyles";

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
    background-color: ${COLORS.GRAY90};

    > li {
      border-right: 1px solid ${COLORS.GRAY70};
      white-space: nowrap;
      font-size: 1rem;
      font-weight: 400;
      color: ${COLORS.GRAY30};
    }
  `,
  tbody: css`
    display: flex;
    flex-direction: column;
    background-color: ${COLORS.GRAY100};
  `,
};
