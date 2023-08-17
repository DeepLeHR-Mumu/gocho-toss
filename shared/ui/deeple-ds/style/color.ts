import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";

export const buttonColor = {
  active: css`
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

  outlineGray: css`
    border: 1px solid ${NEWCOLORS.GRAY200};
    background-color: transparent;
    color: ${NEWCOLORS.BLUEGRAY400};
  `,

  fillSelected: css`
    border: 1px solid ${NEWCOLORS.BLUE300};
    background-color: ${NEWCOLORS.BLUE100};
    color: ${NEWCOLORS.BLACK};
  `,
};

export const followButtonColor = {
  unfollow: css`
    border: 1px solid ${NEWCOLORS.BLUE300};
    background-color: transparent;
    color: ${NEWCOLORS.BLUE300};
  `,

  follow: css`
    border: 1px solid ${NEWCOLORS.GRAY200};
    background-color: ${NEWCOLORS.GRAY200};
    color: ${NEWCOLORS.BLUEGRAY200};
  `,
};

export const chipColor = {
  nonSelected: css`
    border: 1px solid ${NEWCOLORS.GRAY200};
    background-color: ${NEWCOLORS.WHITE};
    color: ${NEWCOLORS.BLUEGRAY400};
  `,

  selected: css`
    border: none;
    background-color: ${NEWCOLORS.BLUE300};
    color: ${NEWCOLORS.WHITE};
  `,

  fillBlue: css`
    border: none;
    background-color: ${NEWCOLORS.BLUE100};
    color: ${NEWCOLORS.BLUE300};
  `,

  fillGray: css`
    border: none;
    background-color: ${NEWCOLORS.GRAY100};
    color: ${NEWCOLORS.BLUEGRAY300};
  `,

  outlineBlue: css`
    border: 1px solid ${NEWCOLORS.BLUE300};
    background-color: ${NEWCOLORS.WHITE};
    color: ${NEWCOLORS.BLUE300};
  `,
};

export const dDayChipColor = {
  fillBlue: css`
    border: none;
    background-color: ${NEWCOLORS.BLUE200};
    color: ${NEWCOLORS.BLUE300};
  `,

  fillRed: css`
    border: none;
    background-color: ${NEWCOLORS.RED200};
    color: ${NEWCOLORS.WHITE};
  `,

  fillGray: css`
    border: none;
    background-color: ${NEWCOLORS.BLUEGRAY100};
    color: ${NEWCOLORS.BLACK};
  `,
};
