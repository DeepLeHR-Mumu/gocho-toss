import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";

export const borderBackgroundColor = {
  fillMain: css`
    border: 1px solid ${NEWCOLORS.BLUE300};
    background-color: ${NEWCOLORS.BLUE300};
    color: ${NEWCOLORS.WHITE};
  `,

  outline: css`
    border: 1px solid ${NEWCOLORS.BLUE300};
    background-color: ${NEWCOLORS.WHITE};
    color: ${NEWCOLORS.BLUE300};
  `,

  disable: css`
    border: 1px solid ${NEWCOLORS.GRAY200};
    background-color: ${NEWCOLORS.GRAY200};
    color: ${NEWCOLORS.GRAY300};
  `,

  fillWhite: css`
    border: 1px solid ${NEWCOLORS.GRAY100};
    background-color: ${NEWCOLORS.GRAY100};
    color: ${NEWCOLORS.BLACK};
  `,

  grayLine: css`
    border: 1px solid ${NEWCOLORS.GRAY200};
    background-color: ${NEWCOLORS.GRAY200};
    color: ${NEWCOLORS.BLUEGRAY300};
  `,

  redFill: css`
    border: 1px solid ${NEWCOLORS.RED100};
    background-color: ${NEWCOLORS.RED100};
    color: ${NEWCOLORS.WHITE};
  `,

  blue100: css`
    border: 1px solid ${NEWCOLORS.BLUE200};
    background-color: ${NEWCOLORS.BLUE200};
    color: ${NEWCOLORS.BLUE300};
  `,
};
