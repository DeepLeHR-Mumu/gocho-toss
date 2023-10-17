import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";

export const cssObj = {
  boxWrapper: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 0;
  `,

  titleWrapper: css`
    display: flex;
    gap: 1rem;
    flex-direction: column;
  `,

  titleText: css`
    color: ${COLOR.BLACK};
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.25rem;
  `,

  desText: css`
    color: ${COLOR.GRAY600};
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.125rem;
  `,
};
