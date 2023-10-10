import { css } from "@emotion/react";

import { NEWCOLORS } from "shared-style/color";
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
      background-color: ${NEWCOLORS.BLUE300};
      color: ${NEWCOLORS.WHITE};
    `}

    ${type === "fillRed" &&
    css`
      background-color: ${NEWCOLORS.RED100};
      color: ${NEWCOLORS.WHITE};
    `}

    ${type === "fillWhite" &&
    css`
      background-color: ${NEWCOLORS.GRAY100};
      color: ${NEWCOLORS.BLACK};
    `}

    ${type === "fillLightBlue" &&
    css`
      background-color: ${NEWCOLORS.BLUE200};
      color: ${NEWCOLORS.BLUE300};
    `}

    ${type === "outLineBlue" &&
    css`
      border: 1px solid ${NEWCOLORS.BLUE300};
      background-color: ${NEWCOLORS.WHITE};
      color: ${NEWCOLORS.BLUE300};
    `}

    ${type === "outLineGray" &&
    css`
      border: 1px solid ${NEWCOLORS.GRAY200};
      background-color: ${NEWCOLORS.WHITE};
      color: ${NEWCOLORS.GRAY500};
    `}

    ${type === "disabled" &&
    css`
      background-color: ${NEWCOLORS.GRAY200};
      color: ${NEWCOLORS.GRAY450};
    `}
  `,
};
