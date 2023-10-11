import { css } from "@emotion/react";

import { COLOR } from "shared-style/color";
import { TEXTS } from "shared-style/text";

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
    ${TEXTS.TITLE11};
    color: ${isAuth ? COLOR.BLACK : COLOR.GRAY600};
  `,

  moreButton: css`
    ${TEXTS.TITLE3};
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
    ${TEXTS.TITLE3};
    color: ${COLOR.GRAY600};
    height: 30rem;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};
