import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const cssObj = {
  cardWrapper: css`
    border-bottom: 1px solid ${COLORS.GRAY80};
    padding: 1rem 0;
    display: grid;
    grid-template-columns: 10% 80% 10%;
    justify-content: space-between;
    align-items: center;
  `,

  keyword: css`
    text-align: center;
  `,

  companyContainer: css`
    padding: 0 2rem;
    display: flex;
    gap: 0.25rem;

    > p {
      :after {
        content: ", ";
      }

      :last-of-type {
        content: none;
      }
    }
  `,
};
