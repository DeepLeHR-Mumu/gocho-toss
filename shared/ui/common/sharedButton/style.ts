import { css } from "@emotion/react";

import { COLOR } from "shared-style/color";
import { TEXTS } from "shared-style/text";

import { ButtonDef } from "./type";

export const cssObj = {
  buttonWrapper: (type: ButtonDef, isMobile: boolean | undefined, isLong: boolean | undefined, width: number) => css`
    ${TEXTS.TITLE6}
    ${isMobile && `${TEXTS.TITLE4}`};
    ${isLong && `${TEXTS.TITLE7}`};
    height: ${isLong ? "3.25rem" : "2.75rem"};
    padding: 0.75rem 0;
    border-radius: 0.5rem;
    width: ${width}rem;

    ${type === "fillBlue" &&
    css`
      background-color: ${COLOR.BLUE300};
      color: ${COLOR.WHITE};
    `}

    ${type === "fillRed" &&
    css`
      background-color: ${COLOR.RED100};
      color: ${COLOR.WHITE};
    `}

    ${type === "fillWhite" &&
    css`
      background-color: ${COLOR.GRAY100};
      color: ${COLOR.BLACK};
    `}

    ${type === "fillLightBlue" &&
    css`
      background-color: ${COLOR.BLUE200};
      color: ${COLOR.BLUE300};
    `}

    ${type === "outLineBlue" &&
    css`
      border: 1px solid ${COLOR.BLUE300};
      background-color: ${COLOR.WHITE};
      color: ${COLOR.BLUE300};
    `}

    ${type === "outLineGray" &&
    css`
      border: 1px solid ${COLOR.GRAY200};
      background-color: ${COLOR.WHITE};
      color: ${COLOR.GRAY500};
    `}

    ${type === "disabled" &&
    css`
      background-color: ${COLOR.GRAY200};
      color: ${COLOR.GRAY450};
    `}
  `,
};
