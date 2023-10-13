import { css } from "@emotion/react";

import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  titleWrapper: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.25rem;
  `,

  partTitle: (isAuth: boolean) => css`
    display: block;
    cursor: pointer;
    ${TEXT.TITLE1_B2832};
    color: ${isAuth ? COLOR.BLACK : COLOR.GRAY600};
  `,

  moreButton: css`
    ${TEXT.TITLE6_M1418};
    color: ${COLOR.GRAY600};
  `,

  contour: css`
    width: 100%;
    margin: 0 -0.5rem;
    border-bottom: 1px solid ${COLOR.GRAY200};
  `,

  cardContainer: css`
    min-height: 30rem;
  `,

  noAuthJdCard: css`
    ${TEXT.TITLE6_M1418};
    color: ${COLOR.GRAY600};
    height: 30rem;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};
