import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const cssObj = {
  wrapper: css`
    /* background-image: url("image/help/help_background.jpg"); */
    background-color: green;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom;
    min-height: calc(100vh - 25rem);
    text-align: center;
  `,
  title: css`
    padding-top: 2rem;
    padding-bottom: 0.5rem;
    font-size: 1.25rem;
    color: ${COLORS.GRAY10};
    font-weight: 700;
  `,
  desc: css`
    font-size: 1rem;
    color: ${COLORS.GRAY10};
    margin-bottom: 1rem;
  `,
  strongDesc: css`
    font-size: 2.25rem;
    font-weight: 700;
    color: ${COLORS.GRAY10};
    margin-bottom: 1.75rem;
    display: block;
  `,
  chatIconBox: css`
    position: relative;
    width: 6rem;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;

    :before {
      content: "";
      position: absolute;
      left: -3.75rem;
      top: -0.625rem;
      width: 5rem;
      height: 3.75rem;
      background-image: url("image/help/arrow_left.svg");
      background-repeat: no-repeat;
      background-size: contain;
    }
    :after {
      content: "";
      position: absolute;
      right: -3.75rem;
      top: -0.625rem;
      width: 5rem;
      height: 3.75rem;
      background-image: url("image/help/arrow_left.svg");
      background-repeat: no-repeat;
      background-size: contain;
    }
  `,
};
