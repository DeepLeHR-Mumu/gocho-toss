import { css } from "@emotion/react";
import { TEXT } from "shared-style/text";
import { COLOR } from "shared-style/color";

export const cssObj = {
  statisticsWrapper: css`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: stretch;
    justify-content: center;
  `,

  eachStatisticsWrapper: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem;

    > span {
      ${TEXT.TITLE5_M1620}
    }

    > p {
      ${TEXT.TITLE2_B2428}
    }
  `,

  verticalDividerLarge: css`
    border-right: 1px solid ${COLOR.GRAY200};
    margin: 1rem 0;
  `,
};
