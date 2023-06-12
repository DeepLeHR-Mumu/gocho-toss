import { css } from "@emotion/react";

import { NEWCOLORS } from "shared-style/color";
import { TEXTS } from "shared-style/text";

export const cssObj = {
  partContainer: css`
    display: flex;
    gap: 0 1.25rem;
  `,

  linkButton: (bgColor: string) => css`
    display: block;
    width: 50%;
    height: 8.5rem;
    margin-bottom: 1.25rem;
    padding: 1.5rem;
    border-radius: 1rem;
    background-color: ${bgColor === "blue" ? `${NEWCOLORS.BLUE250}` : `${NEWCOLORS.WHITE}`};
    border: 1px solid ${NEWCOLORS.BLUE250};
  `,

  uploadTitle: (bgColor: string) => css`
    ${TEXTS.TITLE11};
    color: ${bgColor === "blue" ? `${NEWCOLORS.BLUE250}` : `${NEWCOLORS.WHITE}`};
    margin-bottom: 0.5rem;
  `,

  helpTitle: css`
    ${TEXTS.TITLE11};
    color: ${NEWCOLORS.BLUE250};
    margin-bottom: 0.5rem;
  `,

  helpSubtitle: (textColor: string) => css`
    ${TEXTS.BODY4};
    color: ${textColor === "blue" ? `${NEWCOLORS.BLUE250}` : `${NEWCOLORS.WHITE}`};
    margin-bottom: 0.5rem;
  `,

  helpDesc: css`
    ${TEXTS.TITLE1};
    color: ${NEWCOLORS.BLUEGRAY400};
  `,
};
