import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";

export const cssObj = {
  sectionContainer: css`
    padding: 3rem 0 4.5rem;
  `,

  categoryContainer: css`
    border: 1px solid ${COLOR.GRAY200};
    border-radius: 0.75rem;
    height: 23.75rem;
    margin-top: 3rem;
  `,

  categoryBox: css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 3.5rem 0 2rem;
  `,
};
