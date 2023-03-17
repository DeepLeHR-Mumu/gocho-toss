import { css } from "@emotion/react";

import { subPageTitle } from "@style/commonStyles";
import { COLORS } from "shared-style/color";

export const cssObj = {
  wrapper: css``,
  title: css`
    ${subPageTitle};
  `,
  container: css`
    margin-bottom: 3rem;
  `,
  thead: css`
    display: grid;
    grid-template-columns: 10% 35% 10% 15% 30%;
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
    padding-top: 1rem;
  `,
};
