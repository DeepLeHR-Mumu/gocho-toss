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
    background-color: transparent;
    color: ${NEWCOLORS.BLACK};
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
    background-color: transparent;
    color: ${NEWCOLORS.BLUEGRAY400};
  `,

  fillSelected: css`
    border: 1px solid ${NEWCOLORS.BLUE300};
    background-color: ${NEWCOLORS.BLUE100};
    color: ${NEWCOLORS.BLACK};
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

  noneBlackWhite: css`
    border: none;
    background-color: ${NEWCOLORS.BLACK};
    color: ${NEWCOLORS.WHITE};
  `,

  noneTransparentBlack: css`
    border: none;
    background-color: transparent;
    color: ${NEWCOLORS.BLACK};
  `,

  noneGray100Bluegray100: css`
    border: none;
    background-color: ${NEWCOLORS.GRAY100};
    color: ${NEWCOLORS.BLUEGRAY100};
  `,

  noneGray100Blue300: css`
    border: none;
    background-color: ${NEWCOLORS.GRAY100};
    color: ${NEWCOLORS.BLUE300};
  `,

  gray100TransparentGray100: css`
    border: 1px solid ${NEWCOLORS.GRAY100};
    background-color: transparent;
    color: ${NEWCOLORS.GRAY100};
  `,
};
