import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";

export const buttonColor = {
  active: css`
    border: 1px solid ${COLOR.BLUE300};
    background-color: ${COLOR.BLUE300};
    color: ${COLOR.WHITE};
  `,

  outline: css`
    border: 1px solid ${COLOR.BLUE300};
    background-color: transparent;
    color: ${COLOR.BLACK};
  `,

  disable: css`
    border: 1px solid ${COLOR.GRAY200};
    background-color: ${COLOR.GRAY200};
    color: ${COLOR.GRAY450};
    cursor: default;
  `,

  fillWhite: css`
    border: 1px solid ${COLOR.GRAY100};
    background-color: ${COLOR.GRAY100};
    color: ${COLOR.BLACK};
  `,

  outlineGray: css`
    border: 1px solid ${COLOR.GRAY200};
    background-color: transparent;
    color: ${COLOR.GRAY600};
  `,

  fillSelected: css`
    border: 1px solid ${COLOR.BLUE300};
    background-color: ${COLOR.BLUE100};
    color: ${COLOR.BLACK};
  `,
};

export const followButtonColor = {
  unfollow: css`
    border: 1px solid ${COLOR.BLUE300};
    background-color: transparent;
    color: ${COLOR.BLUE300};
  `,

  follow: css`
    border: 1px solid ${COLOR.GRAY200};
    background-color: ${COLOR.GRAY200};
    color: ${COLOR.GRAY400};
  `,
};

export const chipColor = {
  nonSelected: css`
    border: 1px solid ${COLOR.GRAY200};
    background-color: ${COLOR.WHITE};
    color: ${COLOR.GRAY600};
  `,

  selected: css`
    border: 1px solid ${COLOR.BLUE300};
    background-color: ${COLOR.BLUE300};
    color: ${COLOR.WHITE};
  `,

  fillBlue: css`
    border: 1px solid ${COLOR.BLUE100};
    background-color: ${COLOR.BLUE100};
    color: ${COLOR.BLUE300};
  `,

  fillGray: css`
    border: 1px solid ${COLOR.GRAY100};
    background-color: ${COLOR.GRAY100};
    color: ${COLOR.GRAY500};
  `,

  outlineBlue: css`
    border: 1px solid ${COLOR.BLUE300};
    background-color: ${COLOR.WHITE};
    color: ${COLOR.BLUE300};
  `,

  fillBlack: css`
    border: 1px solid ${COLOR.BLACK};
    background-color: ${COLOR.BLACK};
    color: ${COLOR.WHITE};
  `,

  transparent: css`
    border: none;
    background-color: transparent;
    color: ${COLOR.GRAY600};
  `,
};

export const dDayChipColor = {
  fillBlue: css`
    border: none;
    background-color: ${COLOR.BLUE100};
    color: ${COLOR.BLUE300};
  `,

  fillRed: css`
    border: none;
    background-color: ${COLOR.RED200};
    color: ${COLOR.WHITE};
  `,

  fillGray: css`
    border: none;
    background-color: ${COLOR.GRAY300};
    color: ${COLOR.BLACK};
  `,
};
