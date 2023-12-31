import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";

export const cssObj = {
  cardWrapper: css`
    border-bottom: 1px solid ${COLOR.GRAY100};
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
    flex-wrap: wrap;
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
