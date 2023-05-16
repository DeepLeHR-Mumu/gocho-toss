import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

import { subPageTitle } from "@/style";

export const cssObj = {
  title: css`
    ${subPageTitle};
  `,

  thead: css`
    display: grid;
    grid-template-columns: 70% 30%;
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

  cardWrapper: css`
    border-bottom: 1px solid ${COLORS.GRAY80};
    padding: 1rem 0;
    display: grid;
    grid-template-columns: 70% 30%;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
  `,
};
