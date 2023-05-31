import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { TEXTS } from "shared-style/text";

export const commonCssObj = {
  partContainer: css`
    background-color: ${NEWCOLORS.WHITE};
    margin-top: 1.25rem;
    padding: 2rem;
    border: 1px solid ${NEWCOLORS.GRAY200};
    border-radius: 1rem;
    box-shadow: 0 2px 16px 0 #0000000d;
  `,

  partTitle: css`
    ${TEXTS.TITLE11};
    display: block;
    margin-bottom: 2rem;
  `,

  inputTitle: css`
    ${TEXTS.TITLE9};
  `,
};
